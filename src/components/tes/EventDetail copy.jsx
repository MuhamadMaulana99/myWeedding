import {
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// 1. Komponen Animasi Kelopak Bunga (Petals)
const Petal = ({ delay }) => {
  const randomX = Math.random() * 100;
  const randomDuration = 10 + Math.random() * 15;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0, x: `${randomX}vw`, rotate: 0 }}
      animate={{
        y: "110vh",
        opacity: [0, 0.6, 0.6, 0],
        rotate: 360,
        x: `${randomX + (Math.random() * 15 - 7)}vw`,
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      className="fixed pointer-events-none text-rose-200 z-0 select-none"
      style={{ fontSize: Math.random() * 15 + 15 }}
    >
      🌸
    </motion.div>
  );
};

// 2. Variasi Animasi Ikon
const iconVariants = {
  calendar: {
    animate: {
      y: [0, -4, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
    hover: { scale: 1.2, rotate: [-10, 10, 0], transition: { duration: 0.3 } },
  },
  clock: {
    animate: {
      rotate: 360,
      transition: { duration: 12, repeat: Infinity, ease: "linear" },
    },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  },
  map: {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 1.5, repeat: Infinity },
    },
    hover: {
      y: -5,
      scale: 1.2,
      transition: { type: "spring", stiffness: 400 },
    },
  },
};

const AnimatedIcon = ({ type, children }) => (
  <motion.div
    variants={iconVariants[type]}
    animate="animate"
    whileHover="hover"
    className="bg-rose-50 p-3 rounded-xl text-rose-500 shadow-inner flex items-center justify-center"
  >
    {children}
  </motion.div>
);

const EventDetail = () => {
  const events = [
    {
      title: "Akad Nikah",
      date: "Kamis, 08 Januari 2026",
      time: "08:00 - 09:00 WIB",
      location: "KUA Serpong, Tangerang Selatan",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=KUA+Serpong",
    },
    {
      title: "Resepsi",
      date: "Kamis, 08 Januari 2026",
      time: "09:30 - 12:00 WIB",
      location: "Resto Cisadane River Park, Banten",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Resto+Cisadane+River+Park",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-rose-50 overflow-hidden min-h-screen flex items-center">
      {/* Background Petals */}
      {[...Array(12)].map((_, i) => (
        <Petal key={i} delay={i * 3} />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-rose-600 mb-4">
            Detail Acara
          </h2>
          <div className="w-20 h-1 bg-rose-300 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-rose-200/40 border border-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-serif text-rose-700 mb-8 text-center italic border-b border-rose-100 pb-4">
                  {event.title}
                </h3>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-5">
                    <AnimatedIcon type="calendar">
                      <FaCalendarAlt size={22} />
                    </AnimatedIcon>
                    <span className="text-gray-700 font-medium text-lg">
                      {event.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <AnimatedIcon type="clock">
                      <FaClock size={22} />
                    </AnimatedIcon>
                    <span className="text-gray-700 font-medium text-lg">
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-start gap-5">
                    <AnimatedIcon type="map">
                      <FaMapMarkerAlt size={22} />
                    </AnimatedIcon>
                    <span className="text-gray-600 italic leading-relaxed pt-1">
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tombol Tetap Ada dengan Efek Interaktif */}
              <motion.a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group w-full py-4 bg-rose-600 text-white rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-rose-300 transition-colors"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <span className="font-semibold tracking-wide text-lg">
                  Buka Google Maps
                </span>

                {/* Efek Shine saat Hover */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
