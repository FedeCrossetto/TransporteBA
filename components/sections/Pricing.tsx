export function Pricing() {
  return (
    <section id="tarifas" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tarifas</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Ofrecemos tarifas competitivas y transparentes para todos nuestros servicios.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Aeropuerto Ezeiza</h3>
            <div className="text-3xl font-bold mb-4">$25.000</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Traslado directo</li>
              <li>Espera en arribos sin cargo</li>
              <li>Asistencia con equipaje</li>
              <li>Vehículo con aire acondicionado</li>
            </ul>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Aeroparque</h3>
            <div className="text-3xl font-bold mb-4">$15.000</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Traslado directo</li>
              <li>Espera en arribos sin cargo</li>
              <li>Asistencia con equipaje</li>
              <li>Vehículo con aire acondicionado</li>
            </ul>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Por hora</h3>
            <div className="text-3xl font-bold mb-4">$8.000</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mínimo 3 horas</li>
              <li>City tours</li>
              <li>Eventos especiales</li>
              <li>Viajes corporativos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}