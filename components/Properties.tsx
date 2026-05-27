"use client";

import { useRef } from "react";

export default function Properties() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -1200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 1200,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="propiedades"
      className="py-36 overflow-hidden"
    >

      <div className="max-w-[1600px] mx-auto px-8">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-20">

          <div>

            <p className="text-green-600 font-semibold tracking-[0.2em] mb-5">
              PROPIEDADES
            </p>

            <h2 className="text-[4.5rem] leading-[1] font-bold text-gray-900 max-w-4xl">
              Algunas viviendas destacadas
            </h2>

          </div>

          {/* FLECHAS */}
          <div className="hidden md:flex gap-4">

            <button
              onClick={scrollLeft}
              className="w-16 h-16 rounded-full bg-white shadow-premium hover:scale-110 transition text-2xl"
            >
              ←
            </button>

            <button
              onClick={scrollRight}
              className="w-16 h-16 rounded-full bg-green-600 text-white hover:scale-110 transition text-2xl"
            >
              →
            </button>

          </div>

        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >

          {/* CARD 1 */}
          <div className="group min-w-[31%] bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            <div className="overflow-hidden">

              <img
                src="/images/house1.jpg"
                alt="Casa"
                className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            <div className="p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500">
                  Talavera de la Reina
                </p>

                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Exclusiva
                </span>

              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Chalet moderno
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-4xl font-bold text-green-600">
                  699.900€
                </p>

                <button className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition">
                  →
                </button>

              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group min-w-[31%] bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            <div className="overflow-hidden">

              <img
                src="/images/house2.jpg"
                alt="Casa"
                className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            <div className="p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500">
                  Talavera Centro
                </p>

                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Nuevo
                </span>

              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ático reformado
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-4xl font-bold text-green-600">
                  289.900€
                </p>

                <button className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition">
                  →
                </button>

              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group min-w-[31%] bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            <div className="overflow-hidden">

              <img
                src="/images/house3.jpg"
                alt="Casa"
                className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            <div className="p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500">
                  Talavera Norte
                </p>

                <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Premium
                </span>

              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Piso minimalista
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-4xl font-bold text-green-600">
                  184.900€
                </p>

                <button className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition">
                  →
                </button>

              </div>

            </div>

          </div>

          {/* EXTRA */}
          <div className="group min-w-[31%] bg-white rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            <div className="overflow-hidden">

              <img
                src="/images/house1.jpg"
                alt="Casa"
                className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            <div className="p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500">
                  Talavera Sur
                </p>

                <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Oportunidad
                </span>

              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Piso luminoso
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-4xl font-bold text-green-600">
                  159.900€
                </p>

                <button className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition">
                  →
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}