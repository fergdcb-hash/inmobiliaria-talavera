export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-white">
          Hogazo
        </h1>

        <div className="hidden md:flex items-center gap-10 text-white text-lg">

          <a href="#" className="hover:bg-[#D3E0D8] transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:bg-[#D3E0D8] transition">
            Servicios
          </a>

          <a href="#propiedades" className="hover:bg-[#D3E0D8] transition">
            Propiedades
          </a>

          <a href="#contacto" className="hover:bg-[#D3E0D8] transition">
            Contacto
          </a>

          <button className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
            Valora tu vivienda
          </button>

        </div>

      </div>
    </nav>
  );
}