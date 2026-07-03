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
      className="relative bg-[#0a0f1c] py-40 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6600]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6600]/5 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* Texto izquierda */}
        <div>

          <p className="text-[#FF6600] font-bold text-lg mb-5 tracking-[0.25em] uppercase">
            Contacto y valoración gratuita
          </p>

          <h2 className="text-[4rem] md:text-[5rem] leading-[1] font-extrabold text-white mb-10">
            Descubre el valor real de tu casa
          </h2>

          <p className="text-2xl text-white/70 leading-relaxed max-w-2xl">
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

          <div className="bg-white rounded-[45px] p-10 shadow-2xl border border-[#EDE6DA]">

            <h3 className="text-4xl font-extrabold text-[#1a1a1a] mb-3">
              {titulo}
            </h3>

            <p className="text-gray-500 mb-8">
              {descripcion}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">

              <span
                className={`px-5 py-2.5 rounded-full font-bold transition ${
                  tipo === "venta"
                    ? "bg-[#FF6600] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Venta
              </span>

              <span
                className={`px-5 py-2.5 rounded-full font-bold transition ${
                  tipo === "alquiler"
                    ? "bg-[#FF6600] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Alquiler
              </span>

              <span
                className={`px-5 py-2.5 rounded-full font-bold transition ${
                  tipo === "gestion"
                    ? "bg-[#FF6600] text-white"
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
                className="p-5 rounded-2xl border border-[#E2DACB] text-xl outline-none focus:border-[#FF6600] transition"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="p-5 rounded-2xl border border-[#E2DACB] text-xl outline-none focus:border-[#FF6600] transition"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="p-5 rounded-2xl border border-[#E2DACB] text-xl outline-none focus:border-[#FF6600] transition"
              />

              <input
                type="text"
                placeholder="Dirección de la vivienda"
                className="p-5 rounded-2xl border border-[#E2DACB] text-xl outline-none focus:border-[#FF6600] transition"
              />

              <button className="bg-[#FF6600] hover:bg-[#e65c00] text-white py-5 rounded-full text-2xl font-bold shadow-xl transition hover:scale-[1.02]">

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
