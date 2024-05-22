import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-0 py-0 w-full sm:flex-row sm:justify-between sm:px-16 sm:py-4">
      <div className="flex w-full justify-center sm:justify-start ">
        grocery delivery
      </div>
      <div className="flex w-full justify-center  ">
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
      <div className="flex w-full justify-center sm:justify-end gap-3">
        <div>
          <AccountCircleIcon
            style={{
              fill: "#939393",
              fontSize: "2.6rem",
            }}
          />
        </div>
        <div>
          <ShoppingCartIcon
            style={{
              fill: "#939393",
              fontSize: "2.6rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};
