import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import Valuation from "@/components/Valuation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <Hero />

      {/* BUSCADOR */}
      <SearchBar />

      {/* SERVICIOS */}
      <Services />

      {/* PROPIEDADES */}
      <Properties />

      {/* VALORACION */}
      <Valuation />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}