"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MondayForm } from "@/components/monday-form"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Lock,
  Network,
  FileCode,
  AlertTriangle,
} from "lucide-react"
import { FAQ } from "@/components/faq-component"

export default function CybersecurityBootcampPage() {
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
    title: "Cybersecurity",
    description:
      "El Bootcamp de ciberseguridad está orientado a desarrollar las habilidades técnicas necesarias para desarrollarte como analista de ciberseguridad manejando he implementado los controles necesarios para garantizar la seguridad cibernética en la organización o clientes tecnológicos.",
    duration: "3 meses",
    level: "Todos los niveles",
    nextStart: "1 de Octubre, 2023",
    icon: <Shield className="h-16 w-16 text-white" />,
  }

  // Módulos del bootcamp
  const modules = [
    {
      title: "Semana 1: Fundamentos de Ciberseguridad",
      duration: "1 semana",
      topics: [
        "Introducción del curso",
        "Implementación de Máquinas virtuales",
        "Linux & Windows",
        "Ciberseguridad 101",
      ],
      icon: <Shield className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 2: Herramientas de Seguridad",
      duration: "1 semana",
      topics: [
        "Implementación y uso del laboratorio Kali",
        "Implementación y uso del laboratorio Parrott",
        "Herramientas netdiscover, nmap, Wfuzz, Firefox, Burp suite, curl, true crack",
      ],
      icon: <FileCode className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 3: Aspectos Legales y Técnicos",
      duration: "1 semana",
      topics: ["Derecho en el ciberespacio", "Herramientas Mascan", "Reenvío de puertos"],
      icon: <Lock className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 4: Redes y Reconocimiento",
      duration: "1 semana",
      topics: ["Proxy cómo funcionan", "Manejo de puertos", "Investigación mediante fuentes abiertas"],
      icon: <Network className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 5: OSINT (Inteligencia de Fuentes Abiertas)",
      duration: "1 semana",
      topics: ["Osint 101", "Caso de uso Osint", "Laboratorio uso de herramientas"],
      icon: <AlertTriangle className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 6: Frameworks y Hardening",
      duration: "1 semana",
      topics: [
        "MITRE & ATTACK",
        "Frameworks de ciberseguridad y Ataque cibernéticos",
        "Uso de Armitage",
        "Hardenig de servidores",
        "Hardening de Servicios Web",
      ],
      icon: <Shield className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 7: Seguridad Wireless",
      duration: "1 semana",
      topics: ["Tecnologías Wireless 101", "Ataques a protocolo Wireless"],
      icon: <Network className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 8: Esteganografía",
      duration: "1 semana",
      topics: ["Estenografía 101", "Herramientas de Estenografía", "Caso de uso de estenografía"],
      icon: <FileCode className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 9: Análisis de Datos de Seguridad",
      duration: "1 semana",
      topics: [
        "Fuentes de datos 101",
        "Herramientas de análisis de datos",
        "Reportes dinámicos",
        "Power BI para análisis de datos de seguridad",
      ],
      icon: <AlertTriangle className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 10: Gestión de Vulnerabilidades y SIEM",
      duration: "1 semana",
      topics: [
        "Gestión de vulnerabilidades",
        "Implementación de Siem",
        "Análisis de datos mediante SIEM Open source",
        "Respuesta a incidentes cibernéticos",
      ],
      icon: <Lock className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 11: Análisis de Malware y Phishing",
      duration: "1 semana",
      topics: [
        "Introducción al análisis de programa maligno",
        "Herramientas de reversión de programa maligno",
        "Análisis de programa maligno",
        "Phishing 101",
        "Análisis de Email",
      ],
      icon: <AlertTriangle className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 12: Análisis Avanzado y Defensa Personal",
      duration: "1 semana",
      topics: ["Análisis estático", "Análisis dinámico", "Defensa personal del correo electrónico", "GPG Caso de uso"],
      icon: <BookOpen className="h-10 w-10 text-secondary" />,
    },
  ]

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Laboratorios prácticos",
      description: "Acceso a entornos de laboratorio seguros para practicar técnicas de hacking ético y defensa.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Certificaciones reconocidas",
      description: "Preparación para certificaciones oficiales como CompTIA Security+, CEH y otras.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Mentorías personalizadas",
      description: "Sesiones de mentoría individual para resolver dudas y recibir feedback sobre tus proyectos.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Comunidad de profesionales",
      description: "Acceso a una comunidad activa de estudiantes y profesionales de ciberseguridad.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Bolsa de empleo",
      description: "Acceso a nuestra red de empresas colaboradoras y oportunidades laborales exclusivas.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Recursos adicionales",
      description: "Material complementario, workshops especializados y acceso a eventos del sector.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ]

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Necesito conocimientos previos para tomar este bootcamp?",
      answer:
        "Es recomendable tener conocimientos básicos de redes, sistemas operativos y conceptos de programación, aunque el bootcamp está diseñado para adaptarse a diferentes niveles de experiencia, incluyendo principiantes con fundamentos técnicos.",
    },
    {
      question: "¿Es legal aprender técnicas de hacking?",
      answer:
        "Sí, aprender hacking ético es completamente legal y es una habilidad muy valorada en el mercado laboral. En el bootcamp, te enseñamos a utilizar estas técnicas de manera ética y responsable, siempre con el consentimiento adecuado y en entornos controlados.",
    },
    {
      question: "¿Qué herramientas se utilizan en el bootcamp?",
      answer:
        "Trabajarás con herramientas profesionales utilizadas en la industria como Kali Linux, Metasploit, Wireshark, Burp Suite, Nmap, y muchas otras herramientas de seguridad tanto de código abierto como comerciales.",
    },
    {
      question: "¿El bootcamp me prepara para certificaciones oficiales?",
      answer:
        "Sí, el contenido del bootcamp está alineado con los requisitos de certificaciones como CompTIA Security+, CEH (Certified Ethical Hacker) y otras certificaciones relevantes en el ámbito de la ciberseguridad.",
    },
    {
      question: "¿Cuál es la carga horaria semanal?",
      answer:
        "El bootcamp requiere aproximadamente 15-20 horas semanales, incluyendo clases en vivo, trabajo en laboratorios prácticos y estudio individual.",
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
              Objetivo General: El Bootcamp de ciberseguridad está orientado a desarrollar las habilidades técnicas
              necesarias para desarrollarte como analista de ciberseguridad manejando he implementado los controles
              necesarios para garantizar la seguridad cibernética en la organización o clientes tecnológicos.
              <br />
              <br />
              Objetivos Específicos: Formar profesionales capacitados para identificar, prevenir y mitigar amenazas y
              vulnerabilidades en sistemas y redes, implementando prácticas y herramientas de seguridad para proteger la
              información y garantizar la integridad de los sistemas tecnológicos en las organizaciones.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Estudiantes de Cybersecurity"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">¿Qué aprenderás?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Identificar y evaluar vulnerabilidades en sistemas y redes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Implementar técnicas de hacking ético y pentesting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Desarrollar estrategias de defensa contra ciberataques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Analizar y responder a incidentes de seguridad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Implementar políticas y procedimientos de seguridad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Prepararte para certificaciones oficiales de ciberseguridad</span>
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

      {/* Instructor */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Conoce a tu instructor</h2>
          </FadeInUp>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <FadeInLeft>
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/jackson.jpg"
                  alt="Instructor de Cybersecurity"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Jackson Ferreira Crispin</h3>
                <p className="text-secondary font-medium mb-4">Cybersecurity Expert & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Jackson Ferreira Crispin es un experto en ciberseguridad con sólida experiencia liderando Centros de
                  Operaciones de Seguridad (SOC) y gestionando vulnerabilidades a gran escala. Ha trabajado con
                  herramientas como Stellar Cyber, Vicarius, Tenable, Automox y Darktrace, destacándose por su capacidad
                  de automatizar procesos y clasificar eventos de seguridad con precisión. Además de su enfoque técnico,
                  Jackson es un líder comprometido, con habilidades en la formación de equipos, gestión de incidentes,
                  onboarding de clientes y creación de scripts personalizados para mitigación de riesgos.
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
      <section className="py-20 bg-white">
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

