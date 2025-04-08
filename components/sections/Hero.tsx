import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { handleSmoothScroll } from "@/utils/navigation"

export function Hero() {
  return (
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
            <Link href="#reservas" onClick={(e) => handleSmoothScroll(e, "reservas")}>
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Reserva tu viaje
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}