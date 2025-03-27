import { MondayForm } from "@/components/monday-form"
import { FadeInUp } from "@/components/animations"

export default function InscriptionSection() {
  return (
    <section id="inscripcion" className="py-20 bg-gray-100">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">¡Inscríbete ahora!</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-lg text-center max-w-2xl mx-auto mb-10">
            Completa el siguiente formulario y un asesor académico se pondrá en contacto contigo para brindarte toda la
            información que necesitas sobre la carrera técnica.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <MondayForm />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

