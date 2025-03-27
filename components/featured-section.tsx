import { Button } from "@/components/ui/button"
import { FadeInUp, PulseButton } from "@/components/animations"

export default function FeaturedSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-secondary font-bold text-2xl mb-4">TRABAJA EN TECNOLOGÍA</h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-primary text-3xl md:text-4xl font-bold mb-8">
              Conviértete en Desarrollador de software y experto TI con la mejor metodología innovadora, intensiva e
              inmersiva de la región.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <PulseButton>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">Ver Bootcamps</Button>
            </PulseButton>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

