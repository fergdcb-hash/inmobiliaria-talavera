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

      {/* HERO */}
      <section className="relative">
        <img
          src="/prado.jpg"
          alt="Basílica del Prado"
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Inmobiliaria Talavera
            </h1>

            <p className="text-white text-2xl md:text-3xl">
              Viviendas en Talavera de la Reina y comarca
            </p>
          </div>
        </div>
      </section>

      {/* PISOS */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Viviendas destacadas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {pisos.map((piso) => (
            <a
              key={piso.id}
              href={`/pisos/${piso.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={piso.imagen}
                alt={piso.titulo}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {piso.titulo}
                </h3>

                <p className="text-blue-600 text-2xl font-semibold">
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