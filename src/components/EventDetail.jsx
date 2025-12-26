import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
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

// 2. Animasi Mengetik untuk Judul
const TypingText = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="font-great-vibes text-5xl md:text-6xl text-rose-600 mb-4 flex justify-center"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

// 3. Variasi Animasi Ikon
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
        <div className="text-center mb-16">
          <TypingText text="Detail Acara" />
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 0.5 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="h-1 bg-rose-300 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
                filter: "blur(10px)", // Efek blur awal
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)", // Menjadi tajam saat terlihat
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-rose-200/40 border border-white flex flex-col justify-between"
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.4 + 0.5 }}
                  className="text-3xl font-serif text-rose-700 mb-8 text-center italic border-b border-rose-100 pb-4"
                >
                  {event.title}
                </motion.h3>

                <div className="space-y-6 mb-10">
                  {/* Row Animasi Satu per satu */}
                  {[
                    {
                      icon: <FaCalendarAlt size={22} />,
                      text: event.date,
                      type: "calendar",
                    },
                    {
                      icon: <FaClock size={22} />,
                      text: event.time,
                      type: "clock",
                    },
                    {
                      icon: <FaMapMarkerAlt size={22} />,
                      text: event.location,
                      type: "map",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.4 + 0.6 + i * 0.1 }}
                      className="flex items-center gap-5"
                    >
                      <AnimatedIcon type={item.type}>{item.icon}</AnimatedIcon>
                      <span
                        className={`text-gray-700 font-medium text-lg ${
                          item.type === "map"
                            ? "italic font-normal text-base leading-relaxed"
                            : ""
                        }`}
                      >
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group w-full py-4 bg-rose-600 text-white rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-rose-300 transition-all"
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
