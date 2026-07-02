"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-[#F2EFE7] min-h-screen overflow-hidden">

      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 backdrop-blur-2xl bg-white/60 border-b border-white/20"
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="/images/logo-casayaa.svg"
              alt="Casayaa"
              className="h-16 md:h-20 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-gray-600 text-lg">
            <a href="#">Inicio</a>
            <a href="#propiedades">Propiedades</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href="/?tipo=venta#contacto"
            className="hidden lg:flex bg-[#C96E43] hover:bg-[#B85E36] transition text-white px-6 py-4 rounded-2xl font-semibold shadow-lg"
          >
            Valora tu casa gratis →
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center"
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
            className="fixed inset-0 z-[100] bg-[#f6f6f3]/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-black/5">
              <img src="/images/logo-casayaa.svg" className="h-14 w-auto" alt="Casayaa"/>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center"
              >
                <X />
              </button>
            </div>

            <div className="flex flex-col px-8 pt-14 gap-8 text-4xl font-bold">
              <a href="#">Inicio</a>
              <a href="#propiedades">Propiedades</a>
              <a href="#servicios">Servicios</a>
              <a href="#contacto">Contacto</a>
            </div>

            <div className="mt-auto p-6">
              <a
                href="/?tipo=venta#contacto"
                className="bg-[#C96E43] hover:bg-[#B85E36] text-white w-full py-5 rounded-2xl text-xl font-semibold flex justify-center"
              >
                Valora tu casa gratis →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1500px] mx-auto px-6 md:px-8 pt-10 md:pt-20 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-xl mb-8">
            <p className="text-gray-700">
              La inmobiliaria que mira por tu bolsillo
            </p>
          </div>

          <h1 className="text-[3.2rem] md:text-[5.5rem] leading-[0.95] font-bold text-[#333333] mb-8">
            Vende o alquila
            <br />
            <span className="text-[#FF6600]">tu vivienda</span>
            <br />
            sin comisiones abusivas
          </h1>

          <p className="text-xl md:text-2xl text-[#333333] mb-4">
            <span className="font-bold text-[#FF6600]">AHORRO MEDIO</span> de nuestros clientes
          </p>

          <h2 className="text-6xl md:text-8xl font-extrabold text-[#FF6600]">
            4.500€
          </h2>

          <p className="text-2xl font-semibold text-[#333333] mt-3">
            por transacción
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="/?tipo=venta#contacto"
              className="bg-[#C96E43] hover:bg-[#B85E36] text-white px-10 py-5 rounded-2xl text-xl font-semibold text-center"
            >
              Valora tu casa gratis →
            </a>

            <a
              href="#propiedades"
              className="border border-[#C96E43] text-[#C96E43] px-8 py-5 rounded-2xl text-xl font-semibold text-center hover:bg-[#C96E43] hover:text-white"
            >
              Ver viviendas
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative flex justify-center"
        >
          <img
            src="/images/mascot.png"
            alt="Mascota Casayaa"
            className="w-full max-w-[900px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
