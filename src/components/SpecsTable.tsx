import { motion } from "motion/react";
import { ListChecks, Download, ShieldCheck } from "lucide-react";
import { HANDBOOK_SPECS } from "../data/landingData";

export default function SpecsTable() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-dark-gray border-y border-black/10" id="specs-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Spec details left */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-deep-burgundy/20 bg-deep-burgundy/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-deep-burgundy mb-4 self-start">
              <ListChecks className="h-3.5 w-3.5" />
              <span>Full Specifications</span>
            </div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-soft-cream sm:text-4xl">
              What You Are Getting
            </h2>
            <p className="mt-4 text-sm sm:text-base text-soft-cream/70 leading-relaxed font-sans">
              No physical shipping delay or customs fees. You get immediate access to a meticulously formatted, digital e-book package. Highly stylized, fast-to-read, and accessible on any device you carry.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-burgundy/10 text-deep-burgundy flex-shrink-0">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-soft-cream">Instant Digital Access</h4>
                  <p className="text-xs text-soft-cream/65">Download link sent immediately after safe checkout.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-burgundy/10 text-deep-burgundy flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-soft-cream">Secure Purchase Flow</h4>
                  <p className="text-xs text-soft-cream/65">Fully encrypted transaction via industry standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specs Sheet Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-smoky-black rounded-2xl border border-black/10 p-6 sm:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.05)] hover:border-deep-burgundy/35 transition-all duration-500 relative overflow-hidden group/card"
          >
            {/* Ambient glows inside card */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-deep-burgundy/5 blur-3xl pointer-events-none group-hover/card:bg-deep-burgundy/10 transition-all duration-700" />
            <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-deep-burgundy/5 blur-3xl pointer-events-none" />
            
            <div className="border-b border-black/10 pb-5 mb-5 flex justify-between items-center">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-deep-burgundy font-bold font-mono">
                  Technical Sheet
                </span>
                <h3 className="font-serif text-xl font-medium text-soft-cream mt-0.5 tracking-tight">
                  Handbook Specs
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-soft-cream/40 uppercase tracking-widest">
                  Live Feed
                </span>
                <div className="h-2 w-2 rounded-full bg-warm-gold animate-pulse shadow-[0_0_8px_rgba(255,208,38,0.5)]" />
              </div>
            </div>

            <div className="space-y-1">
              {HANDBOOK_SPECS.map((spec, index) => (
                <div 
                  key={index} 
                  className="group/row flex justify-between items-center gap-4 py-3 px-4 rounded-xl hover:bg-black/[0.03] border border-transparent hover:border-black/5 transition-all duration-300"
                >
                  <span className="text-soft-cream/50 font-mono uppercase tracking-[0.12em] text-[10px]">
                    {spec.label}
                  </span>
                  <span className="text-soft-cream font-medium text-right text-xs sm:text-sm font-sans tracking-wide transition-colors duration-300 group-hover/row:text-deep-burgundy">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-black/5 flex justify-between items-center bg-black/[0.01] -mx-6 -mb-6 px-6 py-4 rounded-b-2xl border-t border-black/10">
              <span className="text-[10px] font-mono text-deep-burgundy/80 uppercase tracking-[0.18em] font-semibold">
                Authorized Release
              </span>
              <span className="text-[10px] text-soft-cream/40 font-mono tracking-wider">
                v1.0.2 / PDF
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
