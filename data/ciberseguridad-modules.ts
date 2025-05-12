import { StudyModule } from "@/components/study-plan-section";

const ciberseguridadModules: StudyModule[] = [
  {
    month: 1,
    title: "Fundamentos de Ciberseguridad",
    topics: [
      "Introducción a los conceptos clave de seguridad",
      "Tipos de amenazas y actores maliciosos",
      "Principios de seguridad: confidencialidad, integridad y disponibilidad",
      "Modelos de seguridad y control de acceso",
    ],
  },
  {
    month: 2,
    title: "Redes y Comunicaciones Seguras",
    topics: [
      "Arquitectura de redes y protocolos seguros",
      "Implementación y gestión de VPNs",
      "Cifrado en tránsito y seguridad en comunicaciones",
      "Medidas para proteger la infraestructura de red",
    ],
  },
  {
    month: 3,
    title: "Gestión de Vulnerabilidades y Evaluación de Riesgos",
    topics: [
      "Identificación y análisis de vulnerabilidades",
      "Herramientas de escaneo y evaluación",
      "Clasificación de riesgos y metodologías (CVSS, OWASP)",
      "Estrategias de mitigación y remediación",
    ],
  },
  {
    month: 4,
    title: "Seguridad en Sistemas Operativos (Windows y Linux)",
    topics: [
      "Técnicas de endurecimiento (hardening) de sistemas",
      "Gestión de permisos y control de acceso",
      "Auditoría y monitoreo de sistemas",
      "Herramientas para proteger sistemas operativos",
    ],
  },
  {
    month: 5,
    title: "Criptografía Aplicada",
    topics: [
      "Fundamentos de criptografía y algoritmos",
      "Sistemas de claves simétricas y asimétricas",
      "Infraestructura de clave pública (PKI)",
      "Certificados digitales y casos de uso prácticos",
    ],
  },
  {
    month: 6,
    title: "Hacking Ético y Pruebas de Penetración (Pentesting)",
    topics: [
      "Metodologías y fases del pentesting",
      "Técnicas de reconocimiento y explotación",
      "Post-explotación y reportes",
      "Uso de herramientas como Kali Linux y Metasploit",
    ],
  },
  {
    month: 7,
    title: "Seguridad en Aplicaciones Web y Móviles",
    topics: [
      "Amenazas OWASP Top 10 y vectores de ataque",
      "Pruebas de seguridad en aplicaciones web",
      "Seguridad en aplicaciones móviles",
      "Prácticas seguras de desarrollo (DevSecOps)",
    ],
  },
  {
    month: 8,
    title: "Seguridad en la Nube",
    topics: [
      "Modelos de servicio y despliegue (IaaS, PaaS, SaaS)",
      "Seguridad en entornos AWS, Azure y GCP",
      "Controles de acceso y gestión de identidades",
      "Cumplimiento y configuración segura en la nube",
    ],
  },
  {
    month: 9,
    title: "Gestión de Incidentes y Respuesta ante Brechas",
    topics: [
      "Creación de planes de respuesta a incidentes",
      "Técnicas de análisis forense digital",
      "Procesos de contención, erradicación y recuperación",
      "Documentación y lecciones aprendidas",
    ],
  },
  {
    month: 10,
    title: "Cumplimiento, Normativas y Gobierno de Seguridad",
    topics: [
      "Estándares principales: ISO 27001, NIST, GDPR, PCI DSS",
      "Auditorías y evaluaciones de seguridad",
      "Desarrollo de políticas y procedimientos",
      "Concienciación y cultura de seguridad organizacional",
    ],
  },
]