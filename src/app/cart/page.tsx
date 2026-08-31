"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const SHIPPING = 300;

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  const total =
    cart.length > 0 ? subtotal + SHIPPING : 0;

  if (cart.length === 0) {
    return (
      <main className="min-h-[70vh] bg-white px-5 py-20">
        <div className="mx-auto max-w-[800px] text-center">

          <h1 className="text-4xl font-semibold">
            Your Bag is Empty
          </h1>

          <p className="mt-4 text-[#777]">
            Looks like you haven't added anything yet.
          </p>

          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-[#ca9296] px-8 py-4 font-semibold text-white"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <div className="border-y border-[#f0dfe2] bg-[#fff8fa]">
        <div className="mx-auto max-w-[1300px] px-5 py-8">
          <h1 className="text-3xl font-semibold">
            Your Shopping Bag
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-12 lg:grid-cols-[1fr_380px]">

        {/* Items */}
        <div className="space-y-5">

          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="
                flex gap-5
                rounded-[20px]
                border border-[#ead4d8]
                p-4
              "
            >

              <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-[14px] bg-[#f8f3f3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">

                <div>
                  <h2 className="text-lg font-medium">
                    {item.name}
                  </h2>

                  {item.size && (
                    <p className="mt-1 text-sm text-[#777]">
                      Size: {item.size}
                    </p>
                  )}

                  <p className="mt-2 font-bold">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center justify-between">

                  {/* Quantity */}
                  <div className="flex items-center rounded-full border border-[#ead4d8]">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1,
                          item.size
                        )
                      }
                      className="p-2"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="px-3">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1,
                          item.size
                        )
                      }
                      className="p-2"
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.size
                      )
                    }
                    className="text-[#ca9296] hover:text-red-500"
                  >
                    <Trash2 size={19} />
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Summary */}
        <aside className="h-fit rounded-[22px] border border-[#ead4d8] bg-[#fff8fa] p-7">

          <h2 className="text-xl font-semibold">
            Order Summary
          </h2>

          <div className="mt-7 space-y-4">

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

            <div className="h-px bg-[#ead4d8]" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>
                Rs. {total.toLocaleString()}
              </span>
            </div>

          </div>

          <Link
            href="/checkout"
            className="
              mt-7 block
              rounded-full
              bg-[#ca9296]
              py-4
              text-center
              font-semibold
              text-white
              transition
              hover:bg-[#b97f84]
            "
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/shop"
            className="mt-4 block text-center text-sm text-[#ca9296]"
          >
            Continue Shopping
          </Link>

        </aside>

      </div>
    </main>
  );
}