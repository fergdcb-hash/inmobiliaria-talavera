import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import Valuation from "@/components/Valuation";
import Footer from "@/components/Footer";
import Success from "@/components/Success";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Hero />

      <Services />

      <Properties />
      
      <Reviews />
      
      <Success />

      <Valuation />

      {/* SOBRE CASAYAA */}

      <section className="relative py-32 bg-[#0a0f1c] overflow-hidden border-y border-white/10">

        {/* Resplandores */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#FF6600]/10 blur-[170px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#FF6600]/5 blur-[170px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

            <div className="max-w-3xl">

              <p className="uppercase tracking-[0.35em] text-[#FF6600] font-bold mb-5">
                CASAYAA
              </p>

              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                La inmobiliaria que mira por tu bolsillo
              </h2>

              <div className="w-24 h-1 bg-[#FF6600] rounded-full mb-8"></div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Rompemos las reglas del mercado tradicional para ofrecer la
                máxima calidad al menor coste posible.

                <br />
                <br />

                Un servicio profesional, transparente y orientado a que vendas
                o alquiles tu vivienda sin pagar comisiones abusivas.

              </p>

            </div>

            <div className="flex items-center justify-center">

              <a
                href="#contacto"
                className="bg-[#FF6600] hover:bg-[#ff7a1f] text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Contactar
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}