import React, { useState } from "react";
import { Cpu, Layers, Box, ArrowRight, X, MessageCircle, Phone, Send } from "lucide-react";
import { SERVICES, BRAND_INFO, CONTACT_INFO } from "../data/siteContent";

export default function Services({ onOpenModal }) {
  const [selectedService, setSelectedService] = useState(null);
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [brokenImages, setBrokenImages] = useState({});

  const handleOpenQuote = (serviceTitle) => {
    if (onOpenModal) {
      onOpenModal(serviceTitle);
    } else {
      setSelectedService(serviceTitle);
    }
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setClientName("");
    setClientContact("");
    setProjectDetails("");
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = [
      `Hello ${BRAND_INFO.name}, I would like to request a quote.`,
      `*Service:* ${selectedService}`,
      clientName ? `*Name:* ${clientName}` : null,
      clientContact ? `*Contact:* ${clientContact}` : null,
      projectDetails ? `*Project Details:* ${projectDetails}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappClean}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    handleCloseModal();
  };

  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-navy-900 uppercase">
          Core Services
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Dedicated engineering execution combining low-level microcontroller
          firmware, professional PCB layout, and production-ready 3D CAD design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES.map((service) => {
          const Icon =
            service.id === "firmware"
              ? Cpu
              : service.id === "pcb"
              ? Layers
              : Box;

          const showImage = Boolean(service.image) && !brokenImages[service.id];

          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(15,35,66,0.07)] border border-slate-100 hover:border-navy-900/30 transition flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-900/5 text-navy-900 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                {/* Service Photo Slot */}
                <div className="mb-5 overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50 aspect-[4/3] flex items-center justify-center">
                  {showImage ? (
                    <img
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={() =>
                        setBrokenImages((prev) => ({ ...prev, [service.id]: true }))
                      }
                    />
                  ) : (
                    <div className="px-4 text-center text-xs text-slate-500">
                      <p className="font-semibold text-navy-900/80 mb-1">
                        Photo Slot
                      </p>
                      <p className="font-mono text-[11px] break-all">
                        {service.image ? `public${service.image}` : "Add image path in siteContent.js"}
                      </p>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-extrabold text-navy-900 uppercase tracking-tight mb-3">
                  {service.number} / {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.summary}
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-navy-900 font-bold">•</span>
                      <span>
                        <strong>{bullet.lead}</strong> {bullet.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col items-center text-center gap-3.5">
                <span className="text-[11px] font-mono text-slate-500 leading-snug">
                  {service.tags}
                </span>
                <button
                  type="button"
                  onClick={() => handleOpenQuote(service.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold whitespace-nowrap transition shadow-sm cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* QUOTE REQUEST POP-UP MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/70 backdrop-blur-xs p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-navy-900/10 text-navy-900 font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
              Request a Quote
            </span>

            <h3 className="text-xl font-extrabold text-navy-900 tracking-tight mb-1">
              {selectedService}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-5">
              Share a quick overview of your project requirements to get started.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-1">
                  Your Name / Company
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Jane Doe / Acme Robotics"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-navy-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-1">
                  Phone or Email
                </label>
                <input
                  type="text"
                  required
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  placeholder="e.g. 07XX XXX XXX or email@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-navy-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wide mb-1">
                  Project Specifications
                </label>
                <textarea
                  rows={3}
                  required
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Briefly describe your custom project"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-navy-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Quote Request via WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-mono text-slate-600">
              <Phone className="w-3.5 h-3.5 text-navy-900" />
              <span>
                Or call{" "}
                <a
                  href={`tel:${CONTACT_INFO.primaryPhone}`}
                  className="font-bold text-navy-900 underline"
                >
                  {CONTACT_INFO.primaryPhone}
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}