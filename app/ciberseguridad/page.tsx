import type { Metadata } from "next"
import CiberseguridadClientPage from "./CiberseguridadClientPage"

export const metadata: Metadata = {
  title: "Carrera Técnica en Ciberseguridad | Talendig",
  description:
    "Forma parte de la nueva generación de profesionales en ciberseguridad. Aprende a proteger, detectar, responder y recuperar sistemas de información frente a amenazas cibernéticas.",
  keywords: [
    "ciberseguridad",
    "carrera técnica",
    "seguridad informática",
    "hacking ético",
    "pentesting",
    "Talendig",
    "educación en línea",
  ],
}

export default function CiberseguridadPage() {
  return <CiberseguridadClientPage />
}
