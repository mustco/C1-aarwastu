"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if any WhatsApp CTA is intersecting
        const anyIntersecting = entries.some((entry) => entry.isIntersecting)
        setIsVisible(!anyIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    // Observe all elements with data-wa-cta attribute
    const ctaElements = document.querySelectorAll("[data-wa-cta]")
    ctaElements.forEach((element) => observer.observe(element))

    return () => {
      ctaElements.forEach((element) => observer.unobserve(element))
    }
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6287877190232?text=Halo%20AARWASTU,%20saya%20mau%20konsultasi%20proyek", "_blank")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={handleWhatsAppClick}
          className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20b358] transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Chat via WhatsApp"
        >
          <FaWhatsapp className="w-9 h-9" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
