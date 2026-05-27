export default function FloatingStats() {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-5xl">

      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-10 shadow-2xl">

        <h3 className="text-6xl font-bold text-white mb-4">
          +250
        </h3>

        <p className="text-gray-300 text-2xl">
          Viviendas vendidas
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-10 shadow-2xl">

        <h3 className="text-6xl font-bold text-white mb-4">
          +15
        </h3>

        <p className="text-gray-300 text-2xl">
          Años de experiencia
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-10 shadow-2xl">

        <h3 className="text-6xl font-bold text-white mb-4">
          98%
        </h3>

        <p className="text-gray-300 text-2xl">
          Clientes satisfechos
        </p>

      </div>

    </div>
  );
}