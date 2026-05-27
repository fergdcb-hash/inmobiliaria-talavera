export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-24">

      <div className="max-w-[1600px] mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-16">

          {/* LOGO */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-2xl bg-green-600 flex items-center justify-center">
                🏡
              </div>

              <h2 className="text-3xl font-bold">
                CasaYa
              </h2>

            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Inmobiliaria premium especializada en viviendas exclusivas en Talavera de la Reina.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Navegación
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="#">
                Inicio
              </a>

              <a href="#servicios">
                Servicios
              </a>

              <a href="#propiedades">
                Propiedades
              </a>

              <a href="#valoracion">
                Valoración
              </a>

            </div>

          </div>

          {/* CONTACTO */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contacto
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>
                Talavera de la Reina
              </p>

              <p>
                +34 600 000 000
              </p>

              <p>
                info@casaya.es
              </p>

            </div>

          </div>

          {/* REDES */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Redes
            </h3>

            <div className="flex gap-4">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-green-600 transition cursor-pointer">
                Instagram
              </div>

            </div>

          </div>

        </div>

        {/* LINEA */}
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between gap-6">

          <p className="text-gray-500">
            © 2026 CasaYa. Todos los derechos reservados.
          </p>

          <p className="text-gray-500">
            Diseñado con estilo minimal premium.
          </p>

        </div>

      </div>

    </footer>
  );
}