import React from "react";
import { CalendarPlus } from "lucide-react";

function toUTCCalDate(isoString) {
  return new Date(isoString).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function googleCalendarUrl({ title, description, startISO, endISO, location }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toUTCCalDate(startISO)}/${toUTCCalDate(endISO)}`,
    details: description,
    ...(location ? { location } : {}),
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

// function downloadICS({ title, description, startISO, endISO, location }) {
//   const fmt = (iso) => toUTCCalDate(iso);
//   const lines = [
//     "BEGIN:VCALENDAR",
//     "VERSION:2.0",
//     "PRODID:-//Anote AI//Community//EN",
//     "BEGIN:VEVENT",
//     `DTSTART:${fmt(startISO)}`,
//     `DTEND:${fmt(endISO)}`,
//     `SUMMARY:${title}`,
//     `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
//     location ? `LOCATION:${location}` : null,
//     "END:VEVENT",
//     "END:VCALENDAR",
//   ]
//     .filter(Boolean)
//     .join("\r\n");
//
//   const blob = new Blob([lines], { type: "text/calendar;charset=utf-8" });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = `${title.replace(/\s+/g, "-")}.ics`;
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   URL.revokeObjectURL(url);
// }

export default function EventActions({ event, className = "" }) {
  if (!event.startISO || !event.endISO) return null;

  const actionClass =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300/70 focus:ring-offset-2 focus:ring-offset-gray-900";

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <a
        href={googleCalendarUrl(event)}
        target="_blank"
        rel="noopener noreferrer"
        className={actionClass}
      >
        <CalendarPlus className="h-4 w-4" strokeWidth={2.2} />
        <span>Google Calendar</span>
      </a>
      {/* <button
        type="button"
        onClick={() => downloadICS(event)}
        className={actionClass}
      >
        <Download className="h-4 w-4" strokeWidth={2.2} />
        <span>iCal</span>
      </button> */}
    </div>
  );
}
