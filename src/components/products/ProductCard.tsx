"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Heart, ShoppingBag, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

type ProductCardData = {
  id?: number | string;
  name?: string;
  slug?: string;
  price?: number;
  image?: string;
  category?: string;
  sizes?: string[];
  isNew?: boolean;
};

type ProductCardProps = {
  product: ProductCardData;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const safeProduct = product ?? {};
  const { addToCart } = useCart();

  const [quickView, setQuickView] = useState(false);
  const [selectedSize, setSelectedSize] = useState(
    Array.isArray(safeProduct.sizes)
      ? safeProduct.sizes[0] || ""
      : ""
  );
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    addToCart(safeProduct, selectedSize);
    setQuickView(false);
  };

  return (
    <>
      {/* Product Card */}
      <article className="group">
        <div className="overflow-hidden rounded-[18px] border border-[#ead4d8] bg-white">

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f3f3]">

            <Image
              src={safeProduct.image || "/Images/products/placeholder.jpg"}
              alt={safeProduct.name || "Jewelry product"}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />

            {/* New Badge */}
            {safeProduct.isNew && (
              <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#ca9296] shadow-sm">
                New
              </span>
            )}

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/0
                transition-all duration-500
                group-hover:bg-black/10
              "
            />

            {/* Action Icons */}
            <div
              className="
                absolute right-4 top-4
                flex translate-x-5 flex-col gap-3
                opacity-0
                transition-all duration-500
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            >

              {/* Heart */}
              <button
                onClick={() => setLiked(!liked)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
                aria-label="Add to wishlist"
              >
                <Heart
                  size={20}
                  className={
                    liked
                      ? "fill-[#ca9296] text-[#ca9296]"
                      : "text-[#333]"
                  }
                />
              </button>

              {/* Eye */}
              <button
                onClick={() => setQuickView(true)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
                aria-label="Quick view"
              >
                <Eye size={20} />
              </button>

            </div>

            {/* Add to Bag */}
            <button
              onClick={() => addToCart(product, selectedSize)}
              className="
                absolute bottom-0 left-0 right-0
                translate-y-full
                bg-[#ca9296]/95
                py-4
                text-center
                font-semibold
                text-white
                transition-all duration-500
                group-hover:translate-y-0
              "
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag size={19} />
                Add to Bag
              </span>
            </button>

          </div>

          {/* Product Info */}
          <div className="px-5 py-5">
            <h2 className="line-clamp-2 min-h-[48px] text-[17px]">
              {safeProduct.name || "Jewelry"}
            </h2>

            <p className="mt-2 text-[19px] font-bold">
              Rs. {(safeProduct.price ?? 0).toLocaleString()}
            </p>
          </div>

        </div>
      </article>

      {/* QUICK VIEW */}
      {quickView && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
          onClick={() => setQuickView(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              max-h-[92vh]
              w-full
              max-w-[950px]
              overflow-y-auto
              rounded-[24px]
              bg-white
              shadow-2xl
            "
          >

            {/* Close */}
            <button
              onClick={() => setQuickView(false)}
              className="
                absolute right-5 top-5 z-10
                flex h-11 w-11
                items-center justify-center
                rounded-full
                bg-white
                shadow-md
                transition
                hover:scale-105
              "
            >
              <X size={21} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* Image */}
              <div className="relative min-h-[450px] bg-[#f8f3f3]">
                <Image
                  src={safeProduct.image || "/Images/products/placeholder.jpg"}
                  alt={safeProduct.name || "Jewelry product"}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 md:p-12">

                <p className="text-sm uppercase tracking-[2px] text-[#ca9296]">
                  {safeProduct.category || "Jewelry"}
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  {safeProduct.name || "Jewelry"}
                </h2>

                <p className="mt-5 text-2xl font-bold">
                  Rs. {(safeProduct.price ?? 0).toLocaleString()}
                </p>

                <div className="my-7 h-px bg-[#ead4d8]" />

                {Array.isArray(safeProduct.sizes) && safeProduct.sizes.length > 0 && (
                  <div>
                    <h3 className="mb-4 font-semibold">
                      Select Size
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {safeProduct.sizes.map(
                        (size: string) => (
                          <button
                            key={size}
                            onClick={() =>
                              setSelectedSize(size)
                            }
                            className={`
                              rounded-full
                              border
                              px-5 py-2
                              transition
                              ${
                                selectedSize === size
                                  ? "border-[#ca9296] bg-[#ca9296] text-white"
                                  : "border-[#ca9296] text-[#ca9296] hover:bg-[#ca9296]/10"
                              }
                            `}
                          >
                            {size}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAddToCart}
                  className="
                    mt-8
                    flex w-full
                    items-center justify-center
                    gap-2
                    rounded-full
                    bg-[#ca9296]
                    px-7 py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#b97f84]
                  "
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
    </>
  );
}