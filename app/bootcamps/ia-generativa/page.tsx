"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MondayForm } from "@/components/monday-form"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Clock,
  Users,
  Award,
  CheckCircle,
  Code,
  ImageIcon,
  Mic,
  Bot,
  Sparkles,
  ShieldAlert,
  Eye,
  MessageSquare,
  Search,
} from "lucide-react"
import { FAQ } from "@/components/faq-component"

export default function IAGenerativaBootcampPage() {
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
    title: "Inteligencia Artificial Generativa",
    description:
      "Aprende a desarrollar y aplicar modelos de IA generativa para crear contenido innovador en texto, imagen y audio utilizando las tecnologías más avanzadas como Azure OpenAI Service.",
    duration: "12 semanas",
    level: "Intermedio",
    nextStart: "Próximamente",
    icon: <Brain className="h-16 w-16 text-white" />,
    price: "$999 USD",
  }

  // Módulos del bootcamp
  const modules = [
    {
      title: "Módulo 1: Introducción a la IA Generativa",
      duration: "2 semanas",
      topics: [
        "Conceptos básicos sobre inteligencia artificial generativa",
        "Introducción a la IA generativa y sus aplicaciones",
        "Consideraciones éticas en la generación de contenido por IA",
        "Conceptos básicos sobre aprendizaje automático",
        "Principios fundamentales del aprendizaje automático y sus algoritmos",
        "Métodos para prevenir sobreajuste y sesgos en modelos de IA",
      ],
      icon: <Brain className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 2: Modelos de Lenguaje Grandes (LLMs)",
      duration: "4 semanas",
      topics: [
        "Conceptos básicos sobre el Servicio Azure OpenAI",
        "Exploración del servicio Azure OpenAI y sus capacidades",
        "Mejores prácticas para la implementación segura de modelos generativos",
        "Introducción a los conceptos de seguridad en el contexto de la IA",
        "Prompt Shields y modelos para identificar ataques de prompt indirectos",
        "Conceptos básicos sobre análisis de texto con el servicio de lenguaje",
        "Uso del análisis de texto para comprender datos no estructurados",
        "Estrategias para identificar y corregir sesgos lingüísticos",
        "Conceptos básicos sobre respuesta a preguntas con el servicio de lenguaje",
        "Desarrollo de sistemas de respuesta a preguntas utilizando servicios de lenguaje",
      ],
      icon: <MessageSquare className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 3: Generación de Imágenes",
      duration: "2 semanas",
      topics: [
        "Conceptos básicos sobre visión artificial",
        "Técnicas para mejorar la precisión y robustez de los sistemas de visión",
        "Generación de imágenes con modelos de difusión",
        "Prompt engineering para generación de imágenes",
        "Aplicaciones prácticas de la generación de imágenes",
        "Consideraciones éticas en la generación de imágenes",
      ],
      icon: <ImageIcon className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 4: Generación de Audio y Video",
      duration: "2 semanas",
      topics: [
        "Conceptos básicos sobre reconocimiento de voz con Azure AI",
        "Implementación de sistemas de reconocimiento de voz utilizando Azure AI",
        "Estrategias para mejorar la precisión y la seguridad en el reconocimiento de voz",
        "Generación de voz sintética y clonación de voz",
        "Técnicas de procesamiento de audio para mejorar la calidad",
        "Introducción a la generación de video con IA",
      ],
      icon: <Mic className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 5: Aplicaciones de la IA Generativa",
      duration: "2 semanas",
      topics: [
        "Conceptos básicos sobre inteligencia en documentos con Azure AI",
        "Aplicaciones de inteligencia artificial en el análisis de documentos",
        "Consideraciones éticas en el procesamiento automático de documentos",
        "Conceptos básicos sobre Knowledge Mining e Investigación con Azure AI",
        "Uso de Knowledge Mining para extraer información valiosa de datos no estructurados",
        "Introducción a AI Search, fundamentos y aplicaciones",
        "Herramientas y algoritmos, técnicas avanzadas de búsqueda",
        "Casos de uso y prácticas reales, implementaciones y ejemplos prácticos",
      ],
      icon: <Sparkles className="h-10 w-10 text-secondary" />,
    },
  ]

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Dominio de tecnologías de vanguardia",
      description:
        "Aprenderás a utilizar las tecnologías más avanzadas en IA generativa, incluyendo Azure OpenAI Service, modelos de difusión para imágenes y herramientas de procesamiento de lenguaje natural.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Enfoque práctico y basado en proyectos",
      description:
        "Desarrollarás proyectos reales que podrás incluir en tu portafolio, aplicando los conceptos aprendidos en situaciones del mundo real.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Instructores expertos en IA",
      description:
        "Aprenderás de profesionales con experiencia tanto en la industria como en la academia, que te guiarán en tu camino para dominar la IA generativa.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Contenido actualizado y relevante",
      description:
        "El programa está constantemente actualizado para incluir las últimas tendencias y avances en el campo de la IA generativa.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Enfoque en IA responsable",
      description:
        "Aprenderás a implementar modelos de IA generativa de manera ética y responsable, considerando aspectos como la seguridad, la privacidad y los sesgos.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Preparación para el mercado laboral",
      description:
        "Al finalizar el bootcamp, estarás preparado para aplicar tus conocimientos en roles relacionados con la IA generativa, uno de los campos con mayor crecimiento en la industria tecnológica.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ]

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Necesito conocimientos previos para tomar este bootcamp?",
      answer:
        "Se recomienda tener conocimientos básicos de programación y familiaridad con conceptos de inteligencia artificial. No es necesario ser un experto, pero tener una base en Python y conceptos básicos de aprendizaje automático facilitará tu aprendizaje.",
    },
    {
      question: "¿Qué herramientas y tecnologías aprenderé a utilizar?",
      answer:
        "Aprenderás a utilizar Azure OpenAI Service, herramientas de procesamiento de lenguaje natural, modelos de difusión para generación de imágenes, servicios de reconocimiento y generación de voz, y otras tecnologías relacionadas con la IA generativa. También te familiarizarás con técnicas de prompt engineering y mejores prácticas para la implementación segura de modelos generativos.",
    },
    {
      question: "¿Cuál es la metodología de enseñanza?",
      answer:
        "El bootcamp combina teoría y práctica, con un enfoque en proyectos reales. Las clases son impartidas por expertos en IA con experiencia tanto en la industria como en la academia. Además de las clases, tendrás acceso a recursos adicionales, tutorías y un foro de discusión para resolver dudas y compartir conocimientos con otros estudiantes.",
    },
    {
      question: "¿Obtendré alguna certificación al finalizar el bootcamp?",
      answer:
        "Sí, al completar satisfactoriamente el bootcamp recibirás un certificado de Talendig que valida tus conocimientos y habilidades en IA generativa. Este certificado puede ser un valioso complemento para tu currículum y perfil profesional.",
    },
    {
      question: "¿Cuáles son las oportunidades laborales en el campo de la IA generativa?",
      answer:
        "La IA generativa es uno de los campos con mayor crecimiento en la industria tecnológica. Los profesionales con conocimientos en esta área pueden trabajar como ingenieros de IA, científicos de datos especializados en modelos generativos, consultores de IA, desarrolladores de aplicaciones basadas en IA generativa, entre otros roles. Las empresas de todos los sectores están buscando talento en este campo para innovar y mejorar sus productos y servicios.",
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
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Inversión:</span>
                    <span className="text-white font-medium">{bootcampData.price}</span>
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
              La Inteligencia Artificial Generativa está revolucionando la forma en que creamos contenido, resolvemos
              problemas y desarrollamos soluciones innovadoras. Este bootcamp te proporcionará los conocimientos y
              habilidades necesarios para dominar las tecnologías más avanzadas en este campo, incluyendo modelos de
              lenguaje grandes (LLMs), generación de imágenes, audio y video, y aplicaciones prácticas de la IA
              generativa.
              <br />
              <br />A lo largo de 12 semanas, aprenderás a desarrollar soluciones basadas en IA generativa utilizando
              tecnologías como Azure OpenAI Service, implementando buenas prácticas de seguridad y considerando aspectos
              éticos. Al finalizar, estarás preparado para aplicar estos conocimientos en proyectos reales y destacar en
              uno de los campos con mayor crecimiento en la industria tecnológica.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/ai-generative-bootcamp.png"
                  alt="Inteligencia Artificial Generativa"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">¿Por qué estudiar IA Generativa?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  La IA Generativa es una de las áreas de mayor crecimiento y demanda en el campo de la tecnología. Las
                  empresas de todos los sectores están buscando profesionales capaces de implementar soluciones basadas
                  en IA generativa para mejorar sus productos, servicios y procesos.
                </p>
                <p className="text-lg text-gray-700">
                  Al dominar las tecnologías y técnicas de IA generativa, estarás preparado para roles como ingeniero de
                  IA, científico de datos especializado en modelos generativos, consultor de IA, desarrollador de
                  aplicaciones basadas en IA generativa, entre otros. Además, podrás aplicar estos conocimientos para
                  crear soluciones innovadoras y de alto impacto en cualquier campo o industria.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">{module.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{module.title}</h3>
                      <p className="text-white/80 text-sm">{module.duration}</p>
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="text-secondary mr-2 mt-1 flex-shrink-0">•</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Tecnologías que dominarás</h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Azure OpenAI", icon: <Brain className="h-10 w-10 text-secondary" /> },
                  { name: "LLMs", icon: <Bot className="h-10 w-10 text-secondary" /> },
                  { name: "Prompt Engineering", icon: <Code className="h-10 w-10 text-secondary" /> },
                  { name: "Generación de Imágenes", icon: <ImageIcon className="h-10 w-10 text-secondary" /> },
                  { name: "Procesamiento de Voz", icon: <Mic className="h-10 w-10 text-secondary" /> },
                  { name: "IA Responsable", icon: <ShieldAlert className="h-10 w-10 text-secondary" /> },
                  { name: "Visión Artificial", icon: <Eye className="h-10 w-10 text-secondary" /> },
                  { name: "AI Search", icon: <Search className="h-10 w-10 text-secondary" /> },
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Conoce a tus instructores</h2>
          </FadeInUp>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <FadeInLeft>
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/ai-instructor.png"
                  alt="Instructor de IA Generativa"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Expertos en IA</h3>
                <p className="text-secondary font-medium mb-4">Especialistas en IA Generativa & Lead Instructors</p>
                <p className="text-gray-700 mb-4">
                  Nuestro equipo de instructores está formado por expertos en Inteligencia Artificial con amplia
                  experiencia tanto en la industria como en la academia. Han trabajado en proyectos de IA generativa
                  para empresas líderes y están al día con las últimas tendencias y avances en este campo.
                </p>
                <p className="text-gray-700 mb-4">
                  Su enfoque práctico y orientado a resultados te permitirá no solo comprender los conceptos teóricos,
                  sino también aplicarlos en situaciones reales y desarrollar soluciones innovadoras basadas en IA
                  generativa.
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
