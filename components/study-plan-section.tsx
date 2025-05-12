import { FadeInUp, StaggerItem } from "@/components/animations"

export type StudyModule = {
  month: number
  title: string
  topics: string[]
}

export default function StudyPlanSection() {
  const studyModules: StudyModule[] = [
    {
      month: 1,
      title: "Fundamentos de Programación y Algoritmos",
      topics: [
        "Introducción a la lógica de programación",
        "Estructuras de datos básicas",
        "Algoritmos fundamentales",
        "Pseudocódigo y diagramas de flujo",
      ],
    },
    {
      month: 2,
      title: "Desarrollo Web con HTML, CSS y JavaScript",
      topics: [
        "Estructura y semántica HTML5",
        "Estilos y diseño responsivo con CSS",
        "Manipulación del DOM con JavaScript",
        "Frameworks CSS (Bootstrap, Tailwind)",
      ],
    },
    {
      month: 3,
      title: "Programación Orientada a Objetos con Java o Python",
      topics: [
        "Clases, objetos y herencia",
        "Encapsulamiento y polimorfismo",
        "Interfaces y clases abstractas",
        "Patrones de diseño básicos",
      ],
    },
    {
      month: 4,
      title: "Bases de Datos Relacionales y SQL",
      topics: [
        "Modelado de datos y normalización",
        "Consultas SQL avanzadas",
        "Transacciones y procedimientos almacenados",
        "Integración de BD con aplicaciones",
      ],
    },
    {
      month: 5,
      title: "Desarrollo Frontend con React",
      topics: [
        "Componentes y estado en React",
        "Hooks y ciclo de vida",
        "Manejo de rutas con React Router",
        "Gestión de estado global (Redux/Context)",
      ],
    },
    {
      month: 6,
      title: "Desarrollo Backend con Node.js",
      topics: [
        "APIs RESTful con Express",
        "Autenticación y autorización",
        "Manejo de middleware",
        "Integración con bases de datos",
      ],
    },
    {
      month: 7,
      title: "Bases de Datos NoSQL y MongoDB",
      topics: [
        "Modelado de datos no relacionales",
        "Operaciones CRUD en MongoDB",
        "Agregaciones y consultas avanzadas",
        "Integración con aplicaciones Node.js",
      ],
    },
    {
      month: 8,
      title: "Desarrollo Full Stack y Arquitectura de Software",
      topics: [
        "Integración frontend-backend",
        "Patrones arquitectónicos (MVC, MVVM)",
        "Microservicios básicos",
        "Testing y depuración",
      ],
    },
    {
      month: 9,
      title: "Despliegue en la Nube y DevOps Básico",
      topics: [
        "Contenedores con Docker",
        "Despliegue en plataformas cloud (AWS, Azure)",
        "CI/CD básico",
        "Monitoreo y logging",
      ],
    },
    {
      month: 10,
      title: "Proyecto Final e Introducción a Metodologías Ágiles",
      topics: [
        "Desarrollo de proyecto integrador",
        "Scrum y Kanban",
        "Gestión de proyectos ágiles",
        "Preparación para el mercado laboral",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Plan de estudio (10 Meses)</h2>
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

