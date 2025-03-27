"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MondayForm } from "@/components/monday-form"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"
import {
  Code,
  Clock,
  Users,
  Award,
  CheckCircle,
  Server,
  Database,
  Globe,
  Layout,
  FileCode,
  Layers,
  GitBranch,
  Cpu,
  Terminal,
} from "lucide-react"
import { FAQ } from "@/components/faq-component"

export default function FullStackBootcampPage() {
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
    title: "Desarrollador Full Stack",
    description:
      "Conviértete en un desarrollador web completo, dominando tanto el frontend como el backend para crear aplicaciones web modernas, funcionales y atractivas.",
    duration: "3 meses",
    level: "Todos los niveles",
    nextStart: "1 de Agosto, 2023",
    icon: <Code className="h-16 w-16 text-white" />,
  }

  // Módulos del bootcamp
  const modules = [
    {
      title: "Semana 1: PRE-WORK",
      duration: "1 semana",
      topics: [
        "Descripción del curso e instalación de herramientas",
        "Introducción/review HTML/CSS/Javascript",
        "Introducción a Git y Github",
        "Elementos HTML5 y CSS (selectores, box model)",
        "Diseño web responsive y Flexbox",
      ],
      icon: <Layout className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 2: Introducción Javascript",
      duration: "1 semana",
      topics: [
        "Tipos de datos en JavaScript",
        "Control de flujo y sentencias condicionales",
        "Arrays y ciclos",
        "Funciones en JavaScript",
        "Code Katas para práctica",
      ],
      icon: <Code className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 3: Programación Orientada a Objetos",
      duration: "1 semana",
      topics: [
        "Propiedades, métodos y clases",
        "Notación JSON",
        "Document Object Model (DOM)",
        "Tipos de datos valor y referencia",
        "Operaciones con arrays y programación asíncrona",
      ],
      icon: <FileCode className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 4: Programación asíncrona en Javascript",
      duration: "1 semana",
      topics: [
        "Observables y operaciones básicas",
        "Async/await y Unit Testing con Jasmine",
        "JavaScript avanzado (Context, Closures, Scopes)",
        "Últimas features de JavaScript",
        "Creación de App con llamada a API web/rest",
      ],
      icon: <Terminal className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 5: Introducción a TypeScript",
      duration: "1 semana",
      topics: [
        "Diferencias entre TypeScript y JavaScript",
        "Tipos, variables y funciones",
        "Clases e interfaces",
        "Tipos avanzados y Generics",
        "Introducción a NodeJS y NPM",
      ],
      icon: <Code className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 6: Server-side Javascript con NodeJS",
      duration: "1 semana",
      topics: [
        "Arquitectura EventDriven en Node",
        "NodeJS como servidor web",
        "Introducción a Express",
        "Routing, rendering y métodos HTTP",
        "Middleware, formularios y autenticación",
      ],
      icon: <Server className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 7: Bases de datos NoSQL",
      duration: "1 semana",
      topics: [
        "Introducción a bases de datos NoSQL",
        "MongoDB y modelo de datos",
        "Operaciones CRUD",
        "Databases, Collections, Documents",
        "MongoDB y Mongoose",
      ],
      icon: <Database className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 8: REACT",
      duration: "1 semana",
      topics: [
        "Introducción a frameworks de desarrollo web",
        "Creación de proyectos con React",
        "Componentes y data binding",
        "Paso de datos y respuesta a eventos",
        "Ciclo de vida de los componentes",
      ],
      icon: <Layers className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 9: Routing y Formularios",
      duration: "1 semana",
      topics: [
        "Configuración del Router",
        "Rutas con parámetros",
        "Protección de rutas con Router Guards",
        "Formularios y validaciones",
        "Pipes e internacionalización con i18n",
      ],
      icon: <GitBranch className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 10: React HTTP",
      duration: "1 semana",
      topics: [
        "Introducción a llamadas via HTTP",
        "Obtención de datos JSON y manejo de errores",
        "Envío de datos con POST, DELETE, PUT",
        "Material Design y componentes",
        "Layout y manejo de estados",
      ],
      icon: <Globe className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 11: Unit Testing en React",
      duration: "1 semana",
      topics: [
        "Unit Testing en React",
        "Buenas prácticas de testing",
        "Laboratorio: Creación de aplicación",
        "Consumo de API REST externo",
        "Implementación de pruebas automatizadas",
      ],
      icon: <Cpu className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 12: LABORATORIO",
      duration: "1 semana",
      topics: [
        "Creación de aplicación con base de datos MongoDB",
        "Acceso via NodeJS/Express",
        "Creación de API en NodeJS/Express",
        "Desarrollo de Frontend Web",
        "Proyecto final integrador",
      ],
      icon: <Terminal className="h-10 w-10 text-secondary" />,
    },
  ]

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Aprendizaje práctico",
      description:
        "Desarrolla proyectos reales individuales y en equipo, aplicando los conceptos aprendidos en situaciones del mundo real y construyendo un portafolio sólido.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Tecnologías actuales",
      description:
        "Aprende las tecnologías más demandadas en el mercado: HTML5, CSS3, JavaScript, TypeScript, React, Node.js, Express y MongoDB.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Metodología inmersiva",
      description:
        "Sumérgete en un entorno de aprendizaje práctico y colaborativo con metodologías intensivas, inmersivas y gamificadas.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Desarrollo Full Stack",
      description:
        "Domina tanto el frontend como el backend, convirtiéndote en un desarrollador versátil capaz de crear aplicaciones web completas.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Mentorías personalizadas",
      description:
        "Recibe orientación personalizada de instructores expertos que te guiarán durante todo el proceso de aprendizaje.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Preparación laboral",
      description:
        "Obtén orientación en aspectos profesionales como la creación de CVs técnicos, preparación para entrevistas y comprensión de la industria tecnológica.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ]

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Necesito conocimientos previos para tomar este bootcamp?",
      answer:
        "No se requieren conocimientos previos en desarrollo web. El bootcamp está diseñado para principiantes sin experiencia previa en programación, así como para aquellos que deseen mejorar sus habilidades existentes y adentrarse en tecnologías web modernas.",
    },
    {
      question: "¿A quién está dirigido este bootcamp?",
      answer:
        "El bootcamp está dirigido a personas interesadas en iniciar o acelerar su carrera en el desarrollo Full Stack. Es apropiado para principiantes, diseñadores que deseen adquirir habilidades de desarrollo, estudiantes, profesionales en transición de carrera y cualquier persona apasionada por el desarrollo y la tecnología.",
    },
    {
      question: "¿Qué herramientas y tecnologías aprenderé?",
      answer:
        "Aprenderás las tecnologías más demandadas en el mercado: HTML5, CSS3, JavaScript, TypeScript, React, Node.js, Express, MongoDB, Git, y herramientas de testing. También aprenderás metodologías de desarrollo y buenas prácticas de la industria.",
    },
    {
      question: "¿Cómo son las clases y cuál es la metodología de enseñanza?",
      answer:
        "Las clases son en vivo a través de nuestra plataforma virtual, combinando teoría y práctica. Nuestra metodología se basa en proyectos reales, con evaluación continua y feedback personalizado de los instructores. El programa es intensivo, inmersivo y gamificado para maximizar tu aprendizaje.",
    },
    {
      question: "¿Obtendré alguna certificación al finalizar el bootcamp?",
      answer:
        "Sí, al completar satisfactoriamente el bootcamp recibirás un certificado de Talendig que valida tus conocimientos y habilidades como Desarrollador Full Stack.",
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
              El objetivo general del Bootcamp en Desarrollo Full Stack es proporcionar a los participantes las
              habilidades técnicas y conocimientos necesarios para convertirse en desarrolladores competentes y capaces
              de crear aplicaciones y sitios web funcionales y atractivos. Este programa intensivo, inmersivo y
              gamificado está diseñado para sumergir a los estudiantes en un entorno de aprendizaje práctico y
              colaborativo, permitiéndoles adquirir una base sólida en tecnologías modernas y metodologías de
              desarrollo.
              <br />
              <br />
              El objetivo específico es que los participantes adquieran las competencias necesarias para crear y
              mantener aplicaciones web completas, tanto a nivel visual como funcional, preparándolos para enfrentar los
              desafíos del mercado laboral de manera integral.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/fullstack.jpg"
                  alt="Desarrolladores Full Stack trabajando en equipo"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Objetivo</h3>
                <p className="text-lg text-gray-700 mb-6">
                  El bootcamp en Desarrollo Full Stack está dirigido a personas interesadas en iniciar o acelerar su
                  carrera en el desarrollo Full Stack. Es apropiado para principiantes sin experiencia previa en
                  programación, así como para aquellos que deseen mejorar sus habilidades existentes y adentrarse en
                  tecnologías web modernas.
                </p>
                <p className="text-lg text-gray-700">
                  También es adecuado para diseñadores que deseen adquirir habilidades de desarrollo frontend y backend.
                  Este programa es ideal para estudiantes, profesionales en transición de carrera y cualquier persona
                  apasionada por el desarrollo y la tecnología.
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
              Tecnologías que aprenderás
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "HTML5", icon: <Layout className="h-10 w-10 text-secondary" /> },
                  { name: "CSS3", icon: <Layout className="h-10 w-10 text-secondary" /> },
                  { name: "JavaScript", icon: <Code className="h-10 w-10 text-secondary" /> },
                  { name: "TypeScript", icon: <FileCode className="h-10 w-10 text-secondary" /> },
                  { name: "React", icon: <Layers className="h-10 w-10 text-secondary" /> },
                  { name: "Node.js", icon: <Server className="h-10 w-10 text-secondary" /> },
                  { name: "MongoDB", icon: <Database className="h-10 w-10 text-secondary" /> },
                  { name: "Express", icon: <Server className="h-10 w-10 text-secondary" /> },
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
                  alt="Instructor de Full Stack"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Nombre del Instructor</h3>
                <p className="text-secondary font-medium mb-4">Full Stack Developer & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Desarrollador Full Stack con más de 8 años de experiencia en la industria. Ha trabajado en startups y
                  grandes empresas, liderando equipos de desarrollo y creando aplicaciones web de alto rendimiento.
                  Apasionado por compartir conocimientos y formar a la próxima generación de desarrolladores.
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

