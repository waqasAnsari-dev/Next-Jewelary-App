"use client";

import Link from "next/link";
import { Eye, Heart, ShoppingBag, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import { useCart } from "../../context/CartContext";
import Footer from "../layout/Footer";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  sizes: string[];
  isNew: boolean;
  isSale: boolean;
  isBestSeller: boolean;
  isFeatured: boolean;
  inStock: boolean;
};

type SortOption = "Newest" | "Price: Low to High" | "Price: High to Low" | "Most Popular";

interface ShopPageContentProps {
  selectedCategory?: string;
  pageTitle?: string;
}

export default function ShopPageContent({ selectedCategory, pageTitle }: ShopPageContentProps) {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState<SortOption>("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const pageSize = 12;

  const categorySlugMap = useMemo(
    () => new Map(categories.map((category) => [category.name.trim().toLowerCase(), category.slug])),
    [],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy]);

  const visibleProducts = useMemo(() => {
    const list = (products as Product[]).filter((product) => {
      if (!selectedCategory) return true;

      const productCategorySlug = categorySlugMap.get(product.category.trim().toLowerCase());
      return productCategorySlug === selectedCategory;
    });

    switch (sortBy) {
      case "Price: Low to High":
        return [...list].sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return [...list].sort((a, b) => b.price - a.price);
      case "Most Popular":
        return [...list].sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
      case "Newest":
      default:
        return [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    }
  }, [categorySlugMap, selectedCategory, sortBy]);

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedProducts = visibleProducts.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize,
  );

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1).slice(0, 4);

  const activeCategoryName =
    pageTitle ??
    categories.find((category) => category.slug === selectedCategory)?.name ??
    "All Products";

  return (
    <>
      <main className="min-h-screen bg-[#f7efef] px-10 pb-10 pt-4 text-[#2a2a2a] sm:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1500px]">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[13px] text-[#6a5b60]">
          <Link href="/" className="hover:text-[#c88d9d]">Home</Link>
          <span>/</span>
          <span className="text-[#2d2d2d]">Shop</span>
        </div>


        <div className="mt-4 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] xl:gap-5">
          <aside className="rounded-[16px] border border-[#f0dfe4] bg-[#f8e9ee] p-3 text-[#2d2d2d] lg:p-3.5">
            <h2 className="mb-3 text-[18px] font-semibold uppercase tracking-wide">Filter Products</h2>

            <div className="mb-5">
              <h3 className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em]">Category</h3>
              <div className="space-y-1.5">
                <Link
                  href="/shop"
                  className={`block text-[14px] ${!selectedCategory ? "font-semibold text-[#1f1f1f]" : "text-[#444] hover:text-[#c88d9d]"}`}
                >
                  All Products
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/shop/${category.slug}`}
                    className={`block text-[14px] ${selectedCategory === category.slug ? "font-semibold text-[#1f1f1f]" : "text-[#444] hover:text-[#c88d9d]"}`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em]">Price Range</h3>
              <div className="flex gap-2.5">
                <input type="text" placeholder="Min" className="w-full rounded-full border border-[#e4ccd3] bg-white px-3 py-2 outline-none text-[13px]" />
                <input type="text" placeholder="Max" className="w-full rounded-full border border-[#e4ccd3] bg-white px-3 py-2 outline-none text-[13px]" />
              </div>
              <button className="mt-3 w-full rounded-full border border-[#d99db1] bg-[#f8edf1] px-4 py-2 text-[14px] font-medium text-[#c17490]">
                Apply
              </button>
            </div>

            <div className="mb-5">
              <h3 className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em]">Size</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "2.4",
                  "2.6",
                  "20 inc",
                  "20 Inches",
                  "22 inc",
                  "22 Inches",
                  "24 inc",
                  "24 Inches",
                  "26 inc",
                  "6 in",
                  "6in",
                  "7 in",
                  "7in",
                  "8 in",
                  "8in",
                  "9 in",
                  "9in",
                  "Baby",
                  "S",
                  "M",
                  "L",
                  "XL",
                ].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="rounded-full border border-[#d9a9b8] bg-white px-2.5 py-1.5 text-[12px] text-[#474747] transition hover:border-[#c88d9d] hover:text-[#c88d9d]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em]">Quick Filters</h3>
              <div className="space-y-1.5 text-[13px] text-[#444]">
                <button type="button" className="flex items-center gap-3 hover:text-[#c88d9d]">Sale Items</button>
                <button type="button" className="flex items-center gap-3 hover:text-[#c88d9d]">New Arrivals</button>
                <button type="button" className="flex items-center gap-3 hover:text-[#c88d9d]">Best Sellers</button>
                <button type="button" className="flex items-center gap-3 hover:text-[#c88d9d]">Featured</button>
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h1 className="text-[25px] font-semibold tracking-[-0.04em] text-[#1f1f1f] sm:text-[28px]">{activeCategoryName}</h1>
                <p className="mt-1 text-[12px] text-[#555]">{visibleProducts.length} products</p>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortOption)}
                  className="appearance-none rounded-full border border-[#e5d6dc] bg-white px-3.5 py-2 pr-8 text-[13px] text-[#2d2d2d] outline-none"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#333]">⌄</span>
              </div>
            </div>

            <div className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-3">
              {paginatedProducts.map((product) => {
                const isLiked = likedProducts.includes(product.id);
                const selectedSize = product.sizes?.[0] ?? "";

                return (
                  <div key={product.id} className="group rounded-[14px] border border-[#efe2e7] bg-[#f9f5f6] p-1.5 shadow-sm">
                    <div className="relative overflow-hidden rounded-[12px] bg-[#f4f0f0]">
                      <img src={product.image} alt={product.name} className="h-[220px] w-full object-cover sm:h-[240px] xl:h-[260px]" />

                      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                      <div className="absolute right-3 top-3 flex translate-x-3 flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() =>
                            setLikedProducts((current) =>
                              current.includes(product.id)
                                ? current.filter((id) => id !== product.id)
                                : [...current, product.id]
                            )
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
                          aria-label="Add to wishlist"
                        >
                          <Heart
                            size={18}
                            className={isLiked ? "fill-[#ca9296] text-[#ca9296]" : "text-[#333]"}
                          />
                        </button>

                        <button
                          type="button"
                          onClick={() => setQuickViewProduct(product)}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
                          aria-label="Quick view"
                        >
                          <Eye size={18} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => addToCart(product, selectedSize)}
                        className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#ca9296]/95 py-3 text-center text-[12px] font-semibold text-white transition-all duration-500 group-hover:translate-y-0"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ShoppingBag size={16} />
                          Add to Bag
                        </span>
                      </button>
                    </div>

                    <div className="pt-2.5 text-center">
                      <Link href={`/product/${product.slug}`} className="block text-[14px] font-medium text-[#1f1f1f] hover:text-[#c88d9d]">
                        {product.name}
                      </Link>
                      <p className="mt-1 text-[13px] font-semibold text-[#1f1f1f]">
                        Rs. {product.price.toLocaleString("en-US")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                {pageNumbers.map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border text-[18px] transition ${
                      pageNum === safeCurrentPage
                        ? "border-[#d8a2af] bg-[#d8a2af] text-white"
                        : "border-[#e7dfe3] bg-white text-[#2d2d2d] hover:border-[#d8a2af] hover:text-[#c88d9d]"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {totalPages > 4 && (
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dfe3] bg-white text-[20px] text-[#2d2d2d] hover:border-[#d8a2af] hover:text-[#c88d9d]"
                    aria-label="Next page"
                  >
                    ›
                  </button>
                )}
              </div>
            )}
          </section>
        </div>
        </div>
      </main>

      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[950px] overflow-y-auto rounded-[24px] bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
            >
              <X size={21} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[450px] bg-[#f8f3f3]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8 md:p-12">
                <p className="text-sm uppercase tracking-[2px] text-[#ca9296]">
                  {quickViewProduct.category}
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  {quickViewProduct.name}
                </h2>

                <p className="mt-5 text-2xl font-bold">
                  Rs. {quickViewProduct.price.toLocaleString("en-US")}
                </p>

                <div className="my-7 h-px bg-[#ead4d8]" />

                {quickViewProduct.sizes?.length > 0 && (
                  <div>
                    <h3 className="mb-4 font-semibold">Select Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          className="rounded-full border border-[#ca9296] px-5 py-2 text-[#ca9296] transition hover:bg-[#ca9296]/10"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    addToCart(quickViewProduct, quickViewProduct.sizes?.[0] ?? "");
                    setQuickViewProduct(null);
                  }}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#ca9296] px-7 py-4 font-semibold text-white transition hover:bg-[#b97f84]"
                >
                  <ShoppingBag size={20} />
                  Add to Bag
                </button>

                <p className="mt-5 text-center text-sm text-[#777]">
                  Cash on Delivery & Bank Transfer available
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
