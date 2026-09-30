"use client";

import { useState } from "react";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { SearchFilter, SearchFilterState } from "@/components/ui/SearchFilter";

export default function Home() {
  const [searchFilter, setSearchFilter] = useState<SearchFilterState>({
    location: "all",
    checkInDate: "2025-04-01",
    roomType: "1",
  });

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface antialiased flex flex-col justify-between">
      {/* Global Header */}
      <Header />

      {/* Main Page Content */}
      <main className="w-full pt-0 bg-surface flex-grow">
        <div className="flex flex-col w-full relative">
          <HeroCarousel />

          {/* Floating Search Filter Bar directly positioned over section seam */}
          <div className="relative z-30 w-full max-w-[1280px] mx-auto px-6 -mt-20 sm:-mt-24 mb-6">
            <SearchFilter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
          </div>

          <FeaturesSection />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
