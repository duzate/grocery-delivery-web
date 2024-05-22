import { Header } from "@/components/header";
import { ListProducts } from "@/components/listProducts";
import { categories } from "@/utils/categories";
import { products } from "@/utils/products";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <header className="flex flex-row justify-between items-center h-1/6 px-16 py-4 w-full">
        <Header />
      </header>
      <main className="">
        <div className="flex flex-col">
          {categories.map((category) => (
            <ListProducts
              key={category.category}
              product_category={category.category}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
