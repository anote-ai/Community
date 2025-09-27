import React, { useState, useEffect, useMemo, useCallback } from "react";

/* ------------------------------------------------------------------
 * ArmorNews – Improved, more intuitive UI + more robust data loading
 * ------------------------------------------------------------------
 * Key UX Improvements
 * 1. Unified data loader: attempts Google Sheets API v4 (if API key), then CSV export fallbacks.
 * 2. Normalized schema: maps sheet headers → {title, description, url, source, date, publishedDate}.
 * 3. Client‑side enhancements:
 *    • Search box (title + description + source).
 *    • Source filter chips (auto‑derived from data).
 *    • Sort toggle (Newest ▾ / Oldest ▴).
 *    • Items‑per‑page selector (12 default).
 *    • Responsive masonry‑like grid (1‑col mobile, 2‑col md, 3‑col xl).
 *    • Compact article cards with subtle hover, brand accent (#F1CA57).
 *    • Favicon / domain avatar auto‑derived from URL (fallback glyph).
 *    • Date badge + "NEW" tag if < 7 days old.
 *    • Loading skeleton shimmer; error state with retry.
 *    • Collapsible Debug drawer (optional prop showDebug).
 * 4. Accessibility:
 *    • Semantic <article> wrappers, aria‑labels, focus outlines.
 *    • Keyboard navigation across pagination + filters.
 * 5. Minimal Tailwind dependencies; dark theme tuned to #141414 / #F1CA57.
 *
 * Usage:
 *   <ArmorNews apiKey="YOUR_KEY" sheetId="..." newsGid="..." showDebug={false} />
 *
 * If no apiKey is provided, will skip Sheets API and go directly to CSV fallbacks.
 */

// --------------------------- Props & Defaults --------------------------- //
const DEFAULT_SHEET_ID = "16_bm-EskCFDZfJ_lPfEGe7HtO9-ZQFVqp_x0I4vto44";
const DEFAULT_NEWS_GID = "444563147"; // News sheet gid

