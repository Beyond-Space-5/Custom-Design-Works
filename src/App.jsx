import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Assuming you use your original Hero component here
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import { BRAND_INFO, CONTACT_INFO } from "./data/siteContent";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      <Navbar />
      
      {/* Your Original Hero Component */}
      <Hero />

      {/* Services Section (01 Firmware, 02 PCB Design, 03 3D CAD) */}
      <Services />

      {/* Workflow Section */}
      <Workflow />

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative bg-slate-50 py-24 border-t border-slate-200/80 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-navy-900 text-white font-mono text-xs uppercase tracking-wider mb-4 font-bold">
                About Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-navy-900 mb-6 uppercase tracking-tight">
                Engineering Ideas Into Reality.
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                <strong>Custom Design Works</strong> is an engineering design business offering specialized technical services in three core areas:
              </p>

              <ul className="space-y-4 text-slate-700 text-base leading-relaxed mb-6">
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-navy-900 mt-0.5">01.</span>
                  <span>
                    <strong>Embedded Firmware Development:</strong> Firmware design and development for microcontrollers and embedded systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-navy-900 mt-0.5">02.</span>
                  <span>
                    <strong>PCB Design:</strong> Electronic circuit design, schematic development, and PCB layout.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-navy-900 mt-0.5">03.</span>
                  <span>
                    <strong>Mechanical CAD Design:</strong> 3D modelling and design of mechanical parts, frames, components, and product enclosures.
                  </span>
                </li>
              </ul>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-4 border-t border-slate-100">
                Focused on precision, functionality, and practical engineering, Custom Design Works delivers customized design solutions that turn concepts into buildable products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {ContactBanner && <ContactBanner />}
      {Footer && <Footer/>}
    </div>
  );
}