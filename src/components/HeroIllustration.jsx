import React from "react";

export default function HeroIllustration() {
  return (
    <div className="relative">
      {/* Clean, frameless image container that blends into both navy and white zones */}
      <div
        className="relative rounded-2xl overflow-hidden bg-navy-900 shadow-xl"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 96% 94% at 50% 50%, #000 84%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 96% 94% at 50% 50%, #000 84%, transparent 100%)",
        }}
      >
        <img
          src="/hero-showcase.png"
          alt="01. Firmware, 02. PCB Design, and 03. 3D CAD Model showcase"
          className="w-full h-auto object-cover block select-none"
        />

        {/* Subtle edge-feathering overlay so borders soften naturally */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 rounded-2xl
            shadow-[inset_0_0_24px_rgba(15,23,42,0.45)]
          "
        />
      </div>
    </div>
  );
}