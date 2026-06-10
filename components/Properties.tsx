"use client";

export default function Properties() {
  return (
    <section
      id="propiedades"
      className="py-24 md:py-36 overflow-hidden bg-[#F4F1EA]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">

        {/* HEADER */}
        <div className="mb-16 md:mb-20">

          <p className="text-[#0B5D4B] font-semibold tracking-[0.2em] mb-5">
            VIVIENDAS DESTACADAS
          </p>

          <h2 className="text-[3rem] md:text-[4.5rem] leading-[1] font-bold text-[#0B5D4B] max-w-4xl">
            Viviendas en Talavera y Comarca
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* VIVIENDA IZQUIERDA */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-premium">

            <div className="h-[320px] md:h-[450px] bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-xl font-semibold">
                Próximamente
              </p>
            </div>

            <div className="p-6">

              <p className="text-gray-400 mb-3">
                Nueva captación
              </p>

              <h3 className="text-2xl font-bold text-gray-400 mb-3">
                Próxima vivienda disponible
              </h3>

              <p className="text-gray-400">
                Estamos preparando una nueva vivienda para su publicación.
              </p>

            </div>

          </div>

          {/* VIVIENDA CENTRAL */}
          <a
            href="/propiedad"
            className="group block bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500"
          >

            <div className="overflow-hidden relative">
              
              <div className="absolute top-8 -right-14 rotate-45 bg-red-600 text-white font-bold py-2 px-20 z-20 shadow-lg">
                VENDIDA
              </div>
              
              <img
                src="/images/property/1.jpg"
                alt="Vivienda"
                className="w-full h-[320px] md:h-[450px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            <div className="p-5">

              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">

                <p className="text-gray-500 text-base">
                  Arenas de San Pedro (Ávila)
                </p>

                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
                  Vendida
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Piso reformado en urbanización privada
              </h3>

              <p className="text-sm md:text-base text-gray-600 mb-4">
                Vivienda de 80 m² recientemente reformada en urbanización
                privada con piscina, rodeada de naturaleza y zonas ajardinadas.
                Dispone de 2 habitaciones, 1 baño, amplias terrazas y
                aparcamiento privado.
              </p>

              <div className="flex justify-end">

                <div className="w-14 h-14 rounded-full bg-[#0B5D4B] text-white text-2xl flex items-center justify-center group-hover:scale-110 transition">
                  →
                </div>

              </div>

            </div>

          </a>

          {/* VIVIENDA DERECHA */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-premium">

            <div className="h-[320px] md:h-[450px] bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-xl font-semibold">
                Próximamente
              </p>
            </div>

            <div className="p-6">

              <p className="text-gray-400 mb-3">
                Nueva captación
              </p>

              <h3 className="text-2xl font-bold text-gray-400 mb-3">
                Próxima vivienda disponible
              </h3>

              <p className="text-gray-400">
                Estamos preparando una nueva vivienda para su publicación.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}