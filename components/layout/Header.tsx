"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold sm:inline-block">
            TransporteBA
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <Navigation />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  )
}