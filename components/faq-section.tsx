import { FAQ } from "@/components/faq-component"
import { FadeInUp } from "@/components/animations"

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-section">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">Preguntas frecuentes</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

