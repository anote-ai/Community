// Seats held per game at the watch-party restaurant. This is a placeholder —
// update it once a real table size is confirmed with each restaurant.
export const DEFAULT_TABLE_CAPACITY = 25;

// Country code -> name / flag / suggested NYC watch-party restaurant.
// One restaurant per country, reused across every game that country plays.
// `verified: false` entries are best-guess suggestions (no live web access
// to confirm current name/address/hours) — surfaced with a disclaimer in the UI.
export const COUNTRIES = {
  ARG: { name: "Argentina", flag: "🇦🇷", restaurant: "Buenos Aires (East Village)", verified: true },
  AUT: { name: "Austria", flag: "🇦🇹", restaurant: "Wallsé (West Village)", verified: true },
  FRA: { name: "France", flag: "🇫🇷", restaurant: "Balthazar (SoHo)", verified: true },
  IRQ: { name: "Iraq", flag: "🇮🇶", restaurant: "Al Sham Sweets & Pastries (Bay Ridge)", verified: false },
  NOR: { name: "Norway", flag: "🇳🇴", restaurant: "Aquavit (Midtown)", verified: true },
  SEN: { name: "Senegal", flag: "🇸🇳", restaurant: "Teranga (Harlem)", verified: true },
  JOR: { name: "Jordan", flag: "🇯🇴", restaurant: "Naya (Midtown East)", verified: false },
  ALG: { name: "Algeria", flag: "🇩🇿", restaurant: "Barbès (Murray Hill)", verified: false },
  POR: { name: "Portugal", flag: "🇵🇹", restaurant: "Alfama (West Village)", verified: true },
  UZB: { name: "Uzbekistan", flag: "🇺🇿", restaurant: "Café Kashkar (Brighton Beach)", verified: true },
  ENG: { name: "England", flag: "🏴", restaurant: "Tea & Sympathy (West Village)", verified: true },
  GHA: { name: "Ghana", flag: "🇬🇭", restaurant: "Papaye (The Bronx)", verified: true },
  PAN: { name: "Panama", flag: "🇵🇦", restaurant: "Panama Restaurant (Jackson Heights)", verified: false },
  CRO: { name: "Croatia", flag: "🇭🇷", restaurant: "Croatian-American Club (Astoria)", verified: false },
  COL: { name: "Colombia", flag: "🇨🇴", restaurant: "La Fonda Antioqueña (Jackson Heights)", verified: true },
  COD: { name: "DR Congo", flag: "🇨🇩", restaurant: "Le Baobab (Harlem)", verified: false },
  SCO: { name: "Scotland", flag: "🏴", restaurant: "Highlands (West Village)", verified: true },
  BRA: { name: "Brazil", flag: "🇧🇷", restaurant: "Plataforma Churrascaria (Times Square)", verified: true },
  MAR: { name: "Morocco", flag: "🇲🇦", restaurant: "Café Mogador (East Village)", verified: true },
  HAI: { name: "Haiti", flag: "🇭🇹", restaurant: "Lakay (Brooklyn)", verified: true },
  CZE: { name: "Czechia", flag: "🇨🇿", restaurant: "Bohemian Hall & Beer Garden (Astoria)", verified: true },
  MEX: { name: "Mexico", flag: "🇲🇽", restaurant: "Cosme (Flatiron)", verified: true },
  RSA: { name: "South Africa", flag: "🇿🇦", restaurant: "Madiba (Brooklyn)", verified: false },
  KOR: { name: "South Korea", flag: "🇰🇷", restaurant: "Her Name Is Han (K-Town)", verified: true },
  JPN: { name: "Japan", flag: "🇯🇵", restaurant: "Sakagura (Midtown East)", verified: true },
  SWE: { name: "Sweden", flag: "🇸🇪", restaurant: "Smörgås Chef (Battery Park)", verified: false },
  TUN: { name: "Tunisia", flag: "🇹🇳", restaurant: "Mince (East Village)", verified: false },
  NED: { name: "Netherlands", flag: "🇳🇱", restaurant: "Vandaag-style Dutch Kitchen (East Village)", verified: false },
  TUR: { name: "Turkey", flag: "🇹🇷", restaurant: "Turkish Kitchen (Murray Hill)", verified: true },
  USA: { name: "United States", flag: "🇺🇸", restaurant: "The Ainsworth (Chelsea)", verified: true },
  PAR: { name: "Paraguay", flag: "🇵🇾", restaurant: "Paraguay Grill (Queens)", verified: false },
  AUS: { name: "Australia", flag: "🇦🇺", restaurant: "Two Hands (NoHo)", verified: true },
  CPV: { name: "Cabo Verde", flag: "🇨🇻", restaurant: "Tropicalia-style Cape Verdean Kitchen (Brooklyn)", verified: false },
  KSA: { name: "Saudi Arabia", flag: "🇸🇦", restaurant: "Beit Rima (Park Slope)", verified: false },
  URU: { name: "Uruguay", flag: "🇺🇾", restaurant: "Chimichurri Grill (Theater District)", verified: true },
  ESP: { name: "Spain", flag: "🇪🇸", restaurant: "Casa Mono (Gramercy)", verified: true },
  EGY: { name: "Egypt", flag: "🇪🇬", restaurant: "Kabab Café (Astoria)", verified: true },
  IRN: { name: "Iran", flag: "🇮🇷", restaurant: "Colbeh (Murray Hill)", verified: true },
  NZL: { name: "New Zealand", flag: "🇳🇿", restaurant: "Kiwiana NYC Kitchen (Brooklyn)", verified: false },
  BEL: { name: "Belgium", flag: "🇧🇪", restaurant: "Markt (West Village)", verified: true },
};

