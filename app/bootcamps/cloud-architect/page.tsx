"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MondayForm } from "@/components/monday-form"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"
import {
  Cloud,
  Clock,
  Users,
  Award,
  CheckCircle,
  Server,
  Database,
  Lock,
  Monitor,
  Cpu,
  Layers,
  GitBranch,
  Zap,
  Wifi,
  BarChart,
  Lightbulb,
  ShieldAlert,
  Network,
} from "lucide-react"
import { FAQ } from "@/components/faq-component"

export default function CloudArchitectBootcampPage() {
  // Efecto de scroll suave
  useEffect(() => {
    // Función para manejar clics en enlaces internos
    const handleLinkClick = (e: { target: any; preventDefault: () => void }) => {
      const target = e.target

      // Verificar si es un enlace interno (href comienza con #)
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href").substring(1)
        const element = document.getElementById(id)

        if (element) {
          // Scroll suave al elemento
          window.scrollTo({
            top: element.offsetTop - 100, // Offset para compensar el navbar fijo
            behavior: "smooth",
          })
        }
      }
    }

    // Agregar event listener
    document.addEventListener("click", handleLinkClick)

    // Limpiar event listener
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  // Datos del bootcamp
  const bootcampData = {
    title: "Arquitecto de Nube",
    description:
      "Aprende a diseñar, implementar y gestionar infraestructuras y servicios en la nube, asegurando soluciones escalables, seguras y eficientes que se alineen con las necesidades empresariales actuales.",
    duration: "14 semanas",
    level: "Intermedio-Avanzado",
    nextStart: "15 de Septiembre, 2023",
    icon: <Cloud className="h-16 w-16 text-white" />,
  }

  // Módulos del bootcamp
  const modules = [
    {
      title: "Semana 1: Fundamentos de la Computación en la Nube",
      duration: "1 semana",
      topics: [
        "Introducción a la computación en la nube",
        "Modelos de servicio (IaaS, PaaS, SaaS)",
        "Modelos de despliegue (nube pública, privada, híbrida)",
        "Principales proveedores (AWS, Azure, GCP)",
      ],
      icon: <Cloud className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 2: Redes y Seguridad en la Nube",
      duration: "1 semana",
      topics: [
        "Redes en la nube (VPC, subredes, gateways)",
        "DNS, VPN y CDN en entornos cloud",
        "Seguridad en la nube (IAM, políticas de acceso)",
        "Cifrado y modelo Zero Trust",
      ],
      icon: <Lock className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 3: Virtualización, Contenedores y Kubernetes",
      duration: "1 semana",
      topics: [
        "Virtualización y contenedores",
        "Docker y diferencias con máquinas virtuales",
        "Kubernetes: arquitectura y componentes",
        "Despliegue y gestión de Kubernetes en la nube",
      ],
      icon: <Layers className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 4: Servicios de Almacenamiento y Bases de Datos",
      duration: "1 semana",
      topics: [
        "Tipos de almacenamiento en la nube (objetos, bloques, archivos)",
        "Bases de datos relacionales en la nube (RDS)",
        "Bases de datos NoSQL (DynamoDB, CosmosDB, Firestore)",
        "Estrategias de migración de datos a la nube",
      ],
      icon: <Database className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 5: Arquitectura de Aplicaciones en la Nube",
      duration: "1 semana",
      topics: [
        "Diseño de aplicaciones escalables y resilientes",
        "Monolitos vs. microservicios",
        "Serverless y computación sin servidores",
        "AWS Lambda, Azure Functions, Cloud Functions",
      ],
      icon: <Server className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 6: DevOps y Automatización en la Nube",
      duration: "1 semana",
      topics: [
        "Introducción a DevOps en la nube",
        "CI/CD en entornos cloud (GitHub Actions, AWS CodePipeline)",
        "Infraestructura como código (IaC)",
        "Terraform, CloudFormation, Pulumi",
      ],
      icon: <GitBranch className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 7: Observabilidad, Monitoreo y Gestión de Costos",
      duration: "1 semana",
      topics: [
        "Monitoreo y logging en la nube",
        "CloudWatch, Azure Monitor, Stackdriver",
        "Estrategias de optimización de costos",
        "FinOps en la nube",
      ],
      icon: <Monitor className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 8: Inteligencia Artificial y Big Data en la Nube",
      duration: "1 semana",
      topics: [
        "Servicios de AI/ML en la nube",
        "SageMaker, Azure AI, Vertex AI",
        "Big Data y procesamiento de datos",
        "Spark, Databricks y BigQuery",
      ],
      icon: <Cpu className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 9: Edge Computing y IoT en la Nube",
      duration: "1 semana",
      topics: [
        "Introducción a IoT y Edge Computing",
        "Casos de uso y arquitectura",
        "Servicios de IoT en la nube",
        "AWS IoT, Azure IoT, Google IoT Core",
      ],
      icon: <Wifi className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 10: Estrategias de Seguridad y Cumplimiento",
      duration: "1 semana",
      topics: [
        "Normativas y cumplimiento (ISO 27001, GDPR, SOC 2)",
        "Recuperación ante desastres",
        "Estrategias de alta disponibilidad",
        "Auditoría y gestión de riesgos en la nube",
      ],
      icon: <ShieldAlert className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 11: Multi-cloud, Hybrid Cloud y Cloud-Native",
      duration: "1 semana",
      topics: [
        "Estrategias multinube e híbridas",
        "AWS Outposts, Azure Arc, Anthos",
        "Diseño de arquitecturas cloud-native",
        "Modernización de aplicaciones",
      ],
      icon: <Network className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 12: Computación Cuántica y Web3 en la Nube",
      duration: "1 semana",
      topics: [
        "Introducción a la computación cuántica en la nube",
        "AWS Braket, Azure Quantum",
        "Web3, blockchain y descentralización",
        "Casos de uso emergentes en la nube",
      ],
      icon: <Lightbulb className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 13: Proyecto Final y Preparación para Certificaciones",
      duration: "1 semana",
      topics: [
        "Desarrollo del proyecto final",
        "Arquitectura en la nube y documentación",
        "Simulación de escenarios empresariales",
        "Mejores prácticas en arquitectura cloud",
      ],
      icon: <BarChart className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 14: Presentación Final y Evaluaciones",
      duration: "1 semana",
      topics: [
        "Preparación para certificaciones",
        "AWS Solutions Architect, Azure Solutions Architect",
        "Google Cloud Architect",
        "Presentación del proyecto final y feedback",
      ],
      icon: <Award className="h-10 w-10 text-secondary" />,
    },
  ]

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Formación integral en cloud computing",
      description:
        "Aprende a diseñar, implementar y gestionar infraestructuras en la nube con los principales proveedores: AWS, Azure y Google Cloud.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Enfoque práctico y basado en proyectos",
      description:
        "Desarrolla habilidades prácticas a través de laboratorios, estudios de caso y un proyecto final que simula escenarios empresariales reales.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Preparación para certificaciones oficiales",
      description:
        "El programa te prepara para las certificaciones más demandadas: AWS Solutions Architect, Azure Solutions Architect y Google Cloud Architect.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Tecnologías emergentes",
      description:
        "Explora tecnologías de vanguardia como computación cuántica, Web3, blockchain y Edge Computing aplicadas a entornos cloud.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Mentorías personalizadas",
      description:
        "Recibe orientación personalizada de instructores expertos en arquitectura cloud que te guiarán durante todo el proceso de aprendizaje.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Networking y comunidad",
      description:
        "Forma parte de una comunidad de profesionales del cloud computing, compartiendo experiencias y oportunidades de crecimiento profesional.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ]

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Qué conocimientos previos necesito para este bootcamp?",
      answer:
        "Se recomienda tener conocimientos básicos de redes, sistemas operativos y conceptos fundamentales de programación. Experiencia previa en administración de sistemas o desarrollo de software es beneficiosa, pero no obligatoria.",
    },
    {
      question: "¿Qué proveedores de nube se cubren en el bootcamp?",
      answer:
        "El bootcamp abarca los tres principales proveedores de nube: Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform (GCP), con un enfoque en arquitecturas multi-cloud e híbridas.",
    },
    {
      question: "¿Obtendré certificaciones oficiales al finalizar el bootcamp?",
      answer:
        "El bootcamp te prepara para las certificaciones de arquitecto de soluciones de los principales proveedores de nube, pero las certificaciones oficiales no están incluidas en el precio del programa. Sin embargo, recibirás un certificado de Talendig que valida tus conocimientos como Arquitecto de Nube.",
    },
    {
      question: "¿Cómo son las clases y cuál es la metodología de enseñanza?",
      answer:
        "El bootcamp se desarrolla en un entorno virtual que incluye clases en vivo, estudios de caso, simulaciones prácticas y evaluaciones periódicas. Cada sesión se compone de dos horas de teoría y una hora de práctica aplicada, con acceso a laboratorios en la nube para implementar lo aprendido.",
    },
    {
      question: "¿Tendré acceso a entornos de laboratorio en la nube?",
      answer:
        "Sí, proporcionamos acceso a laboratorios y entornos de práctica en AWS, Azure y GCP sin costo adicional. Además, te guiaremos sobre cómo aprovechar las capas gratuitas de los proveedores de nube para tus proyectos personales.",
    },
  ]

  return (
    <main className="pt-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary via-indigo-900 to-secondary/90 overflow-hidden">
        <div className="container-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FadeInLeft>
              <div>
                <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  {bootcampData.icon}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                  Bootcamp de {bootcampData.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">{bootcampData.description}</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                    <Clock className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-white">{bootcampData.duration}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                    <Users className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-white">{bootcampData.level}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                    <Award className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-white">Certificación incluida</span>
                  </div>
                </div>
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-bold rounded-md"
                  onClick={() => {
                    const element = document.getElementById("inscripcion")
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  ¡Inscríbete ahora!
                </Button>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Detalles del programa</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Duración:</span>
                    <span className="text-white font-medium">{bootcampData.duration}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Nivel:</span>
                    <span className="text-white font-medium">{bootcampData.level}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Próximo inicio:</span>
                    <span className="text-white font-medium">{bootcampData.nextStart}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Modalidad:</span>
                    <span className="text-white font-medium">100% Online</span>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Sobre el bootcamp */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
              Sobre el Bootcamp de {bootcampData.title}
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
              El objetivo de este bootcamp es proporcionar a los participantes los conocimientos y habilidades prácticas
              necesarios para diseñar, implementar y gestionar infraestructuras y servicios en la nube, asegurando
              soluciones escalables, seguras y eficientes que se alineen con las necesidades empresariales actuales.
              <br />
              <br />
              El programa se desarrolla en un entorno virtual que incluye clases en vivo, estudios de caso, simulaciones
              prácticas y evaluaciones periódicas. Cada sesión se compone de dos horas de teoría y una hora de práctica
              aplicada, permitiéndote adquirir experiencia real en el diseño y gestión de arquitecturas cloud.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/cloud.jpg"
                  alt="Arquitecto de Nube trabajando en un diseño de infraestructura"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">¿Por qué convertirte en Arquitecto de Nube?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  La demanda de profesionales especializados en arquitectura cloud está en constante crecimiento, con
                  salarios competitivos y excelentes oportunidades de desarrollo profesional. Las empresas de todos los
                  sectores están migrando a la nube y necesitan expertos que puedan diseñar, implementar y optimizar sus
                  infraestructuras.
                </p>
                <p className="text-lg text-gray-700">
                  Este bootcamp te prepara para roles como Arquitecto de Soluciones Cloud, Ingeniero de Nube, Consultor
                  de Arquitectura Cloud, DevOps Engineer y otros puestos relacionados con el diseño y gestión de
                  infraestructuras en la nube.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Plan de estudios */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Plan de estudios</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((module, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 flex items-center">
                    <div className="bg-white/20 p-1 rounded-lg mr-2">{module.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white">{module.title}</h3>
                      <p className="text-white/80 text-xs">{module.duration}</p>
                    </div>
                  </div>
                  <div className="p-3 flex-1">
                    <ul className="space-y-1 text-sm">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="text-secondary mr-1 mt-0.5 flex-shrink-0">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Beneficios de nuestro bootcamp
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Plataformas y tecnologías que dominarás
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "AWS", icon: <Cloud className="h-10 w-10 text-secondary" /> },
                  { name: "Azure", icon: <Cloud className="h-10 w-10 text-secondary" /> },
                  { name: "Google Cloud", icon: <Cloud className="h-10 w-10 text-secondary" /> },
                  { name: "Kubernetes", icon: <Layers className="h-10 w-10 text-secondary" /> },
                  { name: "Docker", icon: <Layers className="h-10 w-10 text-secondary" /> },
                  { name: "Terraform", icon: <GitBranch className="h-10 w-10 text-secondary" /> },
                  { name: "Serverless", icon: <Zap className="h-10 w-10 text-secondary" /> },
                  { name: "DevOps", icon: <GitBranch className="h-10 w-10 text-secondary" /> },
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-3">{tech.icon}</div>
                    <span className="font-medium text-primary">{tech.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">
                *Tecnologías sujetas a cambio según las necesidades de los estudiantes y los factores de contratación.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Conoce a tu instructor</h2>
          </FadeInUp>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <FadeInLeft>
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Instructor de Arquitectura Cloud"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Nombre del Instructor</h3>
                <p className="text-secondary font-medium mb-4">Cloud Architect & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Arquitecto de Nube certificado con más de 10 años de experiencia en el diseño e implementación de
                  soluciones en AWS, Azure y Google Cloud. Ha liderado migraciones a la nube para empresas de diversos
                  sectores y tamaños, optimizando costos y mejorando la seguridad y el rendimiento.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="rounded-full">
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    GitHub
                  </Button>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Preguntas frecuentes</h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <FAQ customFaqItems={faqItems} />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Inscripción */}
      <section id="inscripcion" className="py-20 bg-gray-100">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
              ¡Inscríbete en nuestro Bootcamp de {bootcampData.title}!
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-center max-w-2xl mx-auto mb-10">
              Completa el siguiente formulario y un asesor académico se pondrá en contacto contigo para brindarte toda
              la información que necesitas sobre el bootcamp.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <MondayForm />
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </main>
  )
}

