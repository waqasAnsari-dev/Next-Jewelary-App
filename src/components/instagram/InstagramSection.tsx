import Image from "next/image";
import Link from "next/link";
import instagramPosts from "../../data/instagram.json";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/by.rangravish";

export default function InstagramSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      
      {/* Heading */}
      <div className="mb-8 px-4 text-center sm:mb-14 md:mb-16">
        <h2 className="section-title-reveal text-3xl font-medium leading-tight tracking-[-1.5px] text-[#292929] sm:text-[48px] md:text-[58px] lg:text-[64px]">
          Follow us on Instagram
        </h2>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 px-2 text-sm sm:mt-4 sm:gap-3 sm:text-[17px] md:text-[19px]">
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c8899d] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            by.rangravish
          </Link>

          <span className="text-[#999]">—</span>

          <span className="text-[#858585]">
            Tag us to be featured!
          </span>
        </div>
      </div>

      {/* Instagram Images */}
      <div className="mx-auto w-full max-w-[1540px] px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {instagramPosts.map((post, index) => (
            <Link
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 70}ms` }}
              className="card-reveal group relative aspect-square overflow-hidden rounded-[14px] border-4 border-white bg-[#f7e9ee] shadow-[0_8px_24px_rgba(113,65,75,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(113,65,75,0.18)]"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#321d27]/0 transition-all duration-300 group-hover:bg-[#321d27]/45">
                <span className="scale-75 rounded-full border border-white/70 px-3 py-1.5 text-center text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:text-sm">
                  View on Instagram
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}