// Raw schedule entries from June 22, 2026 onward (per user request to ignore
// earlier dates). `teamA`/`teamB` are FIFA codes — either a real country code
// (found in COUNTRIES above) or a placeholder slot code for not-yet-determined
// knockout matchups (e.g. "2A" = Group A runner-up, "W73" = winner of match 73).
const RAW_GAMES = [
  // Monday 22 June 2026
  { date: "2026-06-22", day: "Monday", time: "13:00", teamA: "ARG", teamB: "AUT", stage: "First Stage · Group J", venue: "Dallas Stadium" },
  { date: "2026-06-22", day: "Monday", time: "17:00", teamA: "FRA", teamB: "IRQ", stage: "First Stage · Group I", venue: "Philadelphia Stadium" },
  { date: "2026-06-22", day: "Monday", time: "20:00", teamA: "NOR", teamB: "SEN", stage: "First Stage · Group I", venue: "New York/New Jersey Stadium" },
  { date: "2026-06-22", day: "Monday", time: "23:00", teamA: "JOR", teamB: "ALG", stage: "First Stage · Group J", venue: "San Francisco Bay Area Stadium" },
  // Tuesday 23 June 2026
  { date: "2026-06-23", day: "Tuesday", time: "13:00", teamA: "POR", teamB: "UZB", stage: "First Stage · Group K", venue: "Houston Stadium" },
  { date: "2026-06-23", day: "Tuesday", time: "16:00", teamA: "ENG", teamB: "GHA", stage: "First Stage · Group L", venue: "Boston Stadium" },
  { date: "2026-06-23", day: "Tuesday", time: "19:00", teamA: "PAN", teamB: "CRO", stage: "First Stage · Group L", venue: "Toronto Stadium" },
  { date: "2026-06-23", day: "Tuesday", time: "22:00", teamA: "COL", teamB: "COD", stage: "First Stage · Group K", venue: "Guadalajara Stadium" },
  // Wednesday 24 June 2026
  { date: "2026-06-24", day: "Wednesday", time: "15:00", teamA: "SUI", teamB: "CAN", stage: "First Stage · Group B", venue: "BC Place Vancouver" },
  { date: "2026-06-24", day: "Wednesday", time: "15:00", teamA: "BIH", teamB: "QAT", stage: "First Stage · Group B", venue: "Seattle Stadium" },
  { date: "2026-06-24", day: "Wednesday", time: "18:00", teamA: "SCO", teamB: "BRA", stage: "First Stage · Group C", venue: "Miami Stadium" },
  { date: "2026-06-24", day: "Wednesday", time: "18:00", teamA: "MAR", teamB: "HAI", stage: "First Stage · Group C", venue: "Atlanta Stadium" },
  { date: "2026-06-24", day: "Wednesday", time: "21:00", teamA: "CZE", teamB: "MEX", stage: "First Stage · Group A", venue: "Mexico City Stadium" },
  { date: "2026-06-24", day: "Wednesday", time: "21:00", teamA: "RSA", teamB: "KOR", stage: "First Stage · Group A", venue: "Monterrey Stadium" },
  // Thursday 25 June 2026
  { date: "2026-06-25", day: "Thursday", time: "16:00", teamA: "CUW", teamB: "CIV", stage: "First Stage · Group E", venue: "Philadelphia Stadium" },
  { date: "2026-06-25", day: "Thursday", time: "16:00", teamA: "ECU", teamB: "GER", stage: "First Stage · Group E", venue: "New York/New Jersey Stadium" },
  { date: "2026-06-25", day: "Thursday", time: "19:00", teamA: "JPN", teamB: "SWE", stage: "First Stage · Group F", venue: "Dallas Stadium" },
  { date: "2026-06-25", day: "Thursday", time: "19:00", teamA: "TUN", teamB: "NED", stage: "First Stage · Group F", venue: "Kansas City Stadium" },
  { date: "2026-06-25", day: "Thursday", time: "22:00", teamA: "TUR", teamB: "USA", stage: "First Stage · Group D", venue: "Los Angeles Stadium" },
  { date: "2026-06-25", day: "Thursday", time: "22:00", teamA: "PAR", teamB: "AUS", stage: "First Stage · Group D", venue: "San Francisco Bay Area Stadium" },
  // Friday 26 June 2026
  { date: "2026-06-26", day: "Friday", time: "15:00", teamA: "NOR", teamB: "FRA", stage: "First Stage · Group I", venue: "Boston Stadium" },
  { date: "2026-06-26", day: "Friday", time: "15:00", teamA: "SEN", teamB: "IRQ", stage: "First Stage · Group I", venue: "Toronto Stadium" },
  { date: "2026-06-26", day: "Friday", time: "20:00", teamA: "CPV", teamB: "KSA", stage: "First Stage · Group H", venue: "Houston Stadium" },
  { date: "2026-06-26", day: "Friday", time: "20:00", teamA: "URU", teamB: "ESP", stage: "First Stage · Group H", venue: "Guadalajara Stadium" },
  { date: "2026-06-26", day: "Friday", time: "23:00", teamA: "EGY", teamB: "IRN", stage: "First Stage · Group G", venue: "Seattle Stadium" },
  { date: "2026-06-26", day: "Friday", time: "23:00", teamA: "NZL", teamB: "BEL", stage: "First Stage · Group G", venue: "BC Place Vancouver" },
  // Saturday 27 June 2026
  { date: "2026-06-27", day: "Saturday", time: "17:00", teamA: "PAN", teamB: "ENG", stage: "First Stage · Group L", venue: "New York/New Jersey Stadium" },
  { date: "2026-06-27", day: "Saturday", time: "17:00", teamA: "CRO", teamB: "GHA", stage: "First Stage · Group L", venue: "Philadelphia Stadium" },
  { date: "2026-06-27", day: "Saturday", time: "19:30", teamA: "COL", teamB: "POR", stage: "First Stage · Group K", venue: "Miami Stadium" },
  { date: "2026-06-27", day: "Saturday", time: "19:30", teamA: "COD", teamB: "UZB", stage: "First Stage · Group K", venue: "Atlanta Stadium" },
  { date: "2026-06-27", day: "Saturday", time: "22:00", teamA: "ALG", teamB: "AUT", stage: "First Stage · Group J", venue: "Kansas City Stadium" },
  { date: "2026-06-27", day: "Saturday", time: "22:00", teamA: "JOR", teamB: "ARG", stage: "First Stage · Group J", venue: "Dallas Stadium" },
  // Sunday 28 June 2026
  { date: "2026-06-28", day: "Sunday", time: "15:00", teamA: "2A", teamB: "2B", stage: "Round of 32", venue: "Los Angeles Stadium" },
  // Monday 29 June 2026
  { date: "2026-06-29", day: "Monday", time: "13:00", teamA: "1C", teamB: "2F", stage: "Round of 32", venue: "Houston Stadium" },
  { date: "2026-06-29", day: "Monday", time: "16:30", teamA: "1E", teamB: "3ABCDF", stage: "Round of 32", venue: "Boston Stadium" },
  { date: "2026-06-29", day: "Monday", time: "21:00", teamA: "1F", teamB: "2C", stage: "Round of 32", venue: "Monterrey Stadium" },
  // Tuesday 30 June 2026
  { date: "2026-06-30", day: "Tuesday", time: "13:00", teamA: "2E", teamB: "2I", stage: "Round of 32", venue: "Dallas Stadium" },
  { date: "2026-06-30", day: "Tuesday", time: "17:00", teamA: "1I", teamB: "3CDFGH", stage: "Round of 32", venue: "New York/New Jersey Stadium" },
  { date: "2026-06-30", day: "Tuesday", time: "21:00", teamA: "MEX", teamB: "3CEFHI", stage: "Round of 32", venue: "Mexico City Stadium" },
  // Wednesday 01 July 2026
  { date: "2026-07-01", day: "Wednesday", time: "12:00", teamA: "1L", teamB: "3EHIJK", stage: "Round of 32", venue: "Atlanta Stadium" },
  { date: "2026-07-01", day: "Wednesday", time: "16:00", teamA: "1G", teamB: "3AEHIJ", stage: "Round of 32", venue: "Seattle Stadium" },
  { date: "2026-07-01", day: "Wednesday", time: "20:00", teamA: "USA", teamB: "3BEFIJ", stage: "Round of 32", venue: "San Francisco Bay Area Stadium" },
  // Thursday 02 July 2026
  { date: "2026-07-02", day: "Thursday", time: "15:00", teamA: "1H", teamB: "2J", stage: "Round of 32", venue: "Los Angeles Stadium" },
  { date: "2026-07-02", day: "Thursday", time: "19:00", teamA: "2K", teamB: "2L", stage: "Round of 32", venue: "Toronto Stadium" },
  { date: "2026-07-02", day: "Thursday", time: "23:00", teamA: "1B", teamB: "3EFGIJ", stage: "Round of 32", venue: "BC Place Vancouver" },
  // Friday 03 July 2026
  { date: "2026-07-03", day: "Friday", time: "14:00", teamA: "2D", teamB: "2G", stage: "Round of 32", venue: "Dallas Stadium" },
  { date: "2026-07-03", day: "Friday", time: "18:00", teamA: "1J", teamB: "2H", stage: "Round of 32", venue: "Miami Stadium" },
  { date: "2026-07-03", day: "Friday", time: "21:30", teamA: "1K", teamB: "3DEIJL", stage: "Round of 32", venue: "Kansas City Stadium" },
  // Saturday 04 July 2026
  { date: "2026-07-04", day: "Saturday", time: "13:00", teamA: "W73", teamB: "W75", stage: "Round of 16", venue: "Houston Stadium" },
  { date: "2026-07-04", day: "Saturday", time: "17:00", teamA: "W74", teamB: "W77", stage: "Round of 16", venue: "Philadelphia Stadium" },
  // Sunday 05 July 2026
  { date: "2026-07-05", day: "Sunday", time: "16:00", teamA: "W76", teamB: "W78", stage: "Round of 16", venue: "New York/New Jersey Stadium" },
  { date: "2026-07-05", day: "Sunday", time: "20:00", teamA: "W79", teamB: "W80", stage: "Round of 16", venue: "Mexico City Stadium" },
  // Monday 06 July 2026
  { date: "2026-07-06", day: "Monday", time: "15:00", teamA: "W83", teamB: "W84", stage: "Round of 16", venue: "Dallas Stadium" },
  { date: "2026-07-06", day: "Monday", time: "20:00", teamA: "W81", teamB: "W82", stage: "Round of 16", venue: "Seattle Stadium" },
  // Tuesday 07 July 2026
  { date: "2026-07-07", day: "Tuesday", time: "12:00", teamA: "W86", teamB: "W88", stage: "Round of 16", venue: "Atlanta Stadium" },
  { date: "2026-07-07", day: "Tuesday", time: "16:00", teamA: "W85", teamB: "W87", stage: "Round of 16", venue: "BC Place Vancouver" },
  // Thursday 09 July 2026
  { date: "2026-07-09", day: "Thursday", time: "16:00", teamA: "W89", teamB: "W90", stage: "Quarter-final", venue: "Boston Stadium" },
  // Friday 10 July 2026
  { date: "2026-07-10", day: "Friday", time: "15:00", teamA: "W93", teamB: "W94", stage: "Quarter-final", venue: "Los Angeles Stadium" },
  // Saturday 11 July 2026
  { date: "2026-07-11", day: "Saturday", time: "17:00", teamA: "W91", teamB: "W92", stage: "Quarter-final", venue: "Miami Stadium" },
  { date: "2026-07-11", day: "Saturday", time: "21:00", teamA: "W95", teamB: "W96", stage: "Quarter-final", venue: "Kansas City Stadium" },
  // Tuesday 14 July 2026
  { date: "2026-07-14", day: "Tuesday", time: "15:00", teamA: "W97", teamB: "W98", stage: "Semi-final", venue: "Dallas Stadium" },
  // Wednesday 15 July 2026
  { date: "2026-07-15", day: "Wednesday", time: "15:00", teamA: "W99", teamB: "W100", stage: "Semi-final", venue: "Atlanta Stadium" },
  // Saturday 18 July 2026
  { date: "2026-07-18", day: "Saturday", time: "17:00", teamA: "RU101", teamB: "RU102", stage: "Play-off for third place", venue: "Miami Stadium" },
  // Sunday 19 July 2026
  { date: "2026-07-19", day: "Sunday", time: "15:00", teamA: "W101", teamB: "W102", stage: "Final", venue: "New York/New Jersey Stadium" },
];

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Excludes games that fall Mon–Fri between 9:00 and 17:00 (the user's
// "at work" window). 17:00 kickoffs are treated as available since they
// start right as a 9-to-5 workday ends.
function isUserAvailable(day, time) {
  if (!WEEKDAYS.includes(day)) return true;
  const [hour] = time.split(":").map(Number);
  return hour >= 17 || hour < 9;
}

// Turns a placeholder slot code (e.g. "2A", "3ABCDF", "W73", "RU101") into a
// human-readable description for knockout matchups whose teams aren't
// determined yet.
function describeSlot(code) {
  if (COUNTRIES[code]) return COUNTRIES[code].name;
  const groupSlot = /^([123])([A-L])$/.exec(code);
  if (groupSlot) {
    const label = { 1: "Winner", 2: "Runner-up", 3: "3rd Place" }[groupSlot[1]];
    return `${label} of Group ${groupSlot[2]}`;
  }
  const thirdPlaceSlot = /^3([A-L]+)$/.exec(code);
  if (thirdPlaceSlot) {
    return `Best 3rd-Place Team (Groups ${thirdPlaceSlot[1].split("").join(", ")})`;
  }
  const winnerSlot = /^W(\d+)$/.exec(code);
  if (winnerSlot) return `Winner of Match ${winnerSlot[1]}`;
  const thirdPlacePlayoffSlot = /^RU(\d+)$/.exec(code);
  if (thirdPlacePlayoffSlot) return `Loser of Match ${thirdPlacePlayoffSlot[1]}`;
  return code;
}

function buildTeam(code) {
  const country = COUNTRIES[code];
  if (country) {
    return { code, name: country.name, flag: country.flag, restaurant: country.restaurant, restaurantVerified: country.verified, tbd: false };
  }
  return { code, name: describeSlot(code), flag: "❓", restaurant: null, restaurantVerified: false, tbd: true };
}

// Stages where every game is single-elimination (one shot, no rematch). These
// are always shown even if they land in the Mon–Fri 9–5 work window — missing
// a semifinal or final isn't the same as missing a routine group game — but
// they're flagged with `workHoursConflict` so the UI can call that out.
const KNOCKOUT_STAGES_ALWAYS_SHOWN = [
  "Round of 16",
  "Quarter-final",
  "Semi-final",
  "Play-off for third place",
  "Final",
];

export const STAGE_ORDER = [
  "First Stage",
  "Round of 32",
  ...KNOCKOUT_STAGES_ALWAYS_SHOWN,
];

function stageGroup(stage) {
  return STAGE_ORDER.find((s) => stage.startsWith(s)) || stage;
}

// Final, filtered "World Cup in NYC" watch-party list. First Stage and Round
// of 32 games that fall Mon–Fri 9–5 are dropped (too many of those to plan
// around); Round of 16 through the Final are always kept, since there are
// only a handful of those all summer.
export const WORLD_CUP_GAMES = RAW_GAMES
  .filter((g) => {
    const available = isUserAvailable(g.day, g.time);
    return available || KNOCKOUT_STAGES_ALWAYS_SHOWN.includes(stageGroup(g.stage));
  })
  .map((g, idx) => ({
    id: `wc-${g.date}-${idx}`,
    date: g.date,
    day: g.day,
    time: g.time,
    stage: g.stage,
    stageGroup: stageGroup(g.stage),
    venue: g.venue,
    workHoursConflict: !isUserAvailable(g.day, g.time),
    teamA: buildTeam(g.teamA),
    teamB: buildTeam(g.teamB),
  }));

export function formatGameDate(isoDate) {
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

export function formatGameTime(time24) {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period} ET`;
}

export function gameLabel(game) {
  return `${game.teamA.name} vs ${game.teamB.name} — ${game.stage}`;
}
