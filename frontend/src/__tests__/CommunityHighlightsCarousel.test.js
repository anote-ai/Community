import React from "react";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CommunityHighlightsCarousel from "../landing_page/landing_page_armor/CommunityHighlightsCarousel";
import {
  fetchMergedEvents,
  fetchNewsArticles,
  selectFeaturedCourse,
} from "../landing_page/landing_page_armor/communityHighlights";

jest.mock("react-ga4", () => ({
  __esModule: true,
  default: { event: jest.fn(), initialize: jest.fn(), send: jest.fn() },
}));

// Keep the real selectors; mock only the remote fetchers and the course pick
// so each test controls exactly which slides exist.
jest.mock("../landing_page/landing_page_armor/communityHighlights", () => {
  const actual = jest.requireActual(
    "../landing_page/landing_page_armor/communityHighlights"
  );
  return {
    ...actual,
    fetchMergedEvents: jest.fn(),
    fetchNewsArticles: jest.fn(),
    selectFeaturedCourse: jest.fn(),
  };
});

function mockMatchMedia(matches) {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}

const futureDate = (days) => new Date(Date.now() + days * 86400000);

const eventFixture = {
  title: "Future Meetup",
  date: futureDate(7).toDateString(),
  startISO: futureDate(7).toISOString(),
  endISO: futureDate(7.2).toISOString(),
  location: "New York City",
  description: "An upcoming community meetup.",
  image: "/events_images/july.png",
  path: "/futuremeetup",
};

const newsFixture = {
  title: "Big AI Breakthrough",
  source: "EXAMPLE.COM",
  description: "Something notable happened in AI.",
  url: "https://example.com/article",
  dateObj: new Date("2026-07-15T00:00:00Z"),
  prettyDate: "Jul 15, 2026",
};

const courseFixture = {
  name: "Hugging Face – LLM Course",
  url: "https://huggingface.co/learn/llm-course/chapter1/1",
  type: "LLMs",
  icon: "🤗",
  featured: true,
  description: "Hands-on LLM course.",
};

function renderCarousel() {
  return render(
    <MemoryRouter>
      <CommunityHighlightsCarousel />
    </MemoryRouter>
  );
}

beforeEach(() => {
  jest.clearAllMocks();
  mockMatchMedia(false);
  fetchMergedEvents.mockResolvedValue([eventFixture]);
  fetchNewsArticles.mockResolvedValue([newsFixture]);
  selectFeaturedCourse.mockReturnValue(courseFixture);
});

afterEach(() => {
  jest.useRealTimers();
});

test("shows a loading skeleton while data sources are pending", () => {
  fetchMergedEvents.mockReturnValue(new Promise(() => {}));
  fetchNewsArticles.mockReturnValue(new Promise(() => {}));
  renderCarousel();
  expect(screen.getByTestId("highlights-skeleton")).toBeTruthy();
});

test("renders the upcoming event first, with manual next/previous navigation", async () => {
  renderCarousel();
  await screen.findByText("Upcoming Event");

  expect(screen.getByText("Upcoming Event")).toBeTruthy();
  expect(screen.getByText("Future Meetup")).toBeTruthy();

  fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
  expect(screen.getByText("Latest News")).toBeTruthy();
  expect(screen.getByText("Big AI Breakthrough")).toBeTruthy();

  fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
  expect(screen.getByText("Featured Course")).toBeTruthy();

  fireEvent.click(screen.getByRole("button", { name: "Previous slide" }));
  expect(screen.getByText("Latest News")).toBeTruthy();
});

test("supports keyboard arrow navigation", async () => {
  renderCarousel();
  await screen.findByText("Upcoming Event");

  const region = screen.getByRole("region", { name: "Community highlights" });
  fireEvent.keyDown(region, { key: "ArrowRight" });
  expect(screen.getByText("Latest News")).toBeTruthy();
  fireEvent.keyDown(region, { key: "ArrowLeft" });
  expect(screen.getByText("Upcoming Event")).toBeTruthy();
});

test("a failed news source does not remove the other slides", async () => {
  fetchNewsArticles.mockRejectedValue(new Error("network down"));
  renderCarousel();
  await screen.findByText("Upcoming Event");

  expect(screen.getByText("Upcoming Event")).toBeTruthy();
  expect(screen.queryByText("Latest News")).toBeNull();
  // Only two pagination dots remain (event + course).
  expect(screen.getAllByRole("button", { name: /Go to slide/ }).length).toBe(2);
});

test("renders nothing at all when no valid highlight exists", async () => {
  fetchMergedEvents.mockResolvedValue([]); // no upcoming events
  fetchNewsArticles.mockRejectedValue(new Error("down"));
  selectFeaturedCourse.mockReturnValue(null);

  renderCarousel();
  // The skeleton disappears once all sources settle…
  await waitFor(() =>
    expect(screen.queryByTestId("highlights-skeleton")).toBeNull()
  );
  // …and no empty carousel shell is left behind.
  expect(
    screen.queryByRole("region", { name: "Community highlights" })
  ).toBeNull();
  expect(screen.queryByRole("button", { name: "Next slide" })).toBeNull();
});

test("labels the course slide 'Featured Course' and never 'New Course'", async () => {
  renderCarousel();
  await screen.findByText("Upcoming Event");

  fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
  fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
  expect(screen.getByText("Featured Course")).toBeTruthy();
  expect(screen.queryByText("New Course")).toBeNull();
});

test("exposes carousel and slide accessibility attributes", async () => {
  renderCarousel();
  await screen.findByText("Upcoming Event");

  const region = screen.getByRole("region", { name: "Community highlights" });
  expect(region.getAttribute("aria-roledescription")).toBe("carousel");
  const slide = screen.getByRole("group", { name: /Slide 1 of 3/ });
  expect(slide.getAttribute("aria-roledescription")).toBe("slide");
  expect(screen.getByRole("button", { name: "Previous slide" })).toBeTruthy();
  expect(screen.getByRole("button", { name: "Next slide" })).toBeTruthy();
});

test("auto-advances when motion is allowed", async () => {
  jest.useFakeTimers();
  renderCarousel();
  await screen.findByText("Upcoming Event");

  expect(screen.getByText("Upcoming Event")).toBeTruthy();
  act(() => {
    jest.advanceTimersByTime(7000);
  });
  expect(screen.getByText("Latest News")).toBeTruthy();
});

test("does not auto-advance under prefers-reduced-motion", async () => {
  mockMatchMedia(true);
  jest.useFakeTimers();
  renderCarousel();
  await screen.findByText("Upcoming Event");

  expect(screen.getByText("Upcoming Event")).toBeTruthy();
  act(() => {
    jest.advanceTimersByTime(30000);
  });
  // Still on the first slide — no autoplay, manual controls still work.
  expect(screen.getByText("Upcoming Event")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
  expect(screen.getByText("Latest News")).toBeTruthy();
});

test("pauses auto-advance while hovered", async () => {
  jest.useFakeTimers();
  renderCarousel();
  await screen.findByText("Upcoming Event");

  const region = screen.getByRole("region", { name: "Community highlights" });
  fireEvent.mouseEnter(region);
  act(() => {
    jest.advanceTimersByTime(30000);
  });
  expect(screen.getByText("Upcoming Event")).toBeTruthy();

  fireEvent.mouseLeave(region);
  act(() => {
    jest.advanceTimersByTime(7000);
  });
  expect(screen.getByText("Latest News")).toBeTruthy();
});
