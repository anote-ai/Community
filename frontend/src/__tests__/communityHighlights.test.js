// Tests for the homepage highlights data-selection logic.
import {
  parseEventStart,
  selectNextUpcomingEvent,
  selectLatestNews,
  selectFeaturedCourse,
} from "../landing_page/landing_page_armor/communityHighlights";
import { resources } from "../landing_page/landing_page_armor/ArmorCourses";

// Fixed "now" so results don't depend on when the suite runs.
const NOW = new Date("2026-07-16T12:00:00-04:00");

const pastEvent = {
  title: "Old Meetup",
  date: "March 6th, 2024",
};
const nearFuture = {
  title: "World Cup Party",
  date: "July 19th, 2026",
  startISO: "2026-07-19T14:00:00-04:00",
  endISO: "2026-07-19T18:00:00-04:00",
};
const farFuture = {
  title: "Summer Party",
  date: "August 7th, 2026",
  startISO: "2026-08-07T18:00:00-04:00",
  endISO: "2026-08-07T21:00:00-04:00",
};
const malformed = { title: "Mystery Event", date: "TBD" };
const missingDate = { title: "No Date Event" };

describe("parseEventStart", () => {
  test("prefers startISO over the display date string", () => {
    const d = parseEventStart({
      date: "January 1st, 2020",
      startISO: "2026-08-07T18:00:00-04:00",
    });
    expect(d.getFullYear()).toBe(2026);
  });

  test("parses display strings with ordinal suffixes", () => {
    const d = parseEventStart({ date: "August 7th, 2026" });
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(7);
    expect(d.getDate()).toBe(7);
  });

  test("returns null for malformed or missing dates", () => {
    expect(parseEventStart(malformed)).toBeNull();
    expect(parseEventStart(missingDate)).toBeNull();
    expect(parseEventStart(null)).toBeNull();
  });
});

describe("selectNextUpcomingEvent", () => {
  test("picks the nearest future event, not just any future event", () => {
    const result = selectNextUpcomingEvent(
      [farFuture, pastEvent, nearFuture],
      NOW
    );
    expect(result.title).toBe("World Cup Party");
  });

  test("excludes past events entirely", () => {
    expect(selectNextUpcomingEvent([pastEvent], NOW)).toBeNull();
  });

  test("skips malformed dates without throwing", () => {
    const result = selectNextUpcomingEvent(
      [malformed, missingDate, farFuture],
      NOW
    );
    expect(result.title).toBe("Summer Party");
  });

  test("an event still counts as upcoming on its own day", () => {
    const today = { title: "Today Event", date: "July 16th, 2026" };
    const result = selectNextUpcomingEvent([today], NOW);
    expect(result.title).toBe("Today Event");
  });

  test("an in-progress event with endISO in the future is included", () => {
    const inProgress = {
      title: "Live Now",
      date: "July 16th, 2026",
      startISO: "2026-07-16T10:00:00-04:00",
      endISO: "2026-07-16T18:00:00-04:00",
    };
    expect(selectNextUpcomingEvent([inProgress], NOW).title).toBe("Live Now");
  });

  test("handles empty and non-array input", () => {
    expect(selectNextUpcomingEvent([], NOW)).toBeNull();
    expect(selectNextUpcomingEvent(undefined, NOW)).toBeNull();
  });
});

describe("selectLatestNews", () => {
  const older = { title: "Older", dateObj: new Date("2026-07-01") };
  const newest = { title: "Newest", dateObj: new Date("2026-07-15") };
  const undated = { title: "Undated", dateObj: null };
  const badDate = { title: "Bad", dateObj: new Date("not a date") };

  test("picks the article with the most recent real date", () => {
    expect(selectLatestNews([older, undated, newest, badDate]).title).toBe(
      "Newest"
    );
  });

  test("never promotes an undated article as latest", () => {
    expect(selectLatestNews([undated, badDate])).toBeNull();
  });

  test("handles empty and non-array input", () => {
    expect(selectLatestNews([])).toBeNull();
    expect(selectLatestNews(undefined)).toBeNull();
  });
});

describe("selectFeaturedCourse", () => {
  test("returns the explicitly featured course from the real catalog", () => {
    const course = selectFeaturedCourse();
    expect(course).toBeTruthy();
    expect(course.featured).toBe(true);
  });

  test("the real catalog has exactly one featured course", () => {
    expect(resources.filter((c) => c.featured).length).toBe(1);
  });

  test("returns null when no course is marked featured (no guessing)", () => {
    expect(selectFeaturedCourse([{ name: "A" }, { name: "B" }])).toBeNull();
    expect(selectFeaturedCourse([])).toBeNull();
  });

  test("courses carry no reliable date metadata (guards the 'New Course' rule)", () => {
    // If someone adds publishedAt/createdAt/addedAt later, this test fails as
    // a reminder that the homepage slide may then legitimately switch from
    // "Featured Course" to "New Course".
    for (const c of resources) {
      expect(c.publishedAt).toBeUndefined();
      expect(c.createdAt).toBeUndefined();
      expect(c.addedAt).toBeUndefined();
    }
  });
});
