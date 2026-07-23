import { motion } from "motion/react";
import { Check, X, Users } from "lucide-react";
import { WHO_FOR, WHO_NOT_FOR } from "../data/landingData";

export default function AudienceSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-smoky-black" id="who-is-it-for">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep-burgundy/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-deep-burgundy/20 bg-deep-burgundy/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-deep-burgundy mb-4">
            <Users className="h-3.5 w-3.5" />
            <span>Perfect Fit Check</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-soft-cream sm:text-4xl">
            Is This Handbook Right For You?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-soft-cream/70 leading-relaxed font-sans">
            Let's be completely transparent. We want to ensure you get exactly the value you are looking for. Here is a quick breakdown:
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* WHO IT'S FOR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg border border-warm-gold/30 bg-dark-gray p-8 sm:p-10 shadow-lg"
          >
            {/* Top decorative band */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-warm-gold rounded-t-lg" />
            
            <h3 className="font-serif text-2xl font-medium tracking-tight text-deep-burgundy flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep-burgundy/10 text-deep-burgundy">
                <Check className="h-4.5 w-4.5" />
              </span>
              This Is For You If...
            </h3>
            
            <ul className="mt-8 space-y-4">
              {WHO_FOR.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 mt-0.5 items-center justify-center rounded-full bg-deep-burgundy/10 text-deep-burgundy flex-shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm sm:text-base text-soft-cream/80 font-sans leading-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WHO IT'S NOT FOR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-lg border border-black/10 bg-dark-gray p-8 sm:p-10 shadow-lg"
          >
            {/* Top decorative band */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-deep-burgundy/40 rounded-t-lg" />
            
            <h3 className="font-serif text-2xl font-medium tracking-tight text-soft-cream/80 flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-soft-cream/60">
                <X className="h-4.5 w-4.5" />
              </span>
              This Is NOT For You If...
            </h3>
            
            <ul className="mt-8 space-y-4">
              {WHO_NOT_FOR.map((item, index) => (
                <li key={index} className="flex items-start gap-3 opacity-75">
                  <span className="flex h-5 w-5 mt-0.5 items-center justify-center rounded-full bg-black/5 text-soft-cream/40 flex-shrink-0">
                    <X className="h-3 w-3" />
                  </span>
                  <span className="text-sm sm:text-base text-soft-cream/70 font-sans leading-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
