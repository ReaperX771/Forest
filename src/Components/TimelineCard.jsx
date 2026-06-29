import { useEffect, useRef, useState } from "react";

const DefaultIcon = () => <span className="text-3xl">?</span>;

const TimelineCard = ({
  phase,
  title,
  description,
  icon: Icon = DefaultIcon,
  index = 0,
}) => {
  const cardRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex items-center justify-between mb-20 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      <div
        className={`w-full md:w-[44%] transition-all duration-1000 ${
          show
            ? "opacity-100 translate-x-0"
            : isLeft
            ? "-translate-x-20 opacity-0"
            : "translate-x-20 opacity-0"
        }`}
      >
        <div className="group relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-emerald-400 hover:shadow-[0_0_45px_rgba(16,185,129,.35)]">

          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <span className="relative inline-block rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
            {phase}
          </span>

          <h3 className="relative mt-5 text-3xl font-bold text-white">
            {title}
          </h3>

          <p className="relative mt-5 leading-8 text-gray-300">
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-20 my-8 md:my-0">

        <div className="absolute inset-0 rounded-full bg-emerald-500 blur-2xl opacity-40 animate-pulse"></div>

        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#07120C] bg-emerald-500 text-3xl text-black transition duration-500 hover:rotate-12 hover:scale-110 shadow-[0_0_35px_rgba(16,185,129,.8)]">
          <Icon />
        </div>

      </div>

      <div className="hidden md:block w-[44%]"></div>
    </div>
  );
};

export default TimelineCard;