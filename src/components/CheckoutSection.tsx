import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, CheckCircle2, ShieldCheck, Mail, ArrowRight } from "lucide-react";

interface CheckoutSectionProps {
  coverImagePath: string;
}

export default function CheckoutSection({ coverImagePath }: CheckoutSectionProps) {
  const [showSimModal, setShowSimModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [purchaseStep, setPurchaseStep] = useState<"form" | "reminder">("form");

  const handleFollowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Submit form data using fetch with method: 'POST' and mode: 'no-cors'
    const formData = new URLSearchParams();
    formData.append("seller_id", "731365516533");
    formData.append("email", emailInput);

    fetch("https://gumroad.com/follow_from_embed_form", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    }).catch((err) => {
      console.error("Gumroad follow form submission failed (expected or network error):", err);
    });

    // Switch to reminder step inside the same modal
    setPurchaseStep("reminder");
  };

  const handleGetHandbook = () => {
    setShowSimModal(false);
    setTimeout(() => {
      const trigger = document.getElementById("hidden-gumroad-trigger");
      if (trigger) {
        trigger.click();
      }
    }, 50);
  };

  const resetSimulation = () => {
    setPurchaseStep("form");
    setEmailInput("");
    setShowSimModal(false);
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-dark-gray border-t border-black/10" id="checkout-section">
      {/* Background visual graphics */}
      <div className="absolute left-1/3 top-1/2 -z-10 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-deep-burgundy/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-10 top-10 h-[300px] w-[300px] rounded-full bg-deep-burgundy/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-soft-cream sm:text-4xl">
            Start Speaking Like A Professional Director Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-soft-cream/70 leading-relaxed font-sans">
            Get instant, lifetime access to "Cut, Pan, Zoom" and take your filmmaking confidence to the next level.
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Cover & Specs summary (Left Column) */}
          <div className="md:col-span-5 bg-smoky-black rounded-lg border border-black/10 p-6 flex flex-col justify-between shadow-lg">
            <div className="flex-1">
              <div className="aspect-[2/3] w-full max-w-[200px] mx-auto rounded-md overflow-hidden bg-dark-gray shadow-md relative group border border-black/10 mb-6">
                <img
                  src={coverImagePath}
                  alt="Cut, Pan, Zoom Book Cover Summary"
                  className="absolute inset-0 h-full w-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>

              <h4 className="font-serif text-lg font-medium text-soft-cream text-center sm:text-left">
                Cut, Pan, Zoom
              </h4>
              <p className="text-xs text-deep-burgundy font-mono uppercase tracking-widest text-center sm:text-left mt-1 font-semibold">
                The Essential Film Terms Handbook
              </p>

              <ul className="mt-4 space-y-2 text-xs text-soft-cream/70 border-t border-black/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-deep-burgundy flex-shrink-0" />
                  <span>20 beautifully formatted pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-deep-burgundy flex-shrink-0" />
                  <span>60+ terms fully visualized</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-deep-burgundy flex-shrink-0" />
                  <span>5 structured reference chapters</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 text-[10px] text-soft-cream/40 uppercase tracking-widest text-center font-mono">
              Designed with ♡ for creators
            </div>
          </div>

          {/* Pricing & Checkout Card (Right Column) */}
          <div className="md:col-span-7 bg-smoky-black rounded-lg border border-warm-gold/40 p-8 flex flex-col justify-between shadow-2xl relative">
            {/* Pop badge */}
            <div className="absolute -top-3.5 right-6 bg-warm-gold text-smoky-black font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Best Seller
            </div>

            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-widest text-deep-burgundy font-bold font-mono">
                One-Time Payment
              </span>
              
              {/* Price Tag */}
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-bold text-soft-cream tracking-tight">$10</span>
                <span className="text-sm font-sans text-soft-cream/60 uppercase tracking-widest font-medium">USD</span>
                <span className="text-xs text-soft-cream/40 line-through ml-2 font-mono">$25</span>
              </div>
              <p className="mt-2 text-xs text-deep-burgundy font-mono uppercase font-semibold">60% off — limited launch promotion</p>

              <p className="mt-6 text-sm text-soft-cream/80 leading-relaxed font-sans">
                Secure your digital download instantly. Read it on your laptop at home, your tablet in the studio, or your phone while on active production sets.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                {/* Simulated Buy Button */}
                <button
                  onClick={() => setShowSimModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded px-6 py-4 text-sm font-semibold uppercase tracking-wider text-smoky-black bg-warm-gold transition hover:bg-warm-gold/90 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-smoky-black cursor-pointer shadow-[0_4px_25px_rgba(201,162,75,0.25)] group"
                  id="checkout-cta-btn"
                >
                  <span>I Want This!</span>
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </button>


              </div>
            </div>

            {/* Secure seals footer */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-soft-cream/55 font-sans">
                <ShieldCheck className="h-4 w-4 text-deep-burgundy" />
                <span>Secure payment with GUMROAD</span>
              </div>
              <div className="flex gap-2 text-[10px] text-soft-cream/40 font-mono tracking-widest uppercase">
                <span>Stripe</span> • <span>PayPal</span> • <span>Apple Pay</span>
              </div>
            </div>

          </div>
        </div>



      </div>

      {/* MODAL: INTERACTIVE SIMULATION */}
      <AnimatePresence>
        {showSimModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetSimulation}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-lg border border-black/10 bg-dark-gray p-6 sm:p-8 shadow-2xl z-10 text-center"
            >
              {purchaseStep === "form" ? (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-burgundy/5 text-deep-burgundy mx-auto border border-deep-burgundy/20 mb-4">
                    <CreditCard className="h-6 w-6" />
                  </span>
                  
                  <h3 className="font-serif text-2xl font-medium text-soft-cream">
                    Subscribe & Secure Your Copy
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-soft-cream/70 font-sans">
                    Join the newsletter to download the handbook instantly and receive direct updates on filmmaking masterclasses, tools, and visual production references.
                  </p>

                  <form 
                    onSubmit={handleFollowSubmit}
                    id="gumroad-follow-form-embed" 
                    className="mt-6 space-y-4"
                  >
                    <input type="hidden" name="seller_id" value="731365516533" />
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-soft-cream/40" />
                      <input
                        type="email"
                        name="email"
                        id="gumroad-follow-form-embed-input"
                        required
                        placeholder="your.email@address.com"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full rounded border border-black/10 bg-smoky-black py-3 pl-10 pr-4 text-sm text-soft-cream placeholder-soft-cream/30 focus:border-deep-burgundy focus:outline-none focus:ring-1 focus:ring-deep-burgundy font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      id="gumroad-follow-form-embed-button"
                      className="w-full inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold uppercase tracking-wider text-smoky-black bg-warm-gold transition hover:bg-warm-gold/90 focus:outline-none focus:ring-2 focus:ring-warm-gold cursor-pointer"
                    >
                      <span>SUBSCRIBE & GET BOOK</span>
                    </button>
                  </form>

                  <p className="mt-4 text-[10px] text-soft-cream/40 font-mono">
                    Secure transaction processed directly via Gumroad.
                  </p>
                </>
              ) : (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-burgundy/5 text-deep-burgundy mx-auto border border-deep-burgundy/20 mb-4">
                    <Mail className="h-6 w-6" />
                  </span>
                  
                  <h3 className="font-serif text-2xl font-medium text-soft-cream">
                    One Quick Thing!
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-soft-cream/75 font-sans leading-relaxed">
                    We've sent a confirmation email to your inbox. Just a heads-up — if you don't confirm it, you won't receive future updates about the handbook. No worries though, here's your download!
                  </p>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleGetHandbook}
                      className="w-full inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold uppercase tracking-wider text-smoky-black bg-warm-gold transition hover:bg-warm-gold/90 focus:outline-none focus:ring-2 focus:ring-warm-gold cursor-pointer group"
                    >
                      <span>GET THE HANDBOOK</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <p className="mt-4 text-[10px] text-soft-cream/40 font-mono">
                    Secure transaction processed directly via Gumroad.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hidden Gumroad Trigger Link for overlay */}
      <a 
        className="gumroad-button" 
        href="https://thundergabriel.gumroad.com/l/cut-pan-zoom" 
        data-gumroad-overlay-checkout="true"
        style={{ display: "none" }} 
        id="hidden-gumroad-trigger"
      >
        Buy on
      </a>

    </section>
  );
}
