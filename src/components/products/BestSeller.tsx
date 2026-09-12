import ProductCard from "./ProductCard";

const bestSellerProducts = [
  {
    id: "flora-stacks",
    name: "Flora Stacks",
    category: "Bracelets",
    price: 850,
    image: "/Images/products/flora-stacks.jpg",
  },
  {
    id: "fairytopea",
    name: "Fairytopea",
    category: "Arm cuffs",
    price: 2200,
    image: "/Images/products/fairytopea.jpeg",
  },
  {
    id: "dainty-tiara",
    name: "Dainty Tiara",
    category: "Tiaras",
    price: 1800,
    image: "/Images/products/dainty-tiara.jpg",
  },
  {
    id: "starlin",
    name: "Starlin",
    category: "Tiaras",
    price: 3500,
    image: "/Images/products/starlin.jpeg",
  },
  {
    id: "zahra",
    name: "Zahra",
    category: "Tiaras",
    price: 2500,
    image: "/Images/products/zahra.jpeg",
  },
  {
    id: "pearl-hearts",
    name: "Permanent Bracelet (Pearl Hearts)",
    category: "Bracelets",
    price: 350,
    image: "/Images/products/pearl-hearts.jpeg",
  },
  {
    id: "daisy-bracelet",
    name: "Daisy Permanent Bracelet",
    category: "Bracelets",
    price: 350,
    image: "/Images/products/daisy-bracelet.jpg",
  },
];

export default function BestSeller() {
  return (
    <section className="w-full py-14 sm:py-20 md:py-28">

      {/* Section Header */}
      <div className="mb-8 px-4 text-center sm:mb-14">

        <h2 className="text-3xl font-medium tracking-tight text-[#4b3039] sm:text-5xl md:text-6xl">
          Best Seller
        </h2>

        <p className="mt-3 text-sm text-gray-500 sm:mt-4 sm:text-base md:text-lg">
          Find exactly what you love
        </p>

      </div>

      {/* Products */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

        <div className="grid grid-cols-2 gap-3 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-4">

   {bestSellerProducts.map((product) => (
  <div
    key={product.id}
    className="overflow-hidden rounded-[20px] border border-[#eadde2] bg-white shadow-[0_8px_26px_rgba(184,117,136,0.08)] transition-transform duration-300 hover:-translate-y-1"
  >
    <ProductCard product={product} />
  </div>
))}

        </div>

      </div>

    </section>
  );
}