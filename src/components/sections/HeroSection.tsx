'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="головна" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/home-bg.webp" 
          alt="LEDMedia background" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,24,32,0.8)] via-[rgba(18,24,32,0.7)] to-[rgba(18,24,32,0.9)]"></div> {/* Darker overlay with gradient */}
      </div>

      {/* Hero Content */}
      <div className="container relative h-full mx-auto px-4 pt-24 md:pt-0 flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Left side with logo */}
        <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image 
              src="/images/home-bg-logo1.webp" 
              alt="LEDMedia logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side with text and CTA */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ЛЕДМЕДІЯ - ЦЕ НОВИЙ<br />ВИМІР РЕКЛАМИ
          </h1>
          <p className="text-lg md:text-xl text-white mb-10">
            Ми зробимо ваш бренд відомим!
          </p>
          <Link 
            href="#контакти" 
            className="inline-block px-8 py-3 text-lg font-medium rounded-md bg-[#10b3cc] text-white hover:bg-[#0e9eb8] transition-colors"
          >
            Дізнатися ціну
          </Link>
        </div>
      </div>

      {/* Social media icons */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-6 h-6 text-white hover:text-[#10b3cc] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <svg className="w-6 h-6 text-white hover:text-[#10b3cc] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.15c-.2 2.112-.85 7.25-1.2 9.62-.15 1.038-.45 1.387-.737 1.425-.625.075-1.1-.412-1.7-.812-.95-.65-1.487-1.05-2.4-1.687-1.063-.75-.375-1.162.236-1.837.16-.175 2.938-2.687 2.988-2.912.007-.03.007-.15-.056-.212s-.174-.024-.25-.024c-.1 0-1.65.994-4.65 2.988-.438.3-.837.45-1.2.438-.4-.013-1.15-.225-1.713-.413-.7-.225-1.25-.337-1.2-.712.025-.2.3-.4.838-.612 3.262-1.425 5.438-2.363 6.525-2.813 3.112-1.275 3.763-1.5 4.175-1.5.1 0 .3.024.438.074.15.05.188.15.213.262.25.125.025.362.025.5z"/>
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg className="w-6 h-6 text-white hover:text-[#10b3cc] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a href="tel:+380672221000" aria-label="Phone">
          <svg className="w-6 h-6 text-white hover:text-[#10b3cc] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 