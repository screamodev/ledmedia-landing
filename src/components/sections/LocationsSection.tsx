'use client';

import { useState } from 'react';

const locations = [
  {
    id: 1,
    city: 'Київ',
    address: 'вул. Хрещатик, 15, офіс 201',
    phone: '+380 44 123 4567',
    email: 'kyiv@ledmedia.ua',
  },
  {
    id: 2,
    city: 'Львів',
    address: 'вул. Січових Стрільців, 12, офіс 305',
    phone: '+380 32 987 6543',
    email: 'lviv@ledmedia.ua',
  },
  {
    id: 3,
    city: 'Одеса',
    address: 'вул. Дерибасівська, 22, офіс 104',
    phone: '+380 48 765 4321',
    email: 'odesa@ledmedia.ua',
  }
];

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const location = locations[activeLocation];

  return (
    <section id="локації" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наші офіси</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ми маємо представництва у найбільших містах України, щоб забезпечити оперативну та якісну підтримку для наших клієнтів.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-3 bg-blue-100 rounded-2xl flex items-center justify-center h-[400px]">
            <div className="text-blue-700 font-semibold">Карта України з локаціями</div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex flex-col">
                {/* Location Tabs */}
                <div className="flex space-x-4 mb-6">
                  {locations.map((loc, index) => (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLocation(index)}
                      className={`px-4 py-2 text-sm md:text-base rounded-lg transition-colors ${
                        activeLocation === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {loc.city}
                    </button>
                  ))}
                </div>

                {/* Active Location Details */}
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">{location.city}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Адреса:</div>
                        <div>{location.address}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Телефон:</div>
                        <div>{location.phone}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Email:</div>
                        <div>{location.email}</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    Дивитися на карті
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection; 