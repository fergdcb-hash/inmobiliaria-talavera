export default function Success() {
  return (
    <section className="py-24 bg-[#F7F4EE]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-[#C96E43] font-semibold tracking-[0.2em] mb-4">
            CASO DE ÉXITO
          </p>

          <h2 className="text-5xl font-bold text-[#333333]">
            Ya hay propietarios que han confiado en Casayaa
          </h2>

          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Nuestro objetivo es vender cada vivienda al mejor precio posible,
            con un servicio cercano, transparente y sin comisiones abusivas.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[40px] shadow-2xl overflow-hidden">

          <img
            src="/images/property/1.jpg"
            alt="Vivienda vendida"
            className="w-full h-full min-h-[500px] object-cover"
          />

          <div className="p-10">

            <span className="inline-block bg-red-100 text-red-700 px-5 py-2 rounded-full font-bold mb-6">
              VENDIDA
            </span>

            <h3 className="text-4xl font-bold text-[#333333] mb-6">
              Piso reformado en Arenas de San Pedro
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Esta vivienda fue comercializada por Casayaa ofreciendo un
              acompañamiento completo durante todo el proceso. Desde la
              valoración inicial hasta la firma, el objetivo fue conseguir una
              venta segura, rápida y con la máxima transparencia para ambas
              partes.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-[#F7F4EE] rounded-3xl p-6">

                <p className="text-gray-500">
                  Estado
                </p>

                <p className="text-3xl font-bold text-[#C96E43]">
                  Vendida
                </p>

              </div>

              <div className="bg-[#F7F4EE] rounded-3xl p-6">

                <p className="text-gray-500">
                  Zona
                </p>

                <p className="text-3xl font-bold text-[#333333]">
                  Arenas
                </p>

              </div>

              <div className="bg-[#F7F4EE] rounded-3xl p-6">

                <p className="text-gray-500">
                  Servicio
                </p>

                <p className="text-3xl font-bold text-[#333333]">
                  Venta
                </p>

              </div>

              <div className="bg-[#F7F4EE] rounded-3xl p-6">

                <p className="text-gray-500">
                  Atención
                </p>

                <p className="text-3xl font-bold text-[#333333]">
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