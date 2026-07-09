import React, { useState } from "react";

// After deploying create-event.gs as a web app, paste the URL here.
const SCRIPT_URL = "REPLACE_WITH_APPS_SCRIPT_WEB_APP_URL";

const FIELD_DEFS = [
  { name: "title",         label: "Event Title",       type: "text",           required: true },
  { name: "description",   label: "Description",       type: "textarea",       required: false },
  { name: "startDateTime", label: "Start Date & Time", type: "datetime-local", required: true },
  { name: "endDateTime",   label: "End Date & Time",   type: "datetime-local", required: true },
  { name: "location",      label: "Location",          type: "text",           required: false },
  { name: "imagePath",     label: "Image Path (optional)", type: "text",       required: false,
    placeholder: "/events_images/worldcup.png" },
];

const EMPTY = Object.fromEntries(FIELD_DEFS.map((f) => [f.name, ""]));

export default function CreateEventAdmin() {
  const [form, setForm]       = useState(EMPTY);
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (SCRIPT_URL === "REPLACE_WITH_APPS_SCRIPT_WEB_APP_URL") {
      setStatus("error");
      setMessage("Deploy create-event.gs first and paste the web app URL into CreateEventAdmin.js.");
      return;
    }
    setStatus("loading");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      // no-cors means we can't read the response body — assume success if no throw
      setStatus("success");
      setMessage(`"${form.title}" was added to the Anote community calendar.`);
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setMessage("Failed to create event. Check the script URL and try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2">Add Event to Calendar</h1>
        <p className="text-sm text-gray-400 mb-6">
          Creates an event in the Anote community Google Calendar. It will appear
          on the events page automatically.
        </p>

        {status === "success" && (
          <div className="mb-6 rounded-lg bg-green-900/50 border border-green-500 px-4 py-3 text-green-300">
            ✅ {message}
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 rounded-lg bg-red-900/50 border border-red-500 px-4 py-3 text-red-300">
            ❌ {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {FIELD_DEFS.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-1">
                {field.label}
                {field.required && <span className="text-red-400 ml-1">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass}
                  placeholder={field.placeholder || ""}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className={inputClass}
                  placeholder={field.placeholder || ""}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-md transition"
          >
            {status === "loading" ? "Creating…" : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
}
