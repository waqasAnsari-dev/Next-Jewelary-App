"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import categories from "../../data/categories.json";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-[#f0dfe4] bg-white">
      <div className="mx-auto flex h-[125px] max-w-[1500px] items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="By Hiba"
            width={125}
            height={60}
            className="h-auto w-[125px]"
          />
        </Link>

        {/* Navigation */}
        <div className="flex h-full items-center gap-12">

          {/* HOME */}
          <Link
            href="/"
            className="text-[15px] tracking-wide text-[#222] transition-colors hover:text-[#c88d9d]"
          >
            HOME
          </Link>


          {/* SHOP */}
          <div
            className="relative h-full"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              onClick={() => setShopOpen((prev) => !prev)}
              className={`relative flex h-full items-center text-[15px] tracking-wide transition-colors ${
                shopOpen
                  ? "text-[#c88d9d]"
                  : "text-[#222] hover:text-[#c88d9d]"
              }`}
            >
              SHOP

              {/* Pretty line below SHOP */}
              <span
                className={`absolute bottom-[30px] left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#c88d9d] transition-all duration-300 ${
                  shopOpen ? "w-[48px]" : "w-0"
                }`}
              />
            </button>


            {/* DROPDOWN */}
            <div
              className={`absolute left-1/2 top-full w-[180px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                shopOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >

              {/* Small arrow */}
              <div className="absolute left-1/2 top-[4px] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-[#eadde2] bg-white" />

              <div className="relative overflow-hidden rounded-[14px] border border-[#eadde2] bg-white p-2 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">

                {/* All Products */}
                <Link
                  href="/shop"
                  onClick={() => setShopOpen(false)}
                  className="block rounded-md px-3 py-2 text-[13px] font-medium text-[#333] transition-all hover:bg-[#fff4f7] hover:text-[#c88d9d]"
                >
                  All Products
                </Link>

                <div className="mx-1 my-1 border-t border-[#f0e7eb]" />

                {/* Categories from JSON */}
                <div className="max-h-[260px] overflow-y-auto py-1">

                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/shop/${category.slug}`}
                      onClick={() => setShopOpen(false)}
                      className="block rounded-md px-3 py-2 text-[12.5px] text-[#333] transition-all duration-200 hover:bg-[#fff4f7] hover:pl-4 hover:text-[#c88d9d]"
                    >
                      {category.name}
                    </Link>
                  ))}

                </div>

              </div>
            </div>
          </div>


          {/* SALE */}
          <Link
            href="/sale"
            className="text-[15px] tracking-wide text-[#222] transition-colors hover:text-[#c88d9d]"
          >
            SALE 🔥
          </Link>


          {/* CONTACT */}
          <Link
            href="/contact"
            className="text-[15px] tracking-wide text-[#222] transition-colors hover:text-[#c88d9d]"
          >
            CONTACT
          </Link>

        </div>


        {/* Right side */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="flex h-[50px] w-[270px] items-center rounded-full border border-[#efdce2] bg-[#fff9fa] px-5">

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-[17px] outline-none placeholder:text-[#777]"
            />

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

          </div>


          {/* Account */}
          <Link href="/account" aria-label="Account">
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6" />
            </svg>
          </Link>


          {/* Cart */}
          <Link href="/cart" aria-label="Cart">
            <svg
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 8h14l-1 13H6L5 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
          </Link>

        </div>

      </div>
    </nav>
  );
}