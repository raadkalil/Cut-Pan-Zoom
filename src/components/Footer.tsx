import { Link, useNavigate, useLocation } from "react-router-dom";
import { Film } from "lucide-react";

export default function Footer() {
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
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-smoky-black border-t border-black/10 py-12" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-black/10 pb-8">
          
          {/* Logo Brand Footer */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-deep-burgundy/5 text-deep-burgundy border border-deep-burgundy/10 transition group-hover:border-deep-burgundy/30">
              <Film className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="font-serif text-sm font-semibold tracking-wide text-soft-cream group-hover:text-warm-gold transition">
                CUT, PAN, ZOOM
              </span>
              <span className="text-[9px] tracking-widest text-deep-burgundy block uppercase font-mono leading-none font-semibold">
                The Essential Film Terms Handbook
              </span>
            </div>
          </Link>

          {/* Quick links footer */}
         <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-soft-cream/60">
  <button onClick={() => handleNavClick("what-you-will-learn")} className="transition hover:text-deep-burgundy font-medium bg-transparent border-none cursor-pointer">What You'll Learn</button>
  <button onClick={() => handleNavClick("chapters-preview")} className="transition hover:text-deep-burgundy font-medium bg-transparent border-none cursor-pointer">Chapters</button>
  <button onClick={() => handleNavClick("who-is-it-for")} className="transition hover:text-deep-burgundy font-medium bg-transparent border-none cursor-pointer">Who It's For</button>
  <button onClick={() => handleNavClick("specs-section")} className="transition hover:text-deep-burgundy font-medium bg-transparent border-none cursor-pointer">Specifications</button>
  <button onClick={() => handleNavClick("faq")} className="transition hover:text-deep-burgundy font-medium bg-transparent border-none cursor-pointer">FAQ</button>
</div>

        </div>

        {/* Legal copyrights */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[11px] text-soft-cream/40 font-mono uppercase tracking-wider">
          <p>© {currentYear} ReelBox. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms-of-service" className="hover:text-deep-burgundy transition duration-150 cursor-pointer">Terms of Service</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-deep-burgundy transition duration-150 cursor-pointer">Privacy Policy</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-deep-burgundy transition duration-150 cursor-pointer">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
