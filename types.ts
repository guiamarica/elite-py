
export type Language = 'es' | 'en' | 'pt';

export interface Translation {
  name: string;
  description: string;
  address: string;
}

export interface Place {
  id: string;
  category: Category;
  rating: number;
  images: string[]; // Suporta múltiplas imagens
  priceLevel: 1 | 2 | 3 | 4; // 1:$, 2:$$, 3:$$$, 4:$$$$
  translations: {
    es: Translation;
    en: Translation;
    pt: Translation;
  };
  contact?: string;
  whatsapp?: string; // Format: 595981...
  email?: string;
  mapUrl?: string;
}

export enum Category {
  RESTAURANTS = 'restaurants',
  HOTELS = 'hotels',
  TOURS = 'tours',
  NIGHTLIFE = 'nightlife',
  EXCHANGE = 'exchange'
}

export interface AppTranslations {
  title: string;
  subtitle: string;
  categories: Record<Category, string>;
  labels: {
    admin: string;
    details: string;
    more: string;
    close: string;
    addPlace: string;
    edit: string;
    delete: string;
    save: string;
    cancel: string;
    price: string;
    contact: string;
    viewMap: string;
    whatsapp: string;
    call: string;
    email: string;
  };
}
