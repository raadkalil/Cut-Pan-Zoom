import { useState } from "react";
import { motion } from "motion/react";
import ThreeDBookModal from "./ThreeDBookModal";
import { BookOpen, Sparkles, ArrowRight, Video, Aperture, RefreshCw } from "lucide-react";
import InteractiveBook from "./InteractiveBook";

interface HeroProps {
  onCtaClick: () => void;
  coverImagePath: string;
}

export default function Hero({ onCtaClick, coverImagePath }: HeroProps) {
  const [is3DOpen, setIs3DOpen] = useState(false);
  
  return (
    
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-24 lg:pb-40 bg-smoky-black border-b border-black/10" id="hero-section">
      
      {/* Exquisite technical dot grid pattern for filmmaker blueprint aesthetic */}
      <div 
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(#801d1d06 1.5px, transparent 1.5px), 
            radial-gradient(#801d1d04 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Cinematic ambient lighting effects behind elements */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep-burgundy/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm-gold/10 blur-[110px] pointer-events-none" />

      {/* Minimal corner crosshair guides (viewfinder theme) */}
      <div className="absolute left-6 top-6 h-6 w-6 border-l border-t border-black/10 pointer-events-none hidden md:block" />
      <div className="absolute right-6 top-6 h-6 w-6 border-r border-t border-black/10 pointer-events-none hidden md:block" />
      <div className="absolute left-6 bottom-6 h-6 w-6 border-l border-b border-black/10 pointer-events-none hidden md:block" />
      <div className="absolute right-6 bottom-6 h-6 w-6 border-r border-b border-black/10 pointer-events-none hidden md:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Hero Content Left */}
          <div className="flex flex-col justify-center text-center lg:col-span-7 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-center items-center gap-2 rounded-full border border-deep-burgundy/15 bg-deep-burgundy/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-deep-burgundy lg:self-start font-mono"
            >
              <span className="relative flex h-2 w-2 mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-burgundy opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-deep-burgundy"></span>
              </span>
              <span>Premium Digital Release</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.1] font-medium tracking-tight text-soft-cream"
            >
              Cut, Pan, Zoom: <br />
              <span className="font-serif italic text-deep-burgundy block mt-2 font-semibold">
                The Essential Film Terms Handbook
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base text-soft-cream/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Speak the vocabulary of a professional film set with absolute confidence. This gorgeous, highly visual digital glossary translates over 60 complex industry-standard terms into beautifully simple and direct definitions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-white bg-deep-burgundy hover:bg-deep-burgundy/90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-deep-burgundy cursor-pointer shadow-[0_8px_24px_rgba(128,29,29,0.15)] hover:shadow-[0_12px_28px_rgba(128,29,29,0.25)] group"
                id="hero-cta-btn"
              >
                <span>Gimme That</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#chapters-preview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg border border-black/10 bg-white hover:bg-black/[0.01] px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-soft-cream transition duration-300 focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
              >
                <BookOpen className="h-4 w-4 text-deep-burgundy" />
                <span>Lurk Inside</span>
              </a>
            </motion.div>

            {/* Camera Monitor Overlay Metadata Panel (Minimalist metrics) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-black/10 pt-8 max-w-xl mx-auto lg:mx-0"
            >
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-widest text-deep-burgundy font-bold block mb-1">● FORMAT / 20p</span>
                <p className="text-xs text-soft-cream/65 leading-normal">Beautiful custom layout and high-res diagrams</p>
              </div>
              <div className="text-left border-x border-black/10 px-6">
                <span className="text-[10px] font-mono tracking-widest text-deep-burgundy font-bold block mb-1">FPS / 60+ VOCAB</span>
                <p className="text-xs text-soft-cream/65 leading-normal">Camera setups, editing patterns & audio keys</p>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-widest text-deep-burgundy font-bold block mb-1">SCENE / 5 CH</span>
                <p className="text-xs text-soft-cream/65 leading-normal">Structured reference built for quick recall</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Right (Book Cover Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:col-span-5"
          >

          <div className="flex flex-col items-center gap-4">
  <InteractiveBook coverImagePath={coverImagePath} />
  <button
    onClick={() => setIs3DOpen(true)}
    className="inline-flex items-center gap-2 rounded-lg border border-warm-gold/30 bg-black/40 px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-warm-gold hover:border-warm-gold transition duration-300 cursor-pointer shadow-lg hover:text-soft-cream"
  >
    👁️ View 3D Interactive Model
  </button>
</div>
          </motion.div>

        </div>
      </div>
      <ThreeDBookModal isOpen={is3DOpen} onClose={() => setIs3DOpen(false)} />
    </section>
  );
}
