import ShopPageContent from "../../../components/shop/ShopPageContent";

interface ShopCategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function ShopCategoryPage({ params }: ShopCategoryPageProps) {
  const { category } = await params;

  return <ShopPageContent selectedCategory={category} />;
}
