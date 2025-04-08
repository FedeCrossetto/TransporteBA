import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TransporteBA - Servicio de Transporte Profesional en Buenos Aires",
  description:
    "Servicio de transporte privado en Buenos Aires. Traslados a aeropuertos, viajes corporativos y servicio en la zona sur. Conductor profesional con vehículo 0km.",
  keywords:
    "taxi aeropuerto, remis particular, traslados Buenos Aires, servicio de transporte, Ezeiza, Aeroparque, zona sur Buenos Aires",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'