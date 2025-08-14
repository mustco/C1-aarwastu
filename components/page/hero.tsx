'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const openWA = () => {
  window.open(
    'https://wa.me/6287877190232?text=Halo%20AARWASTU,%20saya%20mau%20konsultasi%20proyek',
    '_blank',
    'noopener,noreferrer'
  );
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/minimalist-house-exterior.png"
          alt="AARWASTU Architecture Project"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        {...fadeInUp}
      >
        <motion.h1
          className="mb-6 font-serif text-5xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Spaces,
          <br />
          Shaping Experiences
        </motion.h1>

        <motion.p
          className="mb-4 text-xl font-light md:text-2xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Indie Architecture
        </motion.p>

        <motion.p
          className="mb-8 text-lg text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Exterior | Interior | Konstruksi | Design & Build
        </motion.p>

        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => (window.location.href = '#portfolio')}
            size="lg"
            className="cursor-pointer bg-aarwastu-gold px-8 py-3 font-semibold text-black hover:bg-aarwastu-gold/90"
          >
            Lihat Portofolio
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer border-white bg-transparent px-8 py-3 text-white hover:bg-white hover:text-black"
            onClick={openWA}
            data-wa-cta="hero"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Hubungi via WhatsApp
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
