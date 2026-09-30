"use client";

import Image from "next/image";
import { Phone, Star, ArrowUp } from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.007 0C5.38 0 .01 5.37.007 11.998a11.92 11.92 0 001.6 6.002L0 24l6.196-1.625a11.9 11.9 0 005.806 1.513h.005c6.626 0 11.998-5.371 11.998-11.999a11.805 11.805 0 00-3.525-8.484" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#121212] text-white pt-12 pb-8 relative z-10 border-t border-white/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col">
        {/* Main Row: 3-Column Grid for Exact Centering */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-8 pb-6">
          {/* Left Column: Logo & Rating */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Image
              src="/logo/logo.png"
              alt="Saiyoojyam Ladies Hostels"
              width={240}
              height={70}
              className="h-20 w-auto object-contain brightness-0 invert"
            />
            <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold tracking-wide">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-white font-bold text-sm">4.7</span>
              <span className="text-slate-300">• Google Rating</span>
            </div>
          </div>

          {/* Center Column: Exact Centered Big Circular Button + Text */}
          <div className="flex flex-col items-center justify-center text-center">
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              title="Back to top"
              className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
            >
              <div className="w-13 h-13 rounded-full border border-white/20 bg-white group-hover:bg-white group-hover:border-white/50 flex items-center justify-center text-white transition-all shadow-md">
                <ArrowUp className="w-6 h-6 text-black group-hover:-translate-y-1 transition-transform" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                Back to top
              </span>
            </button>
          </div>

          {/* Right Column: Contact Links & Social Icons stacked vertically */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm font-semibold text-white">
            {/* Phone & WhatsApp */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
              <a
                href="tel:+919847000000"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>+91 98470 XXXXX</span>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Social Icons (below Phone & WhatsApp) */}
            <div className="flex items-center justify-center md:justify-end gap-5 text-white pt-1">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-white/80 transition-colors"
              >
                <InstagramIcon className="w-8 h-8 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-white/80 transition-colors"
              >
                <FacebookIcon className="w-8 h-8 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white hover:text-white/80 transition-colors"
              >
                <YoutubeIcon className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full border-t border-white/10 my-4" />

        {/* Bottom Bar: Copyright & Techsoft Link */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-100 pt-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© 2025 Saiyoojyam Premier Ladies Hostel. All rights reserved.</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors underline underline-offset-4">
              Terms of Stay
            </a>
          </div>

          {/* Techsoft Agency Link */}
          <div>
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-normal hover:underline underline-offset-4 transition-colors text-slate-100"
            >
              Web Design Company in Kochi Techsoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}






