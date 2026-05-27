export default function Valuation() {
  return (
    <section className="relative bg-[#eef5e8] py-40 overflow-hidden">

      {/* LUCES */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-200 blur-[140px] rounded-full opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100 blur-[140px] rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* IZQUIERDA */}
        <div>

          <p className="text-green-600 font-semibold text-lg mb-5 tracking-[0.2em]">
            VALORACIÓN GRATUITA
          </p>

          <h2 className="text-[4rem] md:text-[5rem] leading-[1] font-bold text-gray-900 mb-10">
            Descubre cuánto vale tu vivienda
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed mb-14 max-w-2xl">
            Nuestros expertos analizarán tu vivienda y te ofrecerán una valoración profesional basada en el mercado actual.
          </p>

          {/* BENEFICIOS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-[30px] p-6 shadow-premium">
              <p className="text-xl font-semibold text-gray-800">
                ✅ Valoración gratuita
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-6 shadow-premium">
              <p className="text-xl font-semibold text-gray-800">
                ✅ Máxima visibilidad
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-6 shadow-premium">
              <p className="text-xl font-semibold text-gray-800">
                ✅ Asesoramiento experto
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-6 shadow-premium">
              <p className="text-xl font-semibold text-gray-800">
                ✅ Trato personalizado
              </p>
            </div>

          </div>

        </div>

        {/* DERECHA */}
        <div className="relative">

          {/* FORMULARIO */}
          <div className="bg-white rounded-[45px] p-10 shadow-2xl relative z-10">

            <h3 className="text-4xl font-bold text-gray-900 mb-10">
              Solicita tu valoración
            </h3>

            <div className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Nombre"
                className="p-5 rounded-2xl border border-gray-200 text-xl outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Teléfono"
                className="p-5 rounded-2xl border border-gray-200 text-xl outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Zona de la vivienda"
                className="p-5 rounded-2xl border border-gray-200 text-xl outline-none focus:border-green-500"
              />

              <textarea
                placeholder="Cuéntanos sobre tu vivienda"
                className="p-5 rounded-2xl border border-gray-200 text-xl h-40 outline-none focus:border-green-500"
              />

              <button className="bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl text-2xl font-semibold shadow-xl transition">

                Solicitar valoración

              </button>

            </div>

          </div>

          {/* CARD FLOTANTE */}
          <div className="absolute -bottom-10 -right-10 bg-white rounded-[35px] p-6 shadow-2xl w-[260px]">

            <p className="text-gray-500 mb-2">
              Tiempo medio de venta
            </p>

            <h3 className="text-5xl font-bold text-green-600">
              21 días
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}