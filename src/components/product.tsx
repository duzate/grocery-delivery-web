import Image from "next/image";

type ProductProps = {
  product_name: string;
  product_price: number;
  product_img: string;
  product_unit: number;
  product_brand: string;
};

export const Product = ({
  product_img,
  product_name,
  product_price,
  product_unit,
  product_brand,
}: ProductProps) => {
  return (
    <div className="flex flex-col border-violet-100 border-2 w-60 h-60 p-2 cursor-pointer rounded-md">
      <div className="flex justify-center items-center h-28 mb-2 w-full ">
        <Image
          className="object-contain w-full h-full"
          key={product_img}
          src={product_img}
          alt={product_img}
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col  justify-start text-sm w-full h-10 mb-2">
        <span className="font-semibold">
          {product_name + " " + product_unit}
        </span>
        <span className="text-gray-400">{product_brand}</span>
      </div>
      <div className="flex items-center justify-start text-lg font-semibold h-12  mb-2">
        <span>{`R$ ${product_price.toFixed(2)}`}</span>
      </div>
    </div>
  );
};
