"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Componente de contador animado
const Counter = ({ value, duration = 2, decimals = 0 }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!inView) return

    const start = 0
    const end = Number.parseInt(value.toString().replace(/[^\d.-]/g, ""))
    const hasDecimal = value.toString().includes("%")

    // Asegurarse de que la duración no sea cero
    const safetyDuration = duration || 2

    // Calcular el incremento por frame para lograr la animación en la duración especificada
    // Asumiendo 60fps como estándar
    const totalFrames = safetyDuration * 60
    const incrementPerFrame = (end - start) / totalFrames

    let currentCount = start

    const counter = setInterval(() => {
      currentCount += incrementPerFrame

      // Si hemos alcanzado o superado el valor final, establecer el valor final y detener
      if (currentCount >= end) {
        clearInterval(counter)
        setCount(end)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, 16) // ~60fps

    return () => clearInterval(counter)
  }, [value, duration, inView])

  return (
    <span ref={ref} className="inline-block">
      {decimals > 0 ? count.toFixed(decimals) : count}
      {value.toString().includes("%") ? "%" : ""}
    </span>
  )
}

export default function StatsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const companies = [
    {
      name: "Aeropuerto Internacional del Cibao",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aeropuerto-Xj8pSrQqRZy595aNin7Y23pAovuwAh.png",
      width: 200,
    },
    {
      name: "Adrian Tropical",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adrian-5rsBo2IDlqofxeURUJ9hhELTD914Gx.png",
      width: 180,
    },
    {
      name: "Ademi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ademi-ag2s1GJj4xZhD1a8ln2EjwEUTtbT4S.png",
      width: 180,
    },
    {
      name: "Banreservas",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banreservas-yRQvyS0vNtsDXL2enCSaRB4xbPsdgK.webp",
      width: 200,
    },
    {
      name: "Data Vimenca",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-vimenca-3EmWc1gytBtA1vrmd7j3M3ucXO7i41.png",
      width: 220,
    },
    {
      name: "Biblio Marketing SRL",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biblio.jpg-c0BqEPwBSZxX2SqJWa2ogfu7ldKM1X.jpeg",
      width: 180,
    },
    {
      name: "PBSC Urban Solutions",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbsc.jpg-w7TH6Rdbdc2iSCLzDct2ZwcZvvLc0d.jpeg",
      width: 220,
    },
    {
      name: "MIREX",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mirex-1MfnVVMbcabFjTgl61JKMWRhjjzxsx.png",
      width: 150,
    },
    {
      name: "VisaNet Dominicana",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visanet-Kj3WKNDQIRa4K60CvByJcpc5rVNej9.png",
      width: 200,
    },
    {
      name: "Global Medica",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global.jpg-Xkn8eSuIkGrIIqQnUyNA1JLV2L2fTP.png",
      width: 180,
    },
    {
      name: "GBH",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gbh-seo-logo-300x300.jpg-Xo7QClSg8TounS7JrnrI1ev9Go5DWX.jpeg",
      width: 120,
    },
    {
      name: "MEGSOFT",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1656688862913-150x150.jpg-WnkEtjOPsshmPmFi19qeswHnZIp4Jh.jpeg",
      width: 150,
    },
    {
      name: "BIONUCLEAR",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-3-150x150-zYoL14t1BSschs8gW1IrjkyurEKUd7.png",
      width: 140,
    },
    {
      name: "JCE",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-jce-300x300.jpg-zeuLKwb23ULUAV9PyJ30ZyuY63R0gI.jpeg",
      width: 160,
    },
    {
      name: "INDOTEL",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-4-150x150-IqZ5glkrRKc9iCdxwTDrftkJLR6Kbo.png",
      width: 160,
    },
    {
      name: "Scotiabank",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scotia-s53SeoUFXxAcni8LZXITmHNQORYMEf.jpeg",
      width: 180,
    },
    {
      name: "SoFi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sofi-WydK0dbNE1WNZR1ToPM8NTp22vhbqI.jpeg",
      width: 140,
    },
    {
      name: "Baptist Health",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baptist-XTmu8uo8uIaJvZoaH4sxVtgwpkPGfB.jpeg",
      width: 180,
    },
    {
      name: "Crossrope",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crossrope-eA7XbKBcGZ7h3TmxSPYEhOirw54kn8.jpeg",
      width: 170,
    },
  ]

  const stats = [
    {
      value: "334",
      label: "Egresados",
      description: "profesionales transformando la industria tech",
      duration: 2.5,
    },
    {
      value: "94%",
      label: "Tasa de Empleabilidad",
      description: "de graduados trabajando en empresas líderes",
      duration: 2,
    },
    {
      value: "3",
      label: "Meses",
      description: "promedio para insertarse al mercado laboral",
      duration: 1,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-section" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Transformamos carreras y creamos líderes tecnológicos del futuro
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            En Talendig, no solo formamos profesionales, construimos el futuro digital de Latinoamérica. Nuestros
            graduados destacan en las empresas más innovadoras gracias a nuestra metodología única que combina
            aprendizaje intensivo, proyectos reales y mentoría personalizada. Descubre el impacto real de nuestros
            programas en las cifras que nos respaldan.
          </p>
        </motion.div>

        {/* Logos de empresas - Slider automático */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
              },
            },
          }}
          className="mb-20 max-w-5xl mx-auto overflow-hidden bg-white"
        >
          <h3 className="text-xl font-semibold text-primary text-center mb-8">
            Empresas que confían en nuestros graduados
          </h3>

          <div className="relative py-6">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            <motion.div
              className="flex items-center"
              animate={{ x: [0, -2000] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicamos los logos para crear un efecto infinito */}
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center mx-8 h-24 filter hover:brightness-110 transition-all duration-300 flex-shrink-0"
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`Logo de ${company.name}`}
                    width={company.width}
                    height={80}
                    className="object-contain"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Estadísticas con contadores */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 border-b-4 border-secondary"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-1 flex items-baseline">
                <Counter value={stat.value} duration={stat.duration} />
                {stat.value.toString().includes("%") ? "" : "+"}
              </div>
              <div className="text-lg font-semibold text-primary mb-1">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

