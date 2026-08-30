import categories from "../../data/categories.json";
import CategoryCard from "./CategoryCard";

export default function ShopByCategory() {
  const activeCategories = categories.filter(
    (category) => category.isActive
  );

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      
      {/* Heading */}
      <div className="mb-14 px-6 text-center md:mb-16">
        <h2 className="text-[48px] font-medium leading-tight tracking-[-1px] text-[#292929] md:text-[58px] lg:text-[64px]">
          Shop by Category
        </h2>

        <p className="mt-4 text-[17px] font-normal text-[#858585] md:text-[19px]">
          Find exactly what you love
        </p>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-[1365px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {activeCategories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              slug={category.slug}
              image={category.image}
            />
          ))}
        </div>
      </div>

    </section>
  );
}