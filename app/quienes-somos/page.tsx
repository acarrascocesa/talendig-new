"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Award, Lightbulb, Target, Rocket, Globe } from "lucide-react"

export default function QuienesSomosPage() {
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
                ¿Quiénes somos?
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Conoce nuestra historia, misión y el equipo detrás de Talendig
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Quiénes Somos - Descripción Principal */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Quiénes somos</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Somos la principal fábrica de talento digital de América Latina. Proveemos profesionales cualificados
                  a la industria de tecnología de la información mediante un programa que integra a las empresas y
                  facilita el emprendimiento.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nuestros modelos intensivos, inmersivos y gamificados, cumplen con los estándares internacionales de
                  calidad y excelencia.
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo de Talendig"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Nuestro Enfoque */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Nuestro Enfoque</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-secondary" />,
                title: "Innovación Educativa",
                description:
                  "Reimaginamos constantemente la forma en que se enseña tecnología, adaptándonos a las necesidades cambiantes del mercado.",
              },
              {
                icon: <Target className="h-10 w-10 text-secondary" />,
                title: "Enfoque Práctico",
                description:
                  "Creemos en aprender haciendo. Nuestros estudiantes trabajan en proyectos reales desde el primer día.",
              },
              {
                icon: <Users className="h-10 w-10 text-secondary" />,
                title: "Comunidad Colaborativa",
                description:
                  "Fomentamos un ambiente donde estudiantes, instructores y empresas colaboran para crear soluciones innovadoras.",
              },
              {
                icon: <Award className="h-10 w-10 text-secondary" />,
                title: "Excelencia Académica",
                description:
                  "Mantenemos los más altos estándares de calidad en nuestros programas educativos y metodologías de enseñanza.",
              },
              {
                icon: <Rocket className="h-10 w-10 text-secondary" />,
                title: "Impulso al Talento",
                description:
                  "Identificamos y potenciamos el talento tecnológico, preparándolo para destacar en el mercado laboral global.",
              },
              {
                icon: <Globe className="h-10 w-10 text-secondary" />,
                title: "Impacto Regional",
                description:
                  "Trabajamos para transformar el panorama tecnológico de América Latina, creando oportunidades de desarrollo económico y social.",
              },
            ].map((item, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Nuestro Equipo</h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Contamos con un equipo de profesionales apasionados por la educación y la tecnología, comprometidos con
              transformar el futuro de nuestros estudiantes y de la región.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Miembro del equipo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-primary">Nombre del Miembro</h3>
                    <p className="text-sm text-gray-500">Cargo / Posición</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeInUp delay={0.5}>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Únete a Nuestro Equipo
              </Button>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Nuestros Aliados */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Nuestros Aliados</h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Colaboramos con empresas líderes e instituciones educativas para ofrecer la mejor formación y
              oportunidades a nuestros estudiantes.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <FadeInUp key={index} delay={0.05 * index}>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-24 w-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=120"
                    alt="Logo de aliado"
                    width={120}
                    height={80}
                    className="object-contain max-h-16"
                  />
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