export default function ArmorNews({
  sheetId = DEFAULT_SHEET_ID,
  newsGid = DEFAULT_NEWS_GID,
  apiKey = "", // optional public key
  showDebug = false,
  initialPageSize = 12,
}) {
  // --------------------------- State --------------------------- //
  const [rawRows, setRawRows] = useState([]); // [ [h1,h2,...], [v1,v2,...], ... ]
  const [items, setItems] = useState([]); // normalized article objects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState([]);

  // UX controls
  const [query, setQuery] = useState("");
  const [selectedSources, setSelectedSources] = useState(new Set());
  const [sortNewestFirst, setSortNewestFirst] = useState(true);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  // --------------------------- Debug helper --------------------------- //
  const addDebug = useCallback((msg) => {
    setDebugInfo((prev) => [...prev, `[${new Date().toISOString()}] ${msg}`]);
    // eslint-disable-next-line no-console
    console.log("ArmorNews:", msg);
  }, []);

  // --------------------------- Data Fetch --------------------------- //
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      setDebugInfo([]);
      addDebug("Fetching news data...");

      let values = null; // array rows

      // Try Google Sheets API v4 if apiKey provided
      if (apiKey) {
        const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/News!A:Z?key=${apiKey}`;
        addDebug(`Attempting Sheets API: ${apiUrl}`);
        try {
          const r = await fetch(apiUrl);
          if (r.ok) {
            const j = await r.json();
            values = j.values || null;
            addDebug("Sheets API success.");
          } else {
            addDebug(`Sheets API failed status ${r.status}.`);
          }
        } catch (err) {
          addDebug(`Sheets API error: ${err.message}`);
        }
      }

      // Fallback: CSV export attempts (stop at first good CSV)
      if (!values) {
        addDebug("Trying CSV export fallbacks...");
        const csv = await tryCsvFallbacks(sheetId, newsGid, addDebug);
        if (csv) {
          values = csvToMatrix(csv, addDebug);
          addDebug("CSV fallback success.");
        } else {
          addDebug("All CSV fallbacks failed.");
        }
      }

      if (!values || values.length === 0) {
        if (!cancelled) {
          setError("Failed to load news data.");
          setLoading(false);
        }
        return;
      }

      if (cancelled) return;
      setRawRows(values);
      const norm = normalizeRows(values, addDebug);
      setItems(norm);
      setLoading(false);
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [sheetId, newsGid, apiKey, addDebug]);

  // Reset pagination when items change
  useEffect(() => {
    setCurrentPage(1);
  }, [items, pageSize, query, selectedSources, sortNewestFirst]);

  // --------------------------- Derived Data --------------------------- //
  const allSources = useMemo(() => {
    const s = new Set();
    items.forEach((it) => {
      if (it.source) s.add(it.source);
    });
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const sourceFilterActive = selectedSources.size > 0;

    return items
      .filter((it) => {
        if (sourceFilterActive && !selectedSources.has(it.source)) return false;
        if (!q) return true;
        const blob = `${it.title} ${it.description} ${it.source}`.toLowerCase();
        return blob.includes(q);
      })
      .sort((a, b) => {
        const dateA = a.dateObj || 0;
        const dateB = b.dateObj || 0;
        return sortNewestFirst ? dateB - dateA : dateA - dateB;
      });
  }, [items, query, selectedSources, sortNewestFirst]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  // --------------------------- Handlers --------------------------- //
  const toggleSource = (src) => {
    setSelectedSources((prev) => {
      const n = new Set(prev);
      if (n.has(src)) n.delete(src);
      else n.add(src);
      return n;
    });
  };

  const clearFilters = () => {
    setSelectedSources(new Set());
    setQuery("");
  };

  const handleRetry = () => {
    // trigger refetch by resetting dependency? simplest: change sheetId state? Instead reload.
    window.location.reload();
  };

  // --------------------------- Rendering --------------------------- //
  if (loading) {
    return (
      <div className="mx-auto max-w-6xl p-6">
        <Header count={0} />
        <LoadingGrid skeletonCount={initialPageSize} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl p-6 text-center text-red-400">
        <Header count={0} />
        <p className="mb-4">{error}</p>
        <button
          onClick={handleRetry}
          className="px-4 py-2 rounded bg-yellow-500 text-black font-medium hover:bg-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
        >
          Retry
        </button>
        {showDebug && <DebugPanel logs={debugInfo} />}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Header count={filtered.length} page={currentPage} pages={totalPages} />

      {/* Controls */}
      <Controls
        query={query}
        onQuery={setQuery}
        sources={allSources}
        selectedSources={selectedSources}
        onToggleSource={toggleSource}
        onClearFilters={clearFilters}
        sortNewestFirst={sortNewestFirst}
        setSortNewestFirst={setSortNewestFirst}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />

      {/* Articles grid */}
      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <ArticlesGrid items={pagedItems} />
          <Pagination
            current={currentPage}
            total={totalPages}
            onChange={setCurrentPage}
          />
        </>
      )}

      {showDebug && <DebugPanel logs={debugInfo} rawRows={rawRows} />}
    </div>
  );
}

/* =====================================================================
 * Utility: CSV / Matrix helpers
 * ===================================================================== */

/**
 * Try multiple CSV export URLs until one works. Returns CSV string or null.
 */
async function tryCsvFallbacks(sheetId, gid, addDebug) {
  const attempts = [
    {
      name: "export?format=csv&gid=GID",
      url: `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`,
    },
    {
      name: "gviz tqx out:csv",
      url: `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${gid}`,
    },
    {
      name: "export?format=csv (default sheet)",
      url: `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`,
    },
  ];

  for (const att of attempts) {
    try {
      addDebug(`CSV Attempt: ${att.name}`);
      const r = await fetch(att.url, { method: "GET", mode: "cors" });
      if (!r.ok) {
        addDebug(`Status ${r.status}`);
        continue;
      }
      const txt = await r.text();
      // crude validity check
      const looksLikeCsv = txt.includes(",") && txt.includes("\n");
      const notHtml = !/<!DOCTYPE|<html|<HTML/i.test(txt);
      if (looksLikeCsv && notHtml) {
        addDebug(`CSV success: ${att.name}`);
        return txt;
      }
      addDebug(`CSV not valid: ${att.name}`);
    } catch (err) {
      addDebug(`CSV error ${att.name}: ${err.message}`);
    }
  }
  return null;
}

/** quick + forgiving CSV → matrix */
function csvToMatrix(csv, addDebug) {
  const rows = [];
  let cur = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < csv.length; i++) {
    const ch = csv[i];
    if (ch === '"') {
      inQuotes = !inQuotes; // naive; good enough for simple sheets
    } else if (ch === "," && !inQuotes) {
      cur.push(field);
      field = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (field !== "" || cur.length > 0) {
        cur.push(field);
        rows.push(cur);
      }
      cur = [];
      field = "";
    } else {
      field += ch;
    }
  }
  if (field !== "" || cur.length > 0) {
    cur.push(field);
    rows.push(cur);
  }
  addDebug?.(`csvToMatrix parsed ${rows.length} rows.`);
  return rows;
}

/** Take raw rows array → normalized article objects */
function normalizeRows(values, addDebug) {
  if (!values || values.length === 0) return [];
  const headers = values[0].map((h) => (h || "").toString().trim().toLowerCase());
  const idx = (nameArr) => {
    for (const n of nameArr) {
      const pos = headers.indexOf(n);
      if (pos >= 0) return pos;
    }
    return -1;
  };

  const iTitle = idx(["title", "headline", "name"]);
  const iDesc = idx(["description", "summary", "snippet"]);
  const iUrl = idx(["url", "link", "href"]);
  const iSource = idx(["source", "publisher", "outlet"]);
  const iDate = idx(["date", "pulled date", "collected date"]);
  const iPubDate = idx(["published date", "pub date", "published"]);

  const articles = [];
  for (let r = 1; r < values.length; r++) {
    const row = values[r];
    const title = safeGet(row, iTitle);
    if (!title) continue; // skip blanks
    const description = safeGet(row, iDesc);
    const url = safeGet(row, iUrl);
    const source = safeGet(row, iSource);
    const dateRaw = safeGet(row, iDate);
    const pubRaw = safeGet(row, iPubDate);

    const dateObj = parsePossibleDate(dateRaw || pubRaw);
    const prettyDate = formatDate(dateObj);

    articles.push({
      title,
      description,
      url,
      source,
      date: dateRaw || pubRaw || "",
      publishedDate: pubRaw || dateRaw || "",
      dateObj,
      prettyDate,
    });
  }
  addDebug?.(`normalizeRows built ${articles.length} articles.`);
  return articles;
}

function safeGet(arr, i) {
  if (i < 0) return "";
  return (arr[i] || "").toString().trim();
}

function parsePossibleDate(str) {
  if (!str) return null;
  // Accept many sheet formats: MM/DD/YY, YYYY-MM-DD, etc.
  const d = new Date(str);
  if (!isNaN(d.getTime())) return d;
  // try parse numeric (Excel serial?)
  const num = Number(str);
  if (!isNaN(num) && num > 59_000 && num < 100_000) {
    // Excel serial days since 1899-12-30
    const epoch = new Date(Date.UTC(1899, 11, 30));
    const ms = num * 24 * 60 * 60 * 1000;
    return new Date(epoch.getTime() + ms);
  }
  return null;
}

function formatDate(dateObj) {
  if (!dateObj || isNaN(dateObj.getTime())) return "";
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* =====================================================================
 * Presentational Components
 * ===================================================================== */

function Header({ count, page, pages }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 gap-2">
      <h1 className="text-3xl font-bold text-white">AI News</h1>
      <div className="text-sm text-gray-400">
        {count} article{count === 1 ? "" : "s"}
        {pages != null && pages > 1 && (
          <span className="ml-2">• Page {page} of {pages}</span>
        )}
      </div>
    </div>
  );
}

function Controls({
  query,
  onQuery,
  sources,
  selectedSources,
  onToggleSource,
  onClearFilters,
  sortNewestFirst,
  setSortNewestFirst,
  pageSize,
  setPageSize,
}) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search news..."
          className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="text"
          aria-label="Search news"
        />
        {query && (
          <button
            onClick={() => onQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-200"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Source filter chips */}
      {/* {sources.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {sources.map((s) => {
            const active = selectedSources.has(s);
            return (
              <button
                key={s}
                onClick={() => onToggleSource(s)}
                className={`px-3 py-1 rounded-full text-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 ${
                  active
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-gray-800 text-gray-200 border-gray-600 hover:border-yellow-500"
                }`}
              >
                {s}
              </button>
            );
          })}
          {selectedSources.size > 0 && (
            <button
              onClick={onClearFilters}
              className="ml-1 px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
            >
              Clear
            </button>
          )}
        </div>
      )} */}

      {/* Sort + Page size */}
      {/* <div className="flex flex-wrap items-center gap-4 text-sm">
        <button
          onClick={() => setSortNewestFirst(!sortNewestFirst)}
          className="px-3 py-1 rounded bg-gray-800 border border-gray-600 text-gray-200 hover:border-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        >
          Sort: {sortNewestFirst ? "Newest" : "Oldest"}
        </button>
        <label className="flex items-center gap-2">
          <span className="text-gray-400">Per page:</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-gray-800 border border-gray-600 rounded px-2 py-1 text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          >
            {[6, 12, 24, 48].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div> */}
    </div>
  );
}

function ArticlesGrid({ items }) {
  return (
    <div
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr mb-12"
      role="list"
    >
      {items.map((item, i) => (
        <ArticleCard key={i} item={item} />
      ))}
    </div>
  );
}

// function ArticleCard({ item }) {
//   const { title, description, url, source, prettyDate, dateObj } = item;
//   const domain = url ? safeDomain(url) : null;
//   const favicon = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : null;
//   const isNew = dateObj ? isRecent(dateObj, 7) : false;

//   return (
//     <article
//       className="group relative flex flex-col bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm hover:border-yellow-500 transition-colors focus-within:border-yellow-500"
//     >
//       {/* Source + favicon */}
//       <header className="flex items-center gap-3 mb-3">
//         {favicon ? (
//           <img
//             src={favicon}
//             alt=""
//             className="w-5 h-5 rounded-sm"
//             loading="lazy"
//           />
//         ) : (
//           <div className="w-5 h-5 rounded-sm bg-gray-600" />
//         )}
//         <span className="text-xs uppercase tracking-wide text-gray-400 line-clamp-1">
//           {source || domain || "Unknown Source"}
//         </span>
//         {isNew && (
//           <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-yellow-500 text-black">NEW</span>
//         )}
//       </header>

//       <h2 className="text-lg font-semibold text-white mb-2 line-clamp-3 leading-snug">
//         {title || "Untitled"}
//       </h2>

//       {description && (
//         <p className="text-sm text-gray-300 mb-4 line-clamp-4">
//           {description}
//         </p>
//       )}

//       <footer className="mt-auto flex items-center justify-between text-xs text-gray-400 pt-2">
//         <span>{prettyDate}</span>
//         {url && (
//           <a
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded px-1"
//           >
//             Read <span aria-hidden>→</span>
//           </a>
//         )}
//       </footer>
//     </article>
//   );
// }
function ArticleCard({ item }) {
  const { title, description, url, source, prettyDate, dateObj } = item;
  const domain = url ? safeDomain(url) : null;
  const favicon = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : null;
  const isNew = dateObj ? isRecent(dateObj, 7) : false;

  return (
    <article
      className="group relative flex flex-col bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm
                 transition-transform transition-colors duration-150 ease-out
                 hover:scale-[1.02] active:scale-[0.99]
                 hover:border-yellow-500 focus-within:border-yellow-500 cursor-pointer"
    >
      {/* Full-card clickable overlay link */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open article: ${title || source || domain || 'News item'}`}
          className="absolute inset-0 z-10 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        />
      )}

      {/* Actual card content (click passes through to overlay link) */}
      <header className="flex items-center gap-3 mb-3 relative z-20 pointer-events-none">
        {favicon ? (
          <img
            src={favicon}
            alt=""
            className="w-5 h-5 rounded-sm"
            loading="lazy"
          />
        ) : (
          <div className="w-5 h-5 rounded-sm bg-gray-600" />
        )}
        <span className="text-xs uppercase tracking-wide text-gray-400 line-clamp-1">
          {source || domain || "Unknown Source"}
        </span>
        {isNew && (
          <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-yellow-500 text-black">
            NEW
          </span>
        )}
      </header>

      <h2 className="relative z-20 text-lg font-semibold text-white mb-2 line-clamp-3 leading-snug pointer-events-none">
        {title || "Untitled"}
      </h2>

      {description && (
        <p className="relative z-20 text-sm text-gray-300 mb-4 line-clamp-4 pointer-events-none">
          {description}
        </p>
      )}

      <footer className="relative z-20 mt-auto flex items-center justify-between text-xs text-gray-400 pt-2 pointer-events-none">
        <span>{prettyDate}</span>
        {/* decorative arrow since whole card is link */}
        {url && (
          <span className="inline-flex items-center gap-1 text-yellow-400 group-hover:text-yellow-300 font-medium">
            Read <span aria-hidden>→</span>
          </span>
        )}
      </footer>
    </article>
  );
}


