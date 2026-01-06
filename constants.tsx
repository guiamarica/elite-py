
import { Category, Place, AppTranslations } from './types';

export const UI_TRANSLATIONS: Record<'es' | 'en' | 'pt', AppTranslations> = {
  es: {
    title: 'ELITE PY',
    subtitle: 'La guía más sofisticada de Paraguay',
    categories: {
      [Category.RESTAURANTS]: 'Gastronomía',
      [Category.HOTELS]: 'Hoteles & Spa',
      [Category.TOURS]: 'Cultura & Paseos',
      [Category.NIGHTLIFE]: 'Vida Nocturna',
      [Category.EXCHANGE]: 'Premium Exchange',
      [Category.MOBILITY]: 'Mobilidad'
    },
    labels: {
      admin: 'Administración',
      details: 'Ver Detalles',
      more: 'más',
      close: 'Cerrar',
      addPlace: 'Agregar Lugar',
      edit: 'Editar',
      delete: 'Eliminar',
      save: 'Guardar',
      cancel: 'Cancelar',
      price: 'Precio',
      contact: 'Contacto',
      viewMap: 'Ver Mapa',
      whatsapp: 'WhatsApp',
      call: 'Llamar',
      email: 'E-mail'
    }
  },
  en: {
    title: 'ELITE PY',
    subtitle: 'The most sophisticated guide to Paraguay',
    categories: {
      [Category.RESTAURANTS]: 'Fine Dining',
      [Category.HOTELS]: 'Hotels & Spa',
      [Category.TOURS]: 'Culture & Tours',
      [Category.NIGHTLIFE]: 'Nightlife',
      [Category.EXCHANGE]: 'VIP Exchange',
      [Category.MOBILITY]: 'Mobility'
    },
    labels: {
      admin: 'Administration',
      details: 'View Details',
      more: 'more',
      close: 'Close',
      addPlace: 'Add Place',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
      price: 'Price',
      contact: 'Contact',
      viewMap: 'View Map',
      whatsapp: 'WhatsApp',
      call: 'Call',
      email: 'Email'
    }
  },
  pt: {
    title: 'ELITE PY',
    subtitle: 'O guia mais sofisticado do Paraguai',
    categories: {
      [Category.RESTAURANTS]: 'Gastronomia',
      [Category.HOTELS]: 'Hotéis & Spa',
      [Category.TOURS]: 'Cultura & Passeios',
      [Category.NIGHTLIFE]: 'Vida Noturna',
      [Category.EXCHANGE]: 'Premium Exchange',
      [Category.MOBILITY]: 'Mobilidade'
    },
    labels: {
      admin: 'Administração',
      details: 'Ver detalhes',
      more: 'mais',
      close: 'Fechar',
      addPlace: 'Adicionar Local',
      edit: 'Editar',
      delete: 'Excluir',
      save: 'Salvar',
      cancel: 'Cancelar',
      price: 'Preço',
      contact: 'Contato',
      viewMap: 'Ver Mapa',
      whatsapp: 'WhatsApp',
      call: 'Ligar',
      email: 'E-mail'
    }
  }
};

