import React from "react";
import { BRAND_INFO, CONTACT_INFO } from "../data/siteContent";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-slate-100">
      {/* Extended Dark Navy Curved Backdrop behind white text */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full lg:w-[66%] bg-navy-900 lg:rounded-r-[140px] shadow-2xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: White Text inside Dark Navy Shape */}
        <div className="lg:col-span-7 text-white space-y-6 pr-0 lg:pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-wider uppercase text-sky-200">
            {BRAND_INFO.name} • {CONTACT_INFO.location}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Engineering You Can Trust. Hardware &amp; CAD That Is Reliable.
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl leading-relaxed">
            Production-ready embedded firmware architecture and precision 3D
            mechanical CAD modeling engineered for real-world reliability and
            manufacturing.
          </p>
        </div>

        {/* Right Column: PCB Microprocessor, Code Card & 3D CAD Part Illustration */}
        <div className="lg:col-span-5">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}