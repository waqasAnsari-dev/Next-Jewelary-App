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
      className="group block min-w-0 overflow-hidden rounded-[16px] bg-white"
    >
      {/* Image */}
      <div className="relative aspect-[0.78] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
        />
      </div>

      {/* Pink Category Name */}
      <div className="flex h-[62px] items-center justify-center bg-[#f58aa3]">
        <h3 className="text-[20px] font-medium text-white">
          {name}
        </h3>
      </div>
    </Link>
  );
}