import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Shield, FileCheck, Award, CheckCircle, AlertTriangle, Scale, Clock, Link2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
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
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-deep-burgundy">
                Legal Documentation
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-soft-cream">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs font-mono text-soft-cream/50 uppercase tracking-wider">
              Last Updated: July 2026
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-soft-cream/80 font-sans">
            
            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <FileCheck className="h-5 w-5 text-warm-gold" />
                1. Digital Product & Distribution
              </h2>
              <p>
                This agreement governs the purchase and use of the digital handbook entitled{" "}
                <strong className="text-soft-cream font-semibold">"Cut, Pan, Zoom: The Essential Film Terms Handbook"</strong>, 
                authored and published by Thunder Gabriel. The product is distributed strictly as a downloadable PDF document 
                processed and delivered via our authorized merchant partner, <strong className="text-soft-cream font-semibold">Gumroad</strong>.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Award className="h-5 w-5 text-warm-gold" />
                2. Individual Personal License
              </h2>
              <p>
                Upon successful completion of payment, the buyer is granted a single, non-exclusive, non-transferable personal license 
                to download, store, and view the handbook on personal devices. This license is granted strictly for individual educational, 
                creative, and reference purposes.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Shield className="h-5 w-5 text-warm-gold" />
                3. Prohibited Uses & Redistribution
              </h2>
              <p>
                Reselling, redistributing, sharing, hosting, sublicensing, or publicly publishing the PDF file (in whole or in part) on any secondary platform, public repository, file-sharing network, or with unauthorized third parties is strictly prohibited.
              </p>
              <p>
                You may not make copies available to non-licensed individuals, incorporate the text or visual elements into commercial derivative works, or utilize the materials in group training programs without acquiring an explicit multi-user institutional license.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <FileText className="h-5 w-5 text-warm-gold" />
                4. Intellectual Property Rights
              </h2>
              <p>
                All content, written copy, structural formatting, custom typography, visual layouts, and illustrations within the handbook remain the exclusive intellectual property of Thunder Gabriel / Cut, Pan, Zoom.
              </p>
              <p>
                The buyer may not claim authorship, register trademarks based on the material, or modify and attempt to resell or republish the content as their own original work under any circumstances.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-warm-gold" />
                5. Acceptance of Terms
              </h2>
              <p>
                By proceeding with the purchase and initiating download of "Cut, Pan, Zoom: The Essential Film Terms Handbook", you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <AlertTriangle className="h-5 w-5 text-warm-gold" />
                6. Limitation of Liability
              </h2>
              <p>
                The handbook is provided "as is" for educational and creative reference purposes. Thunder Gabriel / Cut, Pan, Zoom shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use, misuse, or inability to use the content of this handbook.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Scale className="h-5 w-5 text-warm-gold" />
                7. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the Hashemite Kingdom of Jordan, without regard to its conflict of law provisions. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of Amman, Jordan.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-warm-gold" />
                8. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify or update these Terms of Service at any time. Changes will be reflected by updating the "Last Updated" date at the top of this page. Continued use of the product after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Link2 className="h-5 w-5 text-warm-gold" />
                9. Related Policies
              </h2>
              <p>
                These Terms of Service should be read alongside our{" "}
                <Link to="/privacy-policy" className="text-warm-gold underline hover:text-soft-cream transition">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/refund-policy" className="text-warm-gold underline hover:text-soft-cream transition">
                  Refund Policy
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
              <Link to="/privacy-policy" className="hover:text-warm-gold transition">Privacy Policy</Link>
              <span>•</span>
              <Link to="/refund-policy" className="hover:text-warm-gold transition">Refund Policy</Link>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
