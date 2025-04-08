import { Phone, Mail, Instagram, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Estamos disponibles las 24 horas para atender sus consultas y reservas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Teléfono</h3>
            <p className="text-muted-foreground">
              <a href="tel:+5491125258583" className="hover:text-primary">
                +54 9 11 2525-8583
              </a>
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Email</h3>
            <p className="text-muted-foreground">
              <a href="mailto:info@transporteba.com" className="hover:text-primary">
                info@transporteba.com
              </a>
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <Instagram className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Instagram</h3>
            <p className="text-muted-foreground">
              <a href="https://instagram.com/transporteba" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                @transporteba
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}