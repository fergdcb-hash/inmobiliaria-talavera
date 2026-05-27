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

        <div className="max-w-[1500px] mx-auto px-8 py-6 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-green-600 flex items-center justify-center text-white text-lg">
              🏡
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
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
            className="bg-green-600 hover:bg-green-700 hover:scale-105 transition text-white px-6 py-4 rounded-2xl font-semibold shadow-lg"
          >

            Valora tu vivienda

          </a>

        </div>

      </motion.header>

      {/* HERO */}
      <div className="max-w-[1500px] mx-auto px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >

          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-premium mb-8">

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <p className="text-gray-700 font-medium">
              Inmobiliaria premium en Talavera
            </p>

          </div>

          <h1 className="text-[5.5rem] leading-[0.95] font-bold text-gray-900 mb-8">

            Encuentra
            <br />

            <span className="text-green-600">
              tu hogar
            </span>{" "}

            ideal

          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed mb-14 max-w-xl">

            Te ayudamos a comprar, vender o alquilar la vivienda perfecta.

          </p>

          {/* BOTONES */}
          <div className="flex gap-5 mb-20">

            <a
              href="#propiedades"
              className="bg-green-600 hover:bg-green-700 hover:scale-105 transition duration-300 text-white px-8 py-5 rounded-2xl text-lg font-semibold shadow-lg"
            >

              Ver propiedades

            </a>

            <a
              href="#valoracion"
              className="bg-white border border-gray-200 hover:border-gray-300 hover:scale-105 transition duration-300 text-gray-900 px-8 py-5 rounded-2xl text-lg font-semibold"
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

          <div className="rounded-[45px] overflow-hidden shadow-2xl group">

            <img
              src="/images/hero.avif"
              alt="Casa"
              className="w-full h-[760px] object-cover group-hover:scale-105 transition duration-[2500ms]"
            />

          </div>

          {/* CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-8 left-8 bg-white rounded-[30px] p-6 shadow-2xl w-[320px]"
          >

            <p className="text-gray-500 mb-3">
              Vivienda destacada
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Chalet moderno en El Monte
            </h3>

            <p className="text-green-600 text-3xl font-bold">
              699.900€
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}