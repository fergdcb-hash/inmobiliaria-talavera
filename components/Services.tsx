export default function Services() {
  return (
    <section
      id="servicios"
      className="relative bg-[#f7f7f5] min-h-screen flex items-center overflow-hidden py-20"
    >

      <div className="max-w-[1600px] mx-auto px-10 relative z-10 w-full">

        <div className="flex items-end justify-between mb-20">

          <div>

            <p className="text-green-600 font-semibold text-lg mb-5 tracking-[0.2em]">
              SERVICIOS
            </p>

            <h2 className="text-[5rem] leading-[1] font-bold text-gray-900 max-w-4xl">
              Te ayudamos en todo el proceso
            </h2>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-[#eef5e8] rounded-[45px] p-8 shadow-premium">

            <div className="bg-white rounded-[35px] h-[260px] flex items-center justify-center mb-8 overflow-hidden">

              <img
                src="/images/service1.jpg"
                alt="Servicio"
                className="w-[85%] h-[85%] object-contain"
              />

            </div>

            <h3 className="text-3xl font-bold text-green-700 mb-5">
              Venta y alquiler
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Encontramos el comprador o inquilino ideal.
            </p>

          </div>

          <div className="bg-[#f3ecff] rounded-[45px] p-8 shadow-premium">

            <div className="bg-white rounded-[35px] h-[260px] overflow-hidden mb-8">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/service2.mp4" type="video/mp4" />
              </video>

            </div>

            <h3 className="text-3xl font-bold text-purple-700 mb-5">
              Gestión integral
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Gestionamos todo el proceso por ti.
            </p>

          </div>

          <div className="bg-[#edf4ff] rounded-[45px] p-8 shadow-premium">

            <div className="bg-white rounded-[35px] h-[260px] overflow-hidden mb-8">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/service3.mov" type="video/mp4" />
              </video>

            </div>

            <h3 className="text-3xl font-bold text-blue-700 mb-5">
              Compra e inversión
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Te ayudamos a invertir con seguridad.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}