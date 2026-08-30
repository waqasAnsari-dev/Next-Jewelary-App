"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  "Earrings",
  "Tiaras",
  "Bracelets",
  "Pendants",
  "Resin jhumkas",
  "Flower preservation",
  "Rings",
  "Arm cuffs",
  "Neck pieces",
  "Gift Boxes",
  "Hair Accessories",
  "Charms",
  "Neck Peices",
  "Bangles",
  "Hair Accessories"
];


export default function CategoryNav() {
  const categoryListRef = useRef<HTMLDivElement | null>(null);

  const scrollCategories = (direction: "left" | "right") => {
    const container = categoryListRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.7;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full border-b border-[#f5e8ed] bg-white">
      <div className="relative mx-auto max-w-[1450px] px-12 py-4 sm:px-16 sm:py-6">

        {/* Left Button */}
        <button
          type="button"
          onClick={() => scrollCategories("left")}
          className="group absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#f6d977] bg-gradient-to-r from-[#fff9d6] via-[#ffe7a8] to-[#f9d0e1] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:left-3 sm:h-12 sm:w-12"
          aria-label="Previous categories"
        >
          <ChevronLeft
            size={20}
            strokeWidth={1.8}
            className="text-[#b47a8b] transition-colors duration-300 group-hover:text-[#a16b00] sm:h-6 sm:w-6"
          />
        </button>

        {/* Categories */}
        <div
          ref={categoryListRef}
          className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide sm:gap-4"
        >
          {categories.map((category, index) => (
            <Link
              key={`${category}-${index}`}
              href={`/shop/${category
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="flex shrink-0 items-center justify-center rounded-full border border-[#eee5e9] px-4 py-2.5 text-sm font-medium text-[#444] transition hover:border-[#c58aa3] hover:bg-[#fff7fa] hover:text-[#c58aa3] sm:px-7 sm:py-4 sm:text-base"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Right Button */}
        <button
          type="button"
          onClick={() => scrollCategories("right")}
          className="group absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#f6d977] bg-gradient-to-r from-[#fff9d6] via-[#ffe7a8] to-[#f9d0e1] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:right-3 sm:h-12 sm:w-12"
          aria-label="Next categories"
        >
          <ChevronRight
            size={20}
            strokeWidth={1.8}
            className="text-[#b47a8b] transition-colors duration-300 group-hover:text-[#a16b00] sm:h-6 sm:w-6"
          />
        </button>

      </div>
    </div>
  );
}