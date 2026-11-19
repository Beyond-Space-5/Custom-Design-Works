import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { CONTACT_INFO } from "../data/siteContent";

export default function ProjectModal({ isOpen, initialService, onClose }) {
  const [selectedService, setSelectedService] = useState(initialService);
  const [formData, setFormData] = useState({ name: '', contact: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedService(initialService);
    setSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Amos, my name is ${formData.name} (${formData.contact}). I need help with *${selectedService}*.\n\nProject Details:\n${formData.details}`;
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumberIntl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-extrabold text-navy-900 mb-1">
          Start a Project
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-5">
          Fill in your brief below to open a pre-filled inquiry directly on
          WhatsApp ({CONTACT_INFO.whatsappDisplay}).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
              Service Needed
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:border-navy-900"
            >
              <option value="Embedded Firmware Development">
                01 / Embedded Firmware Development
              </option>
              <option value="3D CAD Model & Enclosure Design">
                02 / 3D CAD Model &amp; Enclosure Design
              </option>
              <option value="Combined Firmware + CAD Enclosure">
                Combined Firmware + 3D CAD Enclosure
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. David Kamau"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:border-navy-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
              Your Phone or Email
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 0712 345 678"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:border-navy-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
              Project Summary
            </label>
            <textarea
              rows="3"
              required
              placeholder="Describe your microcontroller, sensors, or mechanical enclosure dimensions..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:border-navy-900"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-navy-900 hover:bg-navy-700 text-white font-bold py-3 rounded-xl inline-flex items-center justify-center gap-2 text-sm transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send via WhatsApp
          </button>

          {submitted && (
            <p className="text-xs text-emerald-600 text-center font-medium">
              WhatsApp opened! You can also call directly at {CONTACT_INFO.phoneDisplay}.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}