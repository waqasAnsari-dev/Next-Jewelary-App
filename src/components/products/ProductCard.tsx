import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isHot?: boolean;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
  isHot = true,
}: ProductCardProps) {
  return (
    <div className="group w-full">
      {/* Product Image */}
      <div className="relative aspect-[1/1.15] overflow-hidden rounded-[18px] bg-[#f8f5f5]">
        <Link href={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Hot Badge */}
        {isHot && (
          <span className="absolute left-4 top-4 rounded-full bg-[#d58ca5] px-4 py-1.5 text-sm font-semibold text-white">
            Hot
          </span>
        )}

        {/* Add to Bag */}
        <button
          type="button"
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#333] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 hover:bg-[#d58ca5] hover:text-white"
        >
          <ShoppingBag size={17} strokeWidth={1.8} />
          Add to Bag
        </button>
      </div>

      {/* Product Information */}
      <div className="px-2 pt-4 text-center">
        <Link href={`/product/${id}`}>
          <h3 className="text-[18px] font-medium text-[#292929] transition hover:text-[#d58ca5]">
            {name}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-gray-500">
          {category}
        </p>

        <p className="mt-2 text-[17px] font-semibold text-[#292929]">
          Rs. {price.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
}