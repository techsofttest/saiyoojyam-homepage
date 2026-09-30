"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export interface Slide {
  counter: string;
  caption: string;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    counter: "01 / 04",
    caption: "Saiyoojyam Premier - Premium AC & Non-AC Living near Infopark",
    image: "/home-hero/h4.png",
    alt: "Saiyoojyam Premier hostel room in Kakkanad near Infopark",
  },
  {
    counter: "02 / 04",
    caption: "Saiyoojyam Annex - Kuzhikkattumoola Tranquil & Safe Sanctuary",
    image: "/home-hero/h5.png",
    alt: "Saiyoojyam Annex room and study spaces in Kuzhikkattumoola",
  },
  {
    counter: "03 / 04",
    caption:
      "Saiyoojyam Towers 1 & 2 - Painakkil Jn, Modern Coliving for IT Professionals",
    image: "/home-hero/h6.png",
    alt: "Saiyoojyam Towers modern common lounge and dining space",
  },
  {
    counter: "04 / 04",
    caption:
      "Saiyoojyam Towers 1 & 2 - Painakkil Jn, Modern Coliving for IT Professionals",
    image: "/home-hero/h7.png",
    alt: "Saiyoojyam Towers modern common lounge and dining space",
  },
];

export function HeroCarousel() {
  return (
    <section className="relative w-full flex flex-col justify-end overflow-hidden bg-surface-container-lowest min-h-[85vh]">
      {/* Swiper Hero Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="w-full h-full relative">
              <img
                alt={slide.alt}
                className="w-full h-full object-cover"
                src={slide.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Bottom Content Text */}
      <div className="relative z-20 w-full flex flex-col items-center pt-24 pb-28 sm:pb-32">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight max-w-3xl drop-shadow-md">
            Saiyoojyam, a perfect home for you.
          </h1>
          <p className="text-base sm:text-lg text-white/95 max-w-2xl mt-4 font-medium drop-shadow">
            Safe, comfortable ladies hostels in Kakkanad with homely meals, Wi-Fi,
            biometric security, and dedicated study areas near Infopark.
          </p>
        </div>
      </div>
    </section>
  );
}
