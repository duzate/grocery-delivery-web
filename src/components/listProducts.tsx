import { products } from "@/utils/products";
import { Product } from "./product";

export const ListProduct = () => {
  return (
    <div className='flex flex-row gap-4 p-4 '>
      {products.map((product) => (
        <Product
          key={product.product_id}
          product_img={product.product_img}
          product_name={product.product_name}
          product_price={product.product_price}
          product_unit={product.product_unit}
        />
      ))}
    </div>
  );
};
