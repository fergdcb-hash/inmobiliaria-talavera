"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-transparent min-h-screen overflow-hidden">

      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 backdrop-blur-2xl bg-white/60 border-b border-white/20"
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-green-600 flex items-center justify-center text-white text-lg">
              🏡
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              CasaYa
            </h1>

          </div>

          <nav className="hidden lg:flex items-center gap-10 text-gray-600 text-lg">

            <a href="#" className="hover:text-black transition">
              Inicio
            </a>

            <a href="#propiedades" className="hover:text-black transition">
              Propiedades
            </a>

            <a href="#servicios" className="hover:text-black transition">
              Servicios
            </a>

            <a href="#contacto" className="hover:text-black transition">
              Contacto
            </a>

          </nav>

            <a
              href="#contacto"
              className="hidden lg:flex bg-green-600 hover:bg-green-700 hover:scale-105 transition text-white px-6 py-4 rounded-2xl font-semibold shadow-lg"
            >
              Valora Tu Casa
            </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center"
          >
            <Menu />
          </button>

        </div>
      </motion.header>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#f6f6f3]/95 backdrop-blur-2xl flex flex-col"
          >

            <div className="flex items-center justify-between px-6 py-6 border-b border-black/5">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-2xl bg-green-600 flex items-center justify-center text-white">
                  🏡
                </div>

                <h2 className="text-2xl font-bold">
                  CasaYa
                </h2>

              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center"
              >
                <X />
              </button>

            </div>

            <div className="flex flex-col px-8 pt-14 gap-8 text-4xl font-bold text-gray-900">

              <a href="#" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>

              <a href="#propiedades" onClick={() => setMenuOpen(false)}>
                Propiedades
              </a>

              <a href="#servicios" onClick={() => setMenuOpen(false)}>
                Servicios
              </a>

              <a href="#contacto" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>

            </div>

            <div className="mt-auto p-6">

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="bg-green-600 hover:bg-green-700 transition text-white w-full py-5 rounded-2xl text-xl font-semibold flex items-center justify-center shadow-lg"
              >
                Contacto
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      <div className="max-w-[1500px] mx-auto px-6 md:px-8 pt-10 md:pt-20 pb-20 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >

          <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 md:px-5 py-2 md:py-3 shadow-premium mb-6 md:mb-8">

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <p className="text-gray-700 font-medium text-sm md:text-base">
              La inmobiliaria que mira por tu bolsillo
            </p>

          </div>

          <h1 className="text-[3.2rem] md:text-[5.5rem] leading-[0.95] font-bold text-gray-900 mb-6 md:mb-8">

            Vende o alquila
            <br />

            <span className="text-green-600">
              tu vivienda
            </span>

            <br />

            sin comisiones abusivas

          </h1>

          <div className="max-w-3xl">

  
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              <span className="font-bold text-green-600">
                AHORRO MEDIO
              </span>{" "}
                de nuestros clientes
            </p>

            <h2 className="text-6xl md:text-8xl font-extrabold text-green-600 leading-none">
                4.500€
            </h2>

            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3">
                por transacción
            </p>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-end items-center"
        >

          <div className="absolute w-[650px] h-[650px] bg-green-100 rounded-full blur-[120px] opacity-60"></div>

            <img
              src="/images/mascot.png"
              alt="CasaYa Mascota"
              className="relative z-10 w-full max-w-[1150px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
            />

        </motion.div>
          
         

      </div>

    </section>
  );
}