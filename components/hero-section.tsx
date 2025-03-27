import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FadeInLeft, PulseButton } from "@/components/animations"

export default function HeroSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 rounded-b-[50px] md:rounded-b-[100px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-1-300x108-wkW7iZniLJz3UruiVxTZjueY7I4ZK8.png"
          alt="Estudiante de Talendig"
          fill
          className="object-cover object-center rounded-b-[50px] md:rounded-b-[100px]"
          priority
        />
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      </div>

      {/* Contenido */}
      <div className="container-section relative z-10">
        <div className="max-w-3xl">
          <FadeInLeft>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              La principal fábrica de talento digital de Centroamérica y el Caribe
            </h1>
          </FadeInLeft>

          <FadeInLeft delay={0.2}>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Formamos a los profesionales tecnológicos del futuro con metodologías innovadoras e inmersivas que
              transforman carreras y potencian el desarrollo digital de la región.
            </p>
          </FadeInLeft>

          <FadeInLeft delay={0.4}>
            <PulseButton>
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                Comienza tu transformación
              </Button>
            </PulseButton>
          </FadeInLeft>
        </div>
      </div>
    </section>
  )
}

