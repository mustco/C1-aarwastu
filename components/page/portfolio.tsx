'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  portfolioCategories,
  portfolioItems,
} from '@/lib/data/portfolio-data';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const norm = (s: string) => s.trim().toLowerCase();

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (norm(activeFilter) === 'all') return portfolioItems;
    return portfolioItems.filter(
      (it) => norm(it.category) === norm(activeFilter)
    );
  }, [activeFilter]);

  const displayedItems = useMemo(() => {
    const n = Math.min(visibleItems, filteredItems.length);
    return filteredItems.slice(0, n);
  }, [filteredItems, visibleItems]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleItems(6);
    setCurrentImageIndex(0);
    setLightboxOpen(false);
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, filteredItems.length));
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setCurrentImageIndex((p) => (p + 1) % Math.max(filteredItems.length, 1));

  const prevImage = () =>
    setCurrentImageIndex(
      (p) =>
        (p - 1 + Math.max(filteredItems.length, 1)) %
        Math.max(filteredItems.length, 1)
    );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightboxOpen, filteredItems.length]);

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 bg-aarwastu-light-gray py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-aarwastu-black">
            Portfolio
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Discover how we transform visions into reality through our
            carefully crafted projects
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((filter) => (
              <Button
                key={filter}
                aria-pressed={filter === activeFilter}
                variant={filter === activeFilter ? 'default' : 'outline'}
                className={
                  filter === activeFilter
                    ? 'bg-aarwastu-black hover:bg-aarwastu-black/90'
                    : 'border-aarwastu-black text-aarwastu-black hover:bg-aarwastu-black hover:text-white'
                }
                onClick={() => handleFilterChange(filter)}
                aria-label={`Filter portfolio by ${filter}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <div
          key={activeFilter}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayedItems.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.imageUrl || '/placeholder.svg'}
                  alt={project.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <div className="text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="mb-2 font-serif text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-aarwastu-gold">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleItems < filteredItems.length && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleLoadMore}
              variant="ghost"
              size="lg"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4
                 text-aarwastu-black shadow-md ring-1 ring-black/10
                 hover:shadow-lg hover:ring-black/20"
            >
              <span>Load More Projects</span>
              <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </motion.div>
        )}
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">
          <div className="relative flex h-full w-full items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="max-h-full max-w-4xl">
              <img
                src={
                  filteredItems[currentImageIndex]?.imageUrl ||
                  '/placeholder.svg'
                }
                alt={filteredItems[currentImageIndex]?.title}
                className="max-h-full max-w-full object-contain"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="mb-2 font-serif text-2xl font-semibold">
                  {filteredItems[currentImageIndex]?.title}
                </h3>
                <p className="text-aarwastu-gold">
                  {filteredItems[currentImageIndex]?.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
