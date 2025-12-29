import { FaInstagram } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import madeft from "../assets/images/muslim.jpg";
import putuft from "../assets/images/muslimah.jpg";

const CoupleProfile = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Efek Parallax untuk bingkai & dekorasi
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotateBlob = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const groomInstagram = "https://www.instagram.com/muhamad_maulana00";
  const brideInstagram = "https://www.instagram.com/shf0702";

  return (
    <section
      ref={containerRef}
      className="py-28 px-6 bg-[#fcfaf8] overflow-hidden relative"
      id="Couple"
    >
      {/* Background Ornamen Artistik */}
      <motion.div
        style={{ y: yParallaxSlow, rotate: rotateBlob }}
        className="absolute -top-10 -left-20 opacity-[0.07] pointer-events-none"
      >
        <svg width="500" height="500" viewBox="0 0 200 200">
          <path
            fill="#BE123C"
            d="M45.2,-78.3C58.3,-71.2,68.4,-58.2,75.4,-43.9C82.4,-29.6,86.2,-14.1,84.7,1.1C83.2,16.2,76.4,31.1,66.8,43.6C57.2,56.1,44.9,66.2,30.8,72.2C16.8,78.2,1,80.1,-15.1,77.5C-31.2,74.9,-47.5,67.8,-59.8,56.2C-72.1,44.6,-80.4,28.4,-84,11C-87.6,-6.4,-86.5,-25.1,-78.2,-40.4C-69.8,-55.8,-54.1,-67.7,-38.5,-73.8C-22.9,-79.8,-7.4,-80,-4.1,-84.9C10.7,-89.9,28.7,-85.4,45.2,-78.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-6 py-1.5 border-x border-rose-200 text-rose-400 text-[10px] tracking-[0.5em] uppercase mb-6">
              The Wedding Of
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="max-w-2xl mx-auto text-stone-500 font-light italic leading-relaxed text-sm md:text-base px-4"
          >
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya."
          </motion.p>
        </div>

        {/* Couple Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-20 lg:gap-10">
          {/* GROOM - Muhamad Maulana */}
          <div className="relative w-full max-w-sm">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <div className="relative mx-auto w-64 h-80 md:w-80 md:h-[420px] mb-10">
                {/* Parallax Frames */}
                <motion.div
                  style={{ y: yParallaxSlow }}
                  className="absolute -top-5 -left-5 w-full h-full border border-rose-200 z-0"
                />
                <div className="relative z-10 w-full h-full overflow-hidden shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={madeft}
                    alt="Muhamad Maulana"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                  />
                </div>
                <motion.div
                  style={{ y: yParallaxFast }}
                  className="absolute -bottom-5 -right-5 w-full h-full border border-stone-200 z-0"
                />
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-stone-800 tracking-wide mb-3">
                Muhamad Maulana
              </h3>
              <div className="space-y-1">
                <p className="text-rose-400 text-[10px] tracking-[0.3em] uppercase font-bold">
                  Putra Dari
                </p>
                <p className="text-stone-600 font-medium italic">
                  Alm. Bapak Hasim <br className="hidden md:block" /> & Alm.
                  Ibu Nursiah
                </p>
              </div>

              <motion.a
                href={groomInstagram}
                target="_blank"
                whileHover={{ scale: 1.2, color: "#e11d48" }}
                className="mt-6 inline-block text-stone-400 hover:text-rose-500 transition-colors"
              >
                <FaInstagram size={22} />
              </motion.a>
            </motion.div>
          </div>

          {/* Center Ampersand */}
          <div className="flex flex-col items-center">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="font-serif italic text-7xl md:text-9xl text-rose-100/60"
            >
              &
            </motion.span>
          </div>

          {/* BRIDE - Siti Hanifah Fuziyyah */}
          <div className="relative w-full max-w-sm">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              {/* Image Container dengan Frame yang Diperbaiki */}
              <div className="relative mx-auto w-64 h-80 md:w-80 md:h-[420px] mb-10">
                {/* Frame Belakang */}
                <motion.div
                  style={{ y: yParallaxFast }}
                  className="absolute -top-5 -right-5 w-full h-full border border-rose-200 z-0"
                />

                {/* Foto dengan Border Putih Tebal (Polaroid Style) */}
                <div className="relative z-10 w-full h-full p-3 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                  <div className="w-full h-full overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      src={putuft}
                      alt="Siti Hanifah Fuziyyah"
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Frame Depan */}
                <motion.div
                  style={{ y: yParallaxSlow }}
                  className="absolute -bottom-5 -left-5 w-full h-full border border-stone-200 z-0 opacity-50"
                />
              </div>

              {/* Nama & Detail dengan Perbaikan Class Name */}
              <h3 className="text-3xl md:text-4xl font-serif text-stone-800 tracking-wide mb-4 leading-tight">
                Siti Hanifah Fauziyyah
              </h3>

              <div className="space-y-2">
                <p className="text-rose-400 text-[11px] tracking-[0.4em] uppercase font-bold">
                  Putri Dari
                </p>
                <p className="text-stone-600 font-medium italic text-sm md:text-base">
                  Alm. Bapak Eddy & Alm. Ibu Omih
                </p>
              </div>

              {/* Tombol Instagram yang Diperhalus */}
              <motion.a
                href={brideInstagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#e11d48" }}
                className="mt-8 inline-block text-rose-400/70 hover:text-rose-600 transition-colors"
              >
                <FaInstagram size={26} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleProfile;
