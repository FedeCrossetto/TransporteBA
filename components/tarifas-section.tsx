"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Tarifa {
  id: number
  origen: string
  destino: string
  precio: string
  es_final: boolean
}

export function TarifasSection() {
  const [tarifas, setTarifas] = useState<Tarifa[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const whatsappLink = "https://wa.me/+5491100000000" // Reemplazar con número real

  useEffect(() => {
    async function fetchTarifas() {
      try {
        const response = await fetch("/api/tarifas")
        if (!response.ok) {
          throw new Error("Error al cargar las tarifas")
        }
        const data = await response.json()
        setTarifas(data)
      } catch (error) {
        console.error("Error:", error)
        // Usar datos de ejemplo si hay un error
        setTarifas([
          { id: 1, origen: "CABA", destino: "EZEIZA", precio: "$43000", es_final: true },
          { id: 2, origen: "EZEIZA", destino: "CABA", precio: "$43000", es_final: true },
          { id: 3, origen: "Terminal de RETIRO", destino: "EZEIZA", precio: "$45000", es_final: true },
          { id: 4, origen: "EZEIZA", destino: "Terminal de RETIRO", precio: "$45000", es_final: true },
          { id: 5, origen: "AEROPARQUE", destino: "EZEIZA", precio: "$47000", es_final: true },
          { id: 6, origen: "EZEIZA", destino: "AEROPARQUE", precio: "$47000", es_final: true },
          { id: 7, origen: "EZEIZA", destino: "NORDELTA", precio: "Consultar", es_final: true },
          { id: 8, origen: "EZEIZA", destino: "CAMPANA", precio: "Consultar", es_final: true },
          { id: 9, origen: "EZEIZA", destino: "ROSARIO", precio: "Consultar", es_final: false },
          { id: 10, origen: "EZEIZA", destino: "LA PLATA", precio: "Consultar", es_final: false },
          { id: 11, origen: "EZEIZA", destino: "MAR DEL PLATA", precio: "Consultar", es_final: false },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchTarifas()
  }, [])

  return (
    <section id="tarifas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestras Tarifas</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Ofrecemos tarifas competitivas para todos nuestros servicios de transporte. Precios finales sin cargos
            adicionales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          {isLoading ? (
            <div className="text-center py-8">Cargando tarifas...</div>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-black text-yellow-400 py-3 px-4 text-left font-bold">VIAJE</th>
                  <th className="bg-black text-yellow-400 py-3 px-4 text-left font-bold">COSTO</th>
                </tr>
              </thead>
              <tbody>
                {tarifas.map((tarifa) => (
                  <tr key={tarifa.id} className="border-b">
                    <td className="py-3 px-4">
                      {tarifa.origen} - {tarifa.destino}
                    </td>
                    <td className="py-3 px-4">
                      {tarifa.precio}
                      {tarifa.es_final ? " - FINAL" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="#reservas">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full">
              HAGA SU RESERVA AQUÍ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
