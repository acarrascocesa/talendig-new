import { Check } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations"
import { Button } from "@/components/ui/button"

type ModalityAdvantage = {
  text: string
}

export default function ModalitySection() {
  const leftAdvantages: ModalityAdvantage[] = [
    { text: "Flexibilidad horaria" },
    { text: "Plataforma de aprendizaje interactiva" },
    { text: "Proyectos prácticos en tiempo real" },
  ]

  const rightAdvantages: ModalityAdvantage[] = [
    { text: "Acceso a clases grabadas" },
    { text: "Soporte técnico continuo" },
    { text: "Networking con compañeros y profesores" },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">Modalidad</h2>
        </FadeInUp>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <FadeInUp delay={0.1}>
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
              Carrera Técnica 100% Virtual
            </h3>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
              Formación completa en desarrollo de software desde la comodidad de tu hogar.
            </p>
          </FadeInUp>

          <div className="max-w-2xl mx-auto mb-12">
            <FadeInUp delay={0.3}>
              <div className="border border-gray-200 rounded-lg p-8 text-center">
                <h4 className="text-xl text-secondary font-medium mb-3">Duración del Programa</h4>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">10 meses</p>
                <p className="text-gray-600 mb-2">40-60 horas por asignatura</p>
                <p className="text-gray-600">Clases en vivo y contenido a tu ritmo</p>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.4}>
            <h4 className="text-xl font-bold text-primary mb-6">Ventajas de nuestra modalidad virtual:</h4>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
            <StaggerContainer className="space-y-4">
              {leftAdvantages.map((advantage, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center">
                    <Check className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer className="space-y-4">
              {rightAdvantages.map((advantage, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center">
                    <Check className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <FadeInUp delay={0.6}>
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-bold rounded-md">
              Inscríbete Ahora
            </Button>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

