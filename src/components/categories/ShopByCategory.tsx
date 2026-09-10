import categories from "../../data/categories.json";
import CategoryCard from "./CategoryCard";

export default function ShopByCategory() {
  const activeCategories = categories.filter(
    (category) => category.isActive
  );

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      
      {/* Heading */}
      <div className="mb-8 px-4 text-center sm:mb-14 sm:px-6 md:mb-16">
        <h2 className="section-title-reveal text-3xl font-medium leading-tight tracking-[-1px] text-[#292929] sm:text-[48px] md:text-[58px] lg:text-[64px]">
          Shop by Category
        </h2>

        <p className="section-subtitle-reveal mt-3 text-sm font-normal text-[#858585] sm:mt-4 sm:text-[17px] md:text-[19px]">
          Find exactly what you love
        </p>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-[1365px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {activeCategories.map((category, index) => (
            <div key={category.id} className="card-reveal" style={{ animationDelay: `${index * 90}ms` }}>
              <CategoryCard
                name={category.name}
                slug={category.slug}
                image={category.image}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}