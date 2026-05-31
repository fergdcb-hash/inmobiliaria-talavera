import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import Valuation from "@/components/Valuation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Properties />
      <Valuation />
      <Footer />
    </main>
  );
}