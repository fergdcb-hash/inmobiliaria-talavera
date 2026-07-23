export default function Footer() {
  return (
    <footer className="bg-[#1b2a41] text-white py-24">

      <div className="max-w-[1600px] mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-16">

          {/* LOGO */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-2xl bg-[#FF6600] flex items-center justify-center">
                <img
                  src="/images/logo-casayaa.svg"
                  alt="casayaa"
                  className="h-12 w-auto"
                />
              </div>

              <h2 className="text-3xl font-extrabold">
                casayaa
              </h2>

            </div>

            <p className="text-white/60 leading-relaxed text-lg">
              Inmobiliaria de bajo coste, especializada en la zona de Talavera De La Reina, su comarca y el Valle del Tietar.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-2xl font-extrabold mb-6">
              Navegación
            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <a href="#" className="hover:text-[#FF6600] transition">
                Inicio
              </a>

              <a href="#servicios" className="hover:text-[#FF6600] transition">
                Servicios
              </a>

              <a href="#propiedades" className="hover:text-[#FF6600] transition">
                Propiedades
              </a>

              <a href="#valoracion" className="hover:text-[#FF6600] transition">
                Valoración
              </a>

            </div>

          </div>

          {/* CONTACTO */}
          <div>

            <h3 className="text-2xl font-extrabold mb-6">
              Contacto
            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <p>
                Talavera de la Reina
              </p>

              <p>
                +34 622 034 868
              </p>

              <p>
                info@casaya.es
              </p>

            </div>

          </div>

          {/* REDES */}
          <div>

            <h3 className="text-2xl font-extrabold mb-6">
              Redes
            </h3>

            <div className="flex gap-4">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-[#FF6600] transition cursor-pointer">
                Instagram
              </div>

            </div>

          </div>

        </div>

        {/* LINEA */}
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between gap-6">

          <p className="text-white/40">
            © 2026 CasaYa. Todos los derechos reservados.
          </p>

          <p className="text-white/40">
            Diseñado con estilo minimal premium.
          </p>

        </div>

      </div>

    </footer>
  );
}
