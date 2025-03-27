"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutProgramSection from "@/components/about-program-section"
import StudyPlanSection from "@/components/study-plan-section"
import RequirementsSection from "@/components/requirements-section"
import ModalitySection from "@/components/modality-section"
import FAQSection from "@/components/faq-section"
import InscriptionSection from "@/components/inscription-section"
import { FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"

export default function DesarrolloSoftwarePage() {
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

      {/* Hero Section para la carrera */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary via-indigo-900 to-secondary/90 overflow-hidden">
        <div className="container-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <FadeInLeft>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                  Técnico en Desarrollo de Software en 10 meses
                </h1>
              </FadeInLeft>

              <FadeInLeft delay={0.2}>
                <p className="text-xl md:text-2xl text-white/90 mb-8">Formación de vanguardia en alianza estratégica</p>
              </FadeInLeft>

              <FadeInLeft delay={0.3}>
                <Button
                  className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold rounded-md"
                  onClick={() => {
                    const element = document.getElementById("inscripcion")
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  ¡Inscríbete ahora!
                </Button>
              </FadeInLeft>
            </div>

            <FadeInRight>
              <div className="flex flex-col items-end">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Logos de las instituciones */}
                    <div className="bg-white rounded-lg p-3 flex items-center justify-center h-16">
                      {/* Logo Talendig */}
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-iWQiuAFiHhU1YMPqXxUudGIfZqQDly.png"
                        alt="Talendig"
                        width={120}
                        height={40}
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div className="bg-white rounded-lg p-3 flex items-center justify-center h-16">
                      {/* Logo Libertad Digital */}
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/libertad-digital-SO1GNNiVnlrPOk3xgWQ9a9ltYtCk2N.png"
                        alt="Libertad Digital"
                        width={120}
                        height={40}
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div className="bg-white rounded-lg p-3 flex items-center justify-center h-16">
                      {/* Logo UCSD */}
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ucsd-IMbNI1rPhnBfBL1a3anCxh7Y7B7htF.png"
                        alt="Universidad Católica Santo Domingo"
                        width={60}
                        height={60}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <p className="text-white/80 text-sm mt-4 text-right">
                  Una colaboración entre Talendig, Libertad Digital y la
                  <br />
                  Universidad Católica Santo Domingo (UCSD)
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Sección Sobre la carrera técnica */}
      <AboutProgramSection />

      {/* Sección Plan de estudio */}
      <StudyPlanSection />

      {/* Sección Requisitos */}
      <RequirementsSection />

      {/* Sección Modalidad */}
      <ModalitySection />

      {/* Sección de Inscripción */}
      <InscriptionSection />

      {/* Sección FAQ */}
      <FAQSection />

      <Footer />
    </main>
  )
}

