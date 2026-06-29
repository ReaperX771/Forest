import { FaDiscord, FaXTwitter, FaUsers } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const communities = [
  {
    icon: <FaXTwitter />,
    title: "X Community",
    description:
      "Stay updated with announcements, memes, giveaways and daily community engagement.",
    button: "Follow Us",
    color: "hover:border-sky-400",
  },
  {
    icon: <FaTelegramPlane />,
    title: "Telegram",
    description:
      "Chat directly with the community, ask questions and connect with other members.",
    button: "Join Chat",
    color: "hover:border-emerald-400",
  },
  {
    icon: <FaDiscord />,
    title: "Discord",
    description:
      "A dedicated place for future events, collaborations and exclusive community discussions.",
    button: "Coming Soon",
    color: "hover:border-purple-400",
  },
];

const Community = () => {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#06110A] py-28 px-6"
    >
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[180px]"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-600/10 blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-emerald-400 font-semibold">
            Community
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Join The Forest
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8">
            Forest Ad Land is built around transparency, collaboration and an
            active community. Become part of the journey and help shape the
            future of the ecosystem.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {communities.map((item, index) => (
            <div
              key={index}
              className={`group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(16,185,129,.25)] ${item.color}`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500 text-4xl text-black transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">

                {item.icon}

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

              <button className="mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-emerald-400">
                {item.button}
              </button>

            </div>
          ))}

        </div>

        <div className="mt-24 rounded-[40px] border border-emerald-500/20 bg-white/5 backdrop-blur-xl p-10 md:p-14">

          <div className="flex flex-col items-center text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500 text-5xl text-black shadow-[0_0_40px_rgba(16,185,129,.6)]">

              <FaUsers />

            </div>

            <h3 className="mt-8 text-4xl font-black text-white">
              Stronger Together
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              Every member contributes to the growth of Forest Ad Land. From
              sharing ideas to supporting new initiatives, our community is the
              foundation of everything we build.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Community;