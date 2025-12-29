import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "../assets/images/cincin.jpg";

const Hero = () => {
  const [guestName, setGuestName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 1. Logika Pengambilan Nama Tamu dari URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(name.replace(/\+/g, " "));
    }

    // 2. Logika Countdown Timer (Set tanggal pernikahan di sini)
    const targetDate = new Date("2026-01-08T08:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 3. Kontrol Musik
  const handleOpenInvitation = () => {
    const audio = document.getElementById("bgMusic");
    if (audio) {
      audio.play().then(() => setIsPlaying(true)).catch(e => console.log("Autoplay blocked"));
    }
    // Scroll ke section berikutnya
    document.getElementById("Couple")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMusic = () => {
    const audio = document.getElementById("bgMusic");
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Variasi Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section id="Hero" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Background Animasi */}
      <motion.div
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-60" />
      </motion.div>

      {/* Overlay Gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0a0a0a]"></div>

      {/* Konten Utama */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <motion.p variants={itemVariants} className="text-rose-200 tracking-[0.5em] text-xs md:text-sm mb-4 uppercase font-light">
          The Wedding Of
        </motion.p>

        <motion.h1 variants={itemVariants} className="font-great-vibes text-6xl md:text-8xl text-white mb-8 drop-shadow-2xl">
          Maulana & Hanifah
        </motion.h1>

        {/* Countdown Timer UI */}
        <motion.div variants={itemVariants} className="flex justify-center gap-3 md:gap-6 mb-10">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-4 rounded-xl min-w-[60px] md:min-w-[80px]">
              <span className="text-xl md:text-3xl font-serif text-white">{item.value}</span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-tighter text-rose-300">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-white/70 italic text-sm mb-3 font-light">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <div className="inline-block relative">
            <h2 className="text-2xl md:text-4xl font-serif text-white px-8 py-2 relative z-10">
              {guestName || "Tamu Undangan"}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-2"
            />
          </div>
        </motion.div>

        {/* Tombol Buka */}
        <motion.div variants={itemVariants}>
          <button
            onClick={handleOpenInvitation}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent text-white border border-white/30 rounded-full overflow-hidden transition-all duration-500 hover:border-rose-400"
          >
            <span className="absolute inset-0 bg-rose-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 font-medium tracking-[0.2em] text-sm">BUKA UNDANGAN</span>
            <motion.svg
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative z-10 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Music Button */}
      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={toggleMusic}
            className="fixed bottom-8 right-8 z-50 p-4 bg-rose-600/60 backdrop-blur-lg rounded-full text-white shadow-2xl border border-white/20"
          >
            <div className={isPlaying ? "animate-spin-slow" : ""}>
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ornament Corner */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-rose-200/20 m-8 hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-rose-200/20 m-8 hidden md:block"></div>
    </section>
  );
};

export default Hero;