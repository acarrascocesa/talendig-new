"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Database,
  Code,
  Cloud,
  Shield,
  LayoutGrid,
  Clock,
  BarChart,
  GraduationCap,
  Palette,
  TestTube,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeInUp, PulseButton } from "@/components/animations"

// Tipo para los datos de bootcamp
type BootcampData = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  duration: string
  level: string
  color: string
  skills: string[]
}

// Datos de los bootcamps
const bootcamps: BootcampData[] = [
  {
    id: "data-science",
    title: "Data Science Python",
    description:
      "Aprende a analizar y visualizar datos, construir modelos predictivos y tomar decisiones basadas en datos.",
    icon: <Database className="h-10 w-10" />,
    duration: "3 meses",
    level: "Todos los niveles",
    color: "from-primary to-secondary",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Visualización de datos"],
  },
  {
    id: "full-stack",
    title: "Full Stack Developer",
    description:
      "Domina el desarrollo web completo, desde el frontend hasta el backend, y crea aplicaciones web modernas.",
    icon: <Code className="h-10 w-10" />,
    duration: "3 meses",
    level: "Todos los niveles",
    color: "from-primary to-secondary",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "cloud-architect",
    title: "Arquitecto de Nube",
    description: "Diseña, implementa y gestiona infraestructuras en la nube escalables, seguras y de alto rendimiento.",
    icon: <Cloud className="h-10 w-10" />,
    duration: "3 meses",
    level: "Todos los niveles",
    color: "from-primary to-secondary",
    skills: ["AWS", "Azure", "Google Cloud", "Infraestructura como código", "DevOps"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protege sistemas y redes contra amenazas digitales y desarrolla estrategias de seguridad robustas.",
    icon: <Shield className="h-10 w-10" />,
    duration: "3 meses",
    level: "Todos los niveles",
    color: "from-primary to-secondary",
    skills: ["Ethical Hacking", "Network Security", "Cryptography", "Security Auditing", "Incident Response"],
  },
  {
    id: "dynamics-365",
    title: "Microsoft Dynamics 365 F&O",
    description: "Desarrolla soluciones personalizadas en Microsoft Dynamics 365 Finance and Operations con X++.",
    icon: <LayoutGrid className="h-10 w-10" />,
    duration: "3 meses",
    level: "Todos los niveles",
    color: "from-primary to-secondary",
    skills: ["X++", "Dynamics 365", "Finance & Operations", "ERP", "Desarrollo de módulos"],
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    description: "Aprende a diseñar experiencias e interfaces de usuario centradas en las necesidades del usuario.",
    icon: <Palette className="h-10 w-10" />,
    duration: "3 meses",
    level: "Todos los niveles",
    color: "from-primary to-secondary",
    skills: ["Design Thinking", "Figma", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: "software-testing",
    title: "Software Testing",
    description:
      "Domina la automatización de pruebas de software con Selenium, Cucumber y herramientas de API testing.",
    icon: <TestTube className="h-10 w-10" />,
    duration: "20 horas",
    level: "Intermedio",
    color: "from-primary to-secondary",
    skills: ["Selenium", "Cucumber", "Java", "API Testing", "Page Object Model"],
  },
  {
    id: "ia-generativa",
    title: "Inteligencia Artificial Generativa",
    description:
      "Aprende a desarrollar y aplicar modelos de IA generativa para crear contenido innovador en texto, imagen y audio.",
    icon: <Brain className="h-10 w-10" />,
    duration: "12 semanas",
    level: "Intermedio",
    color: "from-primary to-secondary",
    skills: ["Azure OpenAI", "LLMs", "Generación de Imágenes", "Prompt Engineering", "IA Responsable"],
  },
]

export default function BootcampCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Actualizar el ancho cuando cambia el tamaño de la ventana
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Función para navegar al siguiente bootcamp
  const nextBootcamp = () => {
    setCurrentIndex((prev) => (prev === bootcamps.length - 1 ? 0 : prev + 1))
  }

  // Función para navegar al bootcamp anterior
  const prevBootcamp = () => {
    setCurrentIndex((prev) => (prev === 0 ? bootcamps.length - 1 : prev - 1))
  }

  // Calcular el desplazamiento para el carrusel móvil
  const dragConstraints = {
    right: 0,
    left: -width,
  }

  return (
    <section id="bootcamps" className="py-20 bg-white">
      <div className="container-section">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Bootcamps</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Programas intensivos diseñados para transformar tu carrera y prepararte para los trabajos más demandados
              en tecnología.
            </p>
          </div>
        </FadeInUp>

        {/* Grid para pantallas grandes */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {bootcamps.map((bootcamp) => (
            <FadeInUp key={bootcamp.id} delay={0.1 * bootcamps.indexOf(bootcamp)}>
              <BootcampCard bootcamp={bootcamp} />
            </FadeInUp>
          ))}
        </div>

        {/* Carrusel para móviles (arrastrable) */}
        <div className="md:hidden overflow-hidden">
          <motion.div ref={carouselRef} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={dragConstraints}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {bootcamps.map((bootcamp) => (
                <motion.div key={bootcamp.id} className="min-w-[80vw] p-2">
                  <BootcampCard bootcamp={bootcamp} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Indicadores de página para móvil */}
          <div className="flex justify-center mt-6 gap-2">
            {bootcamps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-secondary" : "bg-gray-300"
                }`}
                aria-label={`Ir al bootcamp ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente de tarjeta de bootcamp
function BootcampCard({ bootcamp }: { bootcamp: BootcampData }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
      {/* Encabezado con degradado */}
      <div className={`bg-gradient-to-r ${bootcamp.color} p-4 text-white`}>
        <div className="flex items-center justify-between">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">{bootcamp.icon}</div>
          <div className="flex flex-col items-end text-xs">
            <div className="flex items-center mb-1">
              <Clock className="h-3 w-3 mr-1" />
              <span>{bootcamp.duration}</span>
            </div>
            <div className="flex items-center">
              <BarChart className="h-3 w-3 mr-1" />
              <span>{bootcamp.level}</span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-3">{bootcamp.title}</h3>
      </div>

      {/* Contenido */}
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-gray-600 mb-3 text-sm">{bootcamp.description}</p>

        {/* Habilidades */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 mb-1 flex items-center">
            <GraduationCap className="h-3 w-3 mr-1" /> HABILIDADES CLAVE
          </h4>
          <div className="flex flex-wrap gap-1">
            {bootcamp.skills.map((skill, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Botón de acción */}
        <div className="mt-auto">
          <PulseButton>
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-sm py-1"
              onClick={() => (window.location.href = `/bootcamps/${bootcamp.id}`)}
            >
              Más información
            </Button>
          </PulseButton>
        </div>
      </div>
    </div>
  )
}
