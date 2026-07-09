/**
 * Anote AI Community — Create Calendar Event (Web App)
 *
 * Setup:
 * 1. Go to script.google.com → New project → paste this file
 * 2. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 3. Copy the Web App URL and paste it into CreateEventAdmin.js as SCRIPT_URL
 *
 * The Google account deploying this script must have edit access
 * to the Anote community Google Calendar.
 */

const CALENDAR_ID =
  "e88890e803003d95935e56c48dc68aedfd5311e3204360f781830c06287f4f24@group.calendar.google.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (!data.title || !data.startDateTime || !data.endDateTime) {
      return respond({ success: false, error: "title, startDateTime, and endDateTime are required" });
    }

    const cal   = CalendarApp.getCalendarById(CALENDAR_ID);
    const start = new Date(data.startDateTime);
    const end   = new Date(data.endDateTime);

    // Prepend image path to description so ArmorEvents.js picks it up.
    let description = (data.description || "").trim();
    if (data.imagePath) {
      description = `image: ${data.imagePath}\n${description}`;
    }

    const options = {
      description,
      location: data.location || "",
    };

    const event = cal.createEvent(data.title, start, end, options);

    return respond({ success: true, eventId: event.getId(), title: data.title });
  } catch (err) {
    return respond({ success: false, error: err.message });
  }
}

// Allow browser preflight requests (OPTIONS).
function doGet() {
  return respond({ status: "ok" });
}

function respond(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
