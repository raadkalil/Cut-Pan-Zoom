import React from "react";
import { motion } from "motion/react";
import { Camera, Move, Scissors, Volume2, Film, CheckCircle2, Book } from "lucide-react";
import { BENEFITS } from "../data/landingData";

// Safe dictionary mapping string names to lucide icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  Camera: Camera,
  Move: Move,
  Scissors: Scissors,
  Volume2: Volume2,
  Film: Film,
  Book: Book,
};

export default function WhatYouWillLearn() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-smoky-black" id="what-you-will-learn">
      {/* Background visual accents / high-end ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-96 w-96 rounded-full bg-warm-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 -z-10 h-72 w-72 rounded-full bg-deep-burgundy/5 blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-soft-cream sm:text-4xl">
            What You'll Master Inside
          </h2>
          <p className="mt-4 text-base text-soft-cream/65 leading-relaxed max-w-2xl mx-auto">
            This handbook is structured for rapid learning. No boring academic filler — just clear, actionable terms you can put to use on set and in the editing room immediately.
          </p>
        </div>

        {/* Benefits Grid - Clean 3-column layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.iconName] || CheckCircle2;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-black/10 bg-dark-gray p-6 sm:p-8 opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out hover:border-deep-burgundy/30 hover:scale-[1.015] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
              >
                {/* Modern subtle background spotlight hover effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-deep-burgundy/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                <div className="absolute -right-12 -top-12 -z-10 h-24 w-24 rounded-full bg-deep-burgundy/5 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                <div>
                  {/* Icon Wrapper */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-burgundy/5 text-deep-burgundy border border-deep-burgundy/10 transition-all duration-500 group-hover:scale-105 group-hover:border-deep-burgundy/30 group-hover:bg-deep-burgundy/10">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mt-6 font-serif text-lg font-medium tracking-tight text-soft-cream group-hover:text-deep-burgundy transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm text-soft-cream/60 leading-relaxed font-sans font-normal">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 flex items-center gap-1.5 text-[9px] font-bold tracking-[0.18em] uppercase text-deep-burgundy/80 font-mono">
                  <span>Fully Demystified</span>
                  <CheckCircle2 className="h-3 w-3 text-deep-burgundy/90" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small Trust Seal in section */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.18em] text-soft-cream/40 font-mono bg-dark-gray px-5 py-2.5 rounded-full border border-black/10 shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-warm-gold inline-block animate-pulse shadow-[0_0_8px_rgba(255,208,38,0.6)]" />
            Designed for GCSE, A-Level, BTEC & University Curriculums
          </p>
        </div>

      </div>
    </section>
  );
}
