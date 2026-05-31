"use client";

import { useState } from "react";

export default function PropertyPage() {
  const images = [
  "/images/property/1.png",
  "/images/property/2.jpeg",
  "/images/property/3.jpeg",
  "/images/property/4.png",
  "/images/property/5.jpeg",
  "/images/property/6.jpeg",
  "/images/property/7.jpeg",
  "/images/property/8.jpeg",
  "/images/property/9.jpeg",
];

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <div className="mb-10">

        <p className="text-green-600 font-semibold tracking-[0.2em] mb-3">
          PROPIEDAD DESTACADA
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Chalet moderno en Talavera
        </h1>

        <p className="text-2xl font-bold text-green-600">
          699.900€
        </p>

      </div>

      <div className="relative">

        <img
          src={images[current]}
          alt="Vivienda"
          className="w-full h-[450px] md:h-[750px] object-cover rounded-[35px] shadow-2xl"
        />

        <button
          onClick={prevImage}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl text-3xl hover:scale-110 transition"
        >
          ←
        </button>

        <button
          onClick={nextImage}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl text-3xl hover:scale-110 transition"
        >
          →
        </button>

      </div>

      <div className="flex justify-center mt-6 gap-2">

        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "w-10 bg-green-600"
                : "w-3 bg-gray-300"
            }`}
          />
        ))}

      </div>

      <div className="mt-14 grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Habitaciones</p>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Baños</p>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Superficie</p>
          <p className="text-3xl font-bold">220 m²</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Parcela</p>
          <p className="text-3xl font-bold">600 m²</p>
        </div>

      </div>

      <div className="mt-14 bg-white rounded-[35px] p-8 md:p-12 shadow-premium">

        <h2 className="text-3xl font-bold mb-6">
          Descripción
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          Espectacular chalet moderno situado en una de las mejores zonas de
          Talavera de la Reina. La vivienda dispone de amplios espacios,
          acabados de alta calidad, cocina totalmente equipada, jardín privado,
          piscina y zonas exteriores ideales para disfrutar en familia.
        </p>

      </div>

    </main>
  );
}