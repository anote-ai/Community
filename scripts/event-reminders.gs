/**
 * Anote AI Community — Event Reminder Emails
 *
 * Setup:
 * 1. Go to script.google.com and create a new project
 * 2. Paste this entire file
 * 3. Fill in EVENTS below with each event's details and Sheet ID
 * 4. Set up a trigger: Triggers → Add Trigger → sendReminders
 *    → Time-driven → Hour timer → Every hour
 *
 * How to find a Sheet ID:
 *   Open the Google Sheet that receives form registrations.
 *   The ID is in the URL: docs.google.com/spreadsheets/d/SHEET_ID/edit
 *
 * Sheet column order (matches WorldCupParty.js form fields):
 *   0: Timestamp   1: first_name   2: last_name   3: job_title
 *   4: company_name   5: email_address   6: linkedin_url
 *   7: event_sheet   8: event_title   ...
 */

const EVENTS = [
  {
    title: "Anote World Cup Finals Watch Party",
    startTime: new Date("2026-07-19T18:00:00Z"), // UTC (2:00 PM ET)
    sheetId: "REPLACE_WITH_WORLD_CUP_SHEET_ID",
    emailCol: 5,    // email_address column index
    nameCol: 1,     // first_name column index
  },
  // Add future events here:
  // {
  //   title: "Next Event Title",
  //   startTime: new Date("2026-09-01T22:00:00Z"),
  //   sheetId: "REPLACE_WITH_SHEET_ID",
  //   emailCol: 5,
  //   nameCol: 1,
  // },
];

function sendReminders() {
  const now = new Date();

  EVENTS.forEach((event) => {
    const hoursUntil = (event.startTime - now) / (1000 * 60 * 60);

    // Only send within these windows (±30 min buffer)
    const isOneWeek = hoursUntil >= 167.5 && hoursUntil <= 168.5;
    const isOneDay  = hoursUntil >= 23.5  && hoursUntil <= 24.5;
    const isOneHour = hoursUntil >= 0.5   && hoursUntil <= 1.5;

    if (!isOneWeek && !isOneDay && !isOneHour) return;

    const label = isOneWeek ? "1 week" : isOneDay ? "tomorrow" : "1 hour";
    const subject = `Reminder: "${event.title}" is ${label} away`;

    const sheet = SpreadsheetApp.openById(event.sheetId).getSheets()[0];
    const rows = sheet.getDataRange().getValues().slice(1); // skip header row

    rows.forEach((row) => {
      const email = row[event.emailCol];
      const name  = row[event.nameCol] || "there";
      if (!email) return;

      const body = [
        `Hi ${name},`,
        "",
        `This is a reminder that "${event.title}" is happening in ${label}.`,
        "",
        `We look forward to seeing you!`,
        "",
        "— Anote AI Community",
        "community.anote.ai",
      ].join("\n");

      GmailApp.sendEmail(email, subject, body);
    });
  });
}
