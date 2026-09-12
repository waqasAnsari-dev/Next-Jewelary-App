"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import categories from "../../data/categories.json";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="relative z-50 border-b border-[#f0dfe4] bg-white/95 shadow-[0_4px_20px_rgba(113,65,75,0.04)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-2 px-3 sm:h-[72px] sm:px-6 md:h-[100px] md:px-8 lg:px-12">

        {/* Logo */}
        <Link href="/" className="shrink-0 order-1">
          <Image
            src="/logo1.png"
            alt="By rangravish"
            width={125}
            height={60}
            className="h-auto w-[78px] sm:w-[100px] md:w-[125px]"
          />
        </Link>

        {/* Navigation */}
        <div className="order-3 hidden h-full items-center gap-5 md:ml-10 md:flex md:gap-9 lg:ml-14 lg:gap-12">

          {/* HOME */}
          <Link
            href="/"
            className="group relative flex h-full items-center text-[13px] font-medium tracking-[0.16em] text-[#332b2d] transition-colors hover:text-[#b87588]"
          >
            HOME
            <span className="absolute bottom-6 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c88d9d] transition-all duration-300 group-hover:w-full" />
          </Link>


          {/* SHOP */}
          <div
            className="relative h-full"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              onClick={() => setShopOpen((prev) => !prev)}
              className={`group relative flex h-full items-center gap-1 text-[13px] font-medium tracking-[0.16em] transition-colors ${
                shopOpen
                  ? "text-[#b87588]"
                  : "text-[#332b2d] hover:text-[#b87588]"
              }`}
            >
              SHOP
              <ChevronDown size={15} strokeWidth={1.7} className={`transition-transform duration-300 ${shopOpen ? "rotate-180" : ""}`} />

              {/* Pretty line below SHOP */}
              <span
                className={`absolute bottom-6 left-0 h-px bg-[#c88d9d] transition-all duration-300 ${
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
                  className="block rounded-lg px-3 py-2 text-[13px] font-medium text-[#333] transition-all hover:bg-[#fff4f7] hover:text-[#b87588]"
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
                      className="block rounded-lg px-3 py-2 text-[12.5px] text-[#333] transition-all duration-200 hover:bg-[#fff4f7] hover:pl-4 hover:text-[#b87588]"
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
            className="group relative flex h-full items-center text-[13px] font-medium tracking-[0.16em] text-[#332b2d] transition-colors hover:text-[#b87588]"
          >
            SALE <span className="ml-1 text-[11px]">✦</span>
            <span className="absolute bottom-6 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c88d9d] transition-all duration-300 group-hover:w-full" />
          </Link>


          {/* CONTACT */}
          <Link
            href="/contact"
            className="group relative flex h-full items-center text-[13px] font-medium tracking-[0.16em] text-[#332b2d] transition-colors hover:text-[#b87588]"
          >
            CONTACT
            <span className="absolute bottom-6 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c88d9d] transition-all duration-300 group-hover:w-full" />
          </Link>

        </div>


        {/* Right side */}
        <div className="order-2 ml-auto flex items-center gap-3 md:order-3 md:gap-6">

          {/* Search */}
          <div className="hidden h-11 w-[190px] items-center rounded-full border border-[#efdce2] bg-[#fff9fa] px-4 transition-colors focus-within:border-[#c88d9d] focus-within:bg-white md:flex lg:w-[240px] lg:px-5">

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#9b858b]"
            />

            <Search size={19} strokeWidth={1.7} className="shrink-0 text-[#9b7580]" />

          </div>


          {/* Account */}
          {/* <Link href="/account" aria-label="Account" className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-[#fff5f7] md:h-auto md:w-auto md:bg-transparent">
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
          </Link> */}


          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#332b2d] transition-colors hover:bg-[#fff5f7] hover:text-[#b87588] md:h-11 md:w-11 md:bg-transparent"
          >
            <ShoppingBag size={27} strokeWidth={1.5} />

            {cartCount > 0 && (
              <span
                className="
                  absolute -right-1 -top-1 flex h-5 min-w-5 px-1
                  items-center justify-center
                  rounded-full
                  bg-[#ca9296]
                  text-[10px]
                  font-semibold
                  text-white
                "
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#efdce2] bg-[#fff9fa] text-[#332b2d] transition-colors hover:border-[#c88d9d] hover:text-[#b87588] md:hidden"
          >
            {mobileMenuOpen ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
          </button>

        </div>

      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#f0dfe4] bg-[#fffafb] px-3 py-3 shadow-[0_12px_25px_rgba(113,65,75,0.08)] md:hidden">
          <div className="flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-[#222] hover:bg-[#fff5f7] hover:text-[#c88d9d]">
              HOME
            </Link>

            <div className="rounded-md border border-[#f3e6ea] bg-[#fffafc] p-2">
              <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d75]">
                SHOP
              </div>
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="block rounded-md px-3 py-2 text-sm text-[#333] hover:bg-white hover:text-[#c88d9d]">
                All Products
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/shop/${category.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-[#333] hover:bg-white hover:text-[#c88d9d]"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <Link href="/sale" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-[#222] hover:bg-[#fff5f7] hover:text-[#c88d9d]">
              SALE 🔥
            </Link>

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-[#222] hover:bg-[#fff5f7] hover:text-[#c88d9d]">
              CONTACT
            </Link>

            <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-[#222] hover:bg-[#fff5f7] hover:text-[#c88d9d]">
              ACCOUNT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}