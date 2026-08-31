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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 px-3 py-4 backdrop-blur-[4px] sm:px-4">

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-popup-title"
        className="
          relative
          w-full
          max-w-[625px]
          max-h-[90vh]
          overflow-y-auto
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
            right-3
            top-3
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-[16px]
            border-[3px]
            border-[#c5ddec]
            bg-white
            text-[#687585]
            transition-all
            duration-300
            hover:bg-[#f5f9fc]
            hover:text-[#0874b9]
            sm:right-5
            sm:top-5
            sm:h-[68px]
            sm:w-[68px]
            sm:rounded-[22px]
            sm:border-[4px]
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
        <div className="px-5 pb-8 pt-10 sm:px-10 sm:pb-11 sm:pt-11">

          {/* Brand */}
          <h2
            id="welcome-popup-title"
            className="pr-8 text-center text-[26px] font-extrabold tracking-tight text-[#17191c] sm:pr-20 sm:text-[36px]"
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
          <h3 className="mt-7 text-center text-[24px] font-extrabold leading-tight text-[#17191c] sm:text-[32px]">
            Welcome to By Hiba
          </h3>


          {/* Description */}
          <p className="mx-auto mt-5 max-w-[500px] text-center text-[15px] leading-[1.65] text-[#4c5560] sm:text-[18px]">
            Thank you for visiting our store. Explore our
            handcrafted jewellery and discover something
            special for yourself.
          </p>


          {/* Highlight */}
          <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-[#c9e2f3] bg-[#f4faff] px-4 py-3 text-center sm:px-6">

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

            <span className="text-[14px] font-bold text-[#075c91] sm:text-[16px]">
              Handmade With Love
            </span>

          </div>


          {/* Additional Text */}
          <p className="mx-auto mt-7 max-w-[500px] text-center text-[14px] leading-[1.7] text-[#707987] sm:text-[17px]">
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
              px-5
              py-4
              text-[17px]
              font-bold
              text-white
              shadow-[0_10px_25px_rgba(8,116,185,0.25)]
              transition-all
              duration-300
              hover:bg-[#0766a2]
              hover:shadow-[0_14px_30px_rgba(8,116,185,0.32)]
              active:scale-[0.99]
              sm:px-6
              sm:py-5
              sm:text-[19px]
            "
          >
            Continue Shopping
          </button>

        </div>
      </div>
    </div>
  );
}