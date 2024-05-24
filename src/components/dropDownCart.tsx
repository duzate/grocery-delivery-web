"use client";
import { useAuth } from "@/contexts/Auth";
import "@/components/dropDownCart.css";

export const DropDownCart = () => {
  const { isAuth } = useAuth();

  return (
    <div className="flex flex-col dropDownCart">
      <div>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </div>
  );
};
