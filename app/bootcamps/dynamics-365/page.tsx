"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MondayForm } from "@/components/monday-form";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Clock,
  Users,
  Award,
  CheckCircle,
  Code,
  Database,
  FileCode,
  Layers,
  ShieldCheck,
  BarChart,
  DollarSign,
  ShoppingCart,
  Workflow,
  FileText,
  Settings,
  GitBranch,
  Globe,
} from "lucide-react";
import { FAQ } from "@/components/faq-component";

export default function DynamicsBootcampPage() {
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

  // Datos del bootcamp
  const bootcampData = {
    title: "Microsoft Dynamics 365 Finance and Operations",
    description:
      "Forma parte de la élite de desarrolladores especializados en Microsoft Dynamics 365 F&O, dominando el lenguaje X++, desarrollo de módulos, extensibilidad e integración con servicios externos.",
    duration: "3 meses",
    level: "Todos los niveles",
    nextStart: "1 de Octubre, 2023",
    icon: <LayoutGrid className="h-16 w-16 text-white" />,
  };

  // Módulos del bootcamp
  const modules = [
    {
      title:
        "Semana 1: Introducción a Microsoft Dynamics 365 y Entorno de Desarrollo",
      duration: "1 semana",
      topics: [
        "Introducción a Dynamics 365 Finance and Operations (F&O)",
        "Conceptos clave y módulos de F&O",
        "Navegación por la interfaz de usuario y comprensión de la arquitectura",
        "Configuración del entorno de desarrollo: Visual Studio y entorno de trabajo",
      ],
      icon: <LayoutGrid className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 2: Desarrollo de Aplicaciones en Dynamics 365",
      duration: "1 semana",
      topics: [
        "Conceptos básicos de X++ (Lenguaje de programación en Dynamics 365)",
        "Crear una solución de desarrollo y configuración de proyectos",
        "Primeros pasos con tablas, datos y relaciones en X++",
      ],
      icon: <Code className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 3: Modelos de Datos y Estructura de Bases de Datos",
      duration: "1 semana",
      topics: [
        "Diseño y administración de tablas y relaciones",
        "Entender vistas, consultas y su uso en Dynamics 365",
        "Trabajar con formularios y controladores en X++",
      ],
      icon: <Database className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 4: Interfaces de Usuario en Dynamics 365",
      duration: "1 semana",
      topics: [
        "Creación y personalización de formularios",
        "Introducción a los diseños de interfaces de usuario (UI) y controles",
        "Validaciones en formularios y registros",
      ],
      icon: <Layers className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 5: Integración de Datos y Servicios",
      duration: "1 semana",
      topics: [
        "Conceptos básicos sobre integración de datos en F&O",
        "Uso de servicios web (OData, RESTful API)",
        "Integración con servicios externos y bases de datos",
      ],
      icon: <FileCode className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 6: Finanzas en Dynamics 365",
      duration: "1 semana",
      topics: [
        "Introducción a los módulos financieros (contabilidad general, cuentas por cobrar, etc.)",
        "Desarrollo de informes financieros y análisis",
        "Configuración de presupuestos y control de costos",
      ],
      icon: <DollarSign className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 7: Administración de Inventarios y Logística",
      duration: "1 semana",
      topics: [
        "Introducción a la gestión de inventarios y cadena de suministro",
        "Desarrollar funciones para el seguimiento de productos y órdenes",
        "Configuración y personalización de procesos logísticos en F&O",
      ],
      icon: <BarChart className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 8: Gestión de Ventas y Compras",
      duration: "1 semana",
      topics: [
        "Introducción a la gestión de ventas, pedidos y facturación",
        "Desarrollo de procesos de compras y proveedores",
        "Automatización de procesos de ventas y compras",
      ],
      icon: <ShoppingCart className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 9: Desarrollo de Flujos de Trabajo y Procesos de Negocio",
      duration: "1 semana",
      topics: [
        "Creación de flujos de trabajo personalizados en F&O",
        "Desarrollo de procesos de negocio en Dynamics 365",
        "Integración de flujos de trabajo con otros módulos",
      ],
      icon: <Workflow className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 10: Seguridad y Roles en Microsoft Dynamics 365",
      duration: "1 semana",
      topics: [
        "Modelos de seguridad en F&O: usuarios, roles y permisos",
        "Configuración de seguridad y acceso a datos",
        "Buenas prácticas de seguridad en desarrollo",
      ],
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 11: Desarrollo de Informes y Análisis de Datos",
      duration: "1 semana",
      topics: [
        "Introducción a Power BI y reportes en F&O",
        "Creación de informes en SSRS (SQL Server Reporting Services)",
        "Optimización de rendimiento en informes y análisis de datos",
      ],
      icon: <FileText className="h-10 w-10 text-secondary" />,
    },
    {
      title: "Semana 12: Optimización y Despliegue",
      duration: "1 semana",
      topics: [
        "Optimización del rendimiento de aplicaciones en F&O",
        "Estrategias de pruebas en desarrollo y aseguramiento de calidad",
        "Despliegue y mantenimiento de aplicaciones en un entorno de producción",
      ],
      icon: <Settings className="h-10 w-10 text-secondary" />,
    },
  ];

  // Beneficios del bootcamp
  const benefits = [
    {
      title: "Especialización en alta demanda",
      description:
        "Conviértete en un desarrollador especializado en Microsoft Dynamics 365 F&O, una de las plataformas ERP más demandadas en el mercado empresarial.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Dominio del lenguaje X++",
      description:
        "Aprende a programar en X++, el lenguaje específico de Dynamics 365, y desarrolla soluciones personalizadas para necesidades empresariales complejas.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Proyectos prácticos reales",
      description:
        "Trabaja en casos de uso reales y desarrolla soluciones que podrás incluir en tu portafolio profesional para destacar en el mercado laboral.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Integración con servicios externos",
      description:
        "Aprende a integrar Dynamics 365 F&O con servicios externos, APIs y otras plataformas para crear soluciones empresariales completas.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Mentorías personalizadas",
      description:
        "Recibe orientación personalizada de instructores expertos en Microsoft Dynamics 365 que te guiarán durante todo el proceso de aprendizaje.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Preparación para certificaciones",
      description:
        "El programa te prepara para obtener certificaciones oficiales de Microsoft en Dynamics 365 Finance and Operations, aumentando tu valor en el mercado laboral.",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
  ];

  // Preguntas frecuentes específicas del bootcamp
  const faqItems = [
    {
      question: "¿Necesito conocimientos previos para tomar este bootcamp?",
      answer:
        "Es recomendable tener conocimientos básicos de programación y familiaridad con conceptos de desarrollo de software. La experiencia previa con C# o Java es beneficiosa, ya que X++ comparte similitudes con estos lenguajes. No obstante, el bootcamp está diseñado para adaptarse a diferentes niveles de experiencia.",
    },
    {
      question:
        "¿Qué oportunidades laborales existen para desarrolladores de Dynamics 365 F&O?",
      answer:
        "Los desarrolladores especializados en Microsoft Dynamics 365 Finance and Operations están altamente demandados en el mercado laboral. Podrás trabajar como desarrollador de Dynamics 365, consultor técnico, arquitecto de soluciones ERP, o especialista en implementación de Dynamics 365. Las empresas que utilizan esta plataforma buscan constantemente profesionales capacitados para personalizar y optimizar sus sistemas.",
    },
    {
      question:
        "¿Tendré acceso a un entorno de Dynamics 365 F&O para practicar?",
      answer:
        "Sí, proporcionamos acceso a entornos de laboratorio de Microsoft Dynamics 365 Finance and Operations durante el bootcamp. Estos entornos te permitirán practicar el desarrollo en X++, crear personalizaciones y trabajar en proyectos reales sin necesidad de adquirir licencias adicionales.",
    },
    {
      question: "¿El bootcamp me prepara para certificaciones oficiales?",
      answer:
        "Sí, el contenido del bootcamp está alineado con los requisitos de las certificaciones oficiales de Microsoft para Dynamics 365 Finance and Operations. Al finalizar, estarás preparado para presentar exámenes como el MB-500 (Microsoft Dynamics 365: Finance and Operations Apps Developer) y otras certificaciones relacionadas.",
    },
    {
      question: "¿Cómo son las clases y cuál es la metodología de enseñanza?",
      answer:
        "El bootcamp se desarrolla en un entorno virtual que incluye clases en vivo, estudios de caso, simulaciones prácticas y evaluaciones periódicas. Cada sesión se compone de dos horas de teoría y una hora de práctica aplicada, permitiéndote adquirir experiencia real en el desarrollo con Dynamics 365 F&O.",
    },
  ];

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
                  Bootcamp de Desarrollador en {bootcampData.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {bootcampData.description}
                </p>
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
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Detalles del programa
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Duración:</span>
                    <span className="text-white font-medium">
                      {bootcampData.duration}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Nivel:</span>
                    <span className="text-white font-medium">
                      {bootcampData.level}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Próximo inicio:</span>
                    <span className="text-white font-medium">
                      {bootcampData.nextStart}
                    </span>
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
              Sobre el Bootcamp de Desarrollador en {bootcampData.title}
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
              Este bootcamp tiene como objetivo formar desarrolladores
              especializados en Microsoft Dynamics 365 Finance and Operations
              (F&O), brindándoles conocimientos sólidos en el lenguaje X++,
              desarrollo de módulos, extensibilidad, integración con servicios
              externos y optimización del sistema.
              <br />
              <br />
              Al finalizar, los participantes podrán desarrollar soluciones
              personalizadas, mejorar procesos empresariales y trabajar en
              proyectos reales de implementación. El curso se desarrollará en un
              entorno virtual que incluirá clases en vivo, estudios de caso,
              simulaciones prácticas y evaluaciones periódicas. Cada sesión se
              compondrá de dos horas de teoría y una hora de práctica aplicada.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/dynamics-development-flow.png"
                  alt="Desarrollo en Microsoft Dynamics 365 Finance and Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ¿Por qué especializarte en Dynamics 365 F&O?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Microsoft Dynamics 365 Finance and Operations es una de las
                  soluciones ERP más completas y potentes del mercado, utilizada
                  por empresas de todos los tamaños para gestionar sus
                  operaciones financieras, cadena de suministro, fabricación y
                  más.
                </p>
                <p className="text-lg text-gray-700">
                  Los desarrolladores especializados en esta plataforma son
                  altamente demandados y bien remunerados, ya que las empresas
                  necesitan personalizar y optimizar sus sistemas para
                  adaptarlos a sus necesidades específicas. Al dominar el
                  desarrollo en Dynamics 365 F&O, te posicionarás como un
                  profesional de élite en el mercado de consultoría e
                  implementación de ERP.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Plan de estudios
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((module, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 flex items-center">
                    <div className="bg-white/20 p-1 rounded-lg mr-2">
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white">
                        {module.title}
                      </h3>
                      <p className="text-white/80 text-xs">{module.duration}</p>
                    </div>
                  </div>
                  <div className="p-3 flex-1">
                    <ul className="space-y-1 text-sm">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="text-secondary mr-1 mt-0.5 flex-shrink-0">
                            •
                          </span>
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
                    <div className="mr-4 flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {benefit.title}
                      </h3>
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
              Tecnologías que dominarás
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    name: "X++",
                    icon: <Code className="h-10 w-10 text-secondary" />,
                  },
                  {
                    name: "Dynamics 365 F&O",
                    icon: <LayoutGrid className="h-10 w-10 text-secondary" />,
                  },
                  {
                    name: "Visual Studio",
                    icon: <FileCode className="h-10 w-10 text-secondary" />,
                  },
                  {
                    name: "SQL Server",
                    icon: <Database className="h-10 w-10 text-secondary" />,
                  },
                  {
                    name: "Power BI",
                    icon: <BarChart className="h-10 w-10 text-secondary" />,
                  },
                  {
                    name: "Azure DevOps",
                    icon: <GitBranch className="h-10 w-10 text-secondary" />,
                  },
                  {
                    name: "SSRS",
                    icon: <FileText className="h-10 w-10 text-secondary" />,
                  },
                  {
                    name: "Web Services",
                    icon: <Globe className="h-10 w-10 text-secondary" />,
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-gray-100 p-4 rounded-full mb-3">
                      {tech.icon}
                    </div>
                    <span className="font-medium text-primary">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">
                *Tecnologías sujetas a cambio según las necesidades de los
                estudiantes y los factores de contratación.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Conoce a tu instructor
            </h2>
          </FadeInUp>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <FadeInLeft>
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/diverse-classroom-instructor.png"
                  alt="Instructor de Microsoft Dynamics 365"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Nombre del Instructor
                </h3>
                <p className="text-secondary font-medium mb-4">
                  Microsoft Dynamics 365 Developer & Lead Instructor
                </p>
                <p className="text-gray-700 mb-4">
                  Desarrollador certificado en Microsoft Dynamics 365 con más de
                  8 años de experiencia en implementación y personalización de
                  soluciones F&O. Ha liderado proyectos de implementación para
                  empresas de diversos sectores, optimizando procesos
                  financieros, logísticos y de producción a través del
                  desarrollo en X++ y la integración con servicios externos.
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
              ¡Inscríbete en nuestro Bootcamp de Desarrollador en{" "}
              {bootcampData.title}!
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-lg text-center max-w-2xl mx-auto mb-10">
              Completa el siguiente formulario y un asesor académico se pondrá
              en contacto contigo para brindarte toda la información que
              necesitas sobre el bootcamp.
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
