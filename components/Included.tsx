import { FiUsers, FiMapPin } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";
import { MdHotel } from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";

export default function Included() {
  const services = [
    {
      icon: <FiUsers className="text-4xl text-japan-gold" />,
      title: "Guides",
      description: "2 guides exceptionnels qui connaissent tout sur le Japon !",
    },
    {
      icon: <IoAirplaneOutline className="text-4xl text-japan-gold" />,
      title: "Vols",
      description: "Itinéraires :\nMoscou — Osaka\nTokyo — Moscou",
    },
    {
      icon: <BiTransfer className="text-4xl text-japan-gold" />,
      title: "Transferts",
      description: "De l'aéroport aux hôtels",
    },
    {
      icon: <MdHotel className="text-4xl text-japan-gold" />,
      title: "Hôtels",
      description:
        "Hébergement confortable\n2 personnes par chambre\n(petits-déjeuners inclus)",
    },
  ];

  return (
    <section
      id="included"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-12"
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            CE QUI EST INCLUS
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-japan-gold to-transparent" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-japan-gold hover:bg-white/10 transition group"
            >
              <div className="mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Toute la logistique est gérée pour vous, afin que vous puissiez vous
            concentrer sur la découverte de la beauté et de la culture du Japon.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
    </section>
  );
}
