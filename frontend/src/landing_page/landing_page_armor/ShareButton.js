import React, { useState } from "react";
import { Check, Link, Linkedin, Share2, Twitter } from "lucide-react";

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
        type="button"
        onClick={toggleOpen}
        aria-expanded={open}
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300/70 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <Share2 className="h-4 w-4" strokeWidth={2.2} />
        <span>Share</span>
      </button>
      {open && (
        <div className="absolute left-0 top-12 z-50 min-w-[190px] rounded-xl border border-white/15 bg-gray-900/95 p-2 shadow-2xl shadow-black/35 backdrop-blur">
          <button
            type="button"
            onClick={handleLinkedIn}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
          >
            <Linkedin className="h-4 w-4 text-blue-300" strokeWidth={2.2} />
            <span>LinkedIn</span>
          </button>
          <button
            type="button"
            onClick={handleTwitter}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
          >
            <Twitter className="h-4 w-4 text-sky-300" strokeWidth={2.2} />
            <span>Twitter / X</span>
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-300" strokeWidth={2.2} />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Link className="h-4 w-4 text-gray-300" strokeWidth={2.2} />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
