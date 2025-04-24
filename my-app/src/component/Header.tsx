const Header = () => {
  return (
    <header className="px-6 md:px-16 lg:px-24 xl:px-32 py-4 sticky left-0 top-0 flex items-center justify-between p-4 bg-white shadow">
      <a href="/">
        <img
          src="/assets/logo.svg"
          className="cursor-pointer w-34 md:w-38"
          alt=""
        />
      </a>
      <nav className="hidden md:flex items-center gap-8">
        <button className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80">
          Seller Dashboard
        </button>
        <a href="/home">Home</a>
        <a href="/all-product">All Product</a>
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-lg:hidden">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Search products"
          />
          <img src="/assets/search.svg" alt="" className="w-4 h-4" />
        </div>
        <a href="/cart" className="relative flex items-center cursor-pointer">
          <img className="w-6 opacity-80" src="/assets/cart.svg" alt="" />
          <button className="absolute -top-2 -right-3 rounded-full text-xs bg-green-500 h-4.5 w-4.5 text-white">
            0
          </button>
        </a>
        <button className="cursor-pointer px-8 py-2 bg-primary bg-green-500 hover:bg-primary-dull transition text-white rounded-full">
          Login
        </button>{" "}
      </nav>
    </header>
  );
};

export default Header;
