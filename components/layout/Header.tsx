import { useState } from "react"
import Link from "next/link"
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">TransporteBA</span>
          </Link>
        </div>
        <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Navigation />
      </div>
    </header>
  )
}