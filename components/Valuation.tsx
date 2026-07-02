"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ValuationContent() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");

  const titulo =
    tipo === "venta"
      ? "Valoración gratuita para vender tu vivienda"
      : tipo === "alquiler"
      ? "Te ayudamos a alquilar tu vivienda"
      : tipo === "gestion"
      ? "Gestión integral de tu inmueble"
      : "Contacta con nosotros";

  const descripcion =
    tipo === "venta"
      ? "Cuéntanos los datos de tu vivienda y realizaremos una valoración gratuita."
      : tipo === "alquiler"
      ? "Déjanos los datos de tu vivienda y te ayudaremos a encontrar el mejor inquilino."
      : tipo === "gestion"
      ? "Solicita información sobre nuestro servicio de gestión integral."
      : "Rellena el formulario y nos pondremos en contacto contigo.";

  return (
    <section
      id="contacto"
      className="relative bg-[#F7F4EE] py-40 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E7DDD1] blur-[140px] rounded-full opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EADFD4] blur-[140px] rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* Texto izquierda */}
        <div>

          <p className="text-[#C96E43] font-semibold text-lg mb-5 tracking-[0.2em]">
            CONTACTO Y VALORACIÓN GRATUITA
          </p>

          <h2 className="text-[4rem] md:text-[5rem] leading-[1] font-bold text-[#333333] mb-10">
            Descubre el valor real de tu casa
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl">
            No regales el dinero de tu herencia o de tu esfuerzo.

            <br />
            <br />

            Muchas inmobiliarias inflan el precio para captar clientes y después
            obligan a bajar el precio tras meses perdiendo tiempo.

            <br />
            <br />

            Nosotros realizamos una valoración basada en datos reales de
            mercado para ayudarte a vender o alquilar al mejor precio posible.
          </p>

        </div>

        {/* Formulario */}
        <div>

          <div className="bg-[#FBFAF7] rounded-[45px] p-10 shadow-2xl border border-[#E6DED3]">

            <h3 className="text-4xl font-bold text-[#333333] mb-3">
              {titulo}
            </h3>

            <p className="text-gray-500 mb-8">
              {descripcion}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">

              <span
                className={`px-4 py-2 rounded-full font-semibold ${
                  tipo === "venta"
                    ? "bg-[#C96E43] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Venta
              </span>

              <span
                className={`px-4 py-2 rounded-full font-semibold ${
                  tipo === "alquiler"
                    ? "bg-[#C96E43] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Alquiler
              </span>

              <span
                className={`px-4 py-2 rounded-full font-semibold ${
                  tipo === "gestion"
                    ? "bg-[#C96E43] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Gestión
              </span>

            </div>

            <div className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Nombre"
                className="p-5 rounded-2xl border border-[#D8D1C5] text-xl outline-none focus:border-[#C96E43]"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="p-5 rounded-2xl border border-[#D8D1C5] text-xl outline-none focus:border-[#C96E43]"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="p-5 rounded-2xl border border-[#D8D1C5] text-xl outline-none focus:border-[#C96E43]"
              />

              <input
                type="text"
                placeholder="Dirección de la vivienda"
                className="p-5 rounded-2xl border border-[#D8D1C5] text-xl outline-none focus:border-[#C96E43]"
              />

              <button className="bg-[#C96E43] hover:bg-[#B85E36] text-white py-5 rounded-2xl text-2xl font-semibold shadow-xl transition">

                {tipo === "alquiler"
                  ? "Solicitar estudio de alquiler"
                  : tipo === "gestion"
                  ? "Solicitar información"
                  : "Solicitar valoración gratuita"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default function Valuation() {
  return (
    <Suspense fallback={null}>
      <ValuationContent />
    </Suspense>
  );
}