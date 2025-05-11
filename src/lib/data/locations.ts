export interface Location {
  id: string;
  title: string;
  address: string;
  videoUrl?: string;
  image?: string;
  isComingSoon?: boolean;
}

export interface City {
  id: string;
  name: string;
  image: string;
  locations: Location[];
  isComingSoon?: boolean;
}

const cities: City[] = [
  {
    id: 'kharkiv',
    name: 'Харків',
    image: '/images/cities/kharkiv.svg',
    locations: [
      {
        id: 'klass-saltivske',
        title: 'Супермаркет "Класс" Салтівське шосе',
        address: 'Харків, Салтівське шосе, 248',
        videoUrl: 'https://www.youtube.com/embed/6D6OsZ3tydg',
        image: '/images/locations/klass-saltivske.svg',
      },
      {
        id: 'klass-holodna-gora',
        title: 'Супермаркет "Класс" на Холодній Горі',
        address: 'Харків, вулиця Дудинської, 1А',
        videoUrl: 'https://www.youtube.com/embed/4gENbAJ7SZk',
        image: '/images/locations/placeholder.svg',
      }
    ]
  },
  {
    id: 'kyiv',
    name: 'Київ',
    image: '/images/cities/kyiv.svg',
    locations: [],
    isComingSoon: true
  }
];

export default cities; 