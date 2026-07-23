export default function Success() {
  return (
    <section className="relative py-24 bg-[#1b2a41] overflow-hidden">

      {/* Resplandores de fondo */}
      <div className="absolute top-0 left-1/3 w-[550px] h-[550px] bg-[#FF6600]/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FF6600]/5 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">

          <p className="text-[#FF6600] font-bold tracking-[0.25em] uppercase mb-4">
            Caso de éxito
          </p>

          <h2 className="text-5xl font-extrabold text-white">
            Ya hay propietarios que han confiado en Casayaa
          </h2>

          <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto">
            Nuestro objetivo es vender cada vivienda al mejor precio posible,
            con un servicio cercano, transparente y sin comisiones abusivas.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] shadow-2xl overflow-hidden">

          <img
            src="/images/property/1.jpg"
            alt="Vivienda vendida"
            className="w-full h-full min-h-[500px] object-cover"
          />

          <div className="p-10">

            <span className="inline-block bg-red-500/15 text-red-400 px-5 py-2 rounded-full font-bold mb-6">
              VENDIDA
            </span>

            <h3 className="text-4xl font-extrabold text-white mb-6">
              Piso reformado en Arenas de San Pedro
            </h3>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Esta vivienda fue comercializada por Casayaa ofreciendo un
              acompañamiento completo durante todo el proceso. Desde la
              valoración inicial hasta la firma, el objetivo fue conseguir una
              venta segura, rápida y con la máxima transparencia para ambas
              partes.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Estado
                </p>

                <p className="text-3xl font-extrabold text-[#FF6600]">
                  Vendida
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Zona
                </p>

                <p className="text-3xl font-extrabold text-white">
                  Arenas
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Servicio
                </p>

                <p className="text-3xl font-extrabold text-white">
                  Venta
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Atención
                </p>

                <p className="text-3xl font-extrabold text-white">
                  Personalizada
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
