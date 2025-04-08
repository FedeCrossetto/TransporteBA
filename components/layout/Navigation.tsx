import Link from "next/link"

export function Navigation() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
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
  )
}