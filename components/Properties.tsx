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
      className="py-24 md:py-36 overflow-hidden"
    >

      <div className="max-w-[1600px] mx-auto px-6 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">

          <div>

            <p className="text-green-600 font-semibold tracking-[0.2em] mb-5">
              PROPIEDADES
            </p>

            <h2 className="text-[3rem] md:text-[4.5rem] leading-[1] font-bold text-gray-900 max-w-4xl">
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
          <div className="group min-w-[90%] md:min-w-[31%] bg-white rounded-[35px] md:rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            {/* IMG */}
            <div className="overflow-hidden">

              <img
                src="/images/house1.jpg"
                alt="Casa"
                className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500 text-sm md:text-base">
                  Talavera de la Reina
                </p>

                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Exclusiva
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Chalet moderno
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-3xl md:text-4xl font-bold text-green-600">
                  699.900€
                </p>

                <a
                  href="/propiedad"
                  className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition flex items-center justify-center"
                >

                  →

                </a>

              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group min-w-[90%] md:min-w-[31%] bg-white rounded-[35px] md:rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            {/* IMG */}
            <div className="overflow-hidden">

              <img
                src="/images/house2.jpg"
                alt="Casa"
                className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500 text-sm md:text-base">
                  Talavera Centro
                </p>

                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Nuevo
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ático reformado
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-3xl md:text-4xl font-bold text-green-600">
                  289.900€
                </p>

                <a
                  href="/propiedad"
                  className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition flex items-center justify-center"
                >

                  →

                </a>

              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group min-w-[90%] md:min-w-[31%] bg-white rounded-[35px] md:rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            {/* IMG */}
            <div className="overflow-hidden">

              <img
                src="/images/house3.jpg"
                alt="Casa"
                className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500 text-sm md:text-base">
                  Talavera Norte
                </p>

                <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Premium
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Piso minimalista
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-3xl md:text-4xl font-bold text-green-600">
                  184.900€
                </p>

                <a
                  href="/propiedad"
                  className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition flex items-center justify-center"
                >

                  →

                </a>

              </div>

            </div>

          </div>

          {/* CARD 4 */}
          <div className="group min-w-[90%] md:min-w-[31%] bg-white rounded-[35px] md:rounded-[40px] overflow-hidden shadow-premium hover:-translate-y-2 transition duration-500">

            {/* IMG */}
            <div className="overflow-hidden">

              <img
                src="/images/house1.jpg"
                alt="Casa"
                className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition duration-[2000ms]"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-gray-500 text-sm md:text-base">
                  Talavera Sur
                </p>

                <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                  Oportunidad
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Piso luminoso
              </h3>

              <div className="flex items-center justify-between">

                <p className="text-3xl md:text-4xl font-bold text-green-600">
                  159.900€
                </p>

                <a
                  href="/propiedad"
                  className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl hover:scale-110 transition flex items-center justify-center"
                >

                  →

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}