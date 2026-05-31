"use client";

export default function Properties() {
  return (
    <section
      id="propiedades"
      className="py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">

        {/* HEADER */}
        <div className="mb-16 md:mb-20">

          <p className="text-green-600 font-semibold tracking-[0.2em] mb-5">
            PROPIEDAD DESTACADA
          </p>

          <h2 className="text-[3rem] md:text-[4.5rem] leading-[1] font-bold text-gray-900 max-w-4xl">
            Vivienda exclusiva en Talavera
          </h2>

        </div>

        {/* VIVIENDA */}
        <a
          href="/propiedad"
          className="group block bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500"
        >

          {/* FOTO PRINCIPAL */}
          <div className="overflow-hidden">
            <img
              src="/images/property/1.png"
              alt="Vivienda"
              className="w-full h-[350px] md:h-[500px] object-cover group-hover:scale-105 transition duration-[2000ms]"
            />
          </div>

          {/* INFORMACIÓN */}
          <div className="p-6 md:p-8">

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

              <p className="text-gray-500 text-lg">
                Talavera de la Reina
              </p>

              <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                Exclusiva
              </span>

            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chalet moderno
            </h3>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Vivienda de alta calidad con amplios espacios,
              acabados premium, jardín privado y zonas exteriores.
            </p>

            <div className="flex items-center justify-between">

              <p className="text-4xl md:text-5xl font-bold text-green-600">
                699.900€
              </p>

              <div className="w-16 h-16 rounded-full bg-green-600 text-white text-3xl flex items-center justify-center group-hover:scale-110 transition">
                →
              </div>

            </div>

          </div>

        </a>

      </div>
    </section>
  );
}