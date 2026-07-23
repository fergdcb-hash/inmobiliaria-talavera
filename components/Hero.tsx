"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { useState } from "react";
import Logo from "./logo";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-bg.png"
          alt="Casayaa Inmobiliaria"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Capa oscura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 bg-[#1b2a41]"
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
        
        <Logo />

          {/* Menú escritorio */}
          <nav className="hidden lg:flex items-center gap-10 text-white text-lg font-semibold">
            <a href="#" className="hover:text-[#FF6600] transition duration-300">
              Inicio
            </a>
            <a href="#propiedades" className="hover:text-[#FF6600] transition duration-300">
              Propiedades
            </a>
            <a href="#servicios" className="hover:text-[#FF6600] transition duration-300">
              Servicios
            </a>
            <a href="#contacto" className="hover:text-[#FF6600] transition duration-300">
              Contacto
            </a>
          </nav>

          {/* CTA */}
          <a
            href="/?tipo=venta#contacto"
            className="hidden lg:flex items-center bg-[#FF6600] hover:bg-[#e65c00] transition text-white px-7 py-3.5 rounded-full font-bold shadow-xl hover:scale-105"
          >
            Valora tu casa gratis →
          </a>

          {/* Botón móvil */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center"
            aria-label="Abrir menú"
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      {/* MENÚ MÓVIL */}
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
              <img src="/images/logo-casayaa.svg" alt="Casayaa" className="h-14 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center"
                aria-label="Cerrar menú"
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
                href="/?tipo=venta#contacto"
                onClick={() => setMenuOpen(false)}
                className="bg-[#FF6600] hover:bg-[#e65c00] transition text-white w-full py-5 rounded-full text-xl font-semibold flex items-center justify-center shadow-xl"
              >
                Valora tu casa gratis →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 min-h-[calc(100vh-90px)] flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-[720px]"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/40 rounded-full px-5 py-2.5 mb-10">
            <MapPin size={16} className="text-white" />
            <p className="text-white text-sm font-medium">
              Especialistas en Talavera de la Reina y Sierra de Gredos
            </p>
          </div>

          {/* Título */}
          <h1 className="text-[3.8rem] md:text-[6rem] leading-[1.05] tracking-tight font-extrabold text-white mb-6">
            Vende o alquila
            <br />
            <span className="text-[#FF6600]">tu vivienda</span>
            <br />
            sin comisiones abusivas
          </h1>

          {/* Divisor */}
          <div className="w-20 h-1 bg-[#FF6600] rounded-full mb-8" />

         
    

          {/* Ahorro */}
          <div className="flex items-start gap-5">
            <div className="w-1.5 self-stretch bg-[#FF6600] rounded-full" />
            <div>
              <p className="uppercase tracking-[0.15em] text-white/80 font-semibold text-sm mb-1">
                Ahorro medio de nuestros clientes
              </p>
              <h2 className="text-7xl md:text-8xl font-black text-[#FF6600] leading-none">
                4.500€
              </h2>
              <p className="text-lg text-white/80 mt-2">
                frente a una inmobiliaria tradicional
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
