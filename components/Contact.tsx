"use client";

import { useState } from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire envoyé:", formData);
    alert("Message envoyé ! (Ceci est une démo)");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-white text-3xl font-bold mb-2 text-center">
            Envie de nous rejoindre,
          </h2>
          <p className="text-white/80 text-center mb-8">
            mais vous avez encore des questions ?
          </p>

          <h3 className="text-white text-lg font-semibold mb-4">
            Laissez-nous un message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-japan-gold transition"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Numéro de téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-japan-gold transition"
              required
            />

            <textarea
              name="comment"
              placeholder="Commentaire"
              value={formData.comment}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-japan-gold transition resize-none"
            />

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-japan-gold hover:text-white transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white">
            <BiWorld className="text-2xl" />
            <span className="text-sm font-semibold tracking-wider">
              VOYAGES JAPON
            </span>
          </div>

          <div className="flex items-center gap-6 text-white text-sm">
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

          <div className="flex items-center gap-4 text-white">
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

          <button className="px-6 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition">
            Réserver
          </button>
        </div>
      </footer>
    </section>
  );
}
