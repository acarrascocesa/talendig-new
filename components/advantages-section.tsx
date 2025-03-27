import { User, Clock, BarChart, Compass, Network } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations"

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <User className="h-10 w-10 text-secondary" />,
      title: "Tutor dedicado",
      description: "Un mentor personal que te guiará durante todo tu proceso de aprendizaje.",
    },
    {
      icon: <Clock className="h-10 w-10 text-secondary" />,
      title: "Soporte rápido y ágil",
      description: "Respuestas a tus dudas en menos de 24 horas.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-secondary" />,
      title: "Evaluación continua",
      description: "Seguimiento constante de tu progreso para asegurar tu éxito.",
    },
    {
      icon: <Compass className="h-10 w-10 text-secondary" />,
      title: "Guía especializada",
      description: "Asesoramiento experto para tu proyecto final.",
    },
    {
      icon: <Network className="h-10 w-10 text-secondary" />,
      title: "Networking",
      description: "Conexiones con profesionales del sector tecnológico.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Ventajas Competitivas</h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="mr-4 flex-shrink-0">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

