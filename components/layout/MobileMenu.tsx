import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b md:hidden shadow-lg">
          <nav className="container py-6">
            <ul className="flex flex-col space-y-2">
              <li>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleSmoothScroll(e, "servicios")}
                  className="flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#tarifas"
                  onClick={(e) => handleSmoothScroll(e, "tarifas")}
                  className="flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Tarifas
                </a>
              </li>
              <li>
                <a
                  href="#reservas"
                  onClick={(e) => handleSmoothScroll(e, "reservas")}
                  className="flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Reservas
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleSmoothScroll(e, "contacto")}
                  className="flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}