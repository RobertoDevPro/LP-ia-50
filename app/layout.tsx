import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inteligência Artificial Descomplicada 50+ | Ebook + Aulas com Mônica Amoroso por R$14,90',
  description: 'Descubra como a Inteligência Artificial pode facilitar sua vida após os 50. Aprenda do zero com a Mônica, em um guia simples, acolhedor e acessível por apenas R$14,90.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
