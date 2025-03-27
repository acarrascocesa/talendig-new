"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import MethodologySection from "@/components/methodology-section"
import AdvantagesSection from "@/components/advantages-section"
import InteractiveSection from "@/components/interactive-section"
import NewsletterSection from "@/components/newsletter-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import BootcampCarousel from "@/components/bootcamp-carousel"
import TestimonialsSection from "@/components/testimonials-section"
// Importar WrittenTestimonials directamente
import WrittenTestimonials from "@/components/written-testimonials"

export default function Home() {
  // Efecto de scroll suave
  useEffect(() => {
    // Función para manejar clics en enlaces internos
    const handleLinkClick = (e) => {
      const target = e.target

      // Verificar si es un enlace interno (href comienza con #)
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href").substring(1)
        const element = document.getElementById(id)

        if (element) {
          // Scroll suave al elemento
          window.scrollTo({
            top: element.offsetTop - 100, // Offset para compensar el navbar fijo
            behavior: "smooth",
          })
        }
      }
    }

    // Agregar event listener
    document.addEventListener("click", handleLinkClick)

    // Limpiar event listener
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  // Actualizar el orden de los componentes en el return
  return (
    <main className="pt-0">
      <Navbar />
      <HeroSection />
      <BootcampCarousel />
      <WrittenTestimonials />
      <StatsSection />
      <MethodologySection />
      <AdvantagesSection />
      <InteractiveSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

