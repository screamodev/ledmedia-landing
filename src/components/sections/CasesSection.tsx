'use client';

import { useState } from 'react';

const categories = ['Всі проєкти', 'Комерційні об\'єкти', 'Медіафасади', 'Інтерактивні рішення', 'Заходи', 'Зовнішня реклама', 'Спортивні об\'єкти'];

const CasesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Всі проєкти');

  return (
    <section id="кейси" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наші кейси</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ознайомтеся з нашими успішними проєктами світлодіодних екранів та медіафасадів різного формату та призначення.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Placeholder Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full bg-blue-100 flex items-center justify-center">
                <div className="text-blue-500 font-medium">Зображення кейсу {i}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Приклад проєкту {i}</h3>
                <p className="text-gray-600">Короткий опис проєкту, що показує основні особливості та результати впровадження LED-технологій.</p>
                <button className="mt-4 text-blue-600 font-medium flex items-center gap-1 group">
                  Детальніше
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Переглянути всі проєкти
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection; 