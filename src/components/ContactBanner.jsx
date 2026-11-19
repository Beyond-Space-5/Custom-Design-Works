import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND_INFO, CONTACT_INFO } from "../data/siteContent";

export default function ContactBanner() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappClean}?text=${encodeURIComponent(
    `Hello ${BRAND_INFO.name}, I would like to request a quote.`
  )}`;

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-20"
    >
      <div className="rounded-2xl bg-navy-900 text-white p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Contact {BRAND_INFO.name} directly for embedded firmware architecture,
            custom electronics enclosures, or manufacturing-ready 3D CAD models.
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-sky-200">
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call{" "}
              <a
                href={`tel:${CONTACT_INFO.primaryPhone}`}
                className="underline font-bold text-white hover:text-sky-200"
              >
                {CONTACT_INFO.primaryPhone}
              </a>{" "}
              or{" "}
              <a
                href={`tel:${CONTACT_INFO.secondaryPhone}`}
                className="underline font-bold text-white hover:text-sky-200"
              >
                {CONTACT_INFO.secondaryPhone}
              </a>
            </span>

            <span className="inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-white hover:text-sky-200"
              >
                {CONTACT_INFO.whatsapp}
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp {CONTACT_INFO.whatsapp}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-navy-900 font-bold text-sm hover:bg-slate-100 transition cursor-pointer"
          >
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
}