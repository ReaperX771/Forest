import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";
import hero from "../assets/Images/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={hero}
        alt="Forest Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#07120C]/70 via-[#07120C]/80 to-[#07120C]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 px-5 py-2 rounded-full mb-8 mt-2 backdrop-blur-md">
          <span className="text-xl">🌲</span>
          <span className="text-emerald-300 font-medium">
            Welcome to Forest Ad Land
          </span>
        </div>

        <h1 className="text-white font-black leading-tight text-5xl md:text-7xl lg:text-8xl">
          Own the Future
          <br />
          of{" "}
          <span className="text-emerald-400">
            Digital Land
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg md:text-xl leading-8">
          Build, advertise and grow inside a community-driven
          digital ecosystem where creativity meets opportunity.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <button className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-black font-bold px-8 py-4 rounded-xl">
            Explore Ecosystem
            <FaArrowRight />
          </button>

          <button className="flex items-center justify-center gap-3 border border-emerald-400 text-white hover:bg-emerald-500 hover:text-black transition-all duration-300 px-8 py-4 rounded-xl">
            View Roadmap
            <FaMapMarkedAlt />
          </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-emerald-400">
              12K+
            </h2>
            <p className="text-gray-300 mt-2">
              Community
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-emerald-400">
              90+
            </h2>
            <p className="text-gray-300 mt-2">
              Countries
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-emerald-400">
              7
            </h2>
            <p className="text-gray-300 mt-2">
              Development Phases
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-emerald-400">
              ∞
            </h2>
            <p className="text-gray-300 mt-2">
              Opportunities
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;