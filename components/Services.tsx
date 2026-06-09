export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-36 overflow-hidden bg-[#f6faf3]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">

          <div>
            <p className="text-[#0B5D4B] font-semibold tracking-[0.2em] mb-5">
              SERVICIOS
            </p>

            <h2 className="text-[3rem] md:text-[4.5rem] leading-[1] font-bold text-gray-900 max-w-4xl">
              Nos encargamos de todo el proceso
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-[#eef5e8] rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium flex flex-col">

            <div className="bg-white rounded-[30px] h-[220px] md:h-[260px] overflow-hidden mb-8">
              <img
                src="/images/service1.jpg"
                alt="Servicio"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-5">
              Venta Low-Cost con Servicio Premium
            </h3>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Valoración profesional del inmueble, reportaje fotográfico de alta calidad,
              posicionamiento destacado en portales inmobiliarios, soporte telefónico,
              gestión de visitas y asesoramiento continuo hasta la venta.
              Todo incluido por una tarifa fija (desde 2.499€ + IVA).
            </p>

            <a
              href="#contacto"
              className="mt-auto inline-flex items-center justify-center bg-[#0B5D4B] hover:bg-[#084738] text-white font-semibold px-6 py-3 rounded-2xl transition shadow-lg"
            >
              Quiero vender
            </a>

          </div>

          {/* CARD 2 */}
          <div className="group bg-[#f3ecff] rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium flex flex-col">

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

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Buscamos y filtramos a los inquilinos mediante estudios de solvencia rigurosos.
              <br />
              <br />
              Gestionamos las visitas, nos encargamos del contrato y velamos para que
              cobres tu renta puntualmente cada mes.
            </p>

            <a
              href="#contacto"
              className="mt-auto inline-flex items-center justify-center bg-[#0B5D4B] hover:bg-[#084738] text-white font-semibold px-6 py-3 rounded-2xl transition shadow-lg"
            >
              Quiero alquilar
            </a>

          </div>

          {/* CARD 3 */}
          <div className="group bg-[#edf4ff] rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium flex flex-col">

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

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Maximiza tus ingresos con el turismo rural o vacacional.
              Te asesoramos para conseguir la licencia turística.
              Nos encargamos de la limpieza, entrega de llaves, lavandería y
              optimización del precio en plataformas como Airbnb y Booking.
              Tú solo recibes los ingresos.
            </p>

            <a
              href="#contacto"
              className="mt-auto inline-flex items-center justify-center bg-[#0B5D4B] hover:bg-[#084738] text-white font-semibold px-6 py-3 rounded-2xl transition shadow-lg"
            >
              Quiero gestionar
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}