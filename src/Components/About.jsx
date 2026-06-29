import about from "../assets/Images/Abou.jpg";
import { FaTree, FaBullhorn, FaSeedling } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#07120C] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-emerald-400 font-semibold uppercase tracking-[6px]">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Welcome to Forest Ad Land
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Forest Ad Land is a community-driven digital ecosystem where
            innovation, advertising and virtual ownership come together to
            create limitless opportunities for everyone.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src={about}
              alt="Forest Ad Land"
              className="rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>

          <div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Build the Future Inside the Forest
            </h3>

            <p className="text-gray-300 leading-8 mb-10">
              Forest Ad Land creates a unique digital environment where
              businesses, creators and communities can connect through
              virtual land ownership, advertising opportunities and a
              growing ecosystem designed for long-term sustainability.
            </p>

            <div className="grid gap-6">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-2xl text-black">
                    <FaTree />
                  </div>

                  <div>

                    <h4 className="text-white text-xl font-semibold">
                      Own Digital Land
                    </h4>

                    <p className="text-gray-400 mt-2">
                      Secure your place inside an expanding virtual forest
                      ecosystem built for growth.
                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-2xl text-black">
                    <FaBullhorn />
                  </div>

                  <div>

                    <h4 className="text-white text-xl font-semibold">
                      Advertise Your Brand
                    </h4>

                    <p className="text-gray-400 mt-2">
                      Reach an engaged community through immersive digital
                      advertising experiences.
                    </p>

                  </div>

                </div>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-2xl text-black">
                    <FaSeedling />
                  </div>

                  <div>

                    <h4 className="text-white text-xl font-semibold">
                      Grow Together
                    </h4>

                    <p className="text-gray-400 mt-2">
                      Become part of a thriving ecosystem where community
                      participation drives long-term success.
                    </p>

                  </div>

                </div>

              </div>

            </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default About;