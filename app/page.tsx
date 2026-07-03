  import Hero from "@/components/Hero";
  import Services from "@/components/Services";
  import Properties from "@/components/Properties";
  import Valuation from "@/components/Valuation";
  import Footer from "@/components/Footer";
  import Success from "@/components/Success";

  export default function Home() {
    return (
      <main className="overflow-hidden">
        <Hero />

        <Services />

        <Properties />

        <Success />

        <Valuation />
        

        <section className="py-20 bg-[#F7F4EE]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

              <div className="max-w-3xl">

                <p className="text-[#C96E43] font-semibold tracking-[0.2em] mb-4">
                  CASAYAA
                </p>

                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  La inmobiliaria que mira por tu bolsillo
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Rompemos las reglas del mercado tradicional para ofrecer la
                  máxima calidad al menor coste posible. Un servicio profesional,
                  transparente y orientado a que vendas o alquiles tu vivienda sin
                  pagar comisiones abusivas.
                </p>

              </div>

              <a
                href="#contacto"
                className="bg-[#C96E43] hover:bg-[#B85E36] text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-xl transition hover:scale-105"
              >
                Contactar
              </a>

            </div>

          </div>
        </section>

        <Footer />
      </main>
    );
  }