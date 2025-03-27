"use client"
import Image from "next/image"
import { FadeInUp } from "@/components/animations"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Tipo para los datos de testimonios
export type Testimonial = {
  id: string
  name: string
  program: string
  image: string
  quote: string
  rating: number
}

// Datos de ejemplo para testimonios escritos
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María Rodríguez",
    program: "Data Science Python",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "El bootcamp de Data Science transformó mi carrera. Pasé de no saber nada de programación a conseguir un trabajo como analista de datos en menos de 6 meses.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos Méndez",
    program: "Full Stack Developer",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "La metodología práctica y el apoyo constante de los instructores hicieron que aprender desarrollo web fuera mucho más fácil de lo que esperaba.",
    rating: 5,
  },
  {
    id: "3",
    name: "Laura Sánchez",
    program: "Cybersecurity",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Los conocimientos que adquirí en el bootcamp de Ciberseguridad me permitieron dar un giro a mi carrera y ahora trabajo en lo que realmente me apasiona.",
    rating: 4,
  },
  {
    id: "4",
    name: "Javier Torres",
    program: "Arquitecto de Nube",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Gracias a Talendig pude certificarme como arquitecto de AWS y conseguir un trabajo remoto para una empresa internacional.",
    rating: 5,
  },
  {
    id: "5",
    name: "Elena Morales",
    program: "Full Stack Developer",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Los proyectos prácticos y el enfoque en tecnologías actuales me dieron exactamente lo que necesitaba para destacar en las entrevistas de trabajo.",
    rating: 5,
  },
  {
    id: "6",
    name: "Miguel Fernández",
    program: "Data Science Python",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Después de completar el bootcamp, conseguí un aumento salarial del 40%. La inversión en mi educación con Talendig valió cada centavo.",
    rating: 5,
  },
]

export default function WrittenTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Descubre cómo Talendig ha transformado las carreras de nuestros graduados y les ha ayudado a alcanzar sus
            metas profesionales.
          </p>
        </FadeInUp>

        {/* Carrusel horizontal con paginación */}
        <div className="relative">
          {/* Botones de navegación */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
              onClick={() => {
                const container = document.getElementById("testimonials-container")
                if (container) {
                  const scrollAmount = container.clientWidth * 0.8
                  container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
                }
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
              onClick={() => {
                const container = document.getElementById("testimonials-container")
                if (container) {
                  const scrollAmount = container.clientWidth * 0.8
                  container.scrollBy({ left: scrollAmount, behavior: "smooth" })
                }
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Contenedor de testimonios */}
          <div
            id="testimonials-container"
            className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory"
          >
            {testimonials.map((testimonial) => (
              <FadeInUp key={testimonial.id} delay={0.05 * Number.parseInt(testimonial.id)}>
                <div className="min-w-[300px] md:min-w-[400px] w-[300px] md:w-[400px] flex-shrink-0 snap-center">
                  <div className="bg-white rounded-lg shadow-md p-6 h-[280px] flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.program}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic flex-grow overflow-hidden line-clamp-4">"{testimonial.quote}"</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Indicadores de página para móvil */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = document.getElementById("testimonials-container")
                  if (container) {
                    const scrollAmount = index * 300 // Aproximadamente el ancho de una tarjeta
                    container.scrollTo({ left: scrollAmount, behavior: "smooth" })
                  }
                }}
                className={`h-3 w-3 rounded-full transition-colors bg-gray-300 hover:bg-secondary`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

