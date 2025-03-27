import type React from "react"

export const MondayForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-primary text-white">
        <h3 className="text-2xl font-bold">Formulario de Inscripción</h3>
        <p className="mt-2">Completa tus datos para iniciar tu carrera en desarrollo de software</p>
      </div>
      <div className="p-6">
        <iframe
          src="https://forms.monday.com/forms/embed/40c875c00e59003bb89c7a4c7ed76bf9?r=use1"
          width="100%"
          height="800"
          style={{ border: 0 }}
          title="Formulario de inscripción"
        ></iframe>
      </div>
    </div>
  )
}

