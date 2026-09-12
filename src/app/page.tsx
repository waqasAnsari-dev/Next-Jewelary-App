"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import BestSeller from "../components/products/BestSeller";
import ShopByCategory from "../components/categories/ShopByCategory"; 
import InstagramSection from "../components/instagram/InstagramSection";

const slides = [
  { src: "/rangravish2.png", alt: "By rangravish handcrafted jewelry" },
  { src: "/rangravish1.png", alt: "By rangravish jewelry collection" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
    );
  };

  const showNext = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <section className="home-hero mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="relative rounded-[28px] bg-white p-1.5 shadow-[0_18px_55px_rgba(184,117,136,0.14)] sm:p-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-[#fff7fa] sm:aspect-[2.15/1]">
            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === activeSlide
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
                aria-hidden={index !== activeSlide}
              >
                  <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1100px) calc(100vw - 3rem), 1100px"
                    className={`object-cover transition-transform duration-[5000ms] ease-out ${index === activeSlide ? "scale-105" : "scale-100"}`}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#333] shadow-md transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg active:scale-95 sm:left-5 sm:h-11 sm:w-11"
            >
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#333] shadow-md transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg active:scale-95 sm:right-5 sm:h-11 sm:w-11"
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
          </div>
          

          <div className="mt-4 flex justify-center gap-2 sm:mt-5" aria-label="Carousel slides">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "w-7 bg-[#b87588]" : "w-2.5 bg-[#f0c4d4] hover:bg-[#d99db1]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <BestSeller />
      <ShopByCategory />
      <InstagramSection />
    </main>
  );
}