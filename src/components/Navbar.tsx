import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Film } from "lucide-react";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8"
      id="main-header"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 rounded-full border border-black/10 bg-smoky-black/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-warm-gold/45">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-deep-burgundy to-warm-gold text-white shadow-md transition group-hover:scale-105">
            <Film className="h-4.5 w-4.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xs font-bold tracking-[0.08em] text-soft-cream group-hover:text-warm-gold transition">
              CUT, PAN, ZOOM
            </span>
            <span className="hidden sm:inline text-[8px] tracking-[0.2em] text-warm-gold/90 uppercase font-mono font-semibold">
              The Film Handbook
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
  <button
    onClick={() => handleNavClick("what-you-will-learn")}
    className="relative text-[11px] font-medium uppercase tracking-wider text-soft-cream/70 transition-all duration-300 hover:text-warm-gold cursor-pointer bg-transparent border-none"
  >
    Learn
  </button>
  <button
    onClick={() => handleNavClick("chapters-preview")}
    className="relative text-[11px] font-medium uppercase tracking-wider text-soft-cream/70 transition-all duration-300 hover:text-warm-gold cursor-pointer bg-transparent border-none"
  >
    Chapters
  </button>
  <button
    onClick={() => handleNavClick("audience-section")}
    className="relative text-[11px] font-medium uppercase tracking-wider text-soft-cream/70 transition-all duration-300 hover:text-warm-gold cursor-pointer bg-transparent border-none"
  >
    Audience
  </button>
  <button
    onClick={() => handleNavClick("faq")}
    className="relative text-[11px] font-medium uppercase tracking-wider text-soft-cream/70 transition-all duration-300 hover:text-warm-gold cursor-pointer bg-transparent border-none"
  >
    FAQ
  </button>
</nav>

        <div>
          <button
            onClick={onCtaClick}
            className="relative inline-flex items-center justify-center rounded-full px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-warm-gold transition-all duration-300 hover:bg-soft-cream hover:text-white focus:outline-none focus:ring-1 focus:ring-warm-gold cursor-pointer shadow-[0_4px_15px_rgba(201,162,75,0.2)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105"
            id="nav-cta-btn"
          >
            Get PDF
          </button>
        </div>
      </div>
    </motion.header>
  );
}
