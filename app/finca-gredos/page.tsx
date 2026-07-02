"use client";

import { useState } from "react";

export default function PropertyPage() {
  const images = [
    "/images/finca/1.jpg",
    "/images/finca/2.jpg",
    "/images/finca/3.jpg",
    "/images/finca/4.jpg",
    "/images/finca/5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <div className="mb-8">
        <a
          href="/#propiedades"
          className="inline-flex items-center gap-2 text-[#C96E43] font-semibold hover:underline"
        >
          ← Volver a propiedades
        </a>
      </div>

      <p className="text-gray-500 mb-4">
        Inicio / Propiedades / Finca rústica con olivar
      </p>

      <div className="mb-10">
        <p className="text-[#0B5D4B] font-semibold tracking-[0.2em] mb-3">
          PROPIEDAD DESTACADA
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Finca rústica con olivar y vistas a Gredos
        </h1>

        <p className="text-2xl font-bold text-[#0B5D4B]">
          En venta
        </p>
      </div>

      <div className="relative">
        <img
          src={images[current]}
          alt="Finca rústica"
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
              current === index ? "w-10 bg-[#0B5D4B]" : "w-3 bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Tipo</p>
          <p className="text-3xl font-bold">Finca rústica</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Uso</p>
          <p className="text-3xl font-bold">Agrícola</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Entorno</p>
          <p className="text-3xl font-bold">Sierra de Gredos</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-premium">
          <p className="text-gray-500 mb-2">Acceso</p>
          <p className="text-3xl font-bold">Camino privado</p>
        </div>

      </div>

      <div className="mt-14 bg-white rounded-[35px] p-8 md:p-12 shadow-premium">

        <h2 className="text-3xl font-bold mb-6">
          Descripción
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          Descubre esta magnífica finca rústica situada en un entorno privilegiado,
          rodeada de naturaleza y con espectaculares vistas a la Sierra de Gredos.
          Es una oportunidad ideal para quienes buscan tranquilidad, privacidad
          y un espacio con múltiples posibilidades de uso.

          <br /><br />

          La finca cuenta con un cuidado olivar, amplias zonas despejadas y un
          acceso cómodo por camino privado, lo que facilita tanto su disfrute
          como su explotación agrícola o de ocio.

          <br /><br />

          Su ubicación ofrece un equilibrio perfecto entre naturaleza y cercanía
          a los principales servicios de la zona, convirtiéndola en una excelente
          opción como inversión o para disfrutar de un entorno único durante todo el año.

          <br /><br />

          Si buscas una finca con encanto, excelentes vistas y un gran potencial,
          esta puede ser la oportunidad que estabas esperando.
        </p>

      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-[#333333] mb-8">Ubicación</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-premium"><p className="text-gray-500">Ciudad</p><p className="text-2xl font-bold">Arenas de San Pedro</p></div>
          <div className="bg-white rounded-3xl p-6 shadow-premium"><p className="text-gray-500">Provincia</p><p className="text-2xl font-bold">Ávila</p></div>
          <div className="bg-white rounded-3xl p-6 shadow-premium"><p className="text-gray-500">Entorno</p><p className="text-2xl font-bold">Sierra de Gredos</p></div>
        </div>
        <div className="rounded-[35px] overflow-hidden shadow-2xl">
          <iframe src="https://www.google.com/maps?q=Sierra+de+Gredos&output=embed" width="100%" height="500" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
        <p className="text-gray-500 mt-6 text-center">La ubicación mostrada es aproximada para preservar la privacidad del propietario.</p>
      </section>


    </main>
  );
}
