"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import categories from "../../data/categories.json";


export default function CategoryNav() {
  const categoryListRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const container = categoryListRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    setScrollProgress(maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0);
    setCanScrollLeft(container.scrollLeft > 4);
    setCanScrollRight(maxScroll - container.scrollLeft > 4);
  };

  useEffect(() => {
    const container = categoryListRef.current;
    if (!container) return;

    const handleResize = () => updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", handleResize);
    window.requestAnimationFrame(updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollCategories = (direction: "left" | "right") => {
    const container = categoryListRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.7;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const activeCategory = pathname.startsWith("/shop/")
    ? pathname.split("/").pop()
    : null;

  return (
    <div className="w-full border-b border-[#f5e8ed]/80 bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_18px_rgba(113,65,75,0.04)] backdrop-blur-md">
      <div className="relative mx-auto max-w-[1450px] px-9 py-3 sm:px-16 sm:py-5">

        {/* Left Button */}
        <button
          type="button"
          onClick={() => scrollCategories("left")}
          disabled={!canScrollLeft}
          className="group absolute left-0.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#ead9de] bg-white text-[#9e6f7e] shadow-[0_4px_14px_rgba(113,65,75,0.10)] transition-all duration-300 hover:scale-105 hover:border-[#c58aa3] hover:bg-[#fff7fa] hover:text-[#b87588] disabled:pointer-events-none disabled:opacity-30 sm:left-3 sm:h-10 sm:w-10"
          aria-label="Previous categories"
        >
          <ChevronLeft
            size={20}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:-translate-x-0.5 sm:h-5 sm:w-5"
          />
        </button>

        {/* Categories */}
        <div
          ref={categoryListRef}
          className="category-rail flex gap-2 overflow-x-auto scroll-smooth px-1 py-1 scrollbar-hide sm:gap-4"
        >
          {categories
            .filter((category) => category.isActive)
            .map((category, index) => (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              style={{ animationDelay: `${index * 45}ms` }}
              className={`category-reveal group relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border px-3 py-2 text-xs font-medium shadow-[0_2px_8px_rgba(113,65,75,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(197,138,163,0.16)] active:scale-[0.98] sm:px-7 sm:py-3 sm:text-base ${
                activeCategory === category.slug
                  ? "border-[#c58aa3] bg-[#fff1f5] text-[#b87588] shadow-[0_4px_14px_rgba(197,138,163,0.14)]"
                  : "border-[#eee5e9] bg-white text-[#514347] hover:border-[#c58aa3] hover:bg-[#fff7fa] hover:text-[#b87588]"
              }`}
            >
              <span className="absolute inset-x-5 top-0 h-px -translate-x-[140%] bg-gradient-to-r from-transparent via-[#e6afbd] to-transparent transition-transform duration-500 group-hover:translate-x-[140%]" />
              {category.name}
            </Link>
          ))}
        </div>

        {/* Right Button */}
        <button
          type="button"
          onClick={() => scrollCategories("right")}
          disabled={!canScrollRight}
          className="group absolute right-0.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#ead9de] bg-white text-[#9e6f7e] shadow-[0_4px_14px_rgba(113,65,75,0.10)] transition-all duration-300 hover:scale-105 hover:border-[#c58aa3] hover:bg-[#fff7fa] hover:text-[#b87588] disabled:pointer-events-none disabled:opacity-30 sm:right-3 sm:h-10 sm:w-10"
          aria-label="Next categories"
        >
          <ChevronRight
            size={20}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-0.5 sm:h-5 sm:w-5"
          />
        </button>

        <div className="pointer-events-none absolute bottom-1 left-1/2 h-px w-24 -translate-x-1/2 overflow-hidden rounded-full bg-[#f1e3e7] sm:bottom-2 sm:w-36">
          <span
            className="block h-full rounded-full bg-[#c58aa3] transition-[width] duration-300"
            style={{ width: `${Math.max(scrollProgress, 8)}%` }}
          />
        </div>

      </div>
    </div>
  );
}