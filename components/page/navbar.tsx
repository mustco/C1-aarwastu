'use client';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex cursor-pointer items-center space-x-2">
            <img
              src="/aarwastu.png"
              alt="AARWASTU Logo"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="font-serif text-2xl font-bold text-aarwastu-black">
              AARWASTU
            </div>
          </a>

          <div className="hidden items-center space-x-8 md:flex">
            {[
              ['home', 'Home'],
              ['about', 'About'],
              ['services', 'Services'],
              ['portfolio', 'Portfolio'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-aarwastu-black transition-colors hover:text-aarwastu-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
