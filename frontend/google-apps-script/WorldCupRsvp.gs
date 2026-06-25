/**
 * World Cup in NYC — RSVP backend.
 *
 * Paste this into a Google Apps Script project bound to a Google Sheet, set
 * SHEET_ID below, and deploy as a Web App (see README.md in this folder for
 * step-by-step setup). No separate server needed — Sheets + Gmail do the work.
 *
 * Sheet must have a header row exactly matching COLUMNS below, in order.
 */

var SHEET_ID = "REPLACE_WITH_YOUR_SHEET_ID";
var SHEET_NAME = "RSVPs";
var COLUMNS = ["Timestamp", "GameId", "GameLabel", "Date", "Time", "Name", "Email", "Restaurant", "Status"];
var DEFAULT_CAPACITY = 25;

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

  var capacity = Number(data.capacity) || DEFAULT_CAPACITY;
  var confirmedCount = countConfirmed(sheet, data.gameId);
  var status = confirmedCount < capacity ? "confirmed" : "waitlist";

  sheet.appendRow([
    new Date(),
    data.gameId,
    data.gameLabel,
    data.date,
    data.time,
    data.name,
    data.email,
    data.restaurant,
    status,
  ]);

  if (status === "confirmed") {
    sendConfirmationEmail(data);
  } else {
    sendWaitlistEmail(data);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: status }))
    .setMimeType(ContentService.MimeType.JSON);
}

function countConfirmed(sheet, gameId) {
  var rows = sheet.getDataRange().getValues();
  var gameIdCol = COLUMNS.indexOf("GameId");
  var statusCol = COLUMNS.indexOf("Status");
  var count = 0;
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][gameIdCol] === gameId && rows[i][statusCol] === "confirmed") count++;
  }
  return count;
}

function sendConfirmationEmail(data) {
  var ics = buildIcs(data);
  var body =
    "Hey " + data.name + ",\n\n" +
    "You're confirmed for " + data.gameLabel + " on " + data.date + " at " + data.time + " ET.\n" +
    "Watch party location: " + data.restaurant + "\n\n" +
    "A calendar invite is attached. See you there!\n\n— Anote AI Community";
  GmailApp.sendEmail(data.email, "You're confirmed: " + data.gameLabel, body, {
    name: "Anote Community",
    attachments: [ics],
  });
}

function sendWaitlistEmail(data) {
  var body =
    "Hey " + data.name + ",\n\n" +
    data.gameLabel + " (" + data.date + " at " + data.time + " ET) is full at " + data.restaurant + ".\n" +
    "You're on the waitlist — we'll email you if a spot opens up.\n\n— Anote AI Community";
  GmailApp.sendEmail(data.email, "You're on the waitlist: " + data.gameLabel, body, {
    name: "Anote Community",
  });
}

// Builds a minimal valid .ics calendar invite. Kickoff times in the schedule
// are Eastern Time; these dates (Jun-Jul 2026) fall under Eastern Daylight
// Time, a fixed UTC-4 offset, so it's parsed with an explicit "-04:00" offset
// rather than relying on a timezone database lookup.
function buildIcs(data) {
  var start = new Date(data.date + "T" + data.time + ":00-04:00");
  var end = new Date(start.getTime() + 3 * 60 * 60 * 1000); // 3-hour watch party block

  var ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Anote Community//World Cup NYC//EN",
    "BEGIN:VEVENT",
    "UID:" + data.gameId + "@anote.ai",
    "DTSTAMP:" + formatIcsDate(new Date()),
    "DTSTART:" + formatIcsDate(start),
    "DTEND:" + formatIcsDate(end),
    "SUMMARY:" + data.gameLabel + " — Anote Community Watch Party",
    "DESCRIPTION:Watch party at " + data.restaurant + ". Hosted by the Anote AI Community.",
    "LOCATION:" + data.restaurant + ", New York, NY",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return Utilities.newBlob(ics, "text/calendar", "watch-party.ics");
}

function formatIcsDate(date) {
  return Utilities.formatDate(date, "Etc/UTC", "yyyyMMdd'T'HHmmss'Z'");
}
