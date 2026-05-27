export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-36 overflow-hidden"
    >

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">

          <div>

            <p className="text-green-600 font-semibold tracking-[0.2em] mb-5">
              SERVICIOS
            </p>

            <h2 className="text-[3rem] md:text-[4.5rem] leading-[1] font-bold text-gray-900 max-w-4xl">
              Te ayudamos en todo el proceso
            </h2>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-[#eef5e8] rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium">

            <div className="bg-white rounded-[30px] h-[220px] md:h-[260px] overflow-hidden mb-8">

              <img
                src="/images/service1.jpg"
                alt="Servicio"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            <div className="flex items-center justify-between mb-5">

              <h3 className="text-2xl md:text-3xl font-bold text-green-700">
                Venta y alquiler
              </h3>

            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Encontramos el comprador o inquilino ideal para tu vivienda.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="group bg-[#f3ecff] rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium">

            <div className="bg-white rounded-[30px] h-[220px] md:h-[260px] overflow-hidden mb-8">

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

            <div className="flex items-center justify-between mb-5">

              <h3 className="text-2xl md:text-3xl font-bold text-purple-700">
                Gestión integral
              </h3>

            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Nos encargamos de todo el proceso para que no tengas preocupaciones.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="group bg-[#edf4ff] rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium">

            <div className="bg-white rounded-[30px] h-[220px] md:h-[260px] overflow-hidden mb-8">

              <img
                src="/images/service3.avif"
                alt="Servicio"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            <div className="flex items-center justify-between mb-5">

              <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
                Compra e inversión
              </h3>

            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Te ayudamos a invertir en propiedades con seguridad y rentabilidad.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}