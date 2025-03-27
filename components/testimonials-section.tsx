"use client"

import { FadeInUp } from "@/components/animations"
import { Button } from "@/components/ui/button"
import VideoTestimonials from "@/components/video-testimonials" // Usar portadas de YouTube

// Componente principal de la sección de testimonios
export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">Historias de estudiantes</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Se unieron a nuestros bootcamps para cambiar sus vidas.
          </p>
        </FadeInUp>

        {/* Componente de videos testimoniales - usando portadas de YouTube */}
        <VideoTestimonials useDirectPlay={true} />

        {/* Llamada a la acción */}
        <FadeInUp delay={0.3}>
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Únete a nuestra comunidad
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

