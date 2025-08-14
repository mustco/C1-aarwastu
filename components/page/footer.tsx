'use client';
import { Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-aarwastu-black py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <img
                src="/aarwastu.png"
                alt="AARWASTU Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <h3 className="font-serif text-2xl font-bold">AARWASTU</h3>
            </div>
            <p className="leading-relaxed text-gray-400">
              Indie Architecture studio creating spaces that inspire and
              endure.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Exterior Design</li>
              <li>Interior Design</li>
              <li>Construction</li>
              <li>Custom Furniture</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                ['home', 'Home'],
                ['about', 'About'],
                ['portfolio', 'Portfolio'],
                ['contact', 'Contact'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="transition-colors hover:text-aarwastu-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/aar.wastu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram AARWASTU"
                className="text-gray-400 transition-colors hover:text-aarwastu-gold"
              >
                <Instagram className="h-6 w-6" />
              </a>

              <a
                href="https://wa.me/6287877190232?text=Halo%20AARWASTU,%20saya%20mau%20konsultasi%20proyek"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp AARWASTU"
                data-wa-cta="footer"
                className="text-gray-400 transition-colors hover:text-aarwastu-gold"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AARWASTU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
