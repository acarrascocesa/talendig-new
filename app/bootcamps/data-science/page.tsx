"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MondayForm } from "@/components/monday-form"
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations"
import { Button } from "@/components/ui/button"
import {
  Database,
  Clock,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Code,
  Server,
  BarChartIcon as ChartBar,
  Brain,
  Layers,
  LineChart,
  GitBranch,
  Cpu,
} from "lucide-react"
import { FAQ } from "@/components/faq-component"

export default function DataScienceBootcampPage() {
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
    title: "Data Science Python y Machine Learning",
    description:
      "Sumérgete en los fundamentos de data science y machine learning con Python en 12 semanas. Obtendrás una comprensión general de todo el proceso de data science de principio a fin.",
    duration: "3 meses",
    level: "Todos los niveles",
    nextStart: "15 de Julio, 2023",
    icon: <Database className="h-16 w-16 text-white" />,
  }

  // Módulos del bootcamp
  const modules = [
    {
      title: "Semana 1: Python para Data Science",
      duration: "1 semana",
      topics: [
        "Fundamentos de Python necesarios para Data Science",
        "Estructuras de datos y operaciones básicas",
        "Funciones y programación orientada a objetos",
        "Librerías esenciales para Data Science",
      ],
      icon: <Code className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 2: Manipular y comprender datos",
      duration: "1 semana",
      topics: [
        "Carga, limpieza y manipulación de datos con Pandas",
        "Fortalezas y debilidades de Python para manipulación de datos",
        "Transformación y preparación de datasets",
        "Análisis exploratorio inicial",
      ],
      icon: <Database className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 3: Fundamentos de modelado de datos",
      duration: "1 semana",
      topics: [
        "Construcción de visualizaciones para entender datos",
        "Comunicación efectiva de resultados a stakeholders",
        "Herramientas de visualización: Matplotlib y Seaborn",
        "Storytelling con datos",
      ],
      icon: <ChartBar className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 4: Estadística inferencial",
      duration: "1 semana",
      topics: [
        "Implementación de técnicas estadísticas con Python",
        "Experimentación con datasets reales",
        "Pruebas de hipótesis y intervalos de confianza",
        "Proyecto práctico de estadística",
      ],
      icon: <LineChart className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 5: Introducción al Machine Learning",
      duration: "1 semana",
      topics: [
        "Fundamentos de machine learning",
        "Uso de Scikit-Learn para machine learning",
        "Tipos de machine learning: supervisado y no supervisado",
        "Preparación de datos para algoritmos",
      ],
      icon: <Brain className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 6: Árboles de decisiones y bosques aleatorios",
      duration: "1 semana",
      topics: [
        "Algoritmos basados en árboles",
        "Optimización para maximizar rendimiento",
        "Fortalezas y debilidades de cada algoritmo",
        "Selección de características para machine learning",
      ],
      icon: <GitBranch className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 7: Regresión logística y regularización",
      duration: "1 semana",
      topics: [
        "Algoritmo de regresión logística",
        "Regresiones logísticas para clasificación multiclase",
        "Regularización L1 y L2",
        "Optimización de hiperparámetros",
      ],
      icon: <Server className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 8: Algoritmos de agrupamiento",
      duration: "1 semana",
      topics: [
        "Algoritmos de clustering",
        "Optimización de algoritmos de agrupamiento",
        "Puntos fuertes y débiles de cada algoritmo",
        "Aplicaciones prácticas de clustering",
      ],
      icon: <Layers className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 9: Reducción de dimensionalidad",
      duration: "1 semana",
      topics: [
        "Fundamentos de reducción de dimensionalidad",
        "Visualización de datos con dimensionalidad reducida",
        "Aceleración de algoritmos de machine learning",
        "Análisis de componentes principales (PCA)",
      ],
      icon: <ChartBar className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 10: Máquinas de potenciación de gradientes",
      duration: "1 semana",
      topics: [
        "Algoritmos de potenciación de gradiente (Gradient Boosting)",
        "Eficacia de los algoritmos de boosting",
        "Introducción a competiciones Kaggle",
        "Implementación práctica de XGBoost",
      ],
      icon: <LineChart className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 11: Usar SQL con Python",
      duration: "1 semana",
      topics: [
        "Fundamentos de bases de datos para data science",
        "Integración de SQL y Python",
        "Consultas avanzadas para análisis de datos",
        "Optimización de consultas SQL",
      ],
      icon: <Database className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 12: Introducción al Deep Learning",
      duration: "1 semana",
      topics: [
        "Fundamentos de deep learning",
        "Frameworks de deep learning",
        "Redes neuronales recurrentes (RNN)",
        "Redes neuronales convolucionales (CNN)",
      ],
      icon: <Cpu className="h-10 w-10 text-secondary" />,
    },
  ]

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Aprende haciendo",
      description:
        "Plan de estudios práctico e intensivo, diseñado para que soluciones problemas del mundo real por medio de la construcción de proyectos y soluciones reales de Data Science.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Conceptos centrales, datos reales",
      description:
        "Aprenderás los conceptos y tecnologías principales detrás del Data Science actual, trabajando con conjuntos de datos y problemas reales para aplicar lo aprendido.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Entrenamiento práctico",
      description:
        "Aprende Data Science moderno a través de tareas, proyectos y la orientación de tu instructor. Las clases son siempre en directo con acceso a profesores ayudantes.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Programa completo y amplio",
      description:
        "Cubrimos el proceso de Data Science en su totalidad, desde la preparación de datos con bibliotecas Python, al modelado en Scikit-Learn, hasta la visualización y presentación.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Desarrollo de proyectos reales",
      description:
        "Trabajarás en proyectos prácticos individuales y en equipo, aplicando conceptos en situaciones del mundo real y desarrollando un portafolio sólido.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Preparación para el mercado laboral",
      description:
        "Recibirás orientación en aspectos profesionales como la creación de CVs técnicos, preparación para entrevistas y comprensión de la dinámica de la industria tecnológica.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ]

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Necesito conocimientos previos para tomar este bootcamp?",
      answer:
        "No se requieren conocimientos previos en Data Science, aunque tener nociones básicas de programación y matemáticas facilitará tu aprendizaje. El bootcamp está diseñado para todos los niveles, incluyendo principiantes.",
    },
    {
      question: "¿A quién está dirigido este bootcamp?",
      answer:
        "El bootcamp está dirigido a personas que deseen adentrarse en el mundo de la ciencia de datos y el aprendizaje automático. Es adecuado para profesionales en áreas como análisis de datos, ingeniería, estadísticas, matemáticas, finanzas y cualquier persona interesada en trabajar con datos para obtener insights y tomar decisiones informadas.",
    },
    {
      question: "¿Qué herramientas y software se utilizan en el bootcamp?",
      answer:
        "Trabajaremos principalmente con Python y sus librerías especializadas como NumPy, Pandas, Matplotlib, Scikit-learn y TensorFlow. También utilizaremos Jupyter Notebooks y otras herramientas de análisis de datos.",
    },
    {
      question: "¿Cómo son las clases y cuál es la metodología de enseñanza?",
      answer:
        "Las clases son en vivo a través de nuestra plataforma virtual, combinando teoría y práctica. Nuestra metodología se basa en proyectos reales, con evaluación continua y feedback personalizado de los instructores.",
    },
    {
      question: "¿Obtendré alguna certificación al finalizar el bootcamp?",
      answer:
        "Sí, al completar satisfactoriamente el bootcamp recibirás un certificado de Talendig que valida tus conocimientos y habilidades en Data Science con Python.",
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
              Sumérgete en los fundamentos de data science y machine learning con Python en 12 semanas. Obtendrás una
              comprensión general de todo el proceso de data science de principio a fin, incluyendo la preparación,
              análisis y visualización de datos, como también sobre cómo aplicar algoritmos de machine learning en
              distintos procesos o tareas.
              <br />
              <br />
              Una vez que termines, tendrás un portafolio de proyectos que demuestran lo que has aprendido de data
              science, como también el conocimiento de uno de los sectores laborales con mayor expansión en el mundo.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/data-science.jpg"
                  alt="Estudiantes de Data Science analizando datos"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Objetivo</h3>
                <p className="text-lg text-gray-700 mb-6">
                  El Bootcamp en Data Science, Python y Machine Learning está dirigido a personas que deseen adentrarse
                  en el mundo de la ciencia de datos y el aprendizaje automático. Es adecuado para profesionales en
                  áreas como análisis de datos, ingeniería, estadísticas, matemáticas, finanzas y cualquier persona
                  interesada en trabajar con datos para obtener insights y tomar decisiones informadas.
                </p>
                <p className="text-lg text-gray-700">
                  También es ideal para aquellos que buscan una transición a roles relacionados con la ciencia de datos
                  y el análisis de datos. No se requiere experiencia previa en ciencia de datos, pero es recomendable
                  tener conocimientos básicos de programación y estadísticas.
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
                  { name: "Python", icon: <Code className="h-10 w-10 text-secondary" /> },
                  { name: "Pandas", icon: <Database className="h-10 w-10 text-secondary" /> },
                  { name: "NumPy", icon: <ChartBar className="h-10 w-10 text-secondary" /> },
                  { name: "Scikit-learn", icon: <Brain className="h-10 w-10 text-secondary" /> },
                  { name: "Matplotlib", icon: <LineChart className="h-10 w-10 text-secondary" /> },
                  { name: "TensorFlow", icon: <Cpu className="h-10 w-10 text-secondary" /> },
                  { name: "SQL", icon: <Database className="h-10 w-10 text-secondary" /> },
                  { name: "Jupyter", icon: <BookOpen className="h-10 w-10 text-secondary" /> },
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
                  src="/jeffrey.jpeg"
                  alt="Instructor de Data Science"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Jeffry Saldaña</h3>
                <p className="text-secondary font-medium mb-4">Data Scientist & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Ingeniero en Software con 8 años de experiencia en ingeniería y análisis de datos. Combino
                  experiencia técnica, precisión analítica y una pasión por transformar datos sin procesar en
                  insights accionables. En roles anteriores, he sobresalido en el diseño de canalizaciones de datos
                  eficientes, modelado avanzado de datos y creación de dashboards impactantes utilizando
                  herramientas como Power BI y Python. Mi habilidad para colaborar con equipos, simplificar
                  datos complejos y comunicar insights de manera efectiva ha respaldado consistentemente la
                  toma de decisiones estratégicas y el crecimiento empresarial. Comprometido con la mejora
                  continua, me mantengo actualizado con las tendencias emergentes para ofrecer soluciones
                  innovadoras basadas en datos que impulsan el éxito organizacional.
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

