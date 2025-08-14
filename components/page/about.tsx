'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-aarwastu-light-gray py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid items-center gap-12 md:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <img
              src="/jack-valley.webp"
              alt="AARWASTU Team"
              className="h-96 w-full rounded-lg object-cover"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="mb-6 font-serif text-4xl font-bold text-aarwastu-black">
              About AARWASTU
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              At AARWASTU, we believe in the beauty of simplicity. Our designs
              are a reflection of nature and modernity, tailored to enrich
              lives. Based in Solo, Indonesia, we focus on creating spaces
              that harmonize form and function.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Each project is a narrative, a blend of architectural excellence
              and interior sophistication. We transform visions into reality
              through meticulous attention to detail and unwavering commitment
              to quality.
            </p>
            <div className="flex items-center text-aarwastu-wood">
              <MapPin className="mr-2 h-5 w-5" />
              <span className="font-semibold">Based in Solo, Indonesia</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
