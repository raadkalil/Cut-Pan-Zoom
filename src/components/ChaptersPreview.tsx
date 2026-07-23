import { motion } from "motion/react";
import { BookOpen, Disc } from "lucide-react";
import { CHAPTERS } from "../data/landingData";

export default function ChaptersPreview() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-smoky-black border-y border-black/10" id="chapters-preview">
      {/* Background glow elements to break monotony */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-deep-burgundy/5 blur-[150px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-deep-burgundy/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-deep-burgundy/20 bg-deep-burgundy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-deep-burgundy mb-5"
          >
            <BookOpen className="h-3.5 w-3.5 text-deep-burgundy/90" />
            <span>5 Comprehensive Chapters</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl font-semibold tracking-tight text-soft-cream sm:text-4xl sm:tracking-tight"
          >
            Inside the Handbook
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base text-soft-cream/65 leading-relaxed font-sans max-w-2xl mx-auto"
          >
            Here's a detailed sneak peek at what we break down across the 24 heavily-visualized pages of the handbook:
          </motion.p>
        </div>

        {/* Chapters Stack */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {CHAPTERS.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl border border-black/10 bg-dark-gray p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-deep-burgundy/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
            >
              {/* Dynamic spotlight background effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-deep-burgundy/[0.01] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              {/* Vertical line indicator - clean animated line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-deep-burgundy to-warm-gold rounded-l-2xl opacity-40 group-hover:opacity-100 group-hover:w-2 transition-all duration-500" />

              {/* Number Column */}
              <div className="md:col-span-2 flex items-center md:justify-center">
                <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-deep-burgundy/5 group-hover:text-deep-burgundy/15 group-hover:scale-105 transition-all duration-500 select-none">
                  0{chapter.number}
                </span>
              </div>

              {/* Chapter Info Column */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-[0.2em] text-deep-burgundy/80 font-bold font-mono">
                  Chapter {chapter.number}
                </span>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl font-medium tracking-tight text-soft-cream group-hover:text-deep-burgundy transition-colors duration-300">
                  {chapter.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-soft-cream/60 leading-relaxed font-sans">
                  {chapter.summary}
                </p>
              </div>

              {/* Chapter Details Bullets Column */}
              <div className="md:col-span-4 border-t border-black/10 md:border-t-0 md:border-l md:border-black/10 pt-6 md:pt-0 md:pl-8">
                <h4 className="text-[9px] uppercase tracking-[0.18em] text-soft-cream/45 font-mono mb-4 font-semibold">
                  Core Terms Covered:
                </h4>
                <ul className="space-y-3">
                  {chapter.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="group/item flex items-start gap-2.5 text-xs text-soft-cream/75 hover:text-deep-burgundy transition-colors duration-300"
                    >
                      <Disc className="h-3 w-3 mt-0.5 text-deep-burgundy/75 flex-shrink-0 transition-transform duration-500 group-hover/item:rotate-180 group-hover/item:scale-110 group-hover/item:text-deep-burgundy" />
                      <span className="font-sans leading-normal font-normal">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
