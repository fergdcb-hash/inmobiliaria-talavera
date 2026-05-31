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
            Vivienda en Arenas de San Pedro
          </h2>

        </div>

        {/* VIVIENDA */}
        <a
              href="/propiedad"
               className="group block max-w-[900px] mx-auto bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500"
>

          {/* FOTO PRINCIPAL */}
          <div className="overflow-hidden">

            <img
              src="/images/property/1.jpg"
              alt="Vivienda"
              className="w-full h-[320px] md:h-[450px] object-cover group-hover:scale-105 transition duration-[2000ms]"
            />

          </div>

          {/* INFORMACIÓN */}
          <div className="p-4 md:p-5">

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

            <p className="text-sm md:text-base text-gray-600 mb-4 max-w-2xl">
              Vivienda de 80 m² recientemente reformada en urbanización privada
              con piscina, rodeada de naturaleza y zonas ajardinadas. Dispone de
              2 habitaciones, 1 baño, amplias terrazas y aparcamiento privado.
            </p>

            <div className="flex items-center justify-between">

              <p className="text-3xl md:text-4xl font-bold text-red-600">
                VENDIDA
              </p>

              <div className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl flex items-center justify-center group-hover:scale-110 transition">
                →
              </div>

            </div>

          </div>

        </a>

      </div>
    </section>
  );
}