import { Clock, Briefcase, MapPin } from "lucide-react"

export function About() {
  return (
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
  )
}