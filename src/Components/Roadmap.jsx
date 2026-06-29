import {
  FaUsers,
  FaLaptopCode,
  FaUserFriends,
  FaCoins,
  FaStore,
  FaCity,
  FaGlobe,
} from "react-icons/fa";

import TimelineCard from "./TimelineCard";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Community",
    description:
      "Build a passionate community, establish trust and lay the foundation for Forest Ad Land.",
    icon: FaUsers,
  },
  {
    phase: "Phase 2",
    title: "Product Prototype",
    description:
      "Design and launch the first version of the Forest Ad Land platform.",
    icon: FaLaptopCode,
  },
  {
    phase: "Phase 3",
    title: "Team Building",
    description:
      "Expand with talented developers, artists and community leaders.",
    icon: FaUserFriends,
  },
  {
    phase: "Phase 4",
    title: "Token Utility",
    description:
      "Introduce digital land, advertising utilities and ecosystem rewards.",
    icon: FaCoins,
  },
  {
    phase: "Phase 5",
    title: "Marketplace",
    description:
      "Launch the advertising marketplace and begin ecosystem expansion.",
    icon: FaStore,
  },
  {
    phase: "Phase 6",
    title: "Cities Expansion",
    description:
      "Grow Forest Ad Land into multiple digital cities full of opportunities.",
    icon: FaCity,
  },
  {
    phase: "Phase 7",
    title: "Global Ecosystem",
    description:
      "Connect communities, creators and advertisers across one global ecosystem.",
    icon: FaGlobe,
  },
];

const particles = [...Array(40)].map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${4 + Math.random() * 5}s`,
  delay: `${Math.random() * 4}s`,
}));

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-[#07120C] py-28 px-6"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-[180px]"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-green-600/10 blur-[220px]"></div>

        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-2 w-2 rounded-full bg-emerald-400/30 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-emerald-400 font-semibold">
            Roadmap
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-black text-white">
            Our Journey
          </h2>

          <p className="mt-8 text-gray-300 max-w-3xl mx-auto leading-8 text-lg">
            Every milestone moves Forest Ad Land closer to becoming a
            community-driven digital advertising ecosystem where creators,
            businesses and communities thrive together.
          </p>

        </div>

        <div className="relative">

          {/* Timeline */}

          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full rounded-full bg-gradient-to-b from-emerald-300 via-emerald-500 to-transparent shadow-[0_0_35px_rgba(16,185,129,.7)]"></div>

          {/* Mobile Timeline */}

          <div className="absolute md:hidden left-10 top-0 w-1 h-full rounded-full bg-emerald-500/40"></div>

          {roadmap.map((item, index) => (
            <TimelineCard
              key={index}
              phase={item.phase}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}

          {/* Final Card */}
          <div className="mt-24 rounded-[40px] border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-white/5 to-transparent backdrop-blur-xl p-10 md:p-16 text-center shadow-[0_0_40px_rgba(16,185,129,.2)]">

            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-emerald-500 text-black text-6xl shadow-[0_0_60px_rgba(16,185,129,.8)] animate-pulse">

              <FaGlobe />

            </div>

            <h2 className="mt-10 text-white text-4xl md:text-6xl font-black">
              The Future Starts Here
            </h2>

            <p className="mt-8 text-gray-300 max-w-4xl mx-auto leading-9 text-lg">
              Forest Ad Land is more than a roadmap. It is a vision to
              connect digital land ownership, advertising, innovation and
              community into one ecosystem built for long-term growth.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Roadmap;