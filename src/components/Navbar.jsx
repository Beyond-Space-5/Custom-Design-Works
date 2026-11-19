import React from "react";
import { BRAND_INFO } from "../data/siteContent";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2.5 group">
          <svg
            viewBox="0 0 128 128"
            className="w-8 h-8 shrink-0"
            aria-hidden="true"
          >
            <rect x="22" y="8" width="84" height="112" rx="18" fill="#062044" />
            <g fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
              <polygon points="64,12 91,42 91,82 64,112 37,82 37,42" />
              <polyline points="37,42 64,66 91,42" />
              <line x1="64" y1="66" x2="64" y2="112" />
            </g>
            <g fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
              <rect x="57.5" y="32" width="13" height="12" rx="2.5" fill="#062044" />
              <line x1="60.5" y1="27.5" x2="60.5" y2="32" />
              <line x1="64" y1="27.5" x2="64" y2="32" />
              <line x1="67.5" y1="27.5" x2="67.5" y2="32" />
              <line x1="60.5" y1="44" x2="60.5" y2="48.5" />
              <line x1="64" y1="44" x2="64" y2="48.5" />
              <line x1="67.5" y1="44" x2="67.5" y2="48.5" />
              <line x1="53" y1="34.5" x2="57.5" y2="34.5" />
              <line x1="53" y1="38" x2="57.5" y2="38" />
              <line x1="53" y1="41.5" x2="57.5" y2="41.5" />
              <line x1="70.5" y1="34.5" x2="75" y2="34.5" />
              <line x1="70.5" y1="38" x2="75" y2="38" />
              <line x1="70.5" y1="41.5" x2="75" y2="41.5" />
            </g>
          </svg>
          <span className="font-black text-sm sm:text-base tracking-tight text-navy-900 uppercase">
            {BRAND_INFO.name}
          </span>
        </a>

        <nav className="flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-navy-900 transition">
            Core Services
          </a>
          <a href="#workflow" className="hover:text-navy-900 transition">
            Workflow
          </a>
          <a href="#contact" className="hover:text-navy-900 transition">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}