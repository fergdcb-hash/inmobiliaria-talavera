export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-36 overflow-hidden bg-[#1b2a41]"
    >
      {/* Resplandores de fondo */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF6600]/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6600]/5 blur-[160px] rounded-full"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">

        {/* TÍTULO */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-[#FF6600] font-bold mb-4">
            Casayaa
          </p>

          <h2 className="text-[3.5rem] md:text-[5rem] font-extrabold text-white">
            Servicios
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium flex flex-col">

            <div className="bg-black/20 rounded-[30px] h-[220px] md:h-[260px] overflow-hidden mb-8">
              <img
                src="/images/service1.jpg"
                alt="Venta Low Cost"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5">
              Venta Low-Cost con Servicio Premium
            </h3>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Valoración profesional del inmueble, reportaje fotográfico de alta calidad,
              posicionamiento destacado en portales inmobiliarios, soporte telefónico,
              gestión de visitas y asesoramiento continuo hasta la venta.
              Todo incluido por una tarifa fija (desde 2.499€ + IVA).
            </p>

            <a
              href="#contacto?tipo=vender"
              className="mt-auto inline-flex items-center justify-center bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:scale-105"
            >
              Quiero vender
            </a>

          </div>

          {/* CARD 2 */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium flex flex-col">

            <div className="bg-black/20 rounded-[30px] h-[220px] md:h-[260px] overflow-hidden mb-8">
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

            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5">
              Alquiler sin sorpresas
            </h3>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Buscamos y filtramos a los inquilinos mediante estudios de solvencia rigurosos.

              <br />
              <br />

              Gestionamos las visitas, nos encargamos del contrato y velamos para que
              cobres tu renta puntualmente cada mes.
            </p>

            <a
              href="#contacto?tipo=alquilar"
              className="mt-auto inline-flex items-center justify-center bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:scale-105"
            >
              Quiero alquilar
            </a>

          </div>

          {/* CARD 3 */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[35px] md:rounded-[45px] p-6 md:p-8 shadow-premium flex flex-col">

            <div className="bg-black/20 rounded-[30px] h-[220px] md:h-[260px] overflow-hidden mb-8">
              <img
                src="/images/service3.avif"
                alt="Gestión turística"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5">
              Gestión turística
            </h3>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Maximiza tus ingresos con el turismo rural o vacacional.
              Te asesoramos para conseguir la licencia turística.
              Nos encargamos de la limpieza, entrega de llaves, lavandería y
              optimización del precio en plataformas como Airbnb y Booking.
              Tú solo recibes los ingresos.
            </p>

            <a
              href="#contacto?tipo=gestionar"
              className="mt-auto inline-flex items-center justify-center bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold px-6 py-3.5 rounded-full transition shadow-lg hover:scale-105"
            >
              Quiero gestionar
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
