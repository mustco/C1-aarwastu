'use client';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Home, Palette, Hammer, Sofa } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Home,
    title: 'Exterior Design',
    description: 'Modern architectural facades that blend aesthetics with functionality',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Thoughtfully curated spaces that reflect your lifestyle and personality',
  },
  {
    icon: Hammer,
    title: 'Konstruksi / Build',
    description: 'Quality construction services from foundation to finishing touches',
  },
  {
    icon: Sofa,
    title: 'Furnitur Custom',
    description: 'Bespoke furniture pieces designed to complement your space perfectly',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-aarwastu-black">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive architectural and design solutions tailored to your
            vision
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="h-full border-gray-100 p-6 transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-4 text-aarwastu-gold">
                  <s.icon className="h-12 w-12" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-aarwastu-black">
                  {s.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {s.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
