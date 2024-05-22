export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center h-full px-16 py-4 w-full md:flex-col sm:flex-col">
      <div className="flex w-full">grocery delivery</div>
      <div className="flex w-full">
        <div className="cursor-pointer border bg-gray-400 border-gray-400 w-12 h-10 rounded-s-md"></div>
        <input
          className="
            border border-gray-400 rounded-e-md
            outline-none cursor-text 
            p-2 w-full h-10 "
          type="text"
        />
      </div>
      <div className="flex w-full justify-end">profile/cart</div>
    </div>
  );
};
