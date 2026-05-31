export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">

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

            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-5">
              Venta Low-Cost Premium con Servicio Premium
            </h3>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Fotografía profesional, posicionamiento en portales y gestión de visitas.
              <br />
              <br />
              Todo incluido por una tarifa fija.
              <br />
              <br />
              ¿Por qué pagar un 4% o 5% de comisión si el trabajo es el mismo?
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

            <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-5">
              Alquiler sin sorpresas
            </h3>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Filtramos a los inquilinos con estudios de solvencia rigurosos.
              <br />
              <br />
              Nos encargamos del contrato y de que cobres tu renta puntualmente cada mes.
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

            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-5">
              Gestión turística
            </h3>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Maximiza tus ingresos con el turismo rural o vacacional.
              <br />
              <br />
              Nos encargamos de la limpieza, entrega de llaves, lavandería y optimización del precio en Airbnb.
              <br />
              <br />
              Tú solo recibes los ingresos.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}