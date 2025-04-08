"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export function ReservaForm() {
  const { toast } = useToast()
  const whatsappLink = "https://wa.me/+5491100000000" // Reemplazar con número real
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    destino: "",
    fecha: "",
    hora: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al enviar la reserva")
      }

      toast({
        title: "Reserva enviada",
        description: "Nos pondremos en contacto con usted a la brevedad.",
      })

      // Limpiar el formulario
      setFormData({
        nombre: "",
        telefono: "",
        destino: "",
        fecha: "",
        hora: "",
        mensaje: "",
      })
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error",
        description: "No se pudo enviar la reserva. Por favor, intente nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatWhatsAppMessage = () => {
    const message = `
Hola, quisiera hacer una reserva:
- Nombre: ${formData.nombre}
- Teléfono: ${formData.telefono}
- Destino: ${formData.destino}
- Fecha: ${formData.fecha}
- Hora: ${formData.hora}
${formData.mensaje ? `- Mensaje adicional: ${formData.mensaje}` : ""}
    `.trim()

    return encodeURIComponent(message)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="nombre" className="text-sm font-medium">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Ingrese su nombre"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="telefono" className="text-sm font-medium">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Ingrese su teléfono"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="destino" className="text-sm font-medium">
          Destino
        </label>
        <input
          id="destino"
          name="destino"
          type="text"
          value={formData.destino}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="¿A dónde desea ir?"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="fecha" className="text-sm font-medium">
            Fecha
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={formData.fecha}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="hora" className="text-sm font-medium">
            Hora
          </label>
          <input
            id="hora"
            name="hora"
            type="time"
            value={formData.hora}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium">
          Mensaje adicional (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Información adicional sobre su viaje"
        />
      </div>
      <div className="pt-4 flex flex-col sm:flex-row gap-3">
        <Link
          href={`${whatsappLink}?text=${formatWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button type="button" className="w-full gap-2">
            <Phone className="h-4 w-4" />
            Enviar por WhatsApp
          </Button>
        </Link>
        <Button type="submit" variant="outline" className="flex-1 gap-2" disabled={isSubmitting}>
          <Mail className="h-4 w-4" />
          {isSubmitting ? "Enviando..." : "Enviar por Email"}
        </Button>
      </div>
    </form>
  )
}
