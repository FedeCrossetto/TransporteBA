"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Instagram, MapPin, Clock, Briefcase, Plane } from "lucide-react"
import { TarifasSection } from "@/components/tarifas-section"
import { ReservaForm } from "@/components/reserva-form"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = "https://wa.me/+5491100000000" // Replace with actual number

  // Función para manejar el scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Ajuste para el header fijo
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">TransporteBA</span>
            </Link>
          </div>
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#quienes-somos"
                  onClick={(e) => handleSmoothScroll(e, "quienes-somos")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleSmoothScroll(e, "servicios")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#tarifas"
                  onClick={(e) => handleSmoothScroll(e, "tarifas")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Tarifas
                </a>
              </li>
              <li>
                <a
                  href="#reservas"
                  onClick={(e) => handleSmoothScroll(e, "reservas")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Reservas
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleSmoothScroll(e, "contacto")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-1">
                <Phone className="h-4 w-4" />
                <span>Contactar</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Auto moderno para servicio de transporte"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-white">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Servicio de transporte profesional en Buenos Aires
              </h1>
              <p className="text-xl">
                Traslados seguros, puntuales y confortables para aeropuertos, eventos y viajes particulares.
              </p>
              <div className="pt-4">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Solicitar viaje
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="quienes-somos" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Con más de 15 años de experiencia como taxista profesional, Norberto decidió ofrecer un servicio
                personalizado y de alta calidad con un vehículo 0 km totalmente equipado para su comodidad.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Nuestro compromiso es brindar un servicio de transporte confiable, puntual y seguro, adaptado a las
                necesidades específicas de cada cliente.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Puntualidad</h3>
                <p className="text-muted-foreground">
                  Valoramos su tiempo. Siempre llegamos con anticipación para garantizar que llegue a su destino sin
                  retrasos.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Profesionalismo</h3>
                <p className="text-muted-foreground">
                  Servicio cordial y respetuoso, con un conductor experimentado y un vehículo siempre en perfectas
                  condiciones.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Conocimiento local</h3>
                <p className="text-muted-foreground">
                  Amplio conocimiento de Buenos Aires para elegir siempre las rutas más eficientes según el tráfico y
                  las condiciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Ofrecemos una variedad de servicios de transporte para satisfacer sus necesidades de movilidad en Buenos
                Aires.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Traslados a aeropuertos"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="h-5 w-5 text-white" />
                    <h3 className="text-xl font-medium text-white">Traslados a Aeropuertos</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    Servicio puntual y confiable hacia y desde los aeropuertos Ezeiza y Aeroparque.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Viajes corporativos"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-white" />
                    <h3 className="text-xl font-medium text-white">Viajes Corporativos</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    Transporte ejecutivo para reuniones, eventos corporativos y traslados de personal.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Traslados zona sur"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-white" />
                    <h3 className="text-xl font-medium text-white">Traslados Zona Sur</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    Servicio especializado en la zona sur de Buenos Aires con conocimiento local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifas Section */}
        <TarifasSection />

        {/* Reservations Section */}
        <section id="reservas" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Reservas</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Complete el formulario para solicitar una reserva. Nos pondremos en contacto con usted a la brevedad.
              </p>
            </div>
            <div className="max-w-md mx-auto bg-background p-8 rounded-lg shadow-sm">
              <ReservaForm />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contacto</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Estamos disponibles para atender sus consultas y reservas. No dude en contactarnos.
              </p>
            </div>
            <div className="max-w-lg mx-auto grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Teléfono y WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Disponible 24/7 para reservas</p>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    +54 9 11 0000-0000
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Correo Electrónico</h3>
                <p className="text-muted-foreground mb-4">Respuesta en menos de 24 horas</p>
                <Link href="mailto:info@transporteba.com">
                  <Button variant="outline" className="gap-2">
                    <Mail className="h-4 w-4" />
                    info@transporteba.com
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="flex space-x-4">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-muted/80 p-3 rounded-full"
                >
                  <Phone className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-muted/80 p-3 rounded-full"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Norberto - Servicio de Transporte Profesional. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#quienes-somos"
                onClick={(e) => handleSmoothScroll(e, "quienes-somos")}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                ¿Quiénes somos?
              </a>
              <a
                href="#servicios"
                onClick={(e) => handleSmoothScroll(e, "servicios")}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleSmoothScroll(e, "contacto")}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
