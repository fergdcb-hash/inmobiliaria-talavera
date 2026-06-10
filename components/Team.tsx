"use client";

export default function Team() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-16">

          <p className="text-[#0B5D4B] font-semibold tracking-[0.2em] mb-4">
            EQUIPO
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#0B5D4B] mb-6">
            Personas detrás de Hogazo
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa familiar comprometida con ofrecer un servicio
            inmobiliario honesto, cercano y eficiente. Nuestro objetivo es
            ayudar a propietarios y clientes a vender o alquilar sus viviendas
            con la máxima calidad posible y evitando las comisiones abusivas
            habituales del sector.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* TU FOTO */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-premium max-w-[350px] mx-auto">

            <img
              src="/images/team/fernando.jpg"
              alt="Fernando"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[#0B5D4B] mb-2">
                Fernando Gómez
              </h3>

              <p className="text-gray-600">
                Cofundador de CasaYa. Responsable de estrategia, marketing
                digital y captación de clientes.
              </p>

            </div>

          </div>

          {/* FOTO DE TU HERMANO */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-premium max-w-[350px] mx-auto">

            <img
              src="/images/Team/Eduardo.jpg"
              alt="Eduardo"
              className="w-full h-[550px] object-cover object-top"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-[#0B5D4B] mb-2">
                Eduardo Gomez
              </h3>

              <p className="text-gray-600">
                Cofundador de CasaYa. Especializado en operaciones, atención al
                cliente y gestión de procesos, asegurando una experiencia cercana,
                eficiente y profesional para cada propietario.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}