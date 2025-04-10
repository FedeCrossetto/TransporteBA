'use client'

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen">
      {/* Main background image */}
      <div className="absolute inset-0">
        <Image
          src="/business-man.png"
          alt="Business man in car"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Servicio de Transporte Profesional en Buenos Aires
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Traslados seguros, puntuales y confortables para aeropuertos, eventos y viajes particulares
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition">
            Reserva tu viaje
          </button>
        </div>
      </div>
    </section>
  )
}