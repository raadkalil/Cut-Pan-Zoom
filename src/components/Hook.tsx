import { motion } from "motion/react";
import { HelpCircle, Sparkles } from "lucide-react";

export default function Hook() {
  return (
    <section className="relative bg-dark-gray py-20 sm:py-28 overflow-hidden border-y border-black/10" id="hook-section">
      {/* Absolute visual elements */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-deep-burgundy/5 to-transparent pointer-events-none" />
      <div className="absolute left-10 top-10 h-2 w-2 rounded-full bg-deep-burgundy/30 animate-ping" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Quote/Interrogation Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-deep-burgundy/10 text-deep-burgundy border border-deep-burgundy/30 mb-8"
        >
          <HelpCircle className="h-7 w-7" />
        </motion.div>

        {/* Core Question Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl font-medium leading-relaxed tracking-tight text-soft-cream sm:text-3xl md:text-4xl"
        >
          Do you freeze up every time a director shouts <br className="hidden md:inline" />
          <span className="relative inline-block px-2 text-deep-burgundy italic font-semibold">
            "cut to a Dutch angle"
          </span>{" "}
          or{" "}
          <span className="relative inline-block px-2 text-deep-burgundy italic font-semibold">
            "add a jump cut in post"
          </span>
          ?
        </motion.h2>

        {/* Resolving supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 space-y-6 text-base text-soft-cream/80 sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Filmmaking is full of technical jargon. On a hectic set or inside an intense edit bay, missing a single visual term can lead to costly mistakes, miscommunications, and creative frustration. 
          </p>
          <p className="font-medium text-soft-cream">
            But learning these terms shouldn't require reading 500-page dry academic textbooks.
          </p>
          <p>
            <strong className="text-deep-burgundy font-serif text-lg sm:text-xl font-semibold">
              "Cut, Pan, Zoom" is the handbook that bridges that gap.
            </strong>{" "}
            It translates complex film terminology into simple, visual, and direct definitions. Crafted specifically to empower you with the vocabulary and confidence of a professional filmmaker from day one.
          </p>
        </motion.div>

        {/* Small subtle visual strip */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent mx-auto mt-12"
        />
      </div>
    </section>
  );
}
