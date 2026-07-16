import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";
import {
  communityEventsPath,
  communityNewsPath,
  communityResourcesPath,
} from "../../constants/RouteConstants";
import {
  fetchMergedEvents,
  fetchNewsArticles,
  selectNextUpcomingEvent,
  selectLatestNews,
  selectFeaturedCourse,
} from "./communityHighlights";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";
const AUTO_ADVANCE_MS = 7000;

/* ────────────────────────── analytics ────────────────────────── */
// Reuses the ReactGA4 instance initialized in App.js. Never let analytics
// failures break the homepage.
function track(action, slideType) {
  try {
    ReactGA4.event(action, { slide_type: slideType });
  } catch (e) {
    /* noop */
  }
}

/* ────────────────────────── hooks ────────────────────────── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
    mq.addListener(onChange); // older Safari
    return () => mq.removeListener(onChange);
  }, []);
  return reduced;
}

function usePageVisible() {
  const [visible, setVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState !== "hidden"
  );
  useEffect(() => {
    const onChange = () => setVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
  return visible;
}

/* ────────────────────────── slide pieces ────────────────────────── */

function CategoryBadge({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
      style={{ color: ACCENT_BLUE }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT_YELLOW }} />
      {children}
    </span>
  );
}

function PrimaryCta({ to, href, onClick, children }) {
  const className =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90";
  const style = { backgroundColor: ACCENT_YELLOW };
  if (to) {
    return (
      <Link to={to} className={className} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

function SecondaryCta({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

function formatEventTime(startISO) {
  if (!startISO) return "";
  const d = new Date(startISO);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function SlideLayout({ media, children }) {
  return (
    <div className="flex h-full flex-col md:flex-row">
      {media && (
        <div className="md:w-72 lg:w-80 shrink-0">
          <div className="h-40 md:h-full w-full overflow-hidden">{media}</div>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8 min-w-0">
        {children}
      </div>
    </div>
  );
}

function EventSlide({ event }) {
  const time = formatEventTime(event.startISO);
  const isExternal = event.external || /^https?:\/\//.test(event.path || "");
  const internalPath = !isExternal && event.path ? event.path : null;
  const onCta = () => track("homepage_highlight_cta_click", "event");

  return (
    <SlideLayout
      media={
        event.image ? (
          <img
            src={event.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : null
      }
    >
      <CategoryBadge>Upcoming Event</CategoryBadge>
      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
        {event.title}
      </h3>
      <p className="text-sm text-gray-400">
        {event.date}
        {time ? ` · ${time}` : ""}
        {event.location ? ` · ${event.location}` : ""}
      </p>
      {event.description && (
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3">
          {event.description}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-3">
        {internalPath ? (
          <PrimaryCta to={internalPath} onClick={onCta}>
            Event details & registration
          </PrimaryCta>
        ) : (
          // Calendar-only events register from the Events page; link there
          // instead of opening another modal on the homepage.
          <PrimaryCta to={communityEventsPath} onClick={onCta}>
            View event & register
          </PrimaryCta>
        )}
        <SecondaryCta to={communityEventsPath}>All events →</SecondaryCta>
      </div>
    </SlideLayout>
  );
}

function NewsSlide({ article }) {
  const onCta = () => track("homepage_highlight_cta_click", "news");
  return (
    <SlideLayout media={null}>
      <CategoryBadge>Latest News</CategoryBadge>
      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug line-clamp-2">
        {article.title}
      </h3>
      <p className="text-sm text-gray-400">
        {article.source && <span className="uppercase tracking-wide">{article.source}</span>}
        {article.source && article.prettyDate ? " · " : ""}
        {article.prettyDate}
      </p>
      {article.description && (
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3">
          {article.description}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-3">
        {article.url ? (
          <PrimaryCta href={article.url} onClick={onCta}>
            Read article ↗
          </PrimaryCta>
        ) : (
          <PrimaryCta to={communityNewsPath} onClick={onCta}>
            Read on the News page
          </PrimaryCta>
        )}
        <SecondaryCta to={communityNewsPath}>All news →</SecondaryCta>
      </div>
    </SlideLayout>
  );
}

function CourseSlide({ course }) {
  // Names follow the "Provider – Course Title" convention in ArmorCourses.
  const [providerPart, ...titleParts] = (course.name || "").split("–");
  const title = titleParts.join("–").trim() || course.name;
  const provider = titleParts.length > 0 ? providerPart.trim() : "";
  const onCta = () => track("homepage_highlight_cta_click", "course");

  return (
    <SlideLayout
      media={
        <div className="flex h-full w-full items-center justify-center bg-gray-900 text-6xl">
          <span aria-hidden="true">{course.icon || "🎓"}</span>
        </div>
      }
    >
      {/* Label is "Featured Course", never "New Course" — the catalog has no
          date metadata to support a recency claim (see ArmorCourses.js). */}
      <CategoryBadge>Featured Course</CategoryBadge>
      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{title}</h3>
      <p className="text-sm text-gray-400">
        {provider}
        {provider && course.type ? " · " : ""}
        {course.type}
      </p>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3">
        {course.description || "Explore this resource to deepen your AI skills."}
      </p>
      <div className="mt-2 flex flex-wrap gap-3">
        <PrimaryCta href={course.url} onClick={onCta}>
          Open course ↗
        </PrimaryCta>
        <SecondaryCta to={communityResourcesPath}>All courses →</SecondaryCta>
      </div>
    </SlideLayout>
  );
}

function Skeleton() {
  return (
    <div
      data-testid="highlights-skeleton"
      className="animate-pulse rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="h-5 w-36 rounded-full bg-white/10" />
      <div className="mt-4 h-7 w-2/3 rounded bg-white/10" />
      <div className="mt-3 h-4 w-1/3 rounded bg-white/10" />
      <div className="mt-4 h-4 w-full max-w-xl rounded bg-white/10" />
      <div className="mt-6 flex gap-3">
        <div className="h-10 w-40 rounded-xl bg-white/10" />
        <div className="h-10 w-32 rounded-xl bg-white/10" />
      </div>
    </div>
  );
}

/* ────────────────────────── carousel ────────────────────────── */

export default function CommunityHighlightsCarousel() {
  const [eventState, setEventState] = useState({ status: "loading", data: null });
  const [newsState, setNewsState] = useState({ status: "loading", data: null });
  // Courses are bundled statically — no fetch, no failure mode.
  const featuredCourse = useMemo(() => selectFeaturedCourse(), []);

  useEffect(() => {
    let cancelled = false;
    fetchMergedEvents()
      .then((events) => {
        if (cancelled) return;
        setEventState({ status: "ready", data: selectNextUpcomingEvent(events) });
      })
      .catch(() => {
        if (!cancelled) setEventState({ status: "error", data: null });
      });
    fetchNewsArticles()
      .then((articles) => {
        if (cancelled) return;
        setNewsState({ status: "ready", data: selectLatestNews(articles) });
      })
      .catch(() => {
        if (!cancelled) setNewsState({ status: "error", data: null });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const loading = eventState.status === "loading" || newsState.status === "loading";

  const slides = useMemo(() => {
    const list = [];
    if (eventState.data) list.push({ type: "event", key: "event", data: eventState.data });
    if (newsState.data) list.push({ type: "news", key: "news", data: newsState.data });
    if (featuredCourse) list.push({ type: "course", key: "course", data: featuredCourse });
    return list;
  }, [eventState.data, newsState.data, featuredCourse]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const pageVisible = usePageVisible();
  const touchStartX = useRef(null);

  // Keep index valid if a late-failing source shrinks the slide list.
  useEffect(() => {
    if (index >= slides.length && slides.length > 0) setIndex(0);
  }, [index, slides.length]);

  // Track slide views (initial slide + every change).
  useEffect(() => {
    const slide = slides[index];
    if (!loading && slide) track("homepage_highlight_view", slide.type);
  }, [index, slides, loading]);

  // Auto-advance. Paused on hover, on keyboard focus inside the carousel,
  // when the tab is hidden, and entirely disabled under reduced motion.
  useEffect(() => {
    if (loading || reducedMotion || paused || !pageVisible || slides.length < 2) {
      return undefined;
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [loading, reducedMotion, paused, pageVisible, slides.length]);

  if (!loading && slides.length === 0) {
    // Nothing valid to show (no upcoming event, no dated news, no featured
    // course) — render nothing rather than an empty carousel shell.
    return null;
  }

  const goTo = (next, action) => {
    const slide = slides[(next + slides.length) % slides.length];
    if (action && slide) track(action, slide.type);
    setIndex((next + slides.length) % slides.length);
  };
  const goPrev = () => goTo(index - 1, "homepage_highlight_previous");
  const goNext = () => goTo(index + 1, "homepage_highlight_next");

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches && e.touches.length ? e.touches[0].clientX : null;
  };
  const onTouchEnd = (e) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX == null) return;
    const endX =
      e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientX : null;
    if (endX == null) return;
    const delta = endX - startX;
    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext();
      else goPrev();
    }
  };

  const active = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Community highlights"
      className="max-w-7xl mx-auto px-6 pt-12 sm:pt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      onKeyDown={onKeyDown}
    >
      {!reducedMotion && (
        <style>{`@keyframes hlFadeIn{from{opacity:0}to{opacity:1}}.hl-slide-anim{animation:hlFadeIn 400ms ease}`}</style>
      )}

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: ACCENT_BLUE }}
          >
            Happening Now
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
            Community highlights
          </h2>
        </div>
        {!loading && slides.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition hover:bg-white/10"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition hover:bg-white/10"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <Skeleton />
      ) : (
        <>
          <div
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(40,178,251,0.08) 0%, rgba(17,24,39,0.98) 45%, rgba(222,254,71,0.06) 100%)",
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              key={active.key}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              aria-live={paused || reducedMotion ? "polite" : "off"}
              className={`min-h-[280px] ${reducedMotion ? "" : "hl-slide-anim"}`}
            >
              {active.type === "event" && <EventSlide event={active.data} />}
              {active.type === "news" && <NewsSlide article={active.data} />}
              {active.type === "course" && <CourseSlide course={active.data} />}
            </div>
          </div>

          {slides.length > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => goTo(i, i === index ? null : "homepage_highlight_next")}
                  aria-label={`Go to slide ${i + 1} of ${slides.length}`}
                  aria-current={i === index ? "true" : undefined}
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                >
                  <span
                    className="block h-2.5 rounded-full transition-all"
                    style={{
                      width: i === index ? "1.5rem" : "0.625rem",
                      backgroundColor: i === index ? ACCENT_YELLOW : "rgba(255,255,255,0.25)",
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
