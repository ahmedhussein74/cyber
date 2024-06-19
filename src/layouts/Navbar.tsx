import toggleNavbar from "../hooks/toggleNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { url: "/", value: "Home" },
    { url: "/", value: "About" },
    { url: "/", value: "Contact" },
    { url: "/", value: "Blog" },
  ];

  return (
    <nav className="border-b h-16 lg:px-[5%] flex flex-wrap items-center justify-between lg:gap-6 overflow-hidden duration-500">
      <header className="w-full lg:w-fit h-16 px-[5%] lg:px-0 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">cyber</span>
        </Link>
        <i
          onClick={() => toggleNavbar(routes.length)}
          className="fa-solid fa-ellipsis-vertical lg:hidden text-xl"
        ></i>
      </header>
      <div className="lg:max-w-[375px] h-12 mx-[5%] lg:mx-0 flex items-center gap-2 px-2 bg-[#F5F5F5] rounded-lg grow">
        <i className="fa-solid fa-magnifying-glass text-[#989898]"></i>
        <input
          type="text"
          placeholder="Search"
          className="h-full outline-none bg-transparent grow"
        />
      </div>
      <aside className="w-full lg:w-fit lg:h-16 grow px-[5%] lg:px-0 flex flex-wrap justify-center lg:gap-12">
        {routes.map((e, index) => (
          <Link
            key={index}
            to={e.url}
            className="w-full lg:w-fit h-16 capitalize flex items-center font-bold text-[#989898] hover:text-black"
          >
            {e.value}
          </Link>
        ))}
      </aside>
      <div className="h-16 px-[5%] lg:px-0 flex items-center gap-6">
        <i className="w-8 h-8 flex items-center justify-center text-xl fa-regular fa-heart"></i>
        <i className="w-8 h-8 flex items-center justify-center text-xl fa-solid fa-cart-shopping"></i>
        <i className="w-8 h-8 flex items-center justify-center text-xl fa-regular fa-user"></i>
      </div>
    </nav>
  );
};

export default Navbar;
