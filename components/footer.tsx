import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-section">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StaggerItem>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-iWQiuAFiHhU1YMPqXxUudGIfZqQDly.png"
                alt="Talendig Logo"
                width={150}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="mb-4">
                Formando a los profesionales tecnológicos del futuro con metodologías innovadoras y experiencias de
                aprendizaje inmersivas.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/talendigrd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors hover:scale-110 inline-block"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/talendigrd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors hover:scale-110 inline-block"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/talendig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors hover:scale-110 inline-block"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#carreras-tecnicas"
                    className="hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    Carreras Técnicas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#bootcamps"
                    className="hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    Bootcamps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#academia"
                    className="hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    Academia
                  </Link>
                </li>
                <li>
                  <Link
                    href="#quienes-somos"
                    className="hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    Quiénes somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#campus-online"
                    className="hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    Campus Online
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                  <div>
                    <p>809-544-2812 Ext. 2313</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                  <span>849-473-4934 (WhatsApp)</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                  <span>info@talendig.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                  <span>Av Simón Bolívar 902 Ensanche La Julia Santo Domingo, República Dominicana</span>
                </li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeInUp delay={0.5}>
          <div className="border-t border-white/20 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Talendig. Todos los derechos reservados.</p>
          </div>
        </FadeInUp>
      </div>
    </footer>
  )
}

