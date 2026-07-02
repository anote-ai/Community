import React from "react";

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

function downloadICS({ title, description, startISO, endISO, location }) {
  const fmt = (iso) => toUTCCalDate(iso);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Anote AI//Community//EN",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(startISO)}`,
    `DTEND:${fmt(endISO)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    location ? `LOCATION:${location}` : null,
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");

  const blob = new Blob([lines], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.replace(/\s+/g, "-")}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function EventActions({ event, className = "" }) {
  if (!event.startISO || !event.endISO) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <a
        href={googleCalendarUrl(event)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition"
      >
        + Google Calendar
      </a>
      <button
        onClick={() => downloadICS(event)}
        className="text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition"
      >
        + iCal
      </button>
    </div>
  );
}
