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
    <section className="w-full bg-white py-20 md:py-28">

      {/* Section Header */}
      <div className="mb-14 text-center">

        <h2 className="text-5xl font-medium tracking-tight text-[#292929] md:text-6xl">
          Best Seller
        </h2>

        <p className="mt-4 text-base text-gray-500 md:text-lg">
          Find exactly what you love
        </p>

      </div>

      {/* Products */}
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

   {bestSellerProducts.map((product) => (
  <div
    key={product.id}
    className="overflow-hidden rounded-2xl border-x border-b border-[#eadde2]"
  >
    <ProductCard product={product} />
  </div>
))}

        </div>

      </div>

    </section>
  );
}