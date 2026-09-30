"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Building2, Building } from "lucide-react";

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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-container-lowest/95 backdrop-blur-xl shadow-md py-2"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo Container with Bright White Filter when transparent */}
        <div className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Saiyoojyam Ladies Hostels"
            width={260}
            height={80}
            className={`h-16 sm:h-20 w-auto object-contain transition-all duration-300 ${
              isScrolled ? "brightness-100 invert-0" : "brightness-0 invert"
            }`}
            priority
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a
            className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
              isScrolled
                ? "text-slate-900 hover:text-primary"
                : "text-white hover:text-white/80 drop-shadow-sm"
            }`}
            href="#saiyoojyam-premier"
          >
            <Sparkles className={`w-4 h-4 ${isScrolled ? "text-primary" : "text-white"}`} />
            <span>Saiyoojyam Premier</span>
          </a>
          <a
            className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
              isScrolled
                ? "text-slate-900 hover:text-primary"
                : "text-white hover:text-white/80 drop-shadow-sm"
            }`}
            href="#saiyoojyam-annex"
          >
            <Building className={`w-4 h-4 ${isScrolled ? "text-primary" : "text-white"}`} />
            <span>Saiyoojyam Annex</span>
          </a>
          <a
            className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
              isScrolled
                ? "text-slate-900 hover:text-primary"
                : "text-white hover:text-white/80 drop-shadow-sm"
            }`}
            href="#saiyoojyam-towers"
          >
            <Building2 className={`w-4 h-4 ${isScrolled ? "text-primary" : "text-white"}`} />
            <span>Saiyoojyam Towers 1 & 2</span>
          </a>
          <a
            className={`text-sm font-semibold transition-colors ${
              isScrolled
                ? "text-slate-900 hover:text-primary"
                : "text-white hover:text-white/80 drop-shadow-sm"
            }`}
            href="#infopark-kakkanad"
          >
            Infopark Kakkanad
          </a>
        </nav>

        {/* Enlarged Prominent WhatsApp Button */}
        <div className="flex items-center shrink-0">
          <a
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary hover:bg-primary-container text-white text-sm font-semibold transition-transform active:scale-95 gap-2.5 shadow-md"
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>Enquire via WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
