// Data selection and fetch helpers for the homepage Community Highlights
// carousel. Reuses the event/news/course configuration exported from
// ArmorEvents, ArmorNews, and ArmorCourses so no sheet id, calendar id, or
// API key is duplicated into another file.

import {
  GCAL_ID,
  GCAL_API_KEY,
  eventsData,
  parseCalendarEvent,
} from "./ArmorEvents";
import {
  DEFAULT_SHEET_ID,
  DEFAULT_NEWS_GID,
  tryCsvFallbacks,
  csvToMatrix,
  normalizeRows,
} from "./ArmorNews";
import { resources as courseResources } from "./ArmorCourses";

/* ────────────────────────── date helpers ────────────────────────── */

/**
 * Parse an event's start into a Date. Prefers the machine-readable `startISO`
 * and falls back to the human display string used by the hardcoded events
 * list ("March 6th, 2024"). Returns null when nothing parseable is found —
 * callers must treat null as "unknown date", never as "today".
 */
export function parseEventStart(event) {
  if (!event) return null;
  if (event.startISO) {
    const d = new Date(event.startISO);
    if (!isNaN(d.getTime())) return d;
  }
  if (typeof event.date === "string" && event.date.trim()) {
    const cleaned = event.date.replace(/(\d+)(st|nd|rd|th)/gi, "$1");
    const d = new Date(cleaned);
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}

/* ────────────────────────── pure selectors ────────────────────────── */

/**
 * Nearest future event. An event still counts as upcoming for the whole of
 * its start day (or until `endISO` when provided), so an event happening
 * today doesn't disappear before it starts. Events with malformed or missing
 * dates are skipped entirely rather than guessed at.
 */
export function selectNextUpcomingEvent(events, now = new Date()) {
  if (!Array.isArray(events)) return null;
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const upcoming = [];
  for (const ev of events) {
    const start = parseEventStart(ev);
    if (!start) continue;
    const end = ev.endISO ? new Date(ev.endISO) : null;
    const stillRelevant =
      end && !isNaN(end.getTime()) ? end >= now : start >= startOfToday;
    if (stillRelevant) upcoming.push({ ev, start });
  }

  if (upcoming.length === 0) return null;
  upcoming.sort((a, b) => a.start - b.start);
  return upcoming[0].ev;
}

/**
 * Most recent article by real publication date (`dateObj` produced by
 * ArmorNews.normalizeRows). Articles without a parseable date are ignored
 * rather than promoted as "latest".
 */
export function selectLatestNews(articles) {
  if (!Array.isArray(articles)) return null;
  let latest = null;
  for (const a of articles) {
    if (!a || !a.title) continue;
    const d = a.dateObj instanceof Date ? a.dateObj : null;
    if (!d || isNaN(d.getTime())) continue;
    if (!latest || d > latest.dateObj) latest = a;
  }
  return latest;
}

/**
 * The course catalog (ArmorCourses.js) carries no publishedAt/createdAt/
 * addedAt metadata, so there is no truthful way to pick the "newest" course.
 * The homepage therefore shows the entry explicitly marked `featured: true`
 * in the catalog and labels it "Featured Course" (never "New Course").
 */
export function selectFeaturedCourse(courses = courseResources) {
  if (!Array.isArray(courses)) return null;
  return courses.find((c) => c && c.featured) || null;
}

/* ─────────────── fetchers (module-level promise cache) ─────────────── */
// The cache avoids refiring the calendar/news requests every time the
// homepage remounts during a session. Failed fetches clear the cache so a
// later visit can retry.

let eventsPromise = null;
let newsPromise = null;

/** Test helper — clears the module-level promise cache. */
export function __resetHighlightsCache() {
  eventsPromise = null;
  newsPromise = null;
}

async function fetchCalendarEvents() {
  const now = new Date().toISOString();
  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GCAL_ID)}/events` +
    `?key=${GCAL_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${now}&maxResults=20`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Calendar request failed (${res.status})`);
  const data = await res.json();
  return (data.items || []).map(parseCalendarEvent);
}

/**
 * Same merge rule as the Events page: live calendar events take precedence,
 * the hardcoded list fills in anything the calendar doesn't know about
 * (deduplicated by title). A calendar failure falls back to the static list,
 * so this promise only yields an empty array when both sources are empty.
 */
export function fetchMergedEvents() {
  if (!eventsPromise) {
    eventsPromise = fetchCalendarEvents()
      .catch(() => [])
      .then((calendarEvents) => {
        const titles = new Set(calendarEvents.map((e) => e.title));
        return [
          ...calendarEvents,
          ...eventsData.filter((e) => !titles.has(e.title)),
        ];
      });
    eventsPromise.catch(() => {
      eventsPromise = null;
    });
  }
  return eventsPromise;
}

/**
 * News articles via the same CSV fallback chain the News page uses,
 * normalized to `{title, description, url, source, dateObj, prettyDate}`.
 */
export function fetchNewsArticles() {
  if (!newsPromise) {
    newsPromise = tryCsvFallbacks(DEFAULT_SHEET_ID, DEFAULT_NEWS_GID, () => {}).then(
      (csv) => {
        if (!csv) throw new Error("Failed to load news data");
        return normalizeRows(csvToMatrix(csv));
      }
    );
    newsPromise.catch(() => {
      newsPromise = null;
    });
  }
  return newsPromise;
}
