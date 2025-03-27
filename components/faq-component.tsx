import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const defaultFaqItems = [
  {
    question: "¿Cuál es la modalidad de las clases?",
    answer: (
      <>
        <p>100% virtual con las siguientes características:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Encuentros sincrónicos con el instructor y los estudiantes los días martes y jueves de 8:00 pm a 10:00 pm.
          </li>
          <li>Los encuentros son en la plataforma Zoom.</li>
          <li>Las asignaciones se trabajan en el campus virtual.</li>
          <li>Acceso 24/7 a los materiales del curso y recursos adicionales en nuestro campus virtual.</li>
          <li>Soporte técnico disponible para ayudarte con cualquier problema de conexión o acceso.</li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Cuáles son las modalidades de pago?",
    answer: (
      <ul className="list-disc pl-5">
        <li>Depósito en BanReservas</li>
        <li>Transferencia bancaria</li>
        <li>Pago con tarjeta de crédito en nuestras oficinas</li>
        <li>Efectivo en nuestras oficinas</li>
      </ul>
    ),
  },
  {
    question: "¿Ofrecen becas para esta carrera?",
    answer: "No, actualmente no ofrecemos becas para este programa.",
  },
  {
    question: "¿Qué validez tienen los programas de Talendig?",
    answer:
      "Nuestros programas están avalados por la Universidad Católica de Santo Domingo (UCSD) y Talendig, lo que garantiza su calidad y reconocimiento en el mercado laboral.",
  },
  {
    question: "¿Qué sucede si no cumplo con los requisitos de la carrera?",
    answer:
      "Si no se cumple con los requisitos establecidos, no será posible realizar el programa. Es importante revisar cuidadosamente los requisitos antes de inscribirse para asegurar que puedes comprometerte completamente con el curso.",
  },
]

export function FAQ({ customFaqItems }) {
  const faqItems = customFaqItems || defaultFaqItems

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

