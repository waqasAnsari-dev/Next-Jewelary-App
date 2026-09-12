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
      className="group category-card block min-w-0 overflow-hidden rounded-[16px] bg-white shadow-[0_4px_18px_rgba(113,65,75,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(113,65,75,0.14)]"
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
      </div>

      {/* Pink Category Name */}
      <div className="flex h-[62px] items-center justify-center bg-[#f6c9d9] transition-colors duration-500 group-hover:bg-[#eeb0c5]">
        <h3 className="text-[20px] font-medium text-[#5a3543]">
          {name}
        </h3>
      </div>
    </Link>
  );
}