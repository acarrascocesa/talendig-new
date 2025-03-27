"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Database, Code, Cloud, Shield, Laptop, Users, School } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Datos de carreras técnicas para el menú desplegable
const carrerasItems = [
  {
    id: "desarrollo-software",
    name: "Técnico en desarrollo de software",
    href: "/desarrollo-software",
    icon: <Laptop className="h-4 w-4 text-indigo-500" />,
  },
]

// Datos de bootcamps para el menú desplegable
const bootcampItems = [
  {
    id: "data-science",
    name: "Data Science Python",
    href: "/bootcamps/data-science",
    icon: <Database className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "full-stack",
    name: "Full Stack Developer",
    href: "/bootcamps/full-stack",
    icon: <Code className="h-4 w-4 text-green-500" />,
  },
  {
    id: "cloud-architect",
    name: "Arquitecto de Nube",
    href: "/bootcamps/cloud-architect",
    icon: <Cloud className="h-4 w-4 text-pink-500" />,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    href: "/bootcamps/cybersecurity",
    icon: <Shield className="h-4 w-4 text-yellow-500" />,
  },
]

// Datos de academia para el menú desplegable
const academiaItems = [
  {
    id: "por-que-talendig",
    name: "¿Por qué Talendig?",
    href: "/por-que-talendig",
    icon: <School className="h-4 w-4 text-purple-500" />,
  },
  {
    id: "quienes-somos",
    name: "Quiénes somos",
    href: "/quienes-somos",
    icon: <Users className="h-4 w-4 text-red-500" />,
  },
]

// Actualizar los elementos de navegación
const navItems = [
  {
    name: "Carreras Técnicas",
    href: "#carreras-tecnicas",
    hasSubmenu: true,
    submenuItems: carrerasItems,
  },
  {
    name: "Bootcamps",
    href: "#bootcamps",
    hasSubmenu: true,
    submenuItems: bootcampItems,
  },
  {
    name: "Academia",
    href: "#academia",
    hasSubmenu: true,
    submenuItems: academiaItems,
  },
  { name: "Campus Online", href: "https://campus.talendig.com/", isExternal: true },
]

// Componente para el menú desplegable
const DropdownMenu = ({ items, isVisible, isMobile = false }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`absolute ${isMobile ? "position-static w-full pl-8" : "left-0 top-full mt-1 w-64"} bg-white rounded-lg shadow-lg overflow-hidden z-50`}
        >
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="mr-3 flex-shrink-0">{item.icon}</div>
                <span className="text-primary">{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const submenuTimeoutRef = useRef(null)

  // Detectar scroll para cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Funciones para manejar el hover en los elementos del menú
  const handleMouseEnter = (index) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
    }
    setActiveSubmenu(index)
  }

  const handleMouseLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 300)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-section">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 relative z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-iWQiuAFiHhU1YMPqXxUudGIfZqQDly.png"
                alt="Talendig Logo"
                width={160}
                height={45}
                className={`h-12 w-auto transition-all duration-300 ${
                  scrolled ? "scale-90" : "scale-100 brightness-0 invert"
                }`}
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasSubmenu && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group flex items-center ${
                      scrolled ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.name}
                    {item.hasSubmenu && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === index ? "rotate-180" : ""}`}
                      />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>

                  {item.hasSubmenu && <DropdownMenu items={item.submenuItems} isVisible={activeSubmenu === index} />}
                </div>
              ))}
              <Button className="bg-secondary hover:bg-secondary/90 ml-4 rounded-full px-6 shadow-lg shadow-secondary/20 transition-transform hover:translate-y-[-2px]">
                Inscríbete
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${
                scrolled ? "text-primary hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl border-t border-gray-100 transition-all duration-300 animate-in slide-in-from-top">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navItems.map((item, index) => (
              <div key={item.name}>
                <div
                  className="flex justify-between items-center"
                  onClick={() => item.hasSubmenu && setActiveSubmenu(activeSubmenu === index ? null : index)}
                >
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="text-primary hover:text-secondary block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-base font-medium flex-grow"
                    onClick={() => !item.hasSubmenu && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasSubmenu && (
                    <button className="px-4 py-3">
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform ${activeSubmenu === index ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {item.hasSubmenu && (
                  <DropdownMenu items={item.submenuItems} isVisible={activeSubmenu === index} isMobile={true} />
                )}
              </div>
            ))}
            <div className="pt-2">
              <Button className="bg-secondary hover:bg-secondary/90 w-full rounded-full py-6 shadow-md shadow-secondary/20">
                Inscríbete
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

