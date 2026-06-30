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
          <p className="text-[#333333] font-semibold tracking-[0.2em] mb-5">
            VIVIENDAS DESTACADAS
          </p>

          <h2 className="text-[3rem] md:text-[4.5rem] leading-[1] font-bold text-[#333333] max-w-4xl">
            Viviendas en Talavera y Comarca
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* VIVIENDA IZQUIERDA */}
          <a
            href="/propiedad-talavera"
            className="group block bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500"
          >
            <div className="overflow-hidden">
              <img
                src="/images/property/1%20(2).JPG"
                alt="Piso en Talavera"
                className="w-full h-[320px] md:h-[450px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />
            </div>

            <div className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="text-gray-500 text-base">
                  Talavera de la Reina
                </p>

                <span className="bg-[#0B5D4B]/10 text-[#0B5D4B] px-4 py-2 rounded-full font-semibold">
                  Nueva
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Piso con vistas panorámicas
              </h3>

              <p className="text-sm md:text-base text-gray-600 mb-4">
                Amplia vivienda en una de las mejores zonas de Talavera de la
                Reina, con impresionantes vistas despejadas y múltiples
                posibilidades.
              </p>

              <div className="flex justify-end">
                <div className="w-14 h-14 rounded-full bg-[#0B5D4B] text-white text-2xl flex items-center justify-center group-hover:scale-110 transition">
                  →
                </div>
              </div>
            </div>
          </a>

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
          <a
            href="/finca-gredos"
            className="group block bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500"
          >
            <div className="overflow-hidden">
              <img
                src="/images/finca/1.jpg"
                alt="Finca con olivar"
                className="w-full h-[320px] md:h-[450px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <p className="text-gray-500">
                  Arenas de San Pedro
                </p>

                <span className="bg-[#0B5D4B]/10 text-[#0B5D4B] px-4 py-2 rounded-full font-semibold">
                  Nueva
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Finca rústica con olivar y vistas a Gredos
              </h3>

              <p className="text-gray-600 mb-4">
                Magnífica finca rodeada de naturaleza, con olivos centenarios,
                excelentes vistas a la Sierra de Gredos y acceso por camino
                privado.
              </p>

              <div className="flex justify-end">
                <div className="w-14 h-14 rounded-full bg-[#0B5D4B] text-white text-2xl flex items-center justify-center group-hover:scale-110 transition">
                  →
                </div>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}