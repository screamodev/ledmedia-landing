'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cities from '../../lib/data/locations';

const LocationsSection = () => {
  const [activeCity, setActiveCity] = useState(cities[0].id);
  const [activeLocation, setActiveLocation] = useState<string | null>(
    cities[0].locations.length > 0 ? cities[0].locations[0].id : null
  );

  const currentCity = cities.find(city => city.id === activeCity);
  const currentLocation = currentCity?.locations.find(loc => loc.id === activeLocation);

  const handleCityClick = (cityId: string) => {
    setActiveCity(cityId);
    const city = cities.find(c => c.id === cityId);
    if (city && city.locations.length > 0) {
      setActiveLocation(city.locations[0].id);
    } else {
      setActiveLocation(null);
    }
  };

  return (
    <section id="локації" className="py-20 bg-[rgba(18,24,32,0.9)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наші локації</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ознайомтеся з розташуванням наших 3D рекламних інсталяцій та голографічних вентиляторів у різних містах України. Обирайте найближчу локацію для вашої рекламної кампанії.
          </p>
        </div>

        {/* City Selection */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => handleCityClick(city.id)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                activeCity === city.id
                  ? 'ring-2 ring-[#10b3cc] scale-105'
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              <div className="relative w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-xl">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 w-full p-4 text-white font-semibold text-lg md:text-xl">
                  {city.name}
                </div>
                
                {city.isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                    <span className="bg-[#10b3cc] px-3 py-1 rounded text-white text-sm font-medium rotate-12">
                      Скоро
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Location Content */}
        {currentCity && !currentCity.isComingSoon && (
          <div className="mt-10">
            {/* Location Tabs */}
            {currentCity.locations.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                {currentCity.locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeLocation === location.id
                        ? 'bg-[#10b3cc] text-white'
                        : 'bg-[#1a2330] text-gray-300 hover:bg-[#253244]'
                    }`}
                  >
                    {location.title}
                  </button>
                ))}
              </div>
            )}

            {/* Selected Location Details */}
            {currentLocation && (
              <div className="bg-[#1a2330] rounded-xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left side - Video or Image */}
                  <div className="h-72 md:h-96 relative">
                    {currentLocation.videoUrl ? (
                      <iframe
                        src={currentLocation.videoUrl}
                        title={currentLocation.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : currentLocation.image ? (
                      <Image
                        src={currentLocation.image}
                        alt={currentLocation.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-400">Зображення недоступне</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Right side - Location Info */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{currentLocation.title}</h3>
                      <div className="flex items-start gap-2 mb-6">
                        <svg className="w-5 h-5 text-[#10b3cc] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <address className="text-gray-300 not-italic">
                          {currentLocation.address}
                        </address>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#10b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-300">Висока прохідність</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#10b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-300">HD-якість зображення</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#10b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-300">Доступна цілодобово</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link 
                        href="#контакти" 
                        className="inline-flex items-center gap-2 bg-[#10b3cc] hover:bg-[#0e9eb8] text-white px-6 py-3 rounded-md transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Дізнатися ціну
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {currentCity.locations.length === 0 && (
              <div className="bg-[#1a2330] rounded-xl p-10 text-center">
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-[#10b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Локації ще відсутні</h3>
                <p className="text-gray-400 max-w-lg mx-auto">
                  Ми працюємо над додаванням нових локацій у місті {currentCity.name}. Перевірте пізніше або зв&apos;яжіться з нами, щоб дізнатися більше.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Coming Soon State */}
        {currentCity && currentCity.isComingSoon && (
          <div className="bg-[#1a2330] rounded-xl p-10 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-[#10b3cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Скоро у місті {currentCity.name}</h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              Ми готуємося до запуску 3D рекламних інсталяцій у цьому місті. Залиште свої контактні дані, щоб першими дізнатися про нові локації.
            </p>
            <Link 
              href="#контакти" 
              className="inline-flex items-center gap-2 bg-[#10b3cc] hover:bg-[#0e9eb8] text-white px-6 py-3 rounded-md transition-colors mt-6"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Сповістити мене
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationsSection; 