import { ComponentType } from "react";

type ProductProps = {
  product_name: string;
  product_price: number;
  product_img: ComponentType;
  product_unit: string;
};

export const Product = ({
  product_img: Icon,
  product_name,
  product_price,
  product_unit,
}: ProductProps) => {
  return (
    <div className='flex flex-col border-violet-100 border-2 w-60 h-60 p-2'>
      <div className='flex justify-center items-center h-28'>
        <Icon />
      </div>
      <div className='flex items-center justify-start text-xs text-slate-500'>
        <span>{product_name + " com " + product_unit}</span>
      </div>
      <div className='flex items-center justify-start text-lg font-semibold h-16'>
        <span>{product_price.toFixed(2)}</span>
      </div>
    </div>
  );
};
