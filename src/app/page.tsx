import { Header } from "@/components/header";
import { ListProducts } from "@/components/listProducts";
import { categories } from "@/utils/categories";

export default function Home() {
  return (
    <div className='w-screen h-screen px-9'>
      <header className='flex flex-row justify-between items-center h-40 w-full'>
        <Header />
      </header>
      <main className=''>
        <div className='flex flex-col'>
          {categories.map((category) => (
            <ListProducts key={category.category} product_category={category.category} />
          ))}
        </div>
      </main>
    </div>
  );
}
