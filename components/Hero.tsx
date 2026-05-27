"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#f6f6f3] min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20"
      >

        <div className="max-w-[1500px] mx-auto px-6 md:px-8 py-5 md:py-6 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-green-600 flex items-center justify-center text-white text-lg">
              🏡
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              CasaYa
            </h1>

          </div>

          {/* LINKS */}
          <nav className="hidden lg:flex items-center gap-10 text-gray-600 text-lg">

            <a href="#" className="hover:text-black transition">
              Inicio
            </a>

            <a
              href="#propiedades"
              className="hover:text-black transition"
            >
              Propiedades
            </a>

            <a
              href="#servicios"
              className="hover:text-black transition"
            >
              Servicios
            </a>

            <a
              href="#valoracion"
              className="hover:text-black transition"
            >
              Valoración
            </a>

          </nav>

          {/* BOTON */}
          <a
            href="#valoracion"
            className="bg-green-600 hover:bg-green-700 hover:scale-105 transition text-white px-4 md:px-6 py-3 md:py-4 rounded-2xl font-semibold shadow-lg text-sm md:text-base"
          >

            Valora tu vivienda

          </a>

        </div>

      </motion.header>

      {/* HERO */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-8 pt-10 md:pt-20 pb-20 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >

          <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 md:px-5 py-2 md:py-3 shadow-premium mb-6 md:mb-8">

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <p className="text-gray-700 font-medium text-sm md:text-base">
              Inmobiliaria premium en Talavera
            </p>

          </div>

          <h1 className="text-[3.5rem] md:text-[5.5rem] leading-[0.95] font-bold text-gray-900 mb-6 md:mb-8">

            Encuentra
            <br />

            <span className="text-green-600">
              tu hogar
            </span>{" "}

            ideal

          </h1>

          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed mb-10 md:mb-14 max-w-xl">

            Te ayudamos a comprar, vender o alquilar la vivienda perfecta.

          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-12 md:mb-20">

            <a
              href="#propiedades"
              className="bg-green-600 hover:bg-green-700 hover:scale-105 transition duration-300 text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl text-base md:text-lg font-semibold shadow-lg text-center"
            >

              Ver propiedades

            </a>

            <a
              href="#valoracion"
              className="bg-white border border-gray-200 hover:border-gray-300 hover:scale-105 transition duration-300 text-gray-900 px-6 md:px-8 py-4 md:py-5 rounded-2xl text-base md:text-lg font-semibold text-center"
            >

              Contactar

            </a>

          </div>

        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <div className="rounded-[35px] md:rounded-[45px] overflow-hidden shadow-2xl group">

            <img
              src="/images/hero.avif"
              alt="Casa"
              className="w-full h-[420px] md:h-[760px] object-cover group-hover:scale-105 transition duration-[2500ms]"
            />

          </div>

          {/* CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white rounded-[25px] md:rounded-[30px] p-4 md:p-6 shadow-2xl w-[240px] md:w-[320px]"
          >

            <p className="text-gray-500 mb-2 md:mb-3 text-sm md:text-base">
              Vivienda destacada
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Chalet moderno en El Monte
            </h3>

            <p className="text-green-600 text-2xl md:text-3xl font-bold">
              699.900€
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}