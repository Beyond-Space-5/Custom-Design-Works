import React from "react";
import { BRAND_INFO, CONTACT_INFO } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm">
        <div>
          <p className="font-extrabold text-white uppercase tracking-wider">
            {BRAND_INFO.name}
          </p>
          <p className="text-slate-300 mt-1">
            {BRAND_INFO.tagline} • {CONTACT_INFO.location}
          </p>
        </div>

        <div className="font-mono text-slate-200 space-y-1 sm:text-right">
          <p>
            Call{" "}
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="hover:text-white underline font-bold"
            >
              {CONTACT_INFO.primaryPhone}
            </a>{" "}
            or{" "}
            <a
              href={`tel:${CONTACT_INFO.secondaryPhone}`}
              className="hover:text-white underline font-bold"
            >
              {CONTACT_INFO.secondaryPhone}
            </a>
          </p>
          <p>
            WhatsApp{" "}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline font-bold text-emerald-400"
            >
              {CONTACT_INFO.whatsapp}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}