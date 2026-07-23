import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hook from "./components/Hook";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import ChaptersPreview from "./components/ChaptersPreview";
import AudienceSection from "./components/AudienceSection";
import SpecsTable from "./components/SpecsTable";
import AuthorSection from "./components/AuthorSection";
import TrustGuarantees from "./components/TrustGuarantees";
import FAQ from "./components/FAQ";
import CheckoutSection from "./components/CheckoutSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

// Define book cover image URL via Vite asset resolution
const coverImage = new URL('./assets/images/flat_book_cover_thunder_gabriel_1784652199509.jpg', import.meta.url).href;

function HomePage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    // Delayed entry for the floating badge on mount
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 2000);

    // Observer to detect when footer is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.05,
      }
    );

    const footerElement = document.getElementById("main-footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      clearTimeout(timer);
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const scrollToCheckout = () => {
    const checkoutElement = document.getElementById("checkout-section");
    if (checkoutElement) {
      checkoutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-smoky-black text-soft-cream selection:bg-warm-gold selection:text-stone-950 font-sans antialiased" id="landing-page-root">
      
      {/* 1. Navbar */}
      <Navbar onCtaClick={scrollToCheckout} />

      <main>
        {/* 2. Hero Section */}
        <Hero onCtaClick={scrollToCheckout} coverImagePath={coverImage} />

        {/* 3. Hook Section */}
        <Hook />

        {/* 4. What You'll Learn */}
        <WhatYouWillLearn />

        {/* 5. Chapters Preview */}
        <ChaptersPreview />

        {/* 6. Who It's For / Not For */}
        <AudienceSection />

        {/* 7. What You're Getting (Specs Table) */}
        <SpecsTable />

        {/* 8. Author Section */}
        <AuthorSection />

        {/* 9. Trust Section (Guarantees) */}
        <TrustGuarantees />

        {/* 10. FAQ Section */}
        <FAQ />

        {/* 11. Final CTA Section (Checkout) */}
        <CheckoutSection coverImagePath={coverImage} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Dynamic floating progress / mini-overlay indicating digital product */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: hasEntered && !isFooterVisible ? 1 : 0, 
          x: hasEntered ? 0 : 100,
          pointerEvents: hasEntered && !isFooterVisible ? "auto" : "none"
        }}
        transition={{ 
          duration: 0.4,
          ease: "easeInOut"
        }}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 rounded-full border border-deep-burgundy/15 bg-white/90 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-deep-burgundy backdrop-blur-md shadow-lg"
        id="floating-badge"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-burgundy opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-deep-burgundy"></span>
        </span>
        <span>$10 Launch Price Active</span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}
