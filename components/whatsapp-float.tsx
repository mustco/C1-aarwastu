"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/6287877190232?text=Halo%20AARWASTU,%20saya%20mau%20konsultasi%20proyek",
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#25D366] hover:bg-[#20b358] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ease-in-out"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </motion.button>
  );
}
