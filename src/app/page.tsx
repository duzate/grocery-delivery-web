import { ListProduct } from "@/components/listProducts";

export default function Home() {
  return (
    <div className='w-screen'>
      <header className='flex flex-row justify-between items-center px-16 py-4 w-full'>
        <div>grocery delivery</div>
        <div>search</div>
        <div>profile/cart</div>
      </header>
      <main className=''>
        <div className='flex overflow-x-scroll'>
          <ListProduct />
        </div>
      </main>
    </div>
  );
}
