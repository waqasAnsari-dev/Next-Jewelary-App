import Image from "next/image";
import Link from "next/link";
import instagramPosts from "../../data/instagram.json";

export default function InstagramSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      
      {/* Heading */}
      <div className="mb-14 text-center md:mb-16">
        <h2 className="text-[48px] font-medium leading-tight tracking-[-1.5px] text-[#292929] md:text-[58px] lg:text-[64px]">
          Follow us on Instagram
        </h2>

        <div className="mt-4 flex items-center justify-center gap-3 text-[17px] md:text-[19px]">
          <Link
            href="https://instagram.com/by.hiba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c8899d] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            by.hiba
          </Link>

          <span className="text-[#999]">—</span>

          <span className="text-[#858585]">
            Tag us to be featured!
          </span>
        </div>
      </div>

      {/* Instagram Images */}
      <div className="mx-auto w-full max-w-[1540px] px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com/by.hiba"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[9px]"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                <span className="scale-75 text-2xl text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  Instagram
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}