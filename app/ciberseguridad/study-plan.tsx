import { FadeInUp, StaggerItem } from "@/components/animations"

export type StudyModule = {
  month: number
  title: string
  topics: string[]
}

export default function CyberSecStudyPlanSection() {
  const studyModules: StudyModule[] = [
    {
      month: 1,
      title: "Fundamentos de Ciberseguridad",
      topics: [
        "Tipos de amenazas y actores maliciosos",
        "Principios CIA: confidencialidad, integridad, disponibilidad",
        "Modelos de seguridad básicos",
      ],
    },
    {
      month: 2,
      title: "Redes y Comunicaciones Seguras",
      topics: [
        "Arquitectura de redes y protocolos",
        "VPN y túneles seguros",
        "Cifrado en tránsito",
        "Endurecimiento de la infraestructura de red",
      ],
    },
    {
      month: 3,
      title: "Gestión de Vulnerabilidades y Evaluación de Riesgos",
      topics: [
        "Identificación y análisis de vulnerabilidades",
        "Herramientas de escaneo automatizado",
        "Clasificación de riesgos (CVSS, OWASP)",
      ],
    },
    {
      month: 4,
      title: "Seguridad en Sistemas Operativos (Windows y Linux)",
      topics: [
        "Hardening y configuración segura",
        "Gestión de permisos y auditoría",
        "Herramientas de protección del sistema",
      ],
    },
    {
      month: 5,
      title: "Criptografía Aplicada",
      topics: [
        "Fundamentos de criptografía",
        "Claves simétricas y asimétricas",
        "Infraestructura PKI y certificados digitales",
        "Casos de uso prácticos",
      ],
    },
    {
      month: 6,
      title: "Hacking Ético y Pruebas de Penetración",
      topics: [
        "Metodologías de pentesting",
        "Fases: reconocimiento, explotación, post-explotación",
        "Uso de Kali Linux, Metasploit y otras herramientas",
      ],
    },
    {
      month: 7,
      title: "Seguridad en Aplicaciones Web y Móviles",
      topics: [
        "Amenazas OWASP Top 10",
        "Pruebas de seguridad web y móvil",
        "Prácticas de desarrollo seguro",
      ],
    },
    {
      month: 8,
      title: "Seguridad en la Nube",
      topics: [
        "Modelos IaaS, PaaS, SaaS",
        "Buenas prácticas en AWS, Azure y GCP",
        "Controles de acceso y cumplimiento",
      ],
    },
    {
      month: 9,
      title: "Gestión de Incidentes y Respuesta ante Brechas",
      topics: [
        "Planes de respuesta a incidentes",
        "Análisis forense básico",
        "Contención, erradicación y recuperación",
      ],
    },
    {
      month: 10,
      title: "Cumplimiento, Normativas y Gobierno de Seguridad",
      topics: [
        "ISO 27001, NIST, GDPR, PCI DSS",
        "Auditorías y políticas de seguridad",
        "Concienciación organizacional",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Plan de estudio de Ciberseguridad (10 Meses)
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyModules.map((module) => (
            <StaggerItem key={module.month}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                    {module.month}
                  </div>
                  <h3 className="ml-3 text-lg font-bold">Mes {module.month}</h3>
                </div>

                <h4 className="text-primary font-bold mb-3">{module.title}</h4>

                <ul className="space-y-2 mt-2">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}
