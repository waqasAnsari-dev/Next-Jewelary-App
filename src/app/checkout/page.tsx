"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const SHIPPING = 300;

export default function CheckoutPage() {
  const {
    cart,
    subtotal,
    clearCart,
  } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    notes: "",
    paymentMethod: "cod",
  });

  const [placingOrder, setPlacingOrder] =
    useState(false);

  const total =
    cart.length > 0 ? subtotal + SHIPPING : 0;

  const updateField = (
    field: string,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const placeOrder = () => {
    if (!form.fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!form.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!form.address.trim()) {
      alert("Please enter your street address.");
      return;
    }

    if (!form.city.trim()) {
      alert("Please enter your city.");
      return;
    }

    if (!form.province) {
      alert("Please select your province.");
      return;
    }

    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }

    setPlacingOrder(true);

    const orderNumber =
      `HIBA-${Date.now().toString().slice(-6)}`;

    const productsMessage = cart
      .map(
        (item) =>
          `• ${item.name} x ${item.quantity} — Rs. ${(item.price * item.quantity).toLocaleString()}${
            item.size
              ? ` (Size: ${item.size})`
              : ""
          }`
      )
      .join("\n");

    const message = `
🛍️ *NEW BY HIBA ORDER*

Order #: ${orderNumber}

━━━━━━━━━━━━━━
👤 *CUSTOMER*
━━━━━━━━━━━━━━

Name: ${form.fullName}
Email: ${form.email || "Not provided"}
Phone: ${form.phone}
WhatsApp: ${form.whatsapp || form.phone}

━━━━━━━━━━━━━━
📍 *SHIPPING*
━━━━━━━━━━━━━━

Address: ${form.address}
City: ${form.city}
Province: ${form.province}
Postal Code: ${form.postalCode || "Not provided"}

━━━━━━━━━━━━━━
🛒 *ORDER*
━━━━━━━━━━━━━━

${productsMessage}

━━━━━━━━━━━━━━
💰 *PAYMENT*
━━━━━━━━━━━━━━

Payment Method: ${
      form.paymentMethod === "cod"
        ? "Cash on Delivery"
        : "Bank Transfer"
    }

Subtotal: Rs. ${subtotal.toLocaleString()}
Shipping: Rs. ${SHIPPING.toLocaleString()}
Total: Rs. ${total.toLocaleString()}

${
  form.notes
    ? `Order Notes: ${form.notes}`
    : ""
}

━━━━━━━━━━━━━━

Please confirm this order.
    `.trim();

    const whatsappNumber = "923234016813";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

    clearCart();

    window.location.href = whatsappUrl;
  };

  if (!cart.length) {
    return (
      <main className="min-h-[70vh] px-5 py-20 text-center">

        <h1 className="text-3xl font-semibold">
          Your Bag is Empty
        </h1>

        <Link
          href="/shop"
          className="mt-7 inline-block rounded-full bg-[#ca9296] px-8 py-4 text-white"
        >
          Go Shopping
        </Link>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      <div className="border-y border-[#f0dfe2] bg-[#fff8fa]">
        <div className="mx-auto max-w-[1300px] px-5 py-8">
          <h1 className="text-3xl font-semibold">
            Checkout
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-12 lg:grid-cols-[1fr_420px]">

        {/* FORM */}
        <section>

          <div className="rounded-[22px] border border-[#ead4d8] p-7 md:p-9">

            <h2 className="text-2xl font-semibold">
              Shipping Information
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <Input
                label="Full Name"
                required
                value={form.fullName}
                onChange={(value) =>
                  updateField("fullName", value)
                }
              />

              <Input
                label="Email Address"
                type="email"
                value={form.email}
                onChange={(value) =>
                  updateField("email", value)
                }
              />

              <Input
                label="Phone Number"
                required
                value={form.phone}
                onChange={(value) =>
                  updateField("phone", value)
                }
              />

              <Input
                label="WhatsApp (if different from phone)"
                value={form.whatsapp}
                onChange={(value) =>
                  updateField("whatsapp", value)
                }
              />

              <div className="md:col-span-2">
                <Input
                  label="Street Address"
                  required
                  value={form.address}
                  onChange={(value) =>
                    updateField("address", value)
                  }
                />
              </div>

              <Input
                label="City"
                required
                value={form.city}
                onChange={(value) =>
                  updateField("city", value)
                }
              />

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Province *
                </label>

                <select
                  value={form.province}
                  onChange={(e) =>
                    updateField(
                      "province",
                      e.target.value
                    )
                  }
                  className="h-12 w-full rounded-full border border-[#e7ccd1] bg-white px-4 outline-none focus:border-[#ca9296]"
                >
                  <option value="">
                    Select
                  </option>
                  <option>Sindh</option>
                  <option>Punjab</option>
                  <option>KPK</option>
                  <option>Balochistan</option>
                  <option>Islamabad</option>
                  <option>Gilgit-Baltistan</option>
                  <option>AJK</option>
                </select>
              </div>

              <Input
                label="Postal Code"
                value={form.postalCode}
                onChange={(value) =>
                  updateField(
                    "postalCode",
                    value
                  )
                }
              />

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Order Notes (optional)
                </label>

                <textarea
                  value={form.notes}
                  onChange={(e) =>
                    updateField(
                      "notes",
                      e.target.value
                    )
                  }
                  rows={4}
                  className="w-full rounded-[18px] border border-[#e7ccd1] px-4 py-3 outline-none focus:border-[#ca9296]"
                />
              </div>

            </div>
          </div>

          {/* PAYMENT */}
          <div className="mt-7 rounded-[22px] border border-[#ead4d8] p-7 md:p-9">

            <h2 className="text-2xl font-semibold">
              Payment Method
            </h2>

            <div className="mt-7 space-y-4">

              <label
                className={`block cursor-pointer rounded-[18px] border p-5 ${
                  form.paymentMethod === "cod"
                    ? "border-[#ca9296] bg-[#fff8fa]"
                    : "border-[#ead4d8]"
                }`}
              >
                <div className="flex gap-4">

                  <input
                    type="radio"
                    name="payment"
                    checked={
                      form.paymentMethod === "cod"
                    }
                    onChange={() =>
                      updateField(
                        "paymentMethod",
                        "cod"
                      )
                    }
                  />

                  <div>
                    <h3 className="font-semibold">
                      Cash on Delivery
                    </h3>

                    <p className="mt-1 text-sm text-[#777]">
                      Pay when your order arrives
                    </p>
                  </div>

                </div>
              </label>

              <label
                className={`block cursor-pointer rounded-[18px] border p-5 ${
                  form.paymentMethod === "bank"
                    ? "border-[#ca9296] bg-[#fff8fa]"
                    : "border-[#ead4d8]"
                }`}
              >
                <div className="flex gap-4">

                  <input
                    type="radio"
                    name="payment"
                    checked={
                      form.paymentMethod === "bank"
                    }
                    onChange={() =>
                      updateField(
                        "paymentMethod",
                        "bank"
                      )
                    }
                  />

                  <div>
                    <h3 className="font-semibold">
                      Bank Transfer
                    </h3>

                    <p className="mt-1 text-sm text-[#777]">
                      Transfer & upload receipt
                    </p>
                  </div>

                </div>
              </label>

            </div>

          </div>

        </section>

        {/* ORDER SUMMARY */}
        <aside className="h-fit rounded-[22px] border border-[#ead4d8] bg-[#fff8fa] p-7">

          <h2 className="text-2xl font-semibold">
            Your Order
          </h2>

          <div className="mt-7 space-y-5">

            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-4"
              >

                <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-medium">
                    {item.name}
                  </h3>

                  {item.size && (
                    <p className="mt-1 text-xs text-[#777]">
                      Size: {item.size}
                    </p>
                  )}

                  <p className="mt-1 text-sm">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">
                  Rs.{" "}
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString()}
                </p>

              </div>
            ))}

          </div>

          <div className="my-7 h-px bg-[#ead4d8]" />

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                Rs. {SHIPPING.toLocaleString()}
              </span>
            </div>

            <p className="text-sm text-[#777]">
              Shipping Time: 15 Working Days
              (Sat - Sun Not Included)
            </p>

            <div className="h-px bg-[#ead4d8]" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>
                Rs. {total.toLocaleString()}
              </span>
            </div>

          </div>

          <button
            onClick={placeOrder}
            disabled={placingOrder}
            className="
              mt-8 w-full
              rounded-full
              bg-[#ca9296]
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#b97f84]
              disabled:opacity-60
            "
          >
            {placingOrder
              ? "Opening WhatsApp..."
              : "Place Order"}
          </button>

          <p className="mt-5 text-center text-xs text-[#777]">
            Your information is secure & encrypted.
          </p>

        </aside>

      </div>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
  required = false,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
        {required && " *"}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          h-12 w-full
          rounded-full
          border border-[#e7ccd1]
          bg-white
          px-4
          outline-none
          transition
          focus:border-[#ca9296]
        "
      />
    </div>
  );
}