"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import BestSeller from "../components/products/BestSeller";
import ShopByCategory from "../components/categories/ShopByCategory"; 
import InstagramSection from "../components/instagram/InstagramSection";
import Footer from "../components/layout/Footer";

const slides = [
  { src: "/Hiba1.png", alt: "By Hiba handcrafted jewelry" },
  { src: "/Hiba2.png", alt: "By Hiba jewelry collection" },
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
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-[1100px] px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-[#fff7fa]">
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
                  className="object-cover"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#333] shadow-md transition hover:bg-white sm:left-5 sm:h-11 sm:w-11"
            >
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#333] shadow-md transition hover:bg-white sm:right-5 sm:h-11 sm:w-11"
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
          </div>
          

          <div className="mt-4 flex justify-center gap-2" aria-label="Carousel slides">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeSlide ? "bg-[#333]" : "bg-[#d4d4d4]"
                }`}
              />
            ))}
          </div>
           <BestSeller />
           <ShopByCategory/>
            <InstagramSection />
            
        </div>
      </section>
      <Footer />
    </main>
  );
}