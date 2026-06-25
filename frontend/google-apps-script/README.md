# World Cup in NYC — RSVP backend setup

No server to host — a Google Sheet plus a Google Apps Script Web App handles
capacity checks, confirmation emails, and calendar invites, the same
no-backend pattern already used for the other event RSVP pages in this repo.

## Setup

1. Create a new Google Sheet. Add a tab named `RSVPs` with this header row in
   row 1, columns A–I exactly:
   `Timestamp | GameId | GameLabel | Date | Time | Name | Email | Restaurant | Status`
2. Copy the Sheet's ID out of its URL (`https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`).
3. In the Sheet, go to **Extensions → Apps Script**. Delete the placeholder
   code and paste in the contents of `WorldCupRsvp.gs` from this folder.
4. Set `SHEET_ID` at the top of the script to the ID from step 2.
5. Click **Deploy → New deployment**. Type: **Web app**. Execute as: **Me**.
   Who has access: **Anyone**. Deploy.
6. The first deploy will prompt you to authorize Gmail send + Sheets access —
   approve it (it's scoped to this script only).
7. Copy the resulting `.../exec` URL.
8. Paste that URL into `WORLD_CUP_RSVP_SCRIPT_URL` in
   `frontend/src/landing_page/landing_page_armor/WorldCupNYC.js`, replacing
   `"REPLACE_WITH_YOUR_APPS_SCRIPT_WEB_APP_URL"`.
9. Redeploy the frontend.

## How it works

- Each "Reserve a Spot" submission POSTs to the Apps Script Web App.
- The script counts existing `confirmed` rows for that `GameId` against the
  `capacity` sent from the frontend (`DEFAULT_TABLE_CAPACITY` in
  `worldCupData.js`, currently a placeholder of 25 — update it once a real
  table size is confirmed with each restaurant).
- If there's room, it appends a `confirmed` row and emails the guest a
  confirmation with a calendar invite (`.ics`) attached.
- If it's full, it appends a `waitlist` row and emails the guest a waitlist
  notice instead.
- The frontend uses `mode: "no-cors"` (it can't read the response), so it
  shows an optimistic "request sent, check your email" message immediately —
  the actual confirmed/waitlisted outcome only reaches the guest by email.

## Booking real tables

Restaurants in `worldCupData.js` are research suggestions, not confirmed
bookings. `BOOKING-TRACKER.md` in this folder lists every restaurant, which
games/dates it's needed for, and a checklist column to track outreach —
calling/emailing a restaurant to ask about a group reservation doesn't cost
anything by itself, and most won't require payment upfront for a casual
group booking (some may ask for a deposit on large parties — that's their
call, not something this project requires).

## Not yet done / known gaps

- Nothing currently promotes someone off the waitlist if a confirmed guest
  cancels — there's no cancel flow at all yet.
- `DEFAULT_TABLE_CAPACITY` is a placeholder, not a real number from any
  restaurant.
- This script hasn't been deployed or run against a live Sheet/Gmail account
  by Claude — it's logic-reviewed, not smoke-tested. Test it with a real
  signup before relying on it.
