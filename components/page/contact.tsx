'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const openWA = () => {
  window.open(
    'https://wa.me/6287877190232?text=Halo%20AARWASTU,%20saya%20mau%20konsultasi%20proyek',
    '_blank',
    'noopener,noreferrer'
  );
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-aarwastu-light-gray py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-aarwastu-black">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ready to start your architectural journey? Let's discuss your
            project
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 lg:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Map */}
          <motion.div variants={fadeInUp} className="h-full">
            <div className="min-h-[400px] h-96 overflow-hidden rounded-xs border border-gray-300 shadow-xl lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.373992522877!2d110.8261536!3d-7.552993199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a167f16a2a3bb%3A0x7f63b82a4e6c9db5!2sJl.%20Letjen%20Sutoyo%2C%20Mojosongo%2C%20Surakarta%2C%20Central%20Java%2057127!5e0!3m2!1sid!2sid!4v1692023456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AARWASTU Location - Solo, Indonesia"
              />
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 font-serif text-2xl font-semibold text-aarwastu-black">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="mr-4 h-6 w-6 flex-shrink-0 text-aarwastu-gold" />
                    <div>
                      <p className="font-semibold text-aarwastu-black">
                        Phone
                      </p>
                      <p className="text-gray-700">+62 8787-7190-232</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-4 h-6 w-6 flex-shrink-0 text-aarwastu-gold" />
                    <div>
                      <p className="font-semibold text-aarwastu-black">
                        Email
                      </p>
                      <p className="text-gray-700">
                        maspaijoproject48@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 h-6 w-6 flex-shrink-0 text-aarwastu-gold" />
                    <div>
                      <p className="font-semibold text-aarwastu-black">
                        Address
                      </p>
                      <p className="text-gray-700">
                        Jl Letjen Sutoyo Mojosongo Solo, Surakarta 57127,
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/6287877190232?text=Halo%20AARWASTU,%20saya%20mau%20konsultasi%20proyek"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa-cta="contact"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="flex w-full items-center justify-center bg-[#25D366] py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-[#20b358] hover:shadow-xl"
                  >
                    <FaWhatsapp className="mr-3 h-5 w-5" />
                    Konsultasi via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
