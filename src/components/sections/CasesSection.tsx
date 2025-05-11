'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ClientsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [partners] = useState([
    { id: 1, name: 'Ліквідатор', image: '/images/partners-logos/likvidator.webp' },
    { id: 2, name: 'Hennessy', image: '/images/partners-logos/hennesy.webp' },
    { id: 3, name: 'French Boulevard', image: '/images/partners-logos/french-bulvar.webp' },
    { id: 4, name: 'АграМол', image: '/images/partners-logos/agramol.webp' },
    { id: 5, name: 'S-Build', image: '/images/partners-logos/s-build.webp' },
    { id: 6, name: 'Perfect Team', image: '/images/partners-logos/perfect-team.webp' },
    { id: 7, name: 'Константа', image: '/images/partners-logos/konstanta.webp' },
    { id: 8, name: 'Автопарк', image: '/images/partners-logos/autopark.webp' },
    { id: 9, name: 'NBK', image: '/images/partners-logos/nbk.webp' },
    { id: 10, name: 'Optimized 1', image: '/images/partners-logos/65b7c7c019f99c000f23115b_optimized.webp' },
    { id: 11, name: 'Optimized 2', image: '/images/partners-logos/65b7c8065a0995000fb73ec4_optimized.webp' },
  ]);

  // Calculate how many items to show based on screen size
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 5; // xl
      if (window.innerWidth >= 1024) return 4; // lg
      if (window.innerWidth >= 768) return 3; // md
      if (window.innerWidth >= 640) return 2; // sm
      return 1; // xs
    }
    return 4; // Default for SSR
  };

  const [itemsToShow, setItemsToShow] = useState(4);
  const totalItems = partners.length;
  
  // Calculate maximum index based on items to show
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
      // Reset current index if it would be out of bounds with new itemsToShow
      setCurrentIndex(prev => Math.min(prev, Math.max(0, totalItems - getItemsToShow())));
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalItems]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // Stop at the end
          if (nextIndex > maxIndex) {
            return 0;
          }
          return nextIndex;
        });
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoScrolling, maxIndex]);

  const handlePrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? maxIndex : nextIndex;
    });
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  return (
    <section id="клієнти" className="py-20 bg-[#121820] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наші клієнти</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ми пишаємося співпрацею з провідними компаніями та брендами, забезпечуючи їх найсучаснішими LED-рішеннями для рекламних потреб.
          </p>
        </div>

        {/* Partners Slider */}
        <div className="relative mt-10 py-8">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / totalItems)}%)`,
                width: `${(totalItems / itemsToShow) * 100}%`
              }}
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / totalItems}%` }}
                >
                  <div className="mx-2 h-40 bg-[#1A222C]/50 p-4 rounded-xl flex items-center justify-center border border-gray-800/30">
                    <div className="relative w-32 h-32">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        sizes="128px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-12 h-12 rounded-full bg-[#10b3cc] text-white flex items-center justify-center shadow-lg hover:bg-[#0e9dba] focus:outline-none z-10"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-12 h-12 rounded-full bg-[#10b3cc] text-white flex items-center justify-center shadow-lg hover:bg-[#0e9dba] focus:outline-none z-10"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-[#10b3cc]' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Наші клієнти обирають LED-рекламу від LEDMedia за високу якість, яскравість зображення, надійність та оперативну технічну підтримку 24/7.
          </p>
          <a 
            href="#контакти" 
            className="inline-block py-3 px-8 bg-[#10b3cc] hover:bg-[#0e9dba] text-white font-medium rounded-lg transition-colors"
            aria-label="Contact us"
          >
            Стати нашим клієнтом
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection; 