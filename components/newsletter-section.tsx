"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"
import { FadeInUp, PulseButton } from "@/components/animations"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email a un servicio
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mantente actualizado con las últimas tendencias en tecnología
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg mb-8">
              Suscríbete a nuestro newsletter y recibe contenido exclusivo, noticias sobre la industria tech y consejos
              para impulsar tu carrera.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            {isSubmitted ? (
              <div className="flex items-center justify-center text-lg">
                <CheckCircle className="mr-2 h-6 w-6 text-secondary" />
                ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-grow focus:ring-2 focus:ring-secondary/50 transition-all"
                />
                <PulseButton>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90 px-6">
                    Suscribirse
                  </Button>
                </PulseButton>
              </form>
            )}
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

