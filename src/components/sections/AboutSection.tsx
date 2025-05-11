'use client';

const AboutSection = () => {
  return (
    <section id="про-нас" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Про нашу компанію</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            LEDMedia - провідний інтегратор LED-рішень в Україні з більш ніж 10-річним досвідом у галузі.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Company Description */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Наша історія та цінності</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Компанія LEDMedia була заснована у 2010 році групою ентузіастів із великим досвідом у галузі LED-технологій. Наша мета від початку була незмінною — створювати високоякісні LED-рішення, які відповідають найвищим світовим стандартам.
              </p>
              <p className="text-gray-600">
                За більш ніж десятиліття ми виросли з невеликої команди у провідного інтегратора LED-технологій в Україні з офісами у найбільших містах та мережею партнерів по всій країні.
              </p>
              <p className="text-gray-600">
                Наші ключові цінності — це інновації, якість і клієнтоорієнтованість. Ми постійно слідкуємо за новими технологіями, працюємо тільки з перевіреними компонентами та завжди шукаємо найкращі рішення для кожного клієнта.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-blue-100 h-80 rounded-2xl flex items-center justify-center">
            <div className="text-blue-700 font-semibold">Фото компанії</div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Наша команда</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Професіонали, які роблять LEDMedia компанією, якій довіряють сотні клієнтів.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Team Member Image Placeholder */}
                <div className="bg-blue-100 h-64 flex items-center justify-center">
                  <div className="text-blue-700 font-semibold">Фото співробітника {i}</div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Ім&apos;я Прізвище</h4>
                  <p className="text-blue-600 mb-4">Посада</p>
                  <p className="text-gray-600 text-sm">
                    Короткий опис досвіду та спеціалізації.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 