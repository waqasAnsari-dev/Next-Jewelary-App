import Link from "next/link";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hibameen90@gmail.com";
const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923180414751").replace(/\D/g, "");
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? `https://wa.me/${whatsappNumber}`;
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/by.hiba";
const storeAddress = process.env.NEXT_PUBLIC_STORE_ADDRESS ?? "Karachi, Pakistan";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/20 bg-[linear-gradient(135deg,#ca9296_0%,#c28b91_100%)] text-white">

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 md:px-14 lg:px-20 lg:py-16">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.6fr_0.65fr_0.65fr_1.25fr] lg:gap-10">

          {/* =========================
              BRAND / CONTACT
          ========================== */}
          <div className="lg:border-r lg:border-white/10 lg:pr-12 lg:pl-10">

            {/* Brand */}
            <h2 className="font-serif text-[30px] font-normal leading-none tracking-wide text-white md:text-[34px]">
              By Hiba
            </h2>

            <span className="mt-5 block h-px w-16 bg-white/45" />

            {/* Tagline */}
            <p className="mt-6 text-[13px] leading-relaxed text-white/90 md:text-[14px]">
              Experience The Handcrafted Difference
            </p>

            {/* Location */}
            <p className="mt-7 text-[13px] text-white/90 md:text-[14px]">
              {storeAddress}
            </p>

            {/* Email */}
            <a
              href={`mailto:${contactEmail}`}
              className="mt-6 flex items-center gap-3 text-[13px] text-white/90 transition-opacity duration-300 hover:opacity-70 md:text-[14px]"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />
                <path d="m3 7 9 6 9-6" />
              </svg>

              <span>{contactEmail}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-3 text-[13px] text-white/90 transition-opacity duration-300 hover:opacity-70 md:text-[14px]"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.2A8.5 8.5 0 1 1 20 11.5Z" />

                <path d="M8.5 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.1.4-1.6.2-2.1-.7-4.5-3-5.2-5.1-.2-.6-.1-1.1.2-1.6Z" />
              </svg>

              <span>{whatsappNumber}</span>
            </a>

            {/* =========================
                SOCIAL ICONS
            ========================== */}
            <div className="mt-8 flex gap-4">

              {/* Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/25 hover:bg-white/20"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/25 hover:bg-white/20"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.2A8.5 8.5 0 1 1 20 11.5Z" />

                  <path d="M8.5 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.1.4-1.6.2-2.1-.7-4.5-3-5.2-5.1-.2-.6-.1-1.1.2-1.6Z" />
                </svg>
              </a>

            </div>
          </div>


          {/* =========================
              SHOP
          ========================== */}
          <div>

            <div className="flex items-center gap-3">
              <h3 className="text-[12px] font-bold uppercase tracking-[2px] md:text-[13px]">
                Shop
              </h3>
              <span className="h-px w-8 bg-white/35" />
            </div>

            <div className="mt-8 flex flex-col gap-5">

              <Link
                href="/shop"
                className="w-fit text-[13px] text-white/90 transition-all duration-300 hover:translate-x-1 hover:text-white md:text-[14px]"
              >
                All Products
              </Link>

            </div>

          </div>


          {/* =========================
              HELP
          ========================== */}
          <div>

            <div className="flex items-center gap-3">
              <h3 className="text-[12px] font-bold uppercase tracking-[2px] md:text-[13px]">
                Help
              </h3>
              <span className="h-px w-8 bg-white/35" />
            </div>

            <div className="mt-8 flex flex-col gap-5">

              <Link
                href="/contact"
                className="w-fit text-[13px] text-white/90 transition-all duration-300 hover:translate-x-1 hover:text-white md:text-[14px]"
              >
                Contact Us
              </Link>

              <Link
                href="/track-order"
                className="w-fit text-[13px] text-white/90 transition-all duration-300 hover:translate-x-1 hover:text-white md:text-[14px]"
              >
                Track Order
              </Link>

            </div>

          </div>


          {/* =========================
              PERKS
          ========================== */}
          <div>

            <div className="flex items-center gap-3">
              <h3 className="text-[12px] font-bold uppercase tracking-[2px] md:text-[13px]">
                Perks
              </h3>
              <span className="h-px w-8 bg-white/35" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[11px] text-white/95 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                Cash on Delivery
              </span>

              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[11px] text-white/95 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                Bank Transfer
              </span>

              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[11px] text-white/95 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                100% Secure
              </span>

            </div>

          </div>

        </div>
      </div>


      {/* =========================
          BOTTOM FOOTER
      ========================== */}
      <div className="mx-auto max-w-[1500px] border-t border-white/20 px-6 sm:px-10 md:px-14 lg:px-20">

        <div className="flex flex-col justify-between gap-3 py-5 text-[11px] text-white/90 sm:text-[12px] md:flex-row md:items-center md:py-6">

          <p>
            © 2026 By Hiba. All rights reserved.
          </p>

          <p>
            Made with ♥ in Pakistan
          </p>

        </div>

      </div>

    </footer>
  );
}