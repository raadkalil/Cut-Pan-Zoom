import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Mail, CheckCircle2, Cookie, UserCheck, Database, Users, Clock, AtSign } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-deep-burgundy">
                Data Protection & Security
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-soft-cream">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs font-mono text-soft-cream/50 uppercase tracking-wider">
              Last Updated: July 2026
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-soft-cream/80 font-sans">
            
            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-warm-gold" />
                1. Information Collection & Usage
              </h2>
              <p>
                We collect the buyer's email address solely for the purpose of delivering the digital product ("Cut, Pan, Zoom: The Essential Film Terms Handbook") and sending essential updates related to the handbook (such as revised PDF versions or supplementary educational resources) via Gumroad's official audience messaging system.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Lock className="h-5 w-5 text-warm-gold" />
                2. Secure Payment Processing
              </h2>
              <p>
                All payment processing is handled entirely and securely by our merchant partner, <strong className="text-soft-cream font-semibold">Gumroad</strong>, and its verified global payment processors (including Stripe, PayPal, and Apple Pay).
              </p>
              <p>
                We do not store, process, or have access to your credit card numbers, debit card details, bank credentials, or sensitive financial information at any point during or after transaction processing.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Eye className="h-5 w-5 text-warm-gold" />
                3. Third-Party Sharing Restrictions
              </h2>
              <p>
                We maintain a strict zero-data-monetization stance. We do not sell, rent, trade, or share your email address or personal details with third-party marketers, advertisers, or data brokers under any circumstances.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-warm-gold" />
                4. User Rights & Communication Preferences
              </h2>
              <p>
                You retain full authority over your contact preferences. Users may unsubscribe from future product email updates at any time by clicking the "Unsubscribe" link located in the footer of any email received from Cut, Pan, Zoom via Gumroad.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Cookie className="h-5 w-5 text-warm-gold" />
                5. Cookies & Analytics
              </h2>
              <p>
                Our website may use essential cookies and basic analytics tools (such as Google Analytics) to understand site traffic and improve user experience. These tools do not collect personally identifiable financial information.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <UserCheck className="h-5 w-5 text-warm-gold" />
                6. Your Data Rights
              </h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data (such as your email address) at any time. To exercise this right, please contact us at{" "}
                <a href="mailto:msharbashraad@gmail.com" className="text-warm-gold underline hover:text-soft-cream transition">
                  msharbashraad@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Database className="h-5 w-5 text-warm-gold" />
                7. Data Retention
              </h2>
              <p>
                Your email address is retained by Gumroad, our merchant partner, for as long as necessary to fulfill product delivery and support requests, or until you request its deletion.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Users className="h-5 w-5 text-warm-gold" />
                8. Children's Privacy
              </h2>
              <p>
                This product and website are not directed at individuals under the age of 16. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-warm-gold" />
                9. Changes to This Policy
              </h2>
              <p>
                We reserve the right to update this Privacy Policy at any time. Changes will be reflected by updating the "Last Updated" date at the top of this page.
              </p>
            </section>

            <section className="bg-white/5 border border-black/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-soft-cream flex items-center gap-2.5">
                <AtSign className="h-5 w-5 text-warm-gold" />
                10. Contact Us
              </h2>
              <p>
                For any questions regarding this Privacy Policy or your personal data, please contact us at{" "}
                <a href="mailto:msharbashraad@gmail.com" className="text-warm-gold underline hover:text-soft-cream transition">
                  msharbashraad@gmail.com
                </a>
                .
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
              <Link to="/refund-policy" className="hover:text-warm-gold transition">Refund Policy</Link>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
