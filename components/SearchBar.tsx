"use client";

import {
  Search,
  MapPin,
  Home,
  Euro,
} from "lucide-react";

export default function SearchBar() {
  return (
    <section className="relative z-20 -mt-10 md:-mt-16 px-6 md:px-8">

      <div className="max-w-[1400px] mx-auto">

        <div className="bg-white/80 backdrop-blur-2xl rounded-[35px] shadow-2xl border border-white/40 p-5 md:p-7">

          {/* TOP */}
          <div className="flex flex-wrap gap-3 mb-6">

            <button className="bg-[#0B5D4B] text-white px-6 py-3 rounded-2xl font-semibold">
              Comprar
            </button>

            <button className="bg-[#f3f3f3] hover:bg-[#ebebeb] transition px-6 py-3 rounded-2xl font-semibold text-gray-700">
              Alquilar
            </button>

            <button className="bg-[#f3f3f3] hover:bg-[#ebebeb] transition px-6 py-3 rounded-2xl font-semibold text-gray-700">
              Inversión
            </button>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

            {/* ZONA */}
            <div className="bg-[#f8f8f8] rounded-3xl p-5 flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-[#D6E1D7] flex items-center justify-center">

                <MapPin className="text-[#0B5D4B]" />

              </div>

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Ubicación
                </p>

                <input
                  type="text"
                  placeholder="Talavera..."
                  className="bg-transparent outline-none text-lg font-semibold w-full"
                />

              </div>

            </div>

            {/* TIPO */}
            <div className="bg-[#f8f8f8] rounded-3xl p-5 flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                <Home className="text-blue-600" />

              </div>

              <div className="w-full">

                <p className="text-gray-400 text-sm mb-1">
                  Tipo
                </p>

                <select className="bg-transparent outline-none text-lg font-semibold w-full">

                  <option>Chalet</option>
                  <option>Piso</option>
                  <option>Ático</option>
                  <option>Dúplex</option>

                </select>

              </div>

            </div>

            {/* PRECIO */}
            <div className="bg-[#f8f8f8] rounded-3xl p-5 flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">

                <Euro className="text-yellow-600" />

              </div>

              <div className="w-full">

                <p className="text-gray-400 text-sm mb-1">
                  Precio máximo
                </p>

                <select className="bg-transparent outline-none text-lg font-semibold w-full">

                  <option>300.000€</option>
                  <option>500.000€</option>
                  <option>700.000€</option>
                  <option>1.000.000€</option>

                </select>

              </div>

            </div>

            {/* BUSCAR */}
            <button className="bg-[#0B5D4B] hover:hover:bg-[#084738] transition rounded-3xl text-white font-bold text-xl flex items-center justify-center gap-3 min-h-[110px] shadow-lg hover:scale-[1.02]">

              <Search />

              Buscar

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}