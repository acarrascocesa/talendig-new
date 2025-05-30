import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Talendig - Bootcamps de Tecnología",
  description:
    "Especialistas en bootcamps de tecnología. Aprende programación, desarrollo web, ciencia de datos y más con nuestra metodología innovadora.",
icons: {
    icon: "/favicon.png",            // para navegadores de escritorio
    apple: "/favicon.png",  // iOS/Android
    shortcut: "/favicon.png",
  },}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'