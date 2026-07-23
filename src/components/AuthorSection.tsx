import { motion } from "motion/react";
import { User, Quote } from "lucide-react";

export default function AuthorSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-smoky-black" id="author-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-lg border border-black/10 bg-dark-gray p-8 sm:p-12 shadow-lg relative overflow-hidden">
          {/* Decorative quotes graphic */}
          <div className="absolute right-6 top-6 text-deep-burgundy/[0.04] pointer-events-none">
            <Quote className="h-44 w-44 transform rotate-180" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 relative z-10">
            
            {/* Author Avatar Graphic representing a filmmaker */}
            <div className="flex-shrink-0">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gradient-to-tr from-deep-burgundy to-warm-gold p-[2px] shadow-xl">
                <div className="h-full w-full rounded-full bg-smoky-black flex items-center justify-center">
                  <User className="h-10 w-10 text-deep-burgundy/80" />
                </div>
                {/* Director's chair badge */}
                <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-deep-burgundy text-white flex items-center justify-center border border-black/10 text-[10px] font-bold font-mono">
                  TG
                </div>
              </div>
            </div>

            {/* Author Story Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-widest text-deep-burgundy font-bold font-mono">
                Meet The Creator
              </span>
              <h3 className="mt-2 font-serif text-2xl font-medium text-soft-cream">
                A Note From Day One
              </h3>
              
              <div className="mt-4 space-y-4 text-sm sm:text-base text-soft-cream/80 leading-relaxed font-sans">
                <p>
                  "When I stepped onto my first film set and sat in my first lecture hall as a Film & Television student, I was completely overwhelmed. Professors and directors were throwing around terms like <em>mise-en-scène</em>, <em>Foley sound</em>, <em>Dutch angles</em>, and <em>match cuts</em> like it was standard English. I spent half my time secretly searching Google on my phone."
                </p>
                <p>
                  "I built this handbook to be the exact reference I wished I had on day one. It doesn't rely on stuffy academic definitions that put you to sleep. Instead, it gets straight to the point with simple, visual, and highly functional breakdowns of the terms you actually hear in production and post."
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-semibold text-deep-burgundy font-serif">Thunder Gabriel</p>
                  <p className="text-[10px] text-soft-cream/50 uppercase tracking-widest font-mono">Director & Author</p>
                </div>
                <div className="font-serif italic text-sm text-soft-cream/70">
                  "Speak the language, make the film."
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
