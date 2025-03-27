import Image from "next/image"
import { Users, MessageSquare, Layout } from "lucide-react"
import { FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/animations"

export default function InteractiveSection() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: "Clases en grupo",
      description: "Aprende junto a otros estudiantes en un entorno colaborativo y dinámico.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-secondary" />,
      title: "Canales de chat",
      description: "Comunícate con instructores y compañeros en tiempo real para resolver dudas.",
    },
    {
      icon: <Layout className="h-10 w-10 text-secondary" />,
      title: "Foro privado",
      description: "Accede a discusiones exclusivas sobre temas relevantes en el mundo tech.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInLeft>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Aprendizaje en grupo interactivo</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Nuestra plataforma está diseñada para fomentar la colaboración y el aprendizaje social, elementos clave
                para el éxito en el mundo tecnológico.
              </p>

              <StaggerContainer className="space-y-6">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex">
                      <div className="mr-4 flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section-4-261x300-JCgxQpCjJUHDj4KMGfOQr6Jfnk5pfv.png"
                alt="Estudiantes colaborando en grupo en Talendig"
                fill
                className="object-contain bg-gray-100"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}

