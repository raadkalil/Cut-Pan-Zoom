import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "../data/landingData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-smoky-black" id="faq">
      <div className="absolute left-1/2 bottom-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-deep-burgundy/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-deep-burgundy/20 bg-deep-burgundy/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-deep-burgundy mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-soft-cream sm:text-4xl">
            Got Questions? We've Got Answers
          </h2>
          <p className="mt-4 text-base text-soft-cream/70 leading-relaxed font-sans">
            Everything you need to know about purchasing, reading, and implementing the terms inside "Cut, Pan, Zoom".
          </p>
        </div>

        {/* Accordions Wrapper */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-black/10 bg-dark-gray overflow-hidden transition-all duration-300 hover:border-deep-burgundy/30"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${index}`}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-soft-cream pr-4 group-hover:text-deep-burgundy transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-deep-burgundy/5 text-deep-burgundy border border-deep-burgundy/10">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {/* Accordion Content Panel (with AnimatePresence) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 border-t border-black/10 pt-4">
                        <p className="text-sm sm:text-base text-soft-cream/75 leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
