export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-36 overflow-hidden"
    >

      {/* FONDOS */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-green-100 blur-[140px] rounded-full opacity-60"></div>

      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-emerald-100 blur-[140px] rounded-full opacity-60"></div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-20">

          <div>

            <p className="text-green-600 font-semibold tracking-[0.2em] mb-5">
              SERVICIOS
            </p>

            <h2 className="text-[4.5rem] leading-[1] font-bold text-gray-900 max-w-4xl">
              Te ayudamos en todo el proceso
            </h2>

          </div>

          <button className="hidden lg:flex bg-white px-8 py-5 rounded-2xl shadow-premium text-lg font-semibold hover:scale-105 transition">
            Todos los servicios →
          </button>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-[#eef5e8] rounded-[45px] p-8 shadow-premium hover:-translate-y-2 transition duration-500">

            {/* IMAGE */}
            <div className="bg-white rounded-[35px] h-[260px] overflow-hidden mb-8">

              <img
                src="/images/service1.jpg"
                alt="Servicio"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            {/* CONTENT */}
            <div className="flex items-center justify-between mb-5">

              <h3 className="text-3xl font-bold text-green-700">
                Venta y alquiler
              </h3>

              <button className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition">
                →
              </button>

            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Encontramos el comprador o inquilino ideal para tu vivienda.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="group bg-[#f3ecff] rounded-[45px] p-8 shadow-premium hover:-translate-y-2 transition duration-500">

            {/* VIDEO */}
            <div className="bg-white rounded-[35px] h-[260px] overflow-hidden mb-8">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              >
                <source src="/images/service2.mp4" type="video/mp4" />
              </video>

            </div>

            {/* CONTENT */}
            <div className="flex items-center justify-between mb-5">

              <h3 className="text-3xl font-bold text-purple-700">
                Gestión integral
              </h3>

              <button className="w-14 h-14 rounded-full bg-purple-600 text-white text-2xl hover:scale-110 transition">
                →
              </button>

            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nos encargamos de todo el proceso para que no tengas preocupaciones.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="group bg-[#edf4ff] rounded-[45px] p-8 shadow-premium hover:-translate-y-2 transition duration-500">

            {/* IMAGE */}
            <div className="bg-white rounded-[35px] h-[260px] overflow-hidden mb-8">

              <img
                src="/images/service3.avif"
                alt="Servicio"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            {/* CONTENT */}
            <div className="flex items-center justify-between mb-5">

              <h3 className="text-3xl font-bold text-blue-700">
                Compra e inversión
              </h3>

              <button className="w-14 h-14 rounded-full bg-blue-600 text-white text-2xl hover:scale-110 transition">
                →
              </button>

            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Te ayudamos a invertir en propiedades con seguridad y rentabilidad.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}