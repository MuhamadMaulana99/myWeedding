import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "../assets/images/cincin.jpg";

const Hero = () => {
  const [guestName, setGuestName] = useState("");
  const { scrollY } = useScroll();

  // Efek Parallax untuk background agar terasa "dalam" (Mewah)
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(name.replace(/\+/g, " ")); // Membersihkan karakter + jika ada
    }
  }, []);

  return (
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background dengan Efek Parallax & Zoom Halus */}
      <motion.div 
        style={{ y: yBg }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Wedding Background"
          className="w-full h-full object-cover shadow-inner"
        />
      </motion.div>

      {/* Overlay Gradasi (Memberikan kesan sinematik) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 backdrop-blur-[1px]"></div>

      {/* Konten Tengah */}
      <motion.div 
        style={{ opacity: opacityContent }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        {/* Teks Atas */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-rose-200/80 text-xs md:text-sm mb-6 uppercase"
        >
          The Wedding Of
        </motion.p>

        {/* Nama Mempelai dengan Fade In Up */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-great-vibes text-7xl md:text-9xl text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
        >
          Maulana <span className="text-rose-300">&</span> Hanifah
        </motion.h1>

        {/* Tanggal dengan garis dekoratif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-[1px] w-8 md:w-12 bg-rose-300/50"></div>
          <p className="text-lg md:text-2xl text-white font-light tracking-[0.3em]">
            08 . 01 . 2025
          </p>
          <div className="h-[1px] w-8 md:w-12 bg-rose-300/50"></div>
        </motion.div>

        {/* Box Nama Tamu yang Elegan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-10"
        >
          <p className="text-sm italic text-white/70 mb-4 font-light">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <div className="relative inline-block group">
             {/* Animasi Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 to-gold-400/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <h2 className="relative text-2xl md:text-4xl font-serif text-white py-3 px-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              {guestName || "Tamu Undangan"}
            </h2>
          </div>
        </motion.div>

        {/* Tombol Buka Undangan */}
        <motion.a
          href="#Couple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(225, 29, 72, 1)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-rose-600/90 text-white rounded-full transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] font-medium tracking-wide group"
        >
          <span>BUKA UNDANGAN</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Indikator Scroll Down */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2">
        <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2.5 }}
            className="text-[10px] text-white tracking-[0.3em] uppercase"
        >
            Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-rose-400 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;