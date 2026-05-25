const pisos = [
  {
    id: 1,
    titulo: "Piso en Calle Alberche",
    precio: "139.900€",
    descripcion:
      "Piso reformado de 2 dormitorios en una de las mejores zonas de Talavera.",
    imagen:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
  },
  {
    id: 2,
    titulo: "Chalet zona Hospital - Nuevo Centro",
    precio: "699.900€",
    descripcion:
      "Chalet independiente con piscina y jardín privado en zona exclusiva.",
    imagen:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200",
  },
  {
    id: 3,
    titulo: "Piso en Paseo de la Estación",
    precio: "113.000€",
    descripcion:
      "Piso luminoso con ascensor y excelente ubicación.",
    imagen:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200",
  },
  {
    id: 4,
    titulo: "Ático en Avenida Príncipe Felipe",
    precio: "219.900€",
    descripcion:
      "Ático moderno con gran terraza y acabados premium.",
    imagen:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
  },
  {
    id: 5,
    titulo: "Piso en Calle Segurilla",
    precio: "114.900€",
    descripcion:
      "Apartamento exterior listo para entrar a vivir.",
    imagen:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    id: 6,
    titulo: "Piso en Avenida Pío XII",
    precio: "74.900€",
    descripcion:
      "Piso reformado exterior junto a la rotonda de Tres Olivos.",
    imagen:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
  },
];

export default async function Piso({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const piso = pisos.find((p) => p.id === Number(id));

  if (!piso) {
    return <div>Piso no encontrado</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100">

      <img
        src={piso.imagen}
        alt={piso.titulo}
        className="w-full h-[500px] object-cover"
      />

      <div className="max-w-5xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold mb-6">
          {piso.titulo}
        </h1>

        <p className="text-3xl text-blue-600 font-bold mb-8">
          {piso.precio}
        </p>

        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          {piso.descripcion}
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg">
          Contactar
        </button>

      </div>
    </main>
  );
}