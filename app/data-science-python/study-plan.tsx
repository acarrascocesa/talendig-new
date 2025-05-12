import { FadeInUp, StaggerItem } from "@/components/animations"

export type StudyModule = {
  month: number
  title: string
  topics: string[]
}

export default function DataScienceStudyPlanSection() {
  const studyModules: StudyModule[] = [
    {
      month: 1,
      title: "Fundamentos de Python",
      topics: [
        "Instalación de entornos y configuración",
        "Variables y tipos de datos",
        "Operadores y condicionales",
        "Estructuras de control (if, for, while)",
        "Funciones, módulos y paquetes",
        "Ejercicios prácticos de lógica",
      ],
    },
    {
      month: 2,
      title: "Python Intermedio y Estructuras de Datos",
      topics: [
        "Listas, diccionarios, conjuntos y tuplas",
        "Comprensiones de listas y diccionarios",
        "Scripts y funciones personalizadas",
        "Introducción a NumPy y pandas",
        "Casos prácticos con DataFrames reales",
      ],
    },
    {
      month: 3,
      title: "Limpieza, Transformación y Visualización de Datos",
      topics: [
        "Manejo de valores nulos, duplicados y tipos",
        "Transformaciones, merge y agrupaciones",
        "Visualización con Matplotlib y Seaborn",
        "Proyecto práctico: análisis de un CSV real",
      ],
    },
    {
      month: 4,
      title: "Estadística y Probabilidad para Data Science",
      topics: [
        "Estadística descriptiva: medias y dispersión",
        "Probabilidad y distribuciones",
        "Pruebas estadísticas (t-test, chi², ANOVA)",
        "Correlación y regresión lineal simple",
        "Proyecto: análisis correlacional aplicado",
      ],
    },
    {
      month: 5,
      title: "Introducción a Machine Learning",
      topics: [
        "Fundamentos de scikit-learn",
        "Regresión lineal múltiple",
        "Clasificación binaria: Logistic Regression",
        "Proyecto de clasificación (spam, churn)",
        "SQL básico: SELECT, WHERE, JOIN",
      ],
    },
    {
      month: 6,
      title: "Modelos Avanzados de Machine Learning",
      topics: [
        "KNN y árboles de decisión",
        "Métricas: accuracy, precision, recall",
        "Clustering: K-Means y DBSCAN",
        "Segmentación de clientes o productos",
      ],
    },
    {
      month: 7,
      title: "Feature Engineering y Optimización de Modelos",
      topics: [
        "Feature engineering y selección de variables",
        "Validación cruzada",
        "Tuning de hiperparámetros (GridSearchCV)",
        "Pipelines reproducibles",
        "Métricas avanzadas: ROC, AUC, F1 Score",
      ],
    },
    {
      month: 8,
      title: "NLP, Dimensionalidad y APIs",
      topics: [
        "Introducción al NLP y procesamiento de texto",
        "Análisis de sentimiento con redes sociales",
        "Clasificación multiclase (MNIST, Iris)",
        "Reducción de dimensionalidad (PCA, t-SNE)",
        "APIs con Flask y serialización (Pickle, Joblib)",
      ],
    },
    {
      month: 9,
      title: "Producción, Dashboards y MLOps",
      topics: [
        "Dashboards interactivos",
        "Monitorización de modelos y MLOps",
        "Detección de anomalías",
        "Proyecto aplicado (finanzas / industria)",
        "Ética en IA y privacidad de datos",
      ],
    },
    {
      month: 10,
      title: "Proyecto Final e Inserción Laboral",
      topics: [
        "Proyecto final guiado (EDA → producción)",
        "Portafolio en GitHub y documentación",
        "Optimización de CV y LinkedIn",
        "Simulación de entrevista técnica",
        "Presentación final y branding personal",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Plan de estudio de Python & Data Science (10 Meses)
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
