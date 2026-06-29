import { FaXTwitter, FaDiscord, FaLeaf } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#040B06] border-t border-emerald-500/20"
    >
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[180px]"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-700/10 blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-black text-2xl">

                <FaLeaf />

              </div>

              <h2 className="text-2xl font-black text-white">
                Forest Ad Land
              </h2>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Building the future of digital advertising through community,
              innovation and transparency.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-emerald-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#ecosystem" className="hover:text-emerald-400 transition">
                  Ecosystem
                </a>
              </li>

              <li>
                <a href="#roadmap" className="hover:text-emerald-400 transition">
                  Roadmap
                </a>
              </li>

              <li>
                <a href="#community" className="hover:text-emerald-400 transition">
                  Community
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              Community
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl text-white transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl text-white transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black"
              >
                <FaTelegramPlane />
              </a>

              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl text-white transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black"
              >
                <FaDiscord />
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Together we are creating a thriving digital forest where ideas,
              businesses and communities grow without limits.
            </p>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5"><p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Forest Ad Land. All Rights Reserved.
          </p>

          <p className="text-emerald-400">
            🌲 Grow • Connect • Thrive
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;