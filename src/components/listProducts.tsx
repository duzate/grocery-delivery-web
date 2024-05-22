import { products } from "@/utils/products";
import { Product } from "./product";

type CategoryProps = {
  product_category: string;
};

export const ListProducts = ({ product_category }: CategoryProps) => {
  const productFilter = products.filter((product) => {
    product.category === product_category;
  });

  return (
    <div className="flex flex-col gap-4 p-4 ">
      <div>
        <h3 className="capitalize font-semibold">{product_category}</h3>
      </div>
      <div className="flex flex-row overflow-x-scroll">
        <div className="flex flex-row gap-4 ">
          {products
            .filter((product) => product.category === product_category)
            .map((product) => (
              <Product
                key={product.id}
                product_img={product.thumbnail}
                product_name={product.title}
                product_price={product.price}
                product_unit={product.stock}
                product_brand={product.brand}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
