"use client";

import { MdRestaurant, MdTempleHindu, MdNightlife } from "react-icons/md";
import { useInView } from "react-intersection-observer";

export default function About() {
  const timeline = [
    {
      days: "Jours 1-3",
      city: "Osaka",
      icon: <MdRestaurant className="text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=400",
      highlights: ["Street Food", "Château d'Osaka", "Vie Nocturne"],
      description: "Découvrez l'énergie vibrante de la cuisine japonaise",
    },
    {
      days: "Jours 4-6",
      city: "Kyoto",
      icon: <MdTempleHindu className="text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400",
      highlights: ["Temples", "Quartier Geisha", "Jardins"],
      description: "Découvrez les traditions anciennes et les jardins zen",
    },
    {
      days: "Jours 7-10",
      city: "Tokyo",
      icon: <MdNightlife className="text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=400",
      highlights: ["Shibuya", "Mont Fuji", "Technologie"],
      description: "Explorez le futur dans la plus grande ville du monde",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-black via-black to-gray-900 text-white py-20 px-6 md:px-12"
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            À PROPOS DU VOYAGE
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-japan-gold to-transparent" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-28">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous avons préparé un itinéraire simple et pratique de 10 jours
                pour votre voyage au Japon. Vous visiterez trois villes :
              </p>
              <p className="text-japan-gold font-semibold text-lg">
                Osaka, Kyoto et Tokyo.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                Pas besoin de vous soucier des itinéraires, des horaires ou de
                trouver des lieux — tout est déjà organisé. Nous vous montrerons
                où aller, quoi voir et où manger, pour que vous puissiez
                simplement profiter du voyage.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progression du Voyage</span>
                <span className="text-japan-gold font-semibold">
                  10 Jours au Total
                </span>
              </div>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-japan-gold via-amber-500 to-japan-gold bg-[length:200%_100%] animate-shimmer" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Osaka</span>
                <span>Kyoto</span>
                <span>Tokyo</span>
              </div>
            </div>

            <div className="mt-12 relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-japan-gold transition-all duration-500 hover:shadow-2xl hover:shadow-japan-gold/20 group">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-japan-gold/20 flex items-center justify-center text-xl">
                  🗾
                </span>
                Votre Voyage
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <div className="text-3xl font-bold text-japan-gold mb-1">
                    3
                  </div>
                  <div className="text-xs text-gray-400">Villes</div>
                </div>
                <div className="text-center bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <div className="text-3xl font-bold text-japan-gold mb-1">
                    10
                  </div>
                  <div className="text-xs text-gray-400">Jours</div>
                </div>
                <div className="text-center bg-white/5 rounded-xl p-3 hover:bg-white/10 transition">
                  <div className="text-3xl font-bold text-japan-gold mb-1">
                    ∞
                  </div>
                  <div className="text-xs text-gray-400">Souvenirs</div>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-3 border border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl">🏯</span>
                    <span className="text-white font-semibold">Osaka</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 flex-1 px-1">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-japan-gold to-transparent"></div>
                    <span className="text-japan-gold text-sm">→</span>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-japan-gold"></div>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl">⛩️</span>
                    <span className="text-white font-semibold">Kyoto</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 flex-1 px-1">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-japan-gold to-transparent"></div>
                    <span className="text-japan-gold text-sm">→</span>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-japan-gold"></div>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xl">🗼</span>
                    <span className="text-white font-semibold">Tokyo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 relative">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border-l-4 border-japan-gold">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-japan-gold rounded-full flex items-center justify-center text-black font-bold">
                  "
                </div>

                <p className="text-gray-300 text-base italic leading-relaxed mb-3">
                  Le voyage de mille lieues commence toujours par un premier pas
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    — Proverbe Japonais
                  </span>
                  <span className="text-2xl">🌸</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden rounded-full z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-japan-gold via-white to-japan-gold" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-japan-gold to-transparent animate-pulse" />
            </div>

            <div className="space-y-10">
              {timeline.map((item, index) => {
                const { ref, inView } = useInView({
                  threshold: 0.3,
                  triggerOnce: true,
                });

                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`relative transition-all duration-700 ${
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="flex items-center gap-8">
                      {isEven && (
                        <div className="hidden md:flex flex-1 justify-end">
                          <div className="inline-flex items-center gap-2 bg-japan-gold/20 backdrop-blur-sm px-6 py-3 rounded-full border border-japan-gold/50">
                            <div className="w-2 h-2 rounded-full bg-japan-gold animate-pulse" />
                            <span className="text-white font-semibold">
                              {item.days}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="absolute left-8 md:relative md:left-auto flex-shrink-0 z-30">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-japan-gold to-amber-600 flex items-center justify-center ring-4 ring-black shadow-lg">
                            {item.icon}
                          </div>
                          <div className="absolute inset-0 rounded-full bg-japan-gold animate-ping opacity-30" />
                        </div>
                      </div>

                      {!isEven && (
                        <div className="hidden md:flex flex-1 justify-start">
                          <div className="inline-flex items-center gap-2 bg-japan-gold/20 backdrop-blur-sm px-6 py-3 rounded-full border border-japan-gold/50">
                            <div className="w-2 h-2 rounded-full bg-japan-gold animate-pulse" />
                            <span className="text-white font-semibold">
                              {item.days}
                            </span>
                          </div>
                        </div>
                      )}

                      <div
                        className={`flex-1 pl-20 md:pl-0 ${
                          !isEven ? "md:order-first" : ""
                        }`}
                      >
                        <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-japan-gold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-japan-gold/20">
                          <div className="md:hidden absolute top-4 right-4 z-10 bg-japan-gold/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs text-black font-bold">
                              {item.days}
                            </span>
                          </div>

                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.city}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-4xl font-bold text-white group-hover:text-japan-gold transition-colors">
                                {item.city}
                              </h3>
                              <div className="mt-2 h-1 w-16 bg-japan-gold rounded-full" />
                            </div>
                          </div>

                          <div className="p-5 space-y-3">
                            <p className="text-sm text-gray-300 italic">
                              {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {item.highlights.map((highlight, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-japan-gold/20 text-japan-gold border border-japan-gold/30 hover:bg-japan-gold/30 transition-colors cursor-default"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent pointer-events-none" />
    </section>
  );
}
