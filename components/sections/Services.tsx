import Image from "next/image"
import { Plane, Briefcase, Car } from "lucide-react"

export function Services() {
  return (
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
              alt="Eventos especiales"
              width={800}
              height={600}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <Car className="h-5 w-5 text-white" />
                <h3 className="text-xl font-medium text-white">Eventos Especiales</h3>
              </div>
              <p className="text-white/90 text-sm">
                Servicio exclusivo para bodas, graduaciones y eventos sociales con atención personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}