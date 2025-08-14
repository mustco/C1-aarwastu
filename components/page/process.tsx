'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const processSteps = [
  {
    step: '01',
    title: 'Desain',
    description:
      'Collaborative design process to understand your vision and create detailed architectural plans',
  },
  {
    step: '02',
    title: 'Produksi',
    description:
      'Careful material selection and preparation phase ensuring quality and sustainability',
  },
  {
    step: '03',
    title: 'Instalasi',
    description:
      'Professional construction and installation with attention to every detail',
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-aarwastu-black">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A streamlined approach to bringing your architectural vision to
            life
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {processSteps.map((p, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-aarwastu-gold">
                <span className="font-serif text-2xl font-bold text-black">
                  {p.step}
                </span>
              </div>
              <h3 className="mb-4 font-serif text-2xl font-semibold text-aarwastu-black">
                {p.title}
              </h3>
              <p className="leading-relaxed text-gray-600">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
