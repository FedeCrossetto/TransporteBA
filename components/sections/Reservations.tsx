import { ReservaForm } from "@/components/reserva-form"

export function Reservations() {
  return (
    <section id="reservas" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Reserva tu viaje</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Complete el formulario a continuación para solicitar una reserva. Nos pondremos en contacto a la brevedad.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ReservaForm />
        </div>
      </div>
    </section>
  )
}