"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PorQueTalendigPage() {
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

  return (
    <main className="pt-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary via-indigo-900 to-secondary/90 overflow-hidden">
        <div className="container-section relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                ¿Por qué elegir Talendig?
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Descubre lo que nos hace diferentes y por qué somos la mejor opción para tu formación tecnológica
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nuestra Misión</h2>
                <p className="text-lg text-gray-700 mb-6">
                  En Talendig, nuestra misión es transformar el panorama educativo tecnológico en República Dominicana y
                  Latinoamérica, ofreciendo programas de formación intensivos e inmersivos que preparan a los
                  estudiantes para los desafíos reales del mercado laboral.
                </p>
                <p className="text-lg text-gray-700">
                  Nos comprometemos a brindar una educación de calidad, accesible y orientada a resultados, que permita
                  a nuestros estudiantes desarrollar habilidades prácticas y relevantes para destacar en la industria
                  tecnológica.
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/por%20que-7sPpke0lcNMKhjA7vCsAN5pnTtyfhr.png"
                  alt="Estudiante de Talendig aprendiendo en línea"
                  fill
                  className="object-contain"
                />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Nuestros Valores</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excelencia",
                description:
                  "Nos esforzamos por ofrecer la más alta calidad en todos nuestros programas y servicios educativos.",
              },
              {
                title: "Innovación",
                description:
                  "Constantemente buscamos nuevas formas de mejorar la experiencia de aprendizaje y mantenernos a la vanguardia.",
              },
              {
                title: "Compromiso",
                description:
                  "Estamos comprometidos con el éxito de cada estudiante, brindando apoyo personalizado durante todo su recorrido.",
              },
              {
                title: "Colaboración",
                description:
                  "Fomentamos un ambiente de aprendizaje colaborativo donde estudiantes e instructores trabajan juntos.",
              },
              {
                title: "Integridad",
                description: "Actuamos con honestidad y transparencia en todas nuestras interacciones y decisiones.",
              },
              {
                title: "Impacto",
                description:
                  "Buscamos generar un impacto positivo en la sociedad a través de la formación de profesionales competentes.",
              },
            ].map((valor, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-primary mb-3">{valor.title}</h3>
                  <p className="text-gray-700">{valor.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">¿Por qué elegir Talendig?</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {[
              "Metodología práctica e inmersiva",
              "Instructores con experiencia en la industria",
              "Currículum actualizado y relevante",
              "Enfoque en proyectos reales",
              "Soporte personalizado",
              "Red de contactos en la industria",
              "Alta tasa de empleabilidad",
              "Flexibilidad de horarios",
            ].map((item, index) => (
              <FadeInUp key={index} delay={0.05 * index}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeInUp delay={0.4}>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Conoce nuestros programas
              </Button>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Testimonios (placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Lo que dicen nuestros estudiantes
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Nombre del Estudiante</h4>
                      <p className="text-sm text-gray-500">Programa cursado</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Testimonio del estudiante sobre su experiencia en Talendig y cómo ha impactado en su carrera
                    profesional."
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

