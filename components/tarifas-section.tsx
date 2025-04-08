"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Tarifa {
  id: number
  servicio: string
  precio: string
  descripcion: string
}

const fallbackTarifas: Tarifa[] = [
  {
    id: 1,
    servicio: "Traslado Aeropuerto Ezeiza",
    precio: "15000",
    descripcion: "Servicio puerta a puerta"
  },
  {
    id: 2,
    servicio: "Traslado Aeroparque",
    precio: "10000",
    descripcion: "Servicio puerta a puerta"
  },
  {
    id: 3,
    servicio: "Viajes Zona Sur",
    precio: "8000",
    descripcion: "Precio base hasta 20km"
  }
]

export function TarifasSection() {
  const [tarifas, setTarifas] = useState<Tarifa[]>(fallbackTarifas)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTarifas = async () => {
      try {
        const response = await fetch("/api/tarifas")
        if (!response.ok) {
          console.warn("Usando tarifas de respaldo debido a error en la API")
          return
        }
        const data = await response.json()
        if (data && data.length > 0) {
          setTarifas(data)
        }
      } catch (error) {
        console.warn("Error al cargar tarifas:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTarifas()
  }, [])

  if (isLoading) {
    return <div className="text-center py-8">Cargando tarifas...</div>
  }

  return (
    <section id="tarifas" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tarifas</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Nuestras tarifas son transparentes y competitivas. Consulte por descuentos en viajes frecuentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tarifas.map((tarifa) => (
            <Card key={tarifa.id}>
              <CardHeader>
                <CardTitle className="text-xl">{tarifa.servicio}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">${tarifa.precio}</p>
                <p className="text-sm text-muted-foreground mt-2">{tarifa.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
