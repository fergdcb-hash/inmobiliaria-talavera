const pisos = [
  {
    id: 1,
    titulo: "Piso en Calle Alberche",
    precio: "139.900€",
    imagen:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
  },
  {
    id: 2,
    titulo: "Chalet zona Hospital - Nuevo Centro",
    precio: "699.900€",
    imagen:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200",
  },
  {
    id: 3,
    titulo: "Piso en Paseo de la Estación",
    precio: "113.000€",
    imagen:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200",
  },
  {
    id: 4,
    titulo: "Ático en Avenida Príncipe Felipe",
    precio: "219.900€",
    imagen:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
  },
  {
    id: 5,
    titulo: "Piso en Calle Segurilla",
    precio: "114.900€",
    imagen:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    id: 6,
    titulo: "Piso en Avenida Pío XII",
    precio: "74.900€",
    imagen:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          
          <h1 className="text-3xl font-bold text-gray-900">
            Inmobiliaria Talavera
          </h1>

          <div className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#" className="hover:text-blue-600 transition">
              Inicio
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              Comprar
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              Alquilar
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[750px]">

        <img
          src="/prado.jpg"
          alt="Talavera"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            Encuentra tu hogar ideal
          </h1>

          <p className="text-white text-2xl md:text-3xl mb-10">
            Viviendas en Talavera de la Reina y comarca
          </p>

          {/* BUSCADOR */}
          <div className="bg-white rounded-3xl p-4 flex flex-col md:flex-row gap-4 w-full max-w-4xl shadow-2xl">

            <input
              type="text"
              placeholder="Buscar zona..."
              className="flex-1 p-4 rounded-2xl border text-lg"
            />

            <select className="p-4 rounded-2xl border text-lg">
              <option>Comprar</option>
              <option>Alquilar</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition">
              Buscar
            </button>

          </div>

        </div>
      </section>

      {/* PISOS */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Viviendas destacadas
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {pisos.map((piso) => (
            <a
              key={piso.id}
              href={`/pisos/${piso.id}`}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={piso.imagen}
                  alt={piso.titulo}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold mb-3">
                  {piso.titulo}
                </h3>

                <p className="text-blue-600 text-3xl font-bold">
                  {piso.precio}
                </p>

              </div>

            </a>
          ))}

        </div>

      </section>

    </main>
  );
}