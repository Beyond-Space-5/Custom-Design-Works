import React from 'react';
import { Terminal, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STEPS } from "../data/siteContent";

const ICONS = [Terminal, Layers, Wrench, CheckCircle2];

export default function Workflow() {
  return (
    <section id="workflow" className="bg-white border-y border-slate-200/80 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 uppercase">
            How Custom Design Works Work
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Clear engineering milestones from specification to working files.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((item, idx) => {
            const IconComponent = ICONS[idx];
            return (
              <div
                key={item.step}
                className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/70"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-navy-900 text-white">
                    STEP {item.step}
                  </span>
                  <IconComponent className="w-5 h-5 text-navy-900" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}