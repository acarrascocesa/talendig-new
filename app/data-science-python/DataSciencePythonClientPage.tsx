"use client";

import { useEffect } from "react";
import {
  Database,
  Users,
  Award,
  BookOpen,
  Laptop,
  Server,
  BarChart,
  FileCheck,
  LineChart,
  AlertTriangle,
  Search,
  Code,
  FileCode,
  FileText,
} from "lucide-react";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/faq-component";
import { MondayForm } from "@/components/monday-form";
import DataScienceStudyPlanSection from "./study-plan";

export default function DataSciencePythonClientPage() {
  // Efecto de scroll suave
  useEffect(() => {
    // Función para manejar clics en enlaces internos
    const handleLinkClick = (e: {
      target: any;
      preventDefault: () => void;
    }) => {
      const target = e.target;

      // Verificar si es un enlace interno (href comienza con #)
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href").substring(1);
        const element = document.getElementById(id);

        if (element) {
          // Scroll suave al elemento
          window.scrollTo({
            top: element.offsetTop - 100, // Offset para compensar el navbar fijo
            behavior: "smooth",
          });
        }
      }
    };

    // Agregar event listener
    document.addEventListener("click", handleLinkClick);

    // Limpiar event listener
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  // Datos de la carrera técnica
  const carreraData = {
    title: "Data Science Python y Machine Learning",
    description:
      "Forma parte de la revolución de los datos. Nuestra carrera técnica te prepara para adquirir, procesar, analizar e interpretar grandes volúmenes de datos mediante técnicas estadísticas, programación en Python y algoritmos de aprendizaje automático.",
    duration: "10 meses",
    level: "Todos los niveles",
    nextStart: "Próximamente",
    icon: <Database className="h-16 w-16 text-white" />,
  };

  // Preguntas frecuentes específicas de la carrera técnica
  const faqItems = [
    {
      question:
        "¿Necesito conocimientos previos para tomar esta carrera técnica?",
      answer:
        "No es necesario tener experiencia previa en programación. El curso está diseñado para comenzar desde los fundamentos de Python y avanzar gradualmente hacia conceptos más complejos de Data Science y Machine Learning. Sí es recomendable tener conocimientos básicos de matemáticas y estadística.",
    },
    {
      question: "¿Cuál es la duración total de la carrera técnica?",
      answer:
        "La carrera técnica tiene una duración de 10 meses (40 semanas), con clases sincrónicas dos veces por semana (martes y jueves) de 7:00 pm a 10:00 pm, además de trabajo asincrónico que incluye ejercicios prácticos, proyectos y lecturas.",
    },
    {
      question: "¿Qué herramientas se utilizan en la carrera?",
      answer:
        "Trabajarás con herramientas profesionales utilizadas en la industria como Python, Jupyter Notebooks, NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, TensorFlow, Flask, Streamlit, entre otras bibliotecas y frameworks de análisis de datos y machine learning.",
    },
    {
      question: "¿La carrera me prepara para certificaciones oficiales?",
      answer:
        "Aunque la carrera no está directamente alineada con una certificación específica, el contenido te prepara para afrontar exámenes como Microsoft Certified: Azure Data Scientist Associate, IBM Data Science Professional Certificate, o certificaciones de Python como PCAP o PCPP.",
    },
    {
      question: "¿Cuál es la metodología de enseñanza?",
      answer:
        "La carrera se desarrolla en un entorno virtual que incluye clases en vivo, estudios de caso, simulaciones prácticas y evaluaciones periódicas. Cada semana se compone de sesiones sincrónicas (teoría) y trabajo asincrónico (prácticas aplicadas).",
    },
    {
      question: "¿Qué salidas profesionales tiene esta carrera?",
      answer:
        "Al finalizar, podrás desempeñarte como Data Analyst, Data Scientist Junior, Machine Learning Engineer, Business Intelligence Analyst, Data Engineer Junior, entre otros roles demandados en el mercado laboral actual.",
    },
  ];

  return (
    <main className="pt-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary via-indigo-900 to-secondary/90 overflow-hidden">
        <div className="container-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <FadeInLeft>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                  Data Science Python y Machine Learning en 10 meses
                </h1>
              </FadeInLeft>

              <FadeInLeft delay={0.2}>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Comunidad, Talento y Tecnología
                </p>
              </FadeInLeft>

              <FadeInLeft delay={0.3}>
                <Button
                  className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold rounded-md"
                  onClick={() => {
                    const element = document.getElementById("inscripcion");
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  ¡Inscríbete ahora!
                </Button>
              </FadeInLeft>
            </div>

            <FadeInRight>
              <div className="flex flex-col items-end">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Logos de las instituciones */}
                    <div className="bg-white rounded-lg p-3 flex items-center justify-center h-16">
                      {/* Logo Talendig */}
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-iWQiuAFiHhU1YMPqXxUudGIfZqQDly.png"
                        alt="Talendig"
                        width={120}
                        height={40}
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div className="bg-white rounded-lg p-3 flex items-center justify-center h-16">
                      {/* Logo Libertad Digital */}
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/libertad-digital-SO1GNNiVnlrPOk3xgWQ9a9ltYtCk2N.png"
                        alt="Libertad Digital"
                        width={120}
                        height={40}
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div className="bg-white rounded-lg p-3 flex items-center justify-center h-16">
                      {/* Logo UCSD */}
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ucsd-IMbNI1rPhnBfBL1a3anCxh7Y7B7htF.png"
                        alt="Universidad Católica Santo Domingo"
                        width={60}
                        height={60}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <p className="text-white/80 text-sm mt-4 text-right">
                  Una colaboración entre Talendig, Libertad Digital y la
                  <br />
                  Universidad Católica Santo Domingo (UCSD)
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Sobre la carrera técnica */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
              Sobre la Carrera Técnica en Data Science Python y Machine Learning
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
              <strong>Objetivo General:</strong> Formar profesionales capaces de
              adquirir, procesar, analizar e interpretar grandes volúmenes de
              datos mediante técnicas estadísticas, programación en Python y
              algoritmos de aprendizaje automático, con la finalidad de generar
              conocimiento útil para la toma de decisiones en diferentes
              industrias.
              <br />
              <br />
              <strong>Metodología:</strong> Esta carrera se desarrollará en un
              entorno virtual que incluirá clases en vivo, estudios de caso,
              simulaciones prácticas y evaluaciones periódicas. Cada sesión se
              compondrá de horas de teoría y prácticas aplicadas.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/ml-dashboard-python.png"
                  alt="Estudiantes de Data Science"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ¿Qué aprenderás?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Code className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Programación en Python y uso de bibliotecas especializadas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Técnicas de limpieza y preparación de datos</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Análisis estadístico y visualización de datos</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Algoritmos de Machine Learning supervisado y no
                      supervisado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>
                      Procesamiento de lenguaje natural y análisis de texto
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Server className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Implementación de modelos en producción</span>
                  </li>
                </ul>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Plan de estudios */}
      <section className="py-20 bg-gray-50">
        <DataScienceStudyPlanSection />
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Beneficios de nuestra carrera técnica
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <Database className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Proyectos prácticos
                    </h3>
                    <p className="text-gray-700">
                      Desarrollarás proyectos reales de análisis de datos y
                      machine learning para construir tu portafolio profesional.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Certificación reconocida
                    </h3>
                    <p className="text-gray-700">
                      Obtendrás un certificado avalado por la Universidad
                      Católica de Santo Domingo y Talendig.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Mentorías personalizadas
                    </h3>
                    <p className="text-gray-700">
                      Sesiones de mentoría individual para resolver dudas y
                      recibir feedback sobre tus proyectos.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <LineChart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Comunidad de profesionales
                    </h3>
                    <p className="text-gray-700">
                      Acceso a una comunidad activa de estudiantes y
                      profesionales de data science y machine learning.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <Laptop className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Bolsa de empleo
                    </h3>
                    <p className="text-gray-700">
                      Acceso a nuestra red de empresas colaboradoras y
                      oportunidades laborales exclusivas.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Recursos adicionales
                    </h3>
                    <p className="text-gray-700">
                      Material complementario, workshops especializados y acceso
                      a eventos del sector.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Salidas profesionales */}
      <section className="py-20 bg-gray-50">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Salidas profesionales
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInLeft>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Roles técnicos
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Data Analyst</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Data Scientist Junior</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Machine Learning Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <Search className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Business Intelligence Analyst</span>
                  </li>
                  <li className="flex items-start">
                    <Server className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Data Engineer Junior</span>
                  </li>
                </ul>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Roles de consultoría
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FileCode className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Consultor de Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Especialista en Visualización de Datos</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Analista de Investigación de Mercados</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Especialista en Detección de Fraude</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Formador en Data Science</span>
                  </li>
                </ul>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Preguntas frecuentes
            </h2>
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
              ¡Inscríbete en nuestra Carrera Técnica en {carreraData.title}!
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-center max-w-2xl mx-auto mb-10">
              Completa el siguiente formulario y un asesor académico se pondrá
              en contacto contigo para brindarte toda la información que
              necesitas sobre la carrera técnica.
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
  );
}
