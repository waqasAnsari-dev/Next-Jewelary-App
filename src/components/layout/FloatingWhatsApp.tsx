export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923180414751"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        flex
        h-[62px]
        w-[62px]
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_8px_25px_rgba(0,0,0,0.20)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)]
        md:bottom-7
        md:right-7
      "
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.2A8.5 8.5 0 1 1 20 11.5Z" />

        <path d="M8.5 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.1.4-1.6.2-2.1-.7-4.5-3-5.2-5.1-.2-.6-.1-1.1.2-1.6Z" />
      </svg>
    </a>
  );
}