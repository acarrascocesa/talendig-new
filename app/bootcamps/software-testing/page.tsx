"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MondayForm } from "@/components/monday-form"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"
import {
  TestTube,
  Clock,
  Users,
  Award,
  CheckCircle,
  Code,
  FileCode,
  Server,
  Bug,
  Workflow,
  Layers,
  GitBranch,
  Laptop,
  Webhook,
  Globe,
} from "lucide-react"
import { FAQ } from "@/components/faq-component"

export default function SoftwareTestingBootcampPage() {
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
    title: "Software Testing",
    description:
      "Aprende a crear pruebas automatizadas utilizando herramientas como Selenium, Cucumber, SoapUI y Postman para adaptarte a la tendencia del mercado hacia modelos de pruebas híbridos o completamente automatizados.",
    duration: "20 horas",
    level: "Intermedio",
    nextStart: "Martes y Jueves, 8:00 PM a 10:00 PM",
    icon: <TestTube className="h-16 w-16 text-white" />,
  }

  // Módulos del bootcamp
  const modules = [
    {
      title: "Módulo 1: Repaso Programación Orientada a Objeto (Java SE)",
      duration: "4 horas",
      topics: [
        "Repaso general de la OOP utilizando Java como lenguaje de programación",
        "Conceptos principales de OOP: clases, objetos, encapsulación",
        "Abstracción, polimorfismo y herencia",
        "Preparación del entorno de desarrollo para testing",
      ],
      icon: <Code className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 2: Introducción a la automatización de pruebas",
      duration: "4 horas",
      topics: [
        "¿Qué puedo automatizar? ¿Cuándo es factible automatizar?",
        "¿Por qué debería automatizar?",
        "Entender los beneficios de la automatización",
        "Enfoques de automatización (UI y API)",
        "Herramientas disponibles en el mercado",
      ],
      icon: <Bug className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 3: Conceptos básicos: Selenium",
      duration: "4 horas",
      topics: [
        "Conceptos básicos del enfoque de automatización UI con Selenium",
        "Web driver, web elements, actions, etc.",
        "Configuración de Selenium",
        "Selenium Locators",
        "Creación de escenarios simples",
        "Integración con JUnit (o TestNG) y Maven",
      ],
      icon: <Laptop className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 4: Implementación de Cucumber",
      duration: "4 horas",
      topics: [
        "Explorando conceptos de Behavior-Driven-Development (BDD)",
        "Implementación de Cucumber",
        "Creación de escenarios más complejos usando Selenium+Cucumber",
        "Buenas prácticas y patrones de diseño como Page Object Model",
      ],
      icon: <Workflow className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Módulo 5: Pruebas API",
      duration: "4 horas",
      topics: [
        "Conceptos básicos del enfoque de automatización API",
        "Aprender a probar y automatizar pruebas de backend",
        "Configuración y utilización de SoapUI",
        "Configuración y utilización de Postman",
        "Integración de pruebas API en el flujo de trabajo",
      ],
      icon: <Webhook className="h-10 w-10 text-secondary" />,
    },
  ]

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Adaptación a las tendencias del mercado",
      description:
        "Aprende a crear pruebas automatizadas para adaptarte a la tendencia del mercado hacia modelos de pruebas híbridos o completamente automatizados.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Dominio de herramientas profesionales",
      description:
        "Aprenderás a utilizar Selenium, Cucumber, SoapUI y Postman, herramientas ampliamente utilizadas en la industria para la automatización de pruebas.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Enfoque práctico",
      description:
        "El bootcamp se centra en la práctica, permitiéndote aplicar inmediatamente los conocimientos adquiridos en escenarios reales de testing.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Mejora de la calidad del software",
      description:
        "Aprenderás a implementar pruebas automatizadas que mejorarán significativamente la calidad del software y reducirán los errores en producción.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Buenas prácticas y patrones de diseño",
      description:
        "Conocerás y aplicarás buenas prácticas y patrones de diseño como Page Object Model, que te permitirán crear pruebas más mantenibles y escalables.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Automatización de APIs",
      description:
        "Aprenderás a automatizar pruebas de APIs, un aspecto fundamental en el desarrollo de aplicaciones modernas basadas en microservicios.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ]

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Necesito conocimientos previos para tomar esta microcredencial?",
      answer:
        "Sí, se requieren conocimientos básicos en programación orientada a objetos. El bootcamp está diseñado para profesionales que ya tienen cierta familiaridad con conceptos de programación y desean especializarse en la automatización de pruebas.",
    },
    {
      question: "¿Para quién está dirigida esta microcredencial?",
      answer:
        "Esta microcredencial está dirigida a ejecutores, analistas, ingenieros, líderes, coordinadores y gerentes de prueba de software interesados en conocer y aprender sobre el uso de automatización de pruebas. También es adecuada para testers, ingenieros de ambiente de prueba y desarrollo, líderes de proyecto, scrum masters, product owners, maestros docentes, estudiantes universitarios y desarrolladores web.",
    },
    {
      question: "¿Cuál es la duración y horario del bootcamp?",
      answer:
        "El bootcamp tiene una duración total de 20 horas, distribuidas en sesiones de 2 horas los martes y jueves de 8:00 PM a 10:00 PM. Esto permite a los profesionales que trabajan a tiempo completo participar sin interferir con sus horarios laborales.",
    },
    {
      question: "¿Qué herramientas aprenderé a utilizar?",
      answer:
        "Aprenderás a utilizar herramientas profesionales de automatización de pruebas como Selenium para pruebas de interfaz de usuario, Cucumber para implementar BDD (Behavior-Driven Development), y SoapUI y Postman para pruebas de APIs. También trabajarás con Java como lenguaje de programación y Maven como gestor de dependencias.",
    },
    {
      question: "¿Obtendré alguna certificación al finalizar el bootcamp?",
      answer:
        "Sí, al completar satisfactoriamente el bootcamp recibirás una microcredencial de Talendig que valida tus conocimientos y habilidades en automatización de pruebas de software. Esta credencial es reconocida en la industria y puede ayudarte a destacar en el mercado laboral.",
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
                  Microcredencial en {bootcampData.title}
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
                    <span className="text-white/80">Horario:</span>
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
              Sobre la Microcredencial en {bootcampData.title}
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
              El mercado está obligando a las empresas a mover su ejecución de pruebas a un modelo híbrido (manual y
              automatizado) o completamente automatizado. Esta microcredencial te permitirá adaptarte a esta tendencia,
              enseñándote cómo crear pruebas automatizadas utilizando herramientas como Selenium, Cucumber, SoapUI y
              PostMan.
              <br />
              <br />
              Aprenderás a implementar pruebas automatizadas tanto a nivel de interfaz de usuario como de APIs,
              utilizando buenas prácticas y patrones de diseño como Page Object Model. Al finalizar, estarás preparado
              para contribuir significativamente a la mejora de la calidad del software en tu organización.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/software-testing-automation.png"
                  alt="Automatización de pruebas de software"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">¿Para quién es esta Microcredencial?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Ejecutores, analistas, ingenieros, líderes, coordinadores y gerentes de prueba de software
                      interesados en conocer y aprender sobre el uso de automatización de pruebas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Testers, ingenieros de ambiente de prueba y desarrollo, interesados en automatizar procesos de
                      generación de datos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Líderes de prueba, líderes de proyecto, scrum masters, product owners que deseen conocer sobre la
                      automatización de prueba, sus artefactos, fases y beneficios.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Maestros docentes y estudiantes universitarios que deseen iniciarse en la automatización de
                      pruebas de software.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Desarrolladores web.</span>
                  </li>
                </ul>
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
              Beneficios de nuestra microcredencial
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
                  { name: "Selenium", icon: <Laptop className="h-10 w-10 text-secondary" /> },
                  { name: "Cucumber", icon: <FileCode className="h-10 w-10 text-secondary" /> },
                  { name: "Java", icon: <Code className="h-10 w-10 text-secondary" /> },
                  { name: "Maven", icon: <GitBranch className="h-10 w-10 text-secondary" /> },
                  { name: "JUnit/TestNG", icon: <TestTube className="h-10 w-10 text-secondary" /> },
                  { name: "SoapUI", icon: <Server className="h-10 w-10 text-secondary" /> },
                  { name: "Postman", icon: <Globe className="h-10 w-10 text-secondary" /> },
                  { name: "Page Object Model", icon: <Layers className="h-10 w-10 text-secondary" /> },
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
                  src="/software-testing-instructor.png"
                  alt="Instructor de Software Testing"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Nombre del Instructor</h3>
                <p className="text-secondary font-medium mb-4">QA Automation Engineer & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Ingeniero de Automatización de Pruebas con más de 8 años de experiencia en el diseño e implementación
                  de estrategias de pruebas automatizadas para empresas de diversos sectores. Especialista en Selenium,
                  Cucumber y pruebas de API, ha liderado equipos de QA en proyectos de gran escala, mejorando
                  significativamente la calidad del software y reduciendo los tiempos de entrega.
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
              ¡Inscríbete en nuestra Microcredencial en {bootcampData.title}!
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-center max-w-2xl mx-auto mb-10">
              Completa el siguiente formulario y un asesor académico se pondrá en contacto contigo para brindarte toda
              la información que necesitas sobre la microcredencial.
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
