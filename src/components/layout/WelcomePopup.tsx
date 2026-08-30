"use client";

import { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupClosed = localStorage.getItem("welcome-popup-closed");

    if (!popupClosed) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("welcome-popup-closed", "true");
    document.body.style.overflow = "";
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 px-4 backdrop-blur-[4px]">

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-popup-title"
        className="
          relative
          w-full
          max-w-[625px]
          overflow-hidden
          rounded-[24px]
          bg-white
          shadow-[0_20px_70px_rgba(0,0,0,0.25)]
        "
      >

        {/* Top Blue Border */}
        <div className="h-[8px] w-full bg-[#0874b9]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close announcement"
          className="
            absolute
            right-5
            top-5
            flex
            h-[68px]
            w-[68px]
            items-center
            justify-center
            rounded-[22px]
            border-[4px]
            border-[#c5ddec]
            bg-white
            text-[#687585]
            transition-all
            duration-300
            hover:bg-[#f5f9fc]
            hover:text-[#0874b9]
          "
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        </button>


        {/* Content */}
        <div className="px-7 pb-10 pt-10 sm:px-10 sm:pb-11 sm:pt-11">

          {/* Brand */}
          <h2
            id="welcome-popup-title"
            className="pr-20 text-center text-[32px] font-extrabold tracking-tight text-[#17191c] sm:text-[36px]"
          >
            By Hiba
          </h2>


          {/* Announcement Label */}
          <div className="mt-7 flex items-center justify-center gap-2">

            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0874b9"
              strokeWidth="2"
            >
              <path d="M12 2l2.5 4.5L19 9l-4.5 2.5L12 16l-2.5-4.5L5 9l4.5-2.5L12 2Z" />
              <path d="M19 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
            </svg>

            <span className="text-[16px] font-bold uppercase tracking-[2px] text-[#0874b9]">
              Important Update
            </span>

          </div>


          {/* Main Heading */}
          <h3 className="mt-7 text-center text-[28px] font-extrabold leading-tight text-[#17191c] sm:text-[32px]">
            Welcome to By Hiba
          </h3>


          {/* Description */}
          <p className="mx-auto mt-5 max-w-[500px] text-center text-[17px] leading-[1.65] text-[#4c5560] sm:text-[18px]">
            Thank you for visiting our store. Explore our
            handcrafted jewellery and discover something
            special for yourself.
          </p>


          {/* Highlight */}
          <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-[#c9e2f3] bg-[#f4faff] px-6 py-3">

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0874b9"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span className="text-[16px] font-bold text-[#075c91]">
              Handmade With Love
            </span>

          </div>


          {/* Additional Text */}
          <p className="mx-auto mt-7 max-w-[500px] text-center text-[16px] leading-[1.7] text-[#707987] sm:text-[17px]">
            We appreciate your support and hope you enjoy
            shopping with us.
          </p>


          {/* Button */}
          <button
            type="button"
            onClick={closePopup}
            className="
              mt-8
              w-full
              rounded-[17px]
              bg-[#0874b9]
              px-6
              py-5
              text-[19px]
              font-bold
              text-white
              shadow-[0_10px_25px_rgba(8,116,185,0.25)]
              transition-all
              duration-300
              hover:bg-[#0766a2]
              hover:shadow-[0_14px_30px_rgba(8,116,185,0.32)]
              active:scale-[0.99]
            "
          >
            Continue Shopping
          </button>

        </div>
      </div>
    </div>
  );
}