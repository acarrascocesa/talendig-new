"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Tipo para los datos de videos de testimonios
export type VideoTestimonial = {
  id: string
  name: string
  program: string
  thumbnail: string
  videoUrl: string
  duration: string
}

// Actualizar los datos de videoTestimonials para usar el video de Ricky Flores
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    name: "Ricky Flores",
    program: "Desarrollador Fullstack",
    thumbnail: "https://img.youtube.com/vi/Ypz6iE3WYHw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Ypz6iE3WYHw",
    duration: "0:59",
  },
  {
    id: "v2",
    name: "Ricky Flores",
    program: "Desarrollador Fullstack",
    thumbnail: "https://img.youtube.com/vi/Ypz6iE3WYHw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Ypz6iE3WYHw",
    duration: "0:59",
  },
  {
    id: "v3",
    name: "Ricky Flores",
    program: "Desarrollador Fullstack",
    thumbnail: "https://img.youtube.com/vi/Ypz6iE3WYHw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Ypz6iE3WYHw",
    duration: "0:59",
  },
]

// Componente modificado para reproducción directa de videos
export default function VideoTestimonials({ useDirectPlay = true }) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  // Función para manejar la reproducción de video
  const handleVideoPlay = (videoId: string) => {
    // Siempre usar reproducción directa
    setPlayingVideoId(playingVideoId === videoId ? null : videoId)
  }

  // Función para cerrar el modal de video
  const closeVideoModal = () => {
    setActiveVideoId(null)
  }

  // Funciones para navegar por los videos
  const scrollVideos = (direction: "left" | "right") => {
    if (videoContainerRef.current) {
      const container = videoContainerRef.current
      const scrollAmount = container.clientWidth * 0.8

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        setCurrentVideoIndex(Math.max(0, currentVideoIndex - 1))
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
        setCurrentVideoIndex(Math.min(videoTestimonials.length - 1, currentVideoIndex + 1))
      }
    }
  }

  // Encontrar el video activo para el modal
  const activeVideo = videoTestimonials.find((video) => video.id === activeVideoId)

  return (
    <div>
      <div className="relative">
        {/* Botones de navegación */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden md:block">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => scrollVideos("left")}
            disabled={currentVideoIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden md:block">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => scrollVideos("right")}
            disabled={currentVideoIndex === videoTestimonials.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Contenedor de videos */}
        <div ref={videoContainerRef} className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory">
          {videoTestimonials.map((video) => (
            <div key={video.id} className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {useDirectPlay && playingVideoId === video.id ? (
                  // Reproducción directa del video
                  <div className="relative aspect-video">
                    <iframe
                      src={`${video.videoUrl}?autoplay=1`}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Testimonio de ${video.name}`}
                    ></iframe>
                  </div>
                ) : (
                  // Thumbnail con botón de reproducción
                  <div className="relative aspect-video cursor-pointer group" onClick={() => handleVideoPlay(video.id)}>
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`Testimonio de ${video.name}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg">
                        <Play className="h-8 w-8 text-primary fill-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h4 className="font-bold text-primary">{video.name}</h4>
                  <p className="text-sm text-gray-500">{video.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de página para móvil */}
        <div className="flex justify-center mt-4 gap-2 md:hidden">
          {videoTestimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentVideoIndex === index ? "bg-secondary" : "bg-gray-300"
              }`}
              aria-label={`Ir al video ${index + 1}`}
              onClick={() => {
                setCurrentVideoIndex(index)
                if (videoContainerRef.current) {
                  const container = videoContainerRef.current
                  container.scrollTo({
                    left: index * (300 + 24), // ancho del elemento + gap
                    behavior: "smooth",
                  })
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal de video (solo se muestra si no se usa reproducción directa) */}
      {!useDirectPlay && activeVideo && (
        <AnimatePresence>
          {activeVideoId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closeVideoModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  onClick={closeVideoModal}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={activeVideo.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Testimonio de estudiante"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

