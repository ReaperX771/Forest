import {
  FaTree,
  FaBullhorn,
  FaCoins,
  FaGlobeAfrica,
} from "react-icons/fa";

const Ecosystem = () => {
  const cards = [
    {
      icon: <FaTree />,
      title: "Own Digital Land",
      text: "Secure your own place inside the Forest Ad Land ecosystem and become part of its growing digital world.",
    },
    {
      icon: <FaBullhorn />,
      title: "Advertise",
      text: "Promote your brand with unique advertising spaces that connect directly with the community.",
    },
    {
      icon: <FaCoins />,
      title: "Earn Rewards",
      text: "Participate in community activities and unlock opportunities as the ecosystem continues to grow.",
    },
    {
      icon: <FaGlobeAfrica />,
      title: "Expand Together",
      text: "Help shape the future of Forest Ad Land through collaboration, innovation and community support.",
    },
  ];

  return (
    <section
      id="ecosystem"
      className="bg-[#08150E] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-emerald-400 font-semibold uppercase tracking-[5px]">
            Ecosystem
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Everything You Need To Grow
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Forest Ad Land brings together digital ownership,
            advertising and community engagement into one
            ecosystem designed for long-term growth.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-3xl text-black mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {card.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Ecosystem;