import type React from "react"
import { GraduationCap, FileText, Laptop, Heart } from "lucide-react"
import { FadeInUp, StaggerItem } from "@/components/animations"

type RequirementCategory = {
  title: string
  icon: React.ReactNode
  items: string[]
  subItems?: string[]
}

export default function RequirementsSection() {
  const requirementCategories: RequirementCategory[] = [
    {
      title: "Requisitos académicos",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      items: ["Bachillerato completo", "No se requieren conocimientos previos específicos"],
    },
    {
      title: "Documentación requerida",
      icon: <FileText className="h-6 w-6 text-primary" />,
      items: [
        "Cédula de Identidad o Pasaporte",
        "Copia del certificado de bachillerato",
        "Formulario de inscripción completado",
      ],
    },
    {
      title: "Requisitos técnicos",
      icon: <Laptop className="h-6 w-6 text-primary" />,
      items: ["Conexión a internet estable", "Equipo de computación:"],
      subItems: ["Computadora con procesador adecuado", "Mínimo 4 GB de RAM"],
    },
    {
      title: "Otros requisitos",
      icon: <Heart className="h-6 w-6 text-primary" />,
      items: ["Compromiso y dedicación para completar el programa con éxito."],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Requisitos y requerimientos técnicos
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirementCategories.map((category, index) => (
            <StaggerItem key={index}>
              <div className="border border-gray-200 rounded-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}

                  {category.subItems && (
                    <ul className="ml-6 space-y-2 mt-2">
                      {category.subItems.map((subItem, subItemIndex) => (
                        <li key={subItemIndex} className="flex items-start">
                          <span className="text-secondary mr-2 mt-1">-</span>
                          <span className="text-gray-700">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}

