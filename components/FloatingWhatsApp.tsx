"use client"

import Link from "next/link"
import Image from "next/image"

export function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/+5491100000000" // Replace with your number

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <Image 
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        priority
      />
    </Link>
  )
}