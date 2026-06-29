import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-emerald-950/90 backdrop-blur-xl border-b border-emerald-700/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="Forest Ad Land Logo"
            className="w-12 h-12 object-contain transition-all duration-500 hover:scale-110 hover:rotate-6"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Forest Ad Land
            </h1>

            <p className="text-xs md:text-sm text-emerald-400">
              Own. Build. Grow.
            </p>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-10">

          <li>
            <a
              href="#"
              className="relative text-white font-medium transition-all duration-300 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative text-white font-medium transition-all duration-300 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#ecosystem"
              className="relative text-white font-medium transition-all duration-300 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Ecosystem
            </a>
          </li>

          <li>
            <a
              href="#roadmap"
              className="relative text-white font-medium transition-all duration-300 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Roadmap
            </a>
          </li>

          <li>
            <a
              href="#community"
              className="relative text-white font-medium transition-all duration-300 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Community
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative text-white font-medium transition-all duration-300 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>

        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl transition-all duration-300 hover:text-emerald-400 hover:scale-110"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

     <div
  className={`overflow-hidden transition-all duration-500 lg:hidden ${
    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
        <div className="bg-emerald-950/95 backdrop-blur-xl border-t border-emerald-700/60">

          <ul className="flex flex-col gap-6 px-6 py-6"><li>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block text-white transition-all duration-300 hover:text-emerald-400 hover:translate-x-2"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block text-white transition-all duration-300 hover:text-emerald-400 hover:translate-x-2"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#ecosystem"
                onClick={() => setMenuOpen(false)}
                className="block text-white transition-all duration-300 hover:text-emerald-400 hover:translate-x-2"
              >
                Ecosystem
              </a>
            </li>

            <li>
              <a
                href="#roadmap"
                onClick={() => setMenuOpen(false)}
                className="block text-white transition-all duration-300 hover:text-emerald-400 hover:translate-x-2"
              >
                Roadmap
              </a>
            </li>

            <li>
              <a
                href="#community"
                onClick={() => setMenuOpen(false)}
                className="block text-white transition-all duration-300 hover:text-emerald-400 hover:translate-x-2"
              >
                Community
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-white transition-all duration-300 hover:text-emerald-400 hover:translate-x-2"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      </div>

    </header>
  );
};

export default Navbar;