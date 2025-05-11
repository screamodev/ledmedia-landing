'use client';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="про-нас" className="py-20 bg-[#121820]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">ПРО НАС</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Logo */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image 
                src="/images/home-bg-logo1.webp" 
                alt="Ледмедія логотип" 
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Company Description */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="text-white font-semibold">Ледмедія</span> - це новий вимір реклами. Ми зробимо Вас впізнаваними. Ваш рекламний ролик не залишиться без уваги.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Відео з наших проекцій не тільки притягують погляди ваших клієнтів, а ще й стають вірусними в соціальних мережах, всі хочуть поділитися побаченим.
              </p>
              <p className="text-lg md:text-xl font-semibold text-white">
                Будь впізнаваним, будь сучасним, будь першим разом з Ледмедія
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#1a2330] p-4 rounded-lg text-center">
                <div className="text-[#10b3cc] text-3xl font-bold mb-1">10+</div>
                <div className="text-gray-400 text-sm">Років досвіду</div>
              </div>
              <div className="bg-[#1a2330] p-4 rounded-lg text-center">
                <div className="text-[#10b3cc] text-3xl font-bold mb-1">500+</div>
                <div className="text-gray-400 text-sm">Проектів</div>
              </div>
              <div className="bg-[#1a2330] p-4 rounded-lg text-center">
                <div className="text-[#10b3cc] text-3xl font-bold mb-1">100%</div>
                <div className="text-gray-400 text-sm">Задоволених клієнтів</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent my-16"></div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a2330] p-6 rounded-lg">
            <div className="bg-[#10b3cc] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Сучасні технології</h3>
            <p className="text-gray-300">
              Ми використовуємо найновіші LED-технології для найкращої яскравості та якості зображення.
            </p>
          </div>
          
          <div className="bg-[#1a2330] p-6 rounded-lg">
            <div className="bg-[#10b3cc] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Висока аудиторія</h3>
            <p className="text-gray-300">
              Наші екрани розташовані у місцях з найвищою прохідністю для максимального охоплення.
            </p>
          </div>
          
          <div className="bg-[#1a2330] p-6 rounded-lg">
            <div className="bg-[#10b3cc] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Надійність</h3>
            <p className="text-gray-300">
              Гарантуємо безперебійну роботу всіх екранів та оперативну технічну підтримку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 