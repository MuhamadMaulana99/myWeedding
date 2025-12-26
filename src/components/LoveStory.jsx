import React from "react";

const LoveStory = () => {
  const milestones = [
    {
      date: "20 Jun 2025",
      title: "Pertemuan Pertama",
      description:
        "Bertemu di kampus Universitas Lampung, awal dari segalanya.",
    },
    {
      date: "20 Sep 2026",
      title: "Mulai Hubungan",
      description:
        "Resmi berpacaran setelah perjuangan menyelesaikan kuliah bersama.",
    },
    {
      date: "20 Jan 2027",
      title: "Tunangan",
      description:
        "Mengikat janji suci dalam acara tunangan yang hangat di Bali.",
    },
    {
      date: "20 Agst 2027",
      title: "Pernikahan",
      description: "Menyambut babak baru kehidupan di Ubud, Bali.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="font-great-vibes text-5xl text-rose-600 mb-4">
            Perjalanan Cinta Kami
          </h2>
          <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Garis Tengah (Hanya muncul di Desktop) */}
          <div className="absolute left-1/2 hidden md:block h-full w-0.5 bg-rose-200 transform -translate-x-1/2"></div>

          {/* Garis Samping (Hanya muncul di Mobile) */}
          <div className="absolute left-4 md:hidden h-full w-0.5 bg-rose-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer untuk Desktop agar zigzag */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Bulatan Timeline */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow transform -translate-x-1/2 z-10"></div>

                {/* Konten Card */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow duration-300">
                    <span className="inline-block px-4 py-1 mb-3 bg-rose-600 text-white text-sm font-semibold rounded-full shadow-sm">
                      {milestone.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
