import React, { useState } from "react";

export default function ShareButton({ title, description, url, className = "" }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const shareUrl = url || window.location.href;
  const shareText = `${title} — ${description} | Anote AI Community`;

  const handleLinkedIn = (e) => {
    e.stopPropagation();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
    setOpen(false);
  };

  const handleTwitter = (e) => {
    e.stopPropagation();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
    setOpen(false);
  };

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(shareUrl).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setOpen(false);
  };

  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={toggleOpen}
        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded-lg px-2.5 py-1.5 transition"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share
      </button>
      {open && (
        <div className="absolute left-0 top-9 z-50 bg-gray-800 border border-white/10 rounded-xl p-2 shadow-xl min-w-[150px]">
          <button onClick={handleLinkedIn} className="w-full text-left px-3 py-2 text-sm text-gray-200 hover:bg-white/10 rounded-lg flex items-center gap-2">
            <span className="text-blue-400 font-bold text-xs">in</span> LinkedIn
          </button>
          <button onClick={handleTwitter} className="w-full text-left px-3 py-2 text-sm text-gray-200 hover:bg-white/10 rounded-lg flex items-center gap-2">
            <span className="text-xs">𝕏</span> Twitter / X
          </button>
          <button onClick={handleCopy} className="w-full text-left px-3 py-2 text-sm text-gray-200 hover:bg-white/10 rounded-lg flex items-center gap-2">
            {copied ? "✓ Copied!" : "🔗 Copy Link"}
          </button>
        </div>
      )}
    </div>
  );
}
