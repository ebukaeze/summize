import logo from "../assets/logo2.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex items-center h-20 fixed top-0 left-0 z-10 shadow-md px-8 md:px-0">
      <div className="w-full max-w-screen-xl mx-auto my-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-auto w-32 items-center gap-x-3">
            <Link to={"/"} className="flex gap-x-3">
              <img src={logo} alt="Sumz logo" className="w-12 object-contain" />
              <span>
                <h1 className="text-2xl font-satoshi font-medium">Sumri</h1>
              </span>
            </Link>
          </div>
          <div className="flex items-end">
            <Link to={"https://github.com/ebukaeze"}>
              <button type="button" className="black_btn font-medium shadow-sm">
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
