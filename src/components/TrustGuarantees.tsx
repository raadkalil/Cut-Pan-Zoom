import { motion } from "motion/react";
import { ShieldCheck, Zap, RefreshCw, Sparkles } from "lucide-react";

export default function TrustGuarantees() {
  return (
    <section className="relative py-16 bg-dark-gray border-y border-black/10" id="trust-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Guarantee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* GUARANTEE 1: MONEY BACK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 bg-smoky-black rounded-lg border border-black/10 hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:border-deep-burgundy/30 transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-burgundy/5 text-deep-burgundy border border-deep-burgundy/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-medium text-soft-cream">
              14-Day Guarantee
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-soft-cream/70 leading-relaxed font-sans">
              100% risk-free. If you don't feel the handbook simplifies film terms and saves you time, email us within 14 days for a full refund.
            </p>
          </motion.div>
 
          {/* GUARANTEE 2: INSTANT DELIVERY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 bg-smoky-black rounded-lg border border-black/10 hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:border-deep-burgundy/30 transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-burgundy/5 text-deep-burgundy border border-deep-burgundy/20">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-medium text-soft-cream">
              Instant Delivery
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-soft-cream/70 leading-relaxed font-sans">
              No physical shipping. Immediate access to your secure high-res PDF download right in your inbox immediately after payment.
            </p>
          </motion.div>
 
          {/* GUARANTEE 3: FREE UPDATES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-smoky-black rounded-lg border border-black/10 hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:border-deep-burgundy/30 transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-burgundy/5 text-deep-burgundy border border-deep-burgundy/20">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-medium text-soft-cream">
              Free Updates
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-soft-cream/70 leading-relaxed font-sans">
              Free future updates! Any typo fixes, vocabulary expansions, or visual upgrades are pushed to your email forever at $0.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
