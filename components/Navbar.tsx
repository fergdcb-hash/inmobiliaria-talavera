export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src="/images/logo.png"
            alt="Hogazo"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold text-[#0B5D4B]">
              Hogazo
            </h1>

            <p className="text-xs text-gray-500">
              Inmobiliaria
            </p>
          </div>

        </div>

        {/* MENÚ */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 text-lg">

          <a href="#" className="hover:text-[#0B5D4B] transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-[#0B5D4B] transition">
            Servicios
          </a>

          <a href="#propiedades" className="hover:text-[#0B5D4B] transition">
            Propiedades
          </a>

          <a href="#contacto" className="hover:text-[#0B5D4B] transition">
            Contacto
          </a>

          <a
            href="#contacto"
            className="bg-[#CC7445] hover:bg-[#B86438] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition"
          >
            Valora tu casa
          </a>

        </div>

      </div>
    </nav>
  );
}