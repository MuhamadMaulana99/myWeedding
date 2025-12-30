import { motion } from "framer-motion";


const FallingPetals = () => {
const petalVariants = [
    { color: "#e11d48", scale: 0.4 }, // Rose 600 (Merah Dominan)
    { color: "#be123c", scale: 0.6 }, // Rose 700 (Merah Tua)
    { color: "#fb7185", scale: 0.3 }, // Rose 400 (Pink Merah)
    { color: "#9f1239", scale: 0.5 }, // Rose 800 (Maroon halus)
    { color: "#fda4af", scale: 0.2 }, // Rose 300 (Aksen terang)
  ];

  // Jumlah diperbanyak menjadi 45 agar terlihat "banyak"
  const petals = Array.from({ length: 100 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {petals.map((_, i) => {
        const variant = petalVariants[i % petalVariants.length];

        return (
          <motion.div
            key={i}
            initial={{
              top: "-5%",
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              opacity: 0,
            }}
            animate={{
              top: "105%",
              // Gerakan horizontal yang sangat halus agar tidak terlihat kaku
              left: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100 + (Math.random() > 0.5 ? 5 : -5)}%`,
              ],
              rotate: [0, 45, 90, 180],
              opacity: [0, 0.4, 0.4, 0], // Dibuat lebih transparan agar tidak "berisik"
            }}
            transition={{
              // Durasi sangat lambat (20 - 40 detik per kelopak)
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              // Delay sangat tersebar agar munculnya tidak barengan
              delay: Math.random() * 30,
              ease: "linear",
            }}
            className="absolute"
            style={{ scale: variant.scale }}
          >
            {/* SVG Kelopak Bunga Organik */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={variant.color}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                style={{ opacity: 0.6 }} // Tambahan transparansi pada path
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

const TypingText = ({ text, className }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ display: "flex", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const LoveStory = () => {
  const milestones = [
    {
      date: "29 Jun 2025",
      title: "Pertemuan Pertama",
      description:
        "Bertemu di Stok Expresso Tajug Serpong, awal dari segalanya.",
    },
    {
      date: "06 Sep 2025",
      title: "Mulai Serius",
      description:
        "Setelah melewati banyak proses, saya memberanikan diri menyampaikan keseriusan hubungan kepada keluarganya.",
    },
    {
      date: "13 Des 2025",
      title: "Tunangan",
      description:
        "Dalam suasana penuh haru dan kebahagiaan, kami melangsungkan prosesi lamaran di rumahnya sebagai langkah awal menuju pernikahan.",
    },
    {
      date: "08 Jan 2026",
      title: "Pernikahan",
      description: "Melangsungkan akad pernikahan secara sederhana namun khidmat bersama keluarga dan orang-orang terdekat.",
    },
  ];

  // Variasi untuk efek Blur-to-Focus dan Stagger
  const cardVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <FallingPetals />
      <div className="max-w-5xl mx-auto">
        {/* Judul dengan Typing Effect */}
        <div className="text-center mb-16">
          <TypingText
            text="Perjalanan Cinta Kami"
            className="font-great-vibes text-5xl text-rose-600 mb-4"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="h-1 bg-rose-300 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="relative">
          {/* Garis Tengah */}
          <div className="absolute left-1/2 hidden md:block h-full w-0.5 bg-rose-200 transform -translate-x-1/2"></div>
          <div className="absolute left-4 md:hidden h-full w-0.5 bg-rose-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                // Staggered timing: memberikan delay berdasarkan index
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-1/2"></div>

                {/* Bulatan Timeline dengan Pulse Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow transform -translate-x-1/2 z-10"
                ></motion.div>

                {/* Konten Card */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-xl transition-all duration-300"
                  >
                    <span className="inline-block px-4 py-1 mb-3 bg-rose-600 text-white text-sm font-semibold rounded-full shadow-sm">
                      {milestone.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
