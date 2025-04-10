"use client";

import { useTranslations } from "next-intl";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Reservations } from "@/components/sections/Reservations";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Reservations />
        <Contact />
      </main>

      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}
