import React, { useState } from "react";
import SEO from "../../util/SEO";
import {
  WORLD_CUP_GAMES,
  STAGE_ORDER,
  DEFAULT_TABLE_CAPACITY,
  formatGameDate,
  formatGameTime,
  gameLabel,
} from "./worldCupData";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";
const BG_DARK = "#111827";
const STORAGE_KEY = "worldCupReservations";

// Deploy frontend/google-apps-script/WorldCupRsvp.gs as a Web App (see that
// folder's README) and paste the resulting /exec URL here. Until then,
// "Reserve a Spot" only saves locally — no Sheet row, no email gets sent.
const WORLD_CUP_RSVP_SCRIPT_URL = "REPLACE_WITH_YOUR_APPS_SCRIPT_WEB_APP_URL";

function getReservations() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function TeamBadge({ team }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span className="text-2xl leading-none">{team.flag}</span>
      <span className={`text-sm font-semibold truncate ${team.tbd ? "text-gray-400" : "text-white"}`}>
        {team.name}
      </span>
    </div>
  );
}

function GameCard({ game, reserved, onReserve }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      // mode: "no-cors" (same pattern as the other event RSVP pages) means we
      // can't read the response here — the Apps Script decides confirmed vs.
      // waitlisted server-side and emails the result directly to the guest.
      await fetch(WORLD_CUP_RSVP_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId: game.id,
          gameLabel: gameLabel(game),
          date: game.date,
          time: game.time,
          name,
          email,
          restaurant: game.teamA.restaurant || "TBD",
          capacity: DEFAULT_TABLE_CAPACITY,
        }),
      }).catch(() => {});
      onReserve(game.id);
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-[1.5rem] p-6 shadow-xl border border-white/10"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      <div
        className="absolute left-0 top-0 h-1 w-full opacity-90"
        style={{ background: `linear-gradient(90deg, ${ACCENT_BLUE}, ${ACCENT_YELLOW})` }}
      />

      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
        <span>{game.stage}</span>
        <span>{game.venue}</span>
      </div>

      <div className="flex items-center justify-between gap-3 mb-4">
        <TeamBadge team={game.teamA} />
        <span className="text-gray-500 font-bold text-sm shrink-0">VS</span>
        <TeamBadge team={game.teamB} />
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
        <span className="font-semibold" style={{ color: ACCENT_BLUE }}>
          {formatGameDate(game.date)}
        </span>
        <span>{formatGameTime(game.time)}</span>
      </div>

      {game.workHoursConflict && (
        <div className="mb-4 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs text-amber-300">
          ⚠️ Falls in the 9–5 workday — too big to skip, so it's listed anyway. Plan to step out or watch from your desk.
        </div>
      )}

      <div className="mb-5 text-sm">
        {game.teamA.restaurant ? (
          <p className="text-gray-300">
            🍽️ Watch at <span className="text-white font-medium">{game.teamA.restaurant}</span>
            {!game.teamA.restaurantVerified && (
              <span className="text-gray-500"> (suggested — please confirm before booking)</span>
            )}
          </p>
        ) : (
          <p className="text-gray-500">🍽️ Restaurant TBD — teams not yet determined</p>
        )}
      </div>

      {reserved ? (
        <div
          className="rounded-xl px-4 py-2.5 text-center text-xs font-semibold text-black"
          style={{ backgroundColor: ACCENT_YELLOW }}
        >
          Request sent — check your email for a confirmation + calendar invite
          (or a waitlist note if the table's full) 🎉
        </div>
      ) : open ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg px-3 py-2 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30"
          />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg px-3 py-2 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30"
          />
          <div className="flex gap-2 mt-1">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              {loading ? "..." : "Confirm spot"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2 text-sm font-medium border border-white/15 text-gray-300 hover:bg-white/5"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-full rounded-xl px-4 py-2.5 font-semibold text-black transition hover:opacity-90"
          style={{ backgroundColor: ACCENT_YELLOW }}
        >
          Reserve a Spot
        </button>
      )}
    </div>
  );
}

export default function WorldCupNYC() {
  const [reservations, setReservations] = useState(getReservations());

  const handleReserve = (gameId) => {
    const next = [...reservations, gameId];
    setReservations(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const gamesByStage = STAGE_ORDER
    .map((stage) => ({ stage, games: WORLD_CUP_GAMES.filter((g) => g.stageGroup === stage) }))
    .filter((group) => group.games.length > 0);

  return (
    <div className="min-h-screen text-white pb-24" style={{ backgroundColor: BG_DARK }}>
      <SEO
        title="World Cup in NYC"
        description="Watch FIFA World Cup 2026 games with the Anote community at local NYC restaurants. Reserve your spot for every game outside the 9-to-5."
        path="/community/worldcup"
      />

      <div className="max-w-7xl mx-auto px-6 pt-10 sm:pt-16">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 sm:py-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(40,178,251,0.08) 0%, rgba(17,24,39,0.98) 35%, rgba(17,24,39,0.98) 70%, rgba(222,254,71,0.08) 100%)",
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            World Cup in NYC ⚽
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
            Every 2026 World Cup game that lands outside the 9-to-5 workday — plus every Round of 16
            game and beyond, work hours or not — watched together at a local NYC restaurant repping
            the team. Pick a game, reserve your spot, and show up.
          </p>
          <p className="mt-4 max-w-2xl text-xs text-gray-500">
            Restaurant picks marked "suggested" are best-effort recommendations and haven't been
            live-verified — confirm hours and availability before counting on them for a reservation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 space-y-12">
        {gamesByStage.map(({ stage, games }) => (
          <section key={stage}>
            <div className="mb-5 flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{stage}</h2>
              <span className="text-sm text-gray-500">
                {games.length} game{games.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {games.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  reserved={reservations.includes(game.id)}
                  onReserve={handleReserve}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
