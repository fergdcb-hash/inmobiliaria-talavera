export default function PropiedadPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f3]">

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-8 pt-10 pb-20">

        {/* VOLVER */}
        <a
          href="/"
          className="inline-flex mb-10 bg-white px-6 py-3 rounded-2xl shadow-premium hover:scale-105 transition"
        >
          ← Volver
        </a>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* GALERIA */}
          <div>

            {/* PRINCIPAL */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl mb-6">

              <img
                src="/images/house1.jpg"
                alt="Casa"
                className="w-full h-[500px] md:h-[700px] object-cover"
              />

            </div>

            {/* MINI GALERIA */}
            <div className="grid grid-cols-3 gap-4">

              <img
                src="/images/house1.jpg"
                alt="Casa"
                className="rounded-[25px] h-[120px] object-cover cursor-pointer hover:opacity-80 transition"
              />

              <img
                src="/images/house2.jpg"
                alt="Casa"
                className="rounded-[25px] h-[120px] object-cover cursor-pointer hover:opacity-80 transition"
              />

              <img
                src="/images/house3.jpg"
                alt="Casa"
                className="rounded-[25px] h-[120px] object-cover cursor-pointer hover:opacity-80 transition"
              />

            </div>

          </div>

          {/* INFO */}
          <div>

            {/* BADGES */}
            <div className="flex gap-4 mb-6">

              <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                Exclusiva
              </div>

              <div className="bg-white px-5 py-2 rounded-full shadow-premium">
                Talavera de la Reina
              </div>

            </div>

            {/* TITULO */}
            <h1 className="text-[3rem] md:text-[5rem] leading-[1] font-bold text-gray-900 mb-6">

              Chalet moderno con jardín

            </h1>

            {/* PRECIO */}
            <p className="text-5xl md:text-6xl font-bold text-green-600 mb-10">
              699.900€
            </p>

            {/* DETALLES */}
            <div className="grid grid-cols-2 gap-6 mb-12">

              <div className="bg-white rounded-[30px] p-6 shadow-premium">

                <p className="text-gray-500 mb-2">
                  Habitaciones
                </p>

                <h3 className="text-3xl font-bold">
                  4
                </h3>

              </div>

              <div className="bg-white rounded-[30px] p-6 shadow-premium">

                <p className="text-gray-500 mb-2">
                  Baños
                </p>

                <h3 className="text-3xl font-bold">
                  3
                </h3>

              </div>

              <div className="bg-white rounded-[30px] p-6 shadow-premium">

                <p className="text-gray-500 mb-2">
                  Superficie
                </p>

                <h3 className="text-3xl font-bold">
                  250m²
                </h3>

              </div>

              <div className="bg-white rounded-[30px] p-6 shadow-premium">

                <p className="text-gray-500 mb-2">
                  Garaje
                </p>

                <h3 className="text-3xl font-bold">
                  Sí
                </h3>

              </div>

            </div>

            {/* DESCRIPCION */}
            <div className="bg-white rounded-[35px] p-8 shadow-premium mb-10">

              <h2 className="text-3xl font-bold mb-6">
                Descripción
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Chalet moderno ubicado en una de las mejores zonas de Talavera.
                Cuenta con amplios espacios, jardín privado, acabados premium y
                una iluminación natural espectacular.
              </p>

            </div>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-5">

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-2xl text-xl font-semibold shadow-lg transition">

                Contactar

              </button>

              <button className="bg-white hover:bg-gray-100 px-8 py-5 rounded-2xl text-xl font-semibold shadow-premium transition">

                Guardar vivienda

              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}