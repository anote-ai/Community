/**
 * One-time script to sync upcoming hardcoded events (those with startISO/endISO)
 * into the Anote community Google Calendar.
 *
 * Usage:
 *   node scripts/sync-events-to-calendar.js
 *
 * Only events with a future startISO are synced. Safe to re-run — Google Calendar
 * will create duplicates if you run it twice for the same event, so only run once
 * per event (or delete the duplicate from the calendar manually).
 */

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbypiWD1M4ne-qXKQR8tNraVVHTdknu_ixBUPS8EHJLqTMUMfNtfUAE0EWGfQ6jS2ltL/exec";

// Copy any hardcoded events here that have startISO/endISO and should be in the calendar.
// Add more objects as needed for future events before running.
const EVENTS_TO_SYNC = [
  {
    title: "Anote World Cup Finals Watch Party",
    description: "Anote's World Cup Finals Watch Party celebrating Soccer in New York City.",
    startDateTime: "2026-07-19T14:00:00-04:00",
    endDateTime: "2026-07-19T18:00:00-04:00",
    location: "New York City",
    imagePath: "/events_images/worldcup.png",
  },
  // Add more events here, e.g.:
  // {
  //   title: "Next Event",
  //   description: "...",
  //   startDateTime: "2026-09-01T18:00:00-04:00",
  //   endDateTime:   "2026-09-01T21:00:00-04:00",
  //   location: "New York City",
  //   imagePath: "/events_images/september.png",
  // },
];

async function syncEvent(event) {
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
    redirect: "follow",
  });
  // Apps Script redirects — read the final response text
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

(async () => {
  const now = new Date();
  const upcoming = EVENTS_TO_SYNC.filter((e) => new Date(e.startDateTime) > now);

  if (upcoming.length === 0) {
    console.log("No upcoming events to sync.");
    return;
  }

  console.log(`Syncing ${upcoming.length} event(s) to Google Calendar…\n`);

  for (const event of upcoming) {
    process.stdout.write(`  → ${event.title} … `);
    try {
      const result = await syncEvent(event);
      if (result.success) {
        console.log(`✅ created (id: ${result.eventId})`);
      } else {
        console.log(`❌ failed: ${result.error || JSON.stringify(result)}`);
      }
    } catch (err) {
      console.log(`❌ error: ${err.message}`);
    }
  }

  console.log("\nDone. Check your Google Calendar to verify.");
})();
