import { BookOpen, Users, CheckCircle, Network } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations"

export default function MethodologySection() {
  const methodologies = [
    {
      icon: <BookOpen className="h-12 w-12 text-secondary" />,
      title: "Clases online en vivo",
      description: "Aprende directamente con instructores expertos en tiempo real.",
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Interacción en vivo",
      description: "Participa activamente en las clases con preguntas y discusiones.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-secondary" />,
      title: "Corrección de proyectos prácticos",
      description: "Recibe feedback detallado sobre tus proyectos para mejorar constantemente.",
    },
    {
      icon: <Network className="h-12 w-12 text-secondary" />,
      title: "Networking",
      description: "Conecta con otros profesionales y expande tu red de contactos en el sector.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Metodología del entrenamiento online
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((item, index) => (
            <StaggerItem key={index}>
              <div className="p-6 rounded-lg border border-gray-200 hover:border-secondary transition-all duration-300 text-center hover:shadow-md hover:-translate-y-1 h-full flex flex-col">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

