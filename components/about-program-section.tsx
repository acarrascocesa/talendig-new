import { Check } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations"

type ProgramFeature = {
  text: string
}

export default function AboutProgramSection() {
  const programDescription =
    "Esta carrera está diseñada para formar desarrolladores de software con habilidades en frontend, backend, bases de datos, arquitectura de software y despliegue en la nube, asegurando un aprendizaje práctico y progresivo en cada una de estas áreas claves."

  const leftFeatures: ProgramFeature[] = [
    { text: "100% práctico con proyectos reales" },
    { text: "Enfoque en empleabilidad con herramientas demandadas" },
  ]

  const rightFeatures: ProgramFeature[] = [
    { text: "Cada mes aprendes una competencia nueva" },
    { text: "Evaluación por proyectos y retos técnicos" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">Sobre la carrera técnica</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">{programDescription}</p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            Características del programa
          </h3>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
          <StaggerContainer className="space-y-8">
            {leftFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-lg text-gray-700">{feature.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="space-y-8">
            {rightFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-lg text-gray-700">{feature.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