function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;
  const pages = visiblePageRange(current, total, 5);
  const prevDisabled = current === 1;
  const nextDisabled = current === total;

  return (
    <nav className="flex justify-center items-center gap-1 text-sm select-none" aria-label="Pagination">
      <PageBtn label="Prev" disabled={prevDisabled} onClick={() => !prevDisabled && onChange(current - 1)} />
      {pages.map((p) => (
        <PageBtn
          key={p}
          label={p}
          active={p === current}
          onClick={() => onChange(p)}
        />
      ))}
      <PageBtn label="Next" disabled={nextDisabled} onClick={() => !nextDisabled && onChange(current + 1)} />
    </nav>
  );
}

function PageBtn({ label, active, disabled, onClick }) {
  const classes = [
    "px-3 py-1 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500",
    disabled
      ? "cursor-not-allowed bg-gray-700 border-gray-700 text-gray-500"
      : active
      ? "bg-yellow-500 border-yellow-500 text-black font-medium"
      : "bg-gray-800 border-gray-700 text-gray-200 hover:border-yellow-500",
  ].join(" ");
  return (
    <button disabled={disabled} onClick={onClick} className={classes}>
      {label}
    </button>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16 text-gray-400">
      <p>No news items match your filters.</p>
    </div>
  );
}

function LoadingGrid({ skeletonCount = 12 }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-800 border border-gray-700 rounded-xl p-5 h-48" />
      ))}
    </div>
  );
}

