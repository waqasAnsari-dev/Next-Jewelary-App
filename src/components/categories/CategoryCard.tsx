import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  image: string;
}

export default function CategoryCard({
  name,
  slug,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${slug}`}
      className="group category-card block min-w-0 overflow-hidden rounded-[18px] border border-[#f0dce3] bg-white shadow-[0_8px_24px_rgba(113,65,75,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(113,65,75,0.16)]"
    >
      {/* Image */}
      <div className="relative aspect-[0.78] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          priority={false}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#321d27]/65 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <span className="absolute bottom-4 left-4 right-4 translate-y-2 text-center font-serif text-lg text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xl">
          Explore collection
        </span>
      </div>

      {/* Category Name */}
      <div className="flex min-h-[66px] items-center justify-center bg-[#fffafb] px-3 transition-colors duration-500 group-hover:bg-[#fff2f6]">
        <h3 className="text-center text-[18px] font-medium text-[#5a3543] sm:text-[20px]">
          {name}
        </h3>
      </div>
    </Link>
  );
}