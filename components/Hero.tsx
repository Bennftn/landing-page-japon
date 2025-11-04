import { FiInstagram, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";

export default function Hero() {
  const highlights = [
    {
      image:
        "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=400",
      title: "Osaka",
      subtitle: "Capitale de la Street Food",
    },
    {
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400",
      title: "Kyoto",
      subtitle: "Temples Anciens",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=400",
      title: "Tokyo",
      subtitle: "Métropole Moderne",
    },
    {
      image:
        "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=400",
      title: "10 Jours",
      subtitle: "Expérience Complète",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400",
      title: "Authentique",
      subtitle: "Ramen & Cuisine",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2 text-white">
          <BiWorld className="text-2xl" />
          <span className="text-sm font-semibold tracking-wider">
            VOYAGES JAPON
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white text-sm">
          <a href="#about" className="hover:text-japan-gold transition">
            À Propos
          </a>
          <a href="#included" className="hover:text-japan-gold transition">
            Inclus
          </a>
          <a href="#contact" className="hover:text-japan-gold transition">
            Contact
          </a>
        </div>

        <button className="px-6 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition">
          Réserver
        </button>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6">
        <h1 className="text-white text-7xl md:text-9xl font-bold tracking-wider mb-12">
          JAPON
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative group w-36 h-44 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={item.title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-base font-bold mb-0.5">
                  {item.title}
                </p>
                <p className="text-white/80 text-xs">{item.subtitle}</p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-japan-gold transition-colors duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        <button className="bg-white text-black px-12 py-3 rounded-lg font-semibold hover:bg-japan-gold hover:text-white transition shadow-xl">
          Réservez Votre Voyage
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-4 text-white">
        <a href="#" className="hover:text-japan-gold transition">
          <FiInstagram className="text-xl" />
        </a>
        <a href="#" className="hover:text-japan-gold transition">
          <FiMail className="text-xl" />
        </a>
        <a href="#" className="hover:text-japan-gold transition">
          <BiWorld className="text-xl" />
        </a>
      </div>
    </section>
  );
}
