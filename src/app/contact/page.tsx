"use client";

import { useState } from "react";
import Footer from "../../components/layout/Footer";

const whatsappNumber = "923234016813";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello, I would like to contact you.",
      form.name ? `Name: ${form.name}` : "",
      form.email ? `Email: ${form.email}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.subject ? `Subject: ${form.subject}` : "",
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <main className="min-h-screen bg-[#fdf9f9] text-[#2f2f2f]">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-2 text-[15px] font-medium text-[#6a5b60]">
            <span>Home</span>
            <span>/</span>
            <span>Contact</span>
          </div>

          <section className="grid gap-10 lg:grid-cols-[1.05fr_1.3fr] lg:items-start">
            <div className="pt-4">
              <h1 className="font-['Comic_Sans_MS','cursive'] text-[4rem] leading-none tracking-[-0.04em] text-[#1b1b1b] sm:text-[5rem]">
                Get in Touch
              </h1>

              <p className="mt-6 max-w-[420px] text-[1.15rem] leading-8 text-[#4a4a4a]">
                We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e7eb] text-[1.3rem] text-[#c88d9d]">
                    ✉
                  </div>
                  <div>
                    <p className="text-[1rem] font-semibold text-[#2a2a2a]">Email</p>
                    <a href="mailto:hibameen90@gmail.com" className="text-[1.05rem] text-[#2b2b2b] hover:text-[#c88d9d]">
                      hibameen90@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e7eb] text-[1.3rem] text-[#c88d9d]">
                    ☎
                  </div>
                  <div>
                    <p className="text-[1rem] font-semibold text-[#2a2a2a]">WhatsApp</p>
                    <a href="https://wa.me/923234016813" target="_blank" rel="noreferrer" className="text-[1.05rem] text-[#2b2b2b] hover:text-[#c88d9d]">
                      +923180414751
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e7eb] text-[1.3rem] text-[#c88d9d]">
                    ⏰
                  </div>
                  <div>
                    <p className="text-[1rem] font-semibold text-[#2a2a2a]">Hours</p>
                    <p className="text-[1.05rem] text-[#2b2b2b]">Monday – Saturday, 10am – 8pm</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[22px] border border-[#efdde3] bg-[#f6e6eb] p-4 sm:p-6 lg:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-[0.95rem] font-medium text-[#2d2d2d]">
                    Your Name <span className="text-[#c84b6d]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#e7d4db] bg-transparent px-4 py-3 text-[1rem] outline-none ring-0 placeholder:text-[#7d7175] focus:border-[#d9b3c0]"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-[0.95rem] font-medium text-[#2d2d2d]">
                    Email Address <span className="text-[#c84b6d]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#e7d4db] bg-transparent px-4 py-3 text-[1rem] outline-none ring-0 placeholder:text-[#7d7175] focus:border-[#d9b3c0]"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-[0.95rem] font-medium text-[#2d2d2d]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#e7d4db] bg-transparent px-4 py-3 text-[1rem] outline-none ring-0 placeholder:text-[#7d7175] focus:border-[#d9b3c0]"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-[0.95rem] font-medium text-[#2d2d2d]">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#e7d4db] bg-transparent px-4 py-3 text-[1rem] outline-none ring-0 placeholder:text-[#7d7175] focus:border-[#d9b3c0]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-[0.95rem] font-medium text-[#2d2d2d]">
                    Message <span className="text-[#c84b6d]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    className="w-full rounded-xl border border-[#e7d4db] bg-transparent px-4 py-3 text-[1rem] outline-none ring-0 placeholder:text-[#7d7175] focus:border-[#d9b3c0]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#c58ea2] px-5 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-[#b77d92]"
              >
                Send Message
                <span aria-hidden="true">✈</span>
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
