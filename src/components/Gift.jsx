import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Gift = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const bankAccounts = [
    {
      bank: "BCA",
      name: "Muhamad Maulana",
      number: "4971419797",
    },
    {
      bank: "BSI",
      name: "Siti Hanifah Fauziyyah",
      number: "7314738645",
    },
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <motion.section
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Judul */}
        <motion.h2
          className="font-great-vibes text-4xl text-center text-rose-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Amplop Digital
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih:
        </motion.p>

        {/* List Rekening */}
        <motion.div
          className="space-y-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bankAccounts.map((account, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
              className="bg-rose-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-rose-600 mb-3">
                {account.bank}
              </h3>

              <div className="space-y-2">
                <p>
                  Atas Nama:{" "}
                  <span className="font-medium">{account.name}</span>
                </p>

                <div className="flex justify-between items-center">
                  <p>
                    No. Rekening:{" "}
                    <span className="font-medium">{account.number}</span>
                  </p>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() =>
                      copyToClipboard(
                        account.number.replace(/\s/g, ""),
                        index
                      )
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      copiedIndex === index
                        ? "bg-green-100 text-green-600"
                        : "bg-rose-600 text-white hover:bg-rose-700"
                    }`}
                  >
                    {copiedIndex === index ? (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center gap-2"
                      >
                        <FaCheck /> Tersalin
                      </motion.span>
                    ) : (
                      <>
                        <FaCopy /> Salin
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gift;
