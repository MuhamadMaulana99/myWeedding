import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "../assets/images/bersama.jpg";

const Hero = () => {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(name.replace(/\+/g, " "));
    }
  }, []);

  // Variasi animasi untuk elemen teks agar muncul berurutan (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  return (
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background dengan animasi zoom out perlahan */}
      <motion.div
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Wedding Background"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Overlay Gradasi Mewah */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <motion.p variants={itemVariants} className="text-rose-200 tracking-[0.5em] text-xs md:text-sm mb-4 uppercase">
          The Wedding Of
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="font-great-vibes text-7xl md:text-9xl text-white mb-6 drop-shadow-2xl"
        >
          Maulana & Hanifah
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-white/70 italic text-sm mb-3 font-light">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <div className="inline-block relative">
            <h2 className="text-2xl md:text-4xl font-serif text-white px-8 py-2 relative z-10">
              {guestName || "Tamu Undangan"}
            </h2>
            {/* Garis bawah dekoratif yang memanjang */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-2"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="#Couple"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent text-white border border-white/30 rounded-full overflow-hidden transition-all duration-500 hover:border-rose-400"
          >
            {/* Efek Hover Background Fill */}
            <span className="absolute inset-0 bg-rose-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            
            <span className="relative z-10 font-medium tracking-[0.2em] text-sm">BUKA UNDANGAN</span>
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative z-10 h-5 w-5"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Ornament Sudut (Opsional untuk kesan mewah) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-0 left-0 p-10 hidden md:block"
      >
        <div className="w-24 h-24 border-l border-b border-rose-200/30"></div>
      </motion.div>
    </section>
  );
};

export default Hero;