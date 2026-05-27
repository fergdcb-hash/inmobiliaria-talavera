export default function LuxuryCards() {
  return (
    <div className="absolute right-10 bottom-20 hidden xl:flex flex-col gap-8">

      {/* CARD 1 */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-6 w-[320px] shadow-2xl">

        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
          alt="Casa"
          className="w-full h-52 object-cover rounded-3xl mb-5"
        />

        <h3 className="text-white text-2xl font-bold mb-2">
          Chalet de lujo
        </h3>

        <p className="text-green-300 text-3xl font-bold">
          699.900€
        </p>

      </div>

      {/* CARD 2 */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-6 w-[260px] ml-16 shadow-2xl">

        <p className="text-white text-xl leading-relaxed">
          Más de 250 familias ya han encontrado su hogar con nosotros.
        </p>

      </div>

    </div>
  );
}