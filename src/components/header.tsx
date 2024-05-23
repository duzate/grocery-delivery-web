import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import SupermarketLogo from "@/../public/supermarket_logo.png";
import { DropDownProfile } from "./dropDownProfile";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full  w-full lg:flex-row lg:justify-between ">
      <div className="flex flex-row justify-between items-center h-full  w-full  lg:justify-between lg:px-16 lg:py-4">
        <div className="flex w-full justify-between lg:justify-start">
          <Image
            alt="Supermarket"
            src={SupermarketLogo}
            width={150}
            height={150}
          />
        </div>
        <div className="hidden w-full justify-center  lg:flex">
          <div className=" flex justify-center items-center cursor-pointer border bg-gray-400 border-gray-400 w-16 h-10 rounded-s-md">
            <SearchIcon
              style={{
                fill: "#F3F3F3",
                fontSize: "2rem",
              }}
            />
          </div>
          <input
            className="
          border border-gray-400 rounded-e-md
          outline-none cursor-text 
          p-2 w-full h-10 "
            type="text"
          />
        </div>
        <div className="flex w-full justify-center lg:justify-end gap-2 lg:gap-8 ">
          <div className="cursor-pointer">
            <AccountCircleIcon className="fill-gray-400 lg:size-10 size-8" />
          </div>

          <div className="cursor-pointer">
            <ShoppingCartIcon className="fill-gray-400 lg:size-10 size-8" />
          </div>
        </div>
        <DropDownProfile />
      </div>
      <div className="flex w-full justify-center  lg:hidden">
        <div className=" flex justify-center items-center cursor-pointer border bg-gray-400 border-gray-400 w-12 h-12 rounded-s-md">
          <SearchIcon
            style={{
              fill: "#F3F3F3",
              fontSize: "2rem",
            }}
          />
        </div>
        <input
          className="
            border border-gray-400 rounded-e-md
            outline-none cursor-text 
            p-2 w-full h-12 "
          type="text"
        />
      </div>
    </div>
  );
};