function DebugPanel({ logs, rawRows }) {
  if (!logs?.length) return null;
  return (
    <details className="mt-12 text-xs text-gray-300 bg-gray-900/60 border border-gray-700 rounded p-4 whitespace-pre-wrap break-words">
      <summary className="cursor-pointer font-bold text-yellow-400">Debug Info</summary>
      {logs.map((l, i) => (
        <div key={i} className="mb-1">{l}</div>
      ))}
      {rawRows && rawRows.length > 0 && (
        <pre className="mt-4 max-h-64 overflow-auto text-[10px] leading-tight">{JSON.stringify(rawRows, null, 2)}</pre>
      )}
    </details>
  );
}

/* =====================================================================
 * Helper fns – domain, recency, page range
 * ===================================================================== */

function safeDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname;
  } catch {
    return null;
  }
}

function isRecent(dateObj, days = 7) {
  const now = Date.now();
  const then = dateObj?.getTime?.() ?? 0;
  const diff = now - then;
  return diff >= 0 && diff <= days * 24 * 60 * 60 * 1000;
}

function visiblePageRange(current, total, maxVisible) {
  if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i + 1);
  let start = Math.max(1, current - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;
  if (end > total) {
    end = total;
    start = end - maxVisible + 1;
  }
  const arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
}
