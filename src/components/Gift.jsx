import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

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
      setCopiedIndex(index); // Set index yang disalin

      // Kembalikan ke ikon copy setelah 2 detik
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-rose-600 mb-6">
          Amplop Digital
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih:
        </p>

        <div className="space-y-6">
          {bankAccounts.map((account, index) => (
            <div key={index} className="bg-rose-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-rose-600 mb-3">
                {account.bank}
              </h3>
              <div className="space-y-2">
                <p>
                  Atas Nama: <span className="font-medium">{account.name}</span>
                </p>
                <div className="flex justify-between items-center">
                  <p>
                    No. Rekening:{" "}
                    <span className="font-medium">{account.number}</span>
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(account.number.replace(/\s/g, ""), index)
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      copiedIndex === index
                        ? "bg-green-100 text-green-600"
                        : "bg-rose-600 text-white hover:bg-rose-700 active:scale-95"
                    }`}
                  >
                    {copiedIndex === index ? (
                      <>
                        <FaCheck /> Tersalin
                      </>
                    ) : (
                      <>
                        <FaCopy /> Salin
                      </>
                    )}
                    {/* <FaCopy /> Salin */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gift;
