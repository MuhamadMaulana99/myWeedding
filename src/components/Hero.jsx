import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "../assets/images/hero-bg.jpg";

const Hero = () => {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    // Mengambil parameter "to" dari URL (contoh: ?to=Nama+Tamu)
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(name);
    }
  }, []);
  // console.log(guestName, "guestName");

  // http://localhost:3000/?to=Maulana
  // http://localhost:3000/?to=Wahyu%20%26%20Andini#Couple

  return (
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
    >
      {/* Gambar Background */}
      <img
        src={heroBg}
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Konten Tengah */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-rose-200 text-sm md:text-lg mb-2 tracking-[0.3em] uppercase">
            The Wedding Of
          </p>
          <h1 className="font-great-vibes text-6xl md:text-8xl text-white mb-4 drop-shadow-2xl">
            Maulana & Hanifah
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 tracking-widest font-light">
            08 . 01 . 2025
          </p>
        </motion.div>

        {/* Seksi Nama Tamu Dinamis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8 text-white"
        >
          <p className="text-sm italic opacity-80 mb-2">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="text-2xl md:text-3xl font-bold bg-white/10 py-2 px-6 rounded-lg backdrop-blur-md border border-white/20 inline-block">
            {guestName || "Tamu Undangan"}
          </h2>
        </motion.div>

        <motion.a
          href="#Couple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all shadow-xl font-semibold group"
        >
          <span>Buka Undangan</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </motion.a>
      </div>

      {/* Panah ke Bawah */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/70 text-2xl"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
