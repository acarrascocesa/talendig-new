"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MondayForm } from "@/components/monday-form"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"
import {
  Palette,
  Clock,
  Users,
  Award,
  CheckCircle,
  Layers,
  PenTool,
  Figma,
  FileSearch,
  UserCheck,
  Map,
  LayoutGrid,
  TestTube,
  FileText,
  Repeat,
  PresentationIcon as PresentationChart,
  Accessibility,
  Briefcase,
} from "lucide-react"
import { FAQ } from "@/components/faq-component"

export default function UXUIDesignBootcampPage() {
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
    title: "UX/UI Design",
    description:
      "Aprende a diseñar experiencias e interfaces de usuario centradas en las necesidades reales de los usuarios, desde la investigación hasta la creación de prototipos interactivos.",
    duration: "3 meses",
    level: "Todos los niveles",
    nextStart: "15 de Septiembre, 2023",
    icon: <Palette className="h-16 w-16 text-white" />,
  }

  // Módulos del bootcamp
  const modules = [
    {
      title: "Semana 1: Fundamentos de UX/UI",
      duration: "1 semana",
      topics: [
        "Experiencia de usuario vs Interfaz de usuario",
        "¿Por qué es importante el diseño de experiencia?",
        "Principios fundamentales del diseño UX/UI",
        "Roles y responsabilidades en el diseño UX/UI",
      ],
      icon: <Palette className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 2: Investigación de usuario",
      duration: "1 semana",
      topics: [
        "¿Qué es design thinking?",
        "Historia y evolución del design thinking",
        "Definir el problema",
        "Idear soluciones",
      ],
      icon: <FileSearch className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 3: Encuestas cuantitativas",
      duration: "1 semana",
      topics: [
        "Metodologías de investigación",
        "ResearchOps y mejores prácticas",
        "Planificación - How-To",
        "Métodos de investigación cuantitativa",
      ],
      icon: <FileText className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 4: Escenarios de usuarios y User personas",
      duration: "1 semana",
      topics: [
        "¿Qué son los escenarios de usuarios? (User scenarios)",
        "Tipos de escenarios | Creando User scenarios",
        "¿Qué es User Personas? ¿Cómo usar Personas?",
        "Tipos de Personas | Creando Personas",
      ],
      icon: <UserCheck className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 5: Mapa de empatía y User interviews",
      duration: "1 semana",
      topics: [
        "Convirtiéndonos en diseñadores empáticos",
        "Crear un mapa de empatía",
        "La jerarquía de las necesidades",
        "Creando y conduciendo entrevistas a usuarios",
      ],
      icon: <Map className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 6: Ideación y Arquitectura de la información",
      duration: "1 semana",
      topics: [
        "¿Qué es idear? SCAMPER metodología para idear",
        "Metodología de analogía",
        "Modelos de organización",
        "Arquitectura de la información vs Navegación",
      ],
      icon: <Layers className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 7: Prototipar y Design systems",
      duration: "1 semana",
      topics: [
        "¿Qué es prototipar? Beneficios de prototipar",
        "Mejores prácticas para prototipar",
        "Beneficios de Design systems",
        "Elementos de Design systems | Material Design",
      ],
      icon: <PenTool className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 8: Herramientas para crear - Figma",
      duration: "1 semana",
      topics: [
        "Herramientas que se adaptan al diseño",
        "Ejemplos de herramientas de diseño",
        "Los fundamentos de trabajar con Figma",
        "Creando y compartiendo prototipos",
      ],
      icon: <Figma className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 9: Pruebas de usabilidad",
      duration: "1 semana",
      topics: [
        "¿Por qué hacer pruebas de usabilidad?",
        "Elementos de las pruebas de usabilidad",
        "Tipos de pruebas de usabilidad",
        "Planificación de pruebas",
      ],
      icon: <TestTube className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 10: Métodos y Planificación",
      duration: "1 semana",
      topics: [
        "Tree Testing | Closed Card Sorting | Click Testing",
        "Planificando pruebas en físico",
        "Planificando pruebas remotas",
        "Costos de hacer pruebas",
      ],
      icon: <LayoutGrid className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 11: Reportar pruebas",
      duration: "1 semana",
      topics: [
        "Analizando la data",
        "Escribiendo nuestro reporte de pruebas",
        "Herramientas para crear reportes",
        "¿Qué es iterar? Beneficios de iterar | Ejemplos de diseño iterativo",
      ],
      icon: <Repeat className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 12: Presentar a Stakeholders y Accesibilidad",
      duration: "1 semana",
      topics: [
        "Creando presentaciones",
        "Presentando resultados de diseño",
        "Tomando decisiones de proyecto",
        "Accesibilidad: ¿Qué es? Leyes internacionales | Mitos y misconceptions",
      ],
      icon: <PresentationChart className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 13: Crear caso de estudio y Estructurar el portafolio",
      duration: "1 semana",
      topics: [
        "Cómo lograr un caso de estudio UX",
        "Storytelling y los casos de estudio",
        "Los Sí y los No del portafolio",
        "Herramientas para crear portfolio | Ejemplos",
      ],
      icon: <Briefcase className="h-10 w-10 text-secondary" />,
    },
  ]

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Enfoque práctico y basado en proyectos",
      description:
        "Aprenderás haciendo, trabajando en proyectos reales que podrás incluir en tu portafolio profesional para destacar en el mercado laboral.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Dominio de herramientas profesionales",
      description:
        "Aprenderás a utilizar Figma y otras herramientas de diseño utilizadas por profesionales en la industria para crear prototipos interactivos y design systems.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Metodologías centradas en el usuario",
      description:
        "Dominarás metodologías como Design Thinking y User Research para crear soluciones que realmente satisfagan las necesidades de los usuarios.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Habilidades de investigación y análisis",
      description:
        "Desarrollarás habilidades para investigar, analizar y comprender las necesidades de los usuarios, creando soluciones basadas en datos reales.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Mentorías personalizadas",
      description:
        "Recibirás orientación personalizada de instructores expertos en UX/UI Design que te guiarán durante todo el proceso de aprendizaje.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Portafolio profesional",
      description:
        "Finalizarás el bootcamp con un portafolio profesional que incluirá casos de estudio completos para demostrar tus habilidades a potenciales empleadores.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ]

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Necesito conocimientos previos para tomar este bootcamp?",
      answer:
        "No se requieren conocimientos previos en diseño UX/UI. El bootcamp está diseñado para principiantes sin experiencia previa, así como para aquellos que deseen mejorar sus habilidades existentes. Sin embargo, tener familiaridad con herramientas de diseño gráfico puede ser beneficioso, aunque no es obligatorio.",
    },
    {
      question: "¿Qué oportunidades laborales existen para diseñadores UX/UI?",
      answer:
        "Los diseñadores UX/UI están altamente demandados en el mercado laboral actual. Podrás trabajar como UX Designer, UI Designer, Product Designer, UX Researcher, o UX/UI Designer en empresas de tecnología, agencias digitales, startups o como freelancer. Las empresas de todos los sectores buscan profesionales que puedan crear experiencias digitales centradas en el usuario.",
    },
    {
      question: "¿Necesito tener habilidades de programación para ser diseñador UX/UI?",
      answer:
        "No es necesario tener habilidades de programación para ser un diseñador UX/UI exitoso. Sin embargo, entender los fundamentos de HTML, CSS y JavaScript puede ser beneficioso para comunicarte mejor con los desarrolladores y entender las limitaciones técnicas. En este bootcamp nos enfocamos en las habilidades de diseño, investigación y prototipado necesarias para el rol.",
    },
    {
      question: "¿Qué herramientas aprenderé a utilizar en el bootcamp?",
      answer:
        "Aprenderás a utilizar Figma como herramienta principal para el diseño y prototipado, ya que es una de las más utilizadas en la industria actualmente. También te familiarizarás con herramientas de investigación, testing y presentación que complementarán tu flujo de trabajo como diseñador UX/UI.",
    },
    {
      question: "¿Cómo son las clases y cuál es la metodología de enseñanza?",
      answer:
        "El bootcamp se desarrolla en un entorno virtual que incluye clases en vivo, estudios de caso, simulaciones prácticas y evaluaciones periódicas. Cada sesión se compone de teoría y práctica aplicada, permitiéndote adquirir experiencia real en el diseño UX/UI. Trabajarás en proyectos prácticos que podrás incluir en tu portafolio profesional.",
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
              Este bootcamp tiene como objetivo formar diseñadores UX/UI capaces de crear experiencias digitales
              centradas en el usuario, desde la investigación inicial hasta la creación de prototipos interactivos y
              pruebas de usabilidad.
              <br />
              <br />A lo largo del programa, aprenderás metodologías como Design Thinking, técnicas de investigación de
              usuarios, creación de wireframes y prototipos, y evaluación de usabilidad. Trabajarás en proyectos reales
              que podrás incluir en tu portafolio profesional, preparándote para ingresar al mercado laboral como
              diseñador UX/UI.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/ux-ui-design-process.png" alt="Proceso de diseño UX/UI" fill className="object-cover" />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">¿Por qué estudiar UX/UI Design?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  El diseño UX/UI se ha convertido en una de las disciplinas más demandadas en el mundo digital. Las
                  empresas han comprendido que ofrecer experiencias de usuario excepcionales es clave para el éxito de
                  sus productos y servicios digitales.
                </p>
                <p className="text-lg text-gray-700">
                  Los diseñadores UX/UI son profesionales altamente valorados y bien remunerados, ya que combinan
                  habilidades creativas con pensamiento analítico y empatía hacia los usuarios. Al dominar el diseño
                  UX/UI, te posicionarás como un profesional capaz de crear soluciones digitales que no solo se vean
                  bien, sino que realmente resuelvan las necesidades de los usuarios.
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
              Herramientas que dominarás
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Figma", icon: <Figma className="h-10 w-10 text-secondary" /> },
                  { name: "Design Thinking", icon: <Palette className="h-10 w-10 text-secondary" /> },
                  { name: "User Research", icon: <FileSearch className="h-10 w-10 text-secondary" /> },
                  { name: "Prototyping", icon: <PenTool className="h-10 w-10 text-secondary" /> },
                  { name: "Wireframing", icon: <Layers className="h-10 w-10 text-secondary" /> },
                  { name: "Usability Testing", icon: <TestTube className="h-10 w-10 text-secondary" /> },
                  { name: "User Personas", icon: <UserCheck className="h-10 w-10 text-secondary" /> },
                  { name: "Accessibility", icon: <Accessibility className="h-10 w-10 text-secondary" /> },
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-3">{tech.icon}</div>
                    <span className="font-medium text-primary">{tech.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">
                *Herramientas sujetas a cambio según las necesidades de los estudiantes y los factores de contratación.
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
                  src="/ux-ui-instructor.png"
                  alt="Instructor de UX/UI Design"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Nombre del Instructor</h3>
                <p className="text-secondary font-medium mb-4">UX/UI Designer & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Diseñador UX/UI con más de 8 años de experiencia trabajando para empresas de tecnología y agencias
                  digitales. Ha liderado proyectos de diseño para startups y grandes empresas, creando experiencias
                  digitales centradas en el usuario que han mejorado significativamente las métricas de negocio y la
                  satisfacción de los usuarios.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="rounded-full">
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    Behance
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
