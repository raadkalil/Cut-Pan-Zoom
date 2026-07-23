import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, AlertCircle, HelpCircle, CheckCircle, Clock, Link2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  const navigate = useNavigate();

  const handleCta = () => {
    navigate("/#checkout-section");
    setTimeout(() => {
      const el = document.getElementById("checkout-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-smoky-black text-soft-cream font-sans antialiased flex flex-col justify-between">
      <div>
        <Navbar onCtaClick={handleCta} />

        <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          
          {/* Back to Home Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-warm-gold hover:text-soft-cream transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header section */}
          <div className="border-b border-black/10 pb-8 mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-deep-burgundy/10 text-deep-burgundy border border-deep-burgundy/20">
                <RefreshCw className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-deep-burgundy">
                Purchase Guarantee & Terms
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-soft-cream">
              Refund Policy
            </h1>
            <p className="mt-2 text-xs font-mono text-soft-cream/50 uppercase tracking-wider">
              Last Updated: July 2026
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-soft-cream/80 font-sans">
            
            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <AlertCircle className="h-5 w-5 text-warm-gold" />
                1. Digital Download Policy (All Sales Final)
              </h2>
              <p>
                Due to the instant, downloadable nature of "Cut, Pan, Zoom: The Essential Film Terms Handbook", all sales are final and non-refundable once the PDF file has been delivered or accessed.
              </p>
              <p>
                Because digital goods cannot be physically returned once received, we encourage customers to thoroughly review the sample chapters, handbook specifications, and table of contents available on our main page prior to purchase.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-warm-gold" />
                2. Case-by-Case Exceptions
              </h2>
              <p>
                While our standard policy is non-refundable, we value customer fairness and will evaluate exception requests on a case-by-case basis under the following specific circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-soft-cream/90">
                <li>
                  <strong className="text-soft-cream font-semibold">Accidental Duplicate Purchases:</strong> If you accidentally purchased multiple licenses for the same product in a single transaction.
                </li>
                <li>
                  <strong className="text-soft-cream font-semibold">Technical Delivery Failures:</strong> If a system failure prevents access or delivery of the file, and support is unable to resolve the issue or re-send the PDF file.
                </li>
              </ul>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <HelpCircle className="h-5 w-5 text-warm-gold" />
                3. How to Request Support or Inquiry
              </h2>
              <p>
                If you encounter a delivery issue or believe your situation warrants an exception, please contact customer support through your original Gumroad receipt email or directly via Gumroad's support portal.
              </p>
              <p>
                Please include your original order number, the email address associated with the purchase, and a brief description of the issue so we can assist you promptly.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-warm-gold" />
                4. Response Time
              </h2>
              <p>
                We aim to respond to all refund and support inquiries within 3-5 business days of receiving your request.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Link2 className="h-5 w-5 text-warm-gold" />
                5. Related Policies
              </h2>
              <p>
                This Refund Policy should be read alongside our{" "}
                <Link to="/terms-of-service" className="text-warm-gold underline hover:text-soft-cream transition">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="text-warm-gold underline hover:text-soft-cream transition">
                  Privacy Policy
                </Link>
                , which form part of this agreement.
              </p>
            </section>

          </div>

          {/* Footer Navigation CTA */}
          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-warm-gold hover:text-soft-cream transition duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Main Page</span>
            </Link>
            <div className="flex gap-4 text-xs font-mono text-soft-cream/50">
              <Link to="/terms-of-service" className="hover:text-warm-gold transition">Terms of Service</Link>
              <span>•</span>
              <Link to="/privacy-policy" className="hover:text-warm-gold transition">Privacy Policy</Link>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