export const INITIAL_PLACES: Place[] = [
  // --- RESTAURANTS (6) ---
  {
    id: 'as1',
    category: Category.RESTAURANTS,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Mburicaó', description: 'El máximo referente de la alta gastronomía en Asunción. Un ambiente exclusivo donde la cocina de autor se fusiona con la elegancia de un piano bar.', address: 'Av. Prof. Alirio Silva c/ Av. Choferes del Chaco, Asunción' },
      en: { name: 'Mburicao', description: 'The peak of fine dining in Asunción. An exclusive setting where signature cuisine meets piano bar elegance.', address: 'Av. Prof. Alirio Silva & Choferes del Chaco, Asunción' },
      pt: { name: 'Mburicaó', description: 'A maior referência em alta gastronomia de Assunção. Um ambiente exclusivo onde a cozinha autoral se funde com a elegância de um piano bar.', address: 'Av. Prof. Alirio Silva c/ Av. Choferes del Chaco, Assunção' }
    },
    contact: '+595 21 660 048',
    whatsapp: '595981100200',
    mapUrl: 'https://maps.google.com/?q=Mburicao+Restaurante+Asuncion'
  },
  {
    id: 'cde1',
    category: Category.RESTAURANTS,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1550966841-3ee20005740b?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Sax Palace CDE', description: 'Ubicado en el último piso de Sax Department Store, ofrece una experiencia de lujo total con vista al Puente de la Amistad.', address: 'Avenida San Blas, Ciudad del Este' },
      en: { name: 'Sax Palace CDE', description: 'Located on the top floor of Sax Department Store, offering total luxury with views of the Friendship Bridge.', address: 'San Blas Avenue, Ciudad del Este' },
      pt: { name: 'Sax Palace CDE', description: 'Localizado no último andar da Sax Department Store, oferece uma experiência de luxo total com vista para a Ponte da Amizade.', address: 'Avenida San Blas, Cidade do Leste' }
    },
    whatsapp: '595983123456',
    mapUrl: 'https://maps.google.com/?q=Sax+Palace+Ciudad+del+Este'
  },
  {
    id: 'as-r2',
    category: Category.RESTAURANTS,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Tierra Colorada', description: 'Cocina paraguaya contemporánea liderada por el chef Rodolfo Angenscheidt. Premiado internacionalmente.', address: 'Av. Santísima Trinidad 784, Asunción' },
      en: { name: 'Tierra Colorada', description: 'Contemporary Paraguayan cuisine led by Chef Rodolfo Angenscheidt. Internationally awarded.', address: '784 Santísima Trinidad Ave, Asunción' },
      pt: { name: 'Tierra Colorada', description: 'Cozinha paraguaia contemporânea liderada pelo chef Rodolfo Angenscheidt. Premiado internacionalmente.', address: 'Av. Santíssima Trindade 784, Assunção' }
    },
    contact: '+595 21 663 335',
    whatsapp: '595981123456',
    mapUrl: 'https://maps.google.com/?q=Tierra+Colorada+Restaurante'
  },
  {
    id: 'as-r3',
    category: Category.RESTAURANTS,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 3,
    translations: {
      es: { name: 'Takuare\'e', description: 'Especialista en carnes y sabores del campo con un toque gourmet sofisticado en el centro del eje corporativo.', address: 'Hotel Dazzler, Aviadores del Chaco, Asunción' },
      en: { name: 'Takuaree', description: 'Specialist in meats and countryside flavors with a sophisticated gourmet touch in the corporate axis.', address: 'Dazzler Hotel, Aviadores del Chaco, Asunción' },
      pt: { name: 'Takuare\'e', description: 'Especialista em carnes e sabores do campo com um toque gourmet sofisticado no coração do eixo corporativo.', address: 'Hotel Dazzler, Aviadores del Chaco, Assunção' }
    },
    whatsapp: '595981111222',
    mapUrl: 'https://maps.google.com/?q=Takuaree+Asuncion'
  },
  {
    id: 'as-r4',
    category: Category.RESTAURANTS,
    rating: 4.8,
    images: ['https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200'],
    priceLevel: 3,
    translations: {
      es: { name: 'Lo de Osvaldo', description: 'El templo del fútbol y la parrilla paraguaya. Ambiente temático único con las mejores carnes del país.', address: 'Cerro Corá 810, Asunción' },
      en: { name: 'Lo de Osvaldo', description: 'The temple of football and Paraguayan grill. Unique themed atmosphere with the country\'s best meats.', address: '810 Cerro Corá, Asunción' },
      pt: { name: 'Lo de Osvaldo', description: 'O templo do futebol e da parrilla paraguaia. Ambiente temático único com as melhores carnes do país.', address: 'Cerro Corá 810, Assunção' }
    },
    contact: '+595 21 446 122',
    mapUrl: 'https://maps.google.com/?q=Lo+de+Osvaldo+Asuncion'
  },
  {
    id: 'as-r5',
    category: Category.RESTAURANTS,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Talleyrand', description: 'Excelencia francesa y continental desde hace décadas. El destino preferido para cenas de gala y eventos diplomáticos.', address: 'Mcal. Estigarribia 932, Asunción' },
      en: { name: 'Talleyrand', description: 'French and continental excellence for decades. The preferred destination for gala dinners and diplomatic events.', address: '932 Mcal. Estigarribia, Asunción' },
      pt: { name: 'Talleyrand', description: 'Excelência francesa e continental há décadas. O destino preferido para jantares de gala e eventos diplomáticos.', address: 'Mcal. Estigarribia 932, Assunção' }
    },
    contact: '+595 21 441 163',
    mapUrl: 'https://maps.google.com/?q=Talleyrand+Centro+Asuncion'
  },

  // --- HOTELS (6) ---
  {
    id: 'as-h1',
    category: Category.HOTELS,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Factoría Hotel', description: 'Concepto único en Asunción. Lujo industrial y sofisticación boutique.', address: 'Calle Dr. Francisco Morra 813, Asunción' },
      en: { name: 'Factoria Hotel', description: 'Unique concept in Asunción. Industrial luxury and boutique sophistication.', address: '813 Dr. Francisco Morra St, Asunción' },
      pt: { name: 'Factoría Hotel', description: 'Conceito único em Assunção. Luxo industrial e sofisticação boutique.', address: 'Rua Dr. Francisco Morra 813, Assunção' }
    },
    contact: '+595 21 612 100',
    whatsapp: '595983555999',
    email: 'info@factoriahotel.com.py',
    mapUrl: 'https://maps.google.com/?q=Factoria+Hotel+Asuncion'
  },
  {
    id: 'cde-h1',
    category: Category.HOTELS,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 3,
    translations: {
      es: { name: 'Hotel Casino Acaray', description: 'Elegancia clásica frente al río con casino de nivel internacional.', address: 'Calle 11 de Septiembre, Ciudad del Este' },
      en: { name: 'Hotel Casino Acaray', description: 'Classic riverside elegance with an international-level casino.', address: '11 de Septiembre St, Ciudad del Este' },
      pt: { name: 'Hotel Casino Acaray', description: 'Elegância clássica frente ao rio com cassino de nível internacional.', address: 'Rua 11 de Setembro, Cidade do Leste' }
    },
    contact: '+595 61 504 311',
    mapUrl: 'https://maps.google.com/?q=Hotel+Casino+Acaray'
  },
  {
    id: 'as-h2',
    category: Category.HOTELS,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'La Misión Boutique', description: 'Inspirado en las misiones jesuíticas paraguayas. Un hotel con alma e historia en el corazón de Recoleta.', address: 'Dr. Eulogio Estigarribia 4990, Asunción' },
      en: { name: 'La Mision Boutique', description: 'Inspired by Paraguayan Jesuit missions. A hotel with soul and history in the heart of Recoleta.', address: '4990 Dr. Eulogio Estigarribia, Asunción' },
      pt: { name: 'La Misión Boutique', description: 'Inspirado nas missões jesuíticas paraguaias. Um hotel com alma e história no coração da Recoleta.', address: 'Dr. Eulogio Estigarribia 4990, Assunção' }
    },
    contact: '+595 21 621 800',
    mapUrl: 'https://maps.google.com/?q=La+Mision+Boutique+Hotel+Asuncion'
  },
  {
    id: 'as-h3',
    category: Category.HOTELS,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 3,
    translations: {
      es: { name: 'The Hub Hotel', description: 'Moderno, dinámico y con una de las mejores terrazas con piscina de la capital.', address: 'J. Eulogio Estigarribia, Asunción' },
      en: { name: 'The Hub Hotel', description: 'Modern, dynamic, and featuring one of the capital\'s best rooftop pool terraces.', address: 'J. Eulogio Estigarribia, Asunción' },
      pt: { name: 'The Hub Hotel', description: 'Moderno, dinâmico e com um dos melhores terraços com piscina da capital.', address: 'J. Eulogio Estigarribia, Assunção' }
    },
    whatsapp: '595981500600',
    mapUrl: 'https://maps.google.com/?q=The+Hub+Hotel+Asuncion'
  },
  {
    id: 'as-h4',
    category: Category.HOTELS,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Bourbon Asunción', description: 'Elegancia internacional junto a la CONMEBOL. Un resort urbano de primer nivel.', address: 'Av. Sudamericana, Luque' },
      en: { name: 'Bourbon Asuncion', description: 'International elegance next to CONMEBOL. A top-tier urban resort.', address: 'Sudamericana Ave, Luque' },
      pt: { name: 'Bourbon Assunção', description: 'Elegância internacional junto à CONMEBOL. Um resort urbano de primeiro nível.', address: 'Av. Sudamericana, Luque' }
    },
    contact: '+595 21 659 1000',
    mapUrl: 'https://maps.google.com/?q=Bourbon+Convention+Hotel+Asuncion'
  },
  {
    id: 'as-h5',
    category: Category.HOTELS,
    rating: 4.6,
    images: [
      'https://plus.unsplash.com/premium_photo-1723867490491-10519f8ed969?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1561501900-3701fa6a0f64?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 3,
    translations: {
      es: { name: 'Dazzler by Wyndham', description: 'Confort moderno en el nuevo eje comercial. Ideal para negocios y ocio premium.', address: 'Aviadores del Chaco 1392, Asunción' },
      en: { name: 'Dazzler by Wyndham', description: 'Modern comfort in the new commercial axis. Ideal for premium business and leisure.', address: '1392 Aviadores del Chaco, Asunción' },
      pt: { name: 'Dazzler by Wyndham', description: 'Conforto moderno no novo eixo comercial. Ideal para negócios e lazer premium.', address: 'Aviadores del Chaco 1392, Assunção' }
    },
    contact: '+595 21 600 399',
    mapUrl: 'https://maps.google.com/?q=Dazzler+Hotel+Asuncion'
  },

  // --- TOURS (6) ---
  {
    id: 'cde-t1',
    category: Category.TOURS,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1629813083648-59c40213702a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 2,
    translations: {
      es: { name: 'Itaipú Binacional', description: 'Maravilla de la ingeniería mundial con iluminación monumental nocturna.', address: 'Hernandarias, Alto Paraná' },
      en: { name: 'Itaipu Dam', description: 'World engineering marvel with monumental night lighting.', address: 'Hernandarias, Alto Parana' },
      pt: { name: 'Itaipu Binacional', description: 'Maravilha da engenharia mundial com iluminação monumental noturna.', address: 'Hernandarias, Alto Paraná' }
    },
    contact: '+595 61 599 8040',
    mapUrl: 'https://maps.google.com/?q=Itaipu+Binacional+Paraguay'
  },
  {
    id: 'as-t1',
    category: Category.TOURS,
    rating: 4.9,
    images: [
      'https://plus.unsplash.com/premium_photo-1691960159059-04976913256a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 1,
    translations: {
      es: { name: 'Panteón de los Héroes', description: 'El mausoleo nacional y joya arquitectónica inspirada en Los Inválidos de París.', address: 'Palma y Chile, Asunción' },
      en: { name: 'Pantheon of Heroes', description: 'The national mausoleum and architectural gem inspired by Les Invalides in Paris.', address: 'Palma & Chile, Asunción' },
      pt: { name: 'Panteão dos Heróis', description: 'O mausoléu nacional e joia arquitetônica inspirada em Les Invalides de Paris.', address: 'Palma e Chile, Assunção' }
    },
    mapUrl: 'https://maps.google.com/?q=Panteon+de+los+Heroes+Asuncion'
  },
  {
    id: 'as-t2',
    category: Category.TOURS,
    rating: 4.8,
    images: ['https://plus.unsplash.com/premium_photo-1691031428843-fffcb81cf454?auto=format&fit=crop&q=80&w=1200'],
    priceLevel: 1,
    translations: {
      es: { name: 'Palacio de López', description: 'Sede del gobierno y símbolo máximo de la architecture neoclásica paraguaya.', address: 'Costanera, Asunción' },
      en: { name: 'Lopez Palace', description: 'Seat of government and ultimate symbol of Paraguayan neoclassical architecture.', address: 'Costanera, Asunción' },
      pt: { name: 'Palácio de López', description: 'Sede do governo e símbolo máximo da arquitetura neoclássica paraguaia.', address: 'Costanera, Assunção' }
    },
    mapUrl: 'https://maps.google.com/?q=Palacio+de+Lopez+Asuncion'
  },
  {
    id: 'cde-t2',
    category: Category.TOURS,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 1,
    translations: {
      es: { name: 'Saltos del Monday', description: 'Cataratas impresionantes rodeadas de naturaleza virgen.', address: 'Presidente Franco, Alto Paraná' },
      en: { name: 'Monday Falls', description: 'Impressive waterfalls surrounded by virgin nature.', address: 'Presidente Franco, Alto Parana' },
      pt: { name: 'Saltos del Monday', description: 'Cataratas impressionantes cercadas por natureza virgem.', address: 'Presidente Franco, Alto Paraná' }
    },
    mapUrl: 'https://maps.google.com/?q=Saltos+del+Monday'
  },
  {
    id: 'as-t3',
    category: Category.TOURS,
    rating: 4.7,
    images: [
      'https://plus.unsplash.com/premium_photo-1673139285535-80a03340beda?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 1,
    translations: {
      es: { name: 'Costanera de Asunción', description: 'El paseo marítimo ideal para el atardecer con vista a la Bahía de Asunción.', address: 'Avenida Costanera, Asunción' },
      en: { name: 'Asuncion Riverfront', description: 'The ideal waterfront promenade for sunset views over the Asunción Bay.', address: 'Costanera Ave, Asunción' },
      pt: { name: 'Costanera de Assunção', description: 'O calçadão ideal para o pôr do sol com vista para a Baía de Assunção.', address: 'Avenida Costanera, Assunção' }
    },
    mapUrl: 'https://maps.google.com/?q=Costanera+de+Asuncion'
  },
  {
    id: 'as-t4',
    category: Category.TOURS,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1579362094269-009f44921678?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 2,
    translations: {
      es: { name: 'Museo del Barro', description: 'Arte indígena, cerámica popular y arte contemporáneo en un solo espacio.', address: 'Grabadores del Cabichu\'i, Asunción' },
      en: { name: 'Museo del Barro', description: 'Indigenous art, popular ceramics, and contemporary art in one single space.', address: 'Grabadores del Cabichui, Asunción' },
      pt: { name: 'Museu do Barro', description: 'Arte indígena, cerâmica popular e arte contemporânea em um só espaço.', address: 'Grabadores del Cabichu\'i, Assunção' }
    },
    mapUrl: 'https://maps.google.com/?q=Museo+del+Barro+Asuncion'
  },

  // --- NIGHTLIFE (6) ---
  {
    id: 'as-n1',
    category: Category.NIGHTLIFE,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511108690759-0013d1ca49b2?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Negroni Rooftop', description: 'El punto de encuentro más trendy con la mejor vista de la ciudad.', address: 'Dazzler Hotel, Asunción' },
      en: { name: 'Negroni Rooftop', description: 'The trendiest meeting point with the city\'s best views.', address: 'Dazzler Hotel, Asunción' },
      pt: { name: 'Negroni Rooftop', description: 'O ponto de encontro mais trendy com a melhor vista da cidade.', address: 'Dazzler Hotel, Assunção' }
    },
    whatsapp: '595981120120',
    mapUrl: 'https://maps.google.com/?q=Negroni+Asuncion'
  },
  {
    id: 'as-n2',
    category: Category.NIGHTLIFE,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Morgan Warehouse', description: 'El club nocturno más exclusivo de Asunción con DJs internacionales.', address: 'Del Maestro 722, Asunción' },
      en: { name: 'Morgan Warehouse', description: 'Asunción\'s most exclusive nightclub featuring international DJs.', address: '722 Del Maestro, Asunción' },
      pt: { name: 'Morgan Warehouse', description: 'O clube noturno mais exclusivo de Assunção com DJs internacionais.', address: 'Del Maestro 722, Assunção' }
    },
    whatsapp: '595981100500',
    mapUrl: 'https://maps.google.com/?q=Morgan+Warehouse+Asuncion'
  },
  {
    id: 'as-n3',
    category: Category.NIGHTLIFE,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1511108690759-0013d1ca49b2?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 3,
    translations: {
      es: { name: 'Kilkenny Irish Pub', description: 'Un clásico de la noche asuncena con música en vivo y la mejor cerveza.', address: 'Paseo Carmelitas, Asunción' },
      en: { name: 'Kilkenny Irish Pub', description: 'A classic of Asunción nightlife with live music and the best beer.', address: 'Paseo Carmelitas, Asunción' },
      pt: { name: 'Kilkenny Irish Pub', description: 'Um clássico da noite assuncena com música ao vivo e a melhor cerveja.', address: 'Paseo Carmelitas, Assunção' }
    },
    contact: '+595 21 604 115',
    mapUrl: 'https://maps.google.com/?q=Kilkenny+Asuncion'
  },
  {
    id: 'as-n4',
    category: Category.NIGHTLIFE,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1607998803461-4e9aef3be418?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1563714193019-2785d1e67b2d?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Broadway Asunción', description: 'Experiencia sofisticada con coctelería premium y ambiente selecto.', address: 'Senador Long, Asunción' },
      en: { name: 'Broadway Asuncion', description: 'Sophisticated experience with premium cocktails and select atmosphere.', address: 'Senador Long, Asunción' },
      pt: { name: 'Broadway Assunção', description: 'Experiência sofisticada com coquetelaria premium e ambiente seleto.', address: 'Senador Long, Assunção' }
    },
    whatsapp: '595981444555',
    mapUrl: 'https://maps.google.com/?q=Broadway+Asuncion'
  },
  {
    id: 'as-n5',
    category: Category.NIGHTLIFE,
    rating: 4.6,
    images: ['https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200'],
    priceLevel: 3,
    translations: {
      es: { name: 'Coyote Nightclub', description: 'Energía pura y hits actuales en una de las pistas más grandes.', address: 'Sucre, Asunción' },
      en: { name: 'Coyote Nightclub', description: 'Pure energy and latest hits on one of the largest dance floors.', address: 'Sucre, Asunción' },
      pt: { name: 'Coyote Nightclub', description: 'Energia pura e hits atuais em uma das maiores pistas.', address: 'Sucre, Assunção' }
    },
    whatsapp: '595981222333',
    mapUrl: 'https://maps.google.com/?q=Coyote+Asuncion'
  },
  {
    id: 'as-n6',
    category: Category.NIGHTLIFE,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Velvet', description: 'Lujo nocturno y exclusividad en el eje de la movida Carmelitas.', address: 'O\'Higgins, Asunción' },
      en: { name: 'Velvet', description: 'Nighttime luxury and exclusivity in the Carmelitas nightlife axis.', address: 'O\'Higgins, Asunción' },
      pt: { name: 'Velvet', description: 'Luxo noturno e exclusividade no eixo do agito Carmelitas.', address: 'O\'Higgins, Assunção' }
    },
    whatsapp: '595981999888',
    mapUrl: 'https://maps.google.com/?q=Velvet+Asuncion'
  },

  // --- EXCHANGE (6) ---
  {
    id: 'ex1',
    category: Category.EXCHANGE,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1601597111158-2fcee29a4a39?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 2,
    translations: {
      es: { name: 'Maxicambios VIP', description: 'Servicio premium de cambio con cotizaciones preferenciales para clientes Elite.', address: 'Shopping del Sol, Asunción' },
      en: { name: 'Maxicambios VIP', description: 'Premium exchange service with preferential rates for Elite clients.', address: 'Shopping del Sol, Asunción' },
      pt: { name: 'Maxicambios VIP', description: 'Serviço premium de câmbio com cotações preferenciais para clientes Elite.', address: 'Shopping del Sol, Assunção' }
    },
    contact: '+595 21 611 111',
    whatsapp: '595981111999',
    mapUrl: 'https://maps.google.com/?q=Maxicambios+Shopping+del+Sol'
  },
  {
    id: 'ex2',
    category: Category.EXCHANGE,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1621932953443-7501f2740fbd?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 2,
    translations: {
      es: { name: 'Cambios Chaco', description: 'Trayectoria y seguridad. Ubicación estratégica en el eje corporativo.', address: 'Av. Aviadores del Chaco, Asunción' },
      en: { name: 'Cambios Chaco', description: 'Tradition and security. Strategic location in the corporate axis.', address: 'Aviadores del Chaco Ave, Asunción' },
      pt: { name: 'Cambios Chaco', description: 'Tradição e segurança. Localização estratégica no eixo corporativo.', address: 'Av. Aviadores del Chaco, Assunção' }
    },
    contact: '+595 21 610 110',
    mapUrl: 'https://maps.google.com/?q=Cambios+Chaco+Aviadores'
  },
  {
    id: 'ex3',
    category: Category.EXCHANGE,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1621932953443-7501f2740fbd?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 1,
    translations: {
      es: { name: 'Alberdi Cambios', description: 'Rapidez y eficiencia en el microcentro de la capital.', address: 'Alberdi c/ Palma, Asunción' },
      en: { name: 'Alberdi Exchange', description: 'Speed and efficiency in the capital\'s downtown.', address: 'Alberdi & Palma, Asunción' },
      pt: { name: 'Alberdi Câmbios', description: 'Rapidez e eficiência no microcentro da capital.', address: 'Alberdi c/ Palma, Assunção' }
    },
    contact: '+595 21 447 761',
    mapUrl: 'https://maps.google.com/?q=Alberdi+Cambios+Asuncion'
  },
  {
    id: 'ex4',
    category: Category.EXCHANGE,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1601597111158-2fcee29a4a39?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 2,
    translations: {
      es: { name: 'Eurocambios', description: 'Especialistas en divisas internacionales con atención personalizada.', address: 'Boggiani, Asunción' },
      en: { name: 'Eurocambios', description: 'Specialists in international currencies with personalized attention.', address: 'Boggiani, Asunción' },
      pt: { name: 'Eurocambios', description: 'Especialistas em divisas internacionais com atendimento personalizado.', address: 'Boggiani, Assunção' }
    },
    whatsapp: '595981777000',
    mapUrl: 'https://maps.google.com/?q=Eurocambios+Asuncion'
  },
  {
    id: 'ex5',
    category: Category.EXCHANGE,
    rating: 4.7,
    images: ['https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200'],
    priceLevel: 1,
    translations: {
      es: { name: 'MyD Cambios', description: 'Seguridad garantizada para operaciones de alto volumen.', address: 'Shopping Mariscal, Asunción' },
      en: { name: 'MyD Exchange', description: 'Guaranteed security for high-volume operations.', address: 'Mariscal Shopping, Asunción' },
      pt: { name: 'MyD Câmbios', description: 'Segurança garantida para operações de alto volume.', address: 'Shopping Mariscal, Assunção' }
    },
    contact: '+595 21 602 000',
    mapUrl: 'https://maps.google.com/?q=MyD+Cambios+Mariscal'
  },
  {
    id: 'ex6',
    category: Category.EXCHANGE,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1642060731164-8aa772cea6c0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1621932953443-7501f2740fbd?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 2,
    translations: {
      es: { name: 'Bonanza Cambios', description: 'Atención ágil y confiable con múltiples sucursales.', address: 'General Santos, Asunción' },
      en: { name: 'Bonanza Exchange', description: 'Agile and reliable service with multiple branches.', address: 'General Santos, Asunción' },
      pt: { name: 'Bonanza Câmbios', description: 'Atendimento ágil e confiável com múltiplas sucursais.', address: 'General Santos, Assunção' }
    },
    whatsapp: '595982111000',
    mapUrl: 'https://maps.google.com/?q=Bonanza+Cambios+Asuncion'
  },

  // --- MOBILITY (2) ---
  {
    id: 'mob1',
    category: Category.MOBILITY,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 4,
    translations: {
      es: { name: 'Asunción Chauffeur Service', description: 'Traslados privados de lujo en vehículos blindados y ejecutivos de alta gama. Seguridad y puntualidad garantizada.', address: 'Servicio en toda el Área Metropolitana, Asunción' },
      en: { name: 'Asuncion Chauffeur Service', description: 'Private luxury transfers in armored and high-end executive vehicles. Guaranteed security and punctuality.', address: 'Service across Metropolitan Area, Asunción' },
      pt: { name: 'Asunción Chauffeur Service', description: 'Traslados privados de luxo em veículos blindados e executivos de alto padrão. Segurança e pontualidade garantidas.', address: 'Serviço em toda a Região Metropolitana, Assunção' }
    },
    whatsapp: '595981100300',
    mapUrl: 'https://maps.google.com/?q=Asuncion+Chauffeur+Service'
  },
  {
    id: 'mob2',
    category: Category.MOBILITY,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200'
    ],
    priceLevel: 3,
    translations: {
      es: { name: 'Avis Signature Asunción', description: 'Alquiler de vehículos de lujo y SUVs de última generación. Atención preferencial en el Aeropuerto Silvio Pettirossi.', address: 'Aeropuerto Silvio Pettirossi, Luque' },
      en: { name: 'Avis Signature Asuncion', description: 'Luxury vehicle and latest generation SUV rentals. Preferential attention at Silvio Pettirossi Airport.', address: 'Silvio Pettirossi Airport, Luque' },
      pt: { name: 'Avis Signature Assunção', description: 'Aluguel de veículos de luxo e SUVs de última geração. Atendimento preferencial no Aeroporto Silvio Pettirossi.', address: 'Aeroporto Silvio Pettirossi, Luque' }
    },
    contact: '+595 21 645 200',
    mapUrl: 'https://maps.google.com/?q=Avis+Rent+a+Car+Asuncion'
  }
];
