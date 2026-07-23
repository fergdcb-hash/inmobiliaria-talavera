"use client";

export default function Reviews() {
  return (
    <section
      id="opiniones"
      className="relative py-28 bg-[#1b2a41] overflow-hidden"
    >
      {/* Luces de fondo */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#FF6600]/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FF6600]/5 blur-[180px] rounded-full"></div>

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">

        {/* Título */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-[#FF6600] font-bold mb-4">
            CASAYAA
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Opiniones
          </h2>

          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Conoce cómo será la sección de opiniones. Sustituye estas tarjetas
            por reseñas reales cuando las tengas.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#141b2d] border border-white/10 rounded-[30px] p-8 hover:border-[#FF6600]/40 transition">
            <div className="text-[#FF6600] text-2xl mb-5">
              ★★★★★
            </div>

            <p className="text-gray-300 leading-8">
              Aquí irá una reseña de un cliente cuando empieces a recibir opiniones.
            </p>

            <div className="mt-8">
              <h3 className="text-white font-bold text-lg">
                Nombre del cliente
              </h3>

              <p className="text-gray-500">
                Talavera de la Reina
              </p>
            </div>
          </div>

          <div className="bg-[#141b2d] border border-white/10 rounded-[30px] p-8 hover:border-[#FF6600]/40 transition">
            <div className="text-[#FF6600] text-2xl mb-5">
              ★★★★★
            </div>

            <p className="text-gray-300 leading-8">
              Aquí irá otra opinión cuando dispongas de testimonios auténticos.
            </p>

            <div className="mt-8">
              <h3 className="text-white font-bold text-lg">
                Nombre del cliente
              </h3>

              <p className="text-gray-500">
                Arenas de San Pedro
              </p>
            </div>
          </div>

          <div className="bg-[#141b2d] border border-white/10 rounded-[30px] p-8 hover:border-[#FF6600]/40 transition">
            <div className="text-[#FF6600] text-2xl mb-5">
              ★★★★★
            </div>

            <p className="text-gray-300 leading-8">
              Esta tarjeta está preparada para añadir una valoración real más adelante.
            </p>

            <div className="mt-8">
              <h3 className="text-white font-bold text-lg">
                Nombre del cliente
              </h3>

              <p className="text-gray-500">
                Ávila
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}