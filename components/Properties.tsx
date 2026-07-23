"use client";

export default function Properties() {
  return (
    <section
      id="propiedades"
      className="relative py-24 md:py-36 overflow-hidden bg-[#1b2a41]"
    >
      {/* Resplandores de fondo */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#FF6600]/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#FF6600]/5 blur-[160px] rounded-full"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">

        {/* TÍTULO */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-[#FF6600] font-bold mb-4">
            Casayaa
          </p>

          <h2 className="text-[3.5rem] md:text-[5rem] font-extrabold text-white">
            Viviendas
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* VIVIENDA IZQUIERDA */}
          <a
            href="/propiedad-talavera"
            className="group flex flex-col h-full bg-[#182231] rounded-[40px] overflow-hidden border border-white/10 hover:border-[#FF6600]/60 shadow-premium hover:-translate-y-2 transition duration-500"
          >
            <div className="overflow-hidden relative">
              <div className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm px-4 py-2 rounded-full">
                VISTAS
              </div>

              <img
                src="/images/property/1%20(2).JPG"
                alt="Piso en Talavera"
                className="w-full h-[320px] md:h-[450px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="text-gray-400 text-base">
                  Talavera de la Reina
                </p>

                <span className="bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-4 py-2 rounded-full font-bold text-sm">
                  En venta
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Piso con vistas panorámicas
              </h3>

              <p className="text-4xl font-black text-[#FF6600] mb-4">
                190.000 €
              </p>

              <p className="text-sm md:text-base text-gray-400 mb-4">
                Amplia vivienda en una de las mejores zonas de Talavera de la
                Reina, con impresionantes vistas despejadas y múltiples
                posibilidades.
              </p>

              <div className="flex justify-end mt-auto pt-6">
                <div className="w-14 h-14 rounded-full bg-[#FF6600] text-white text-2xl flex items-center justify-center group-hover:translate-x-1 group-hover:scale-110 transition duration-300">
                  →
                </div>
              </div>
            </div>
          </a>

          {/* VIVIENDA CENTRAL */}
          <a
            href="/propiedad"
            className="group flex flex-col h-full bg-[#182231] rounded-[40px] overflow-hidden border border-white/10 hover:border-[#FF6600]/60 shadow-premium hover:-translate-y-2 transition duration-500"
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

            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <p className="text-gray-400 text-base">
                  Arenas de San Pedro (Ávila)
                </p>

                <span className="bg-red-400/10 text-red-400 border border-red-400/20 px-4 py-2 rounded-full font-bold text-sm">
                  Vendida
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Piso reformado en urbanización privada
              </h3>

              <p className="text-4xl font-black text-[#FF6600] mb-4">
                139.000 €
              </p>

              <p className="text-sm md:text-base text-gray-400 mb-4">
                Vivienda de 80 m² recientemente reformada en urbanización
                privada con piscina, rodeada de naturaleza y zonas ajardinadas.
                Dispone de 2 habitaciones, 1 baño, amplias terrazas y
                aparcamiento privado.
              </p>

              <div className="flex justify-end mt-auto pt-6">
                <div className="w-14 h-14 rounded-full bg-[#FF6600] text-white text-2xl flex items-center justify-center group-hover:translate-x-1 group-hover:scale-110 transition duration-300">
                  →
                </div>
              </div>
            </div>
          </a>

          {/* VIVIENDA DERECHA */}
          <a
            href="/finca-gredos"
            className="group flex flex-col h-full bg-[#182231] rounded-[40px] overflow-hidden border border-white/10 hover:border-[#FF6600]/60 shadow-premium hover:-translate-y-2 transition duration-500"
          >
            <div className="overflow-hidden">
              <img
                src="/images/finca/1.jpg"
                alt="Finca con olivar"
                className="w-full h-[320px] md:h-[450px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-3">
                <p className="text-gray-400">
                  Arenas de San Pedro
                </p>

                <span className="bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-4 py-2 rounded-full font-bold text-sm">
                  En venta
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Finca rústica con olivar y vistas a Gredos
              </h3>

              <p className="text-4xl font-black text-[#FF6600] mb-4">
                39.000 €
              </p>

              <p className="text-gray-400 mb-4">
                Magnífica finca rodeada de naturaleza, con olivos centenarios,
                excelentes vistas a la Sierra de Gredos y acceso por camino
                privado.
              </p>

              <div className="flex justify-end mt-auto pt-6">
                <div className="w-14 h-14 rounded-full bg-[#FF6600] text-white text-2xl flex items-center justify-center group-hover:translate-x-1 group-hover:scale-110 transition duration-300">
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
