
import { Category, Place, AppTranslations } from './types';

export const UI_TRANSLATIONS: Record<'es' | 'en' | 'pt', AppTranslations> = {
  es: {
    title: 'ELITE PY',
    subtitle: 'La guía más sofisticada de Paraguay',
    categories: {
      [Category.RESTAURANTS]: 'Bares y Restaurantes',
      [Category.HOTELS]: 'Hoteles y Posadas',
      [Category.TOURS]: 'Paseos',
      [Category.NIGHTLIFE]: 'Diversión Nocturna',
      [Category.EXCHANGE]: 'Cambios'
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
      [Category.RESTAURANTS]: 'Bars & Restaurants',
      [Category.HOTELS]: 'Hotels & Inns',
      [Category.TOURS]: 'Tours',
      [Category.NIGHTLIFE]: 'Nightlife',
      [Category.EXCHANGE]: 'Currency Exchange'
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
      [Category.RESTAURANTS]: 'Bares e Restaurantes',
      [Category.HOTELS]: 'Hotéis e Pousadas',
      [Category.TOURS]: 'Passeios',
      [Category.NIGHTLIFE]: 'Diversão Noturna',
      [Category.EXCHANGE]: 'Câmbios'
    },
    labels: {
      admin: 'Administração',
      details: 'Ver Detalhes',
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
  // --- RESTAURANTS (4) ---
  {
    id: 'r1',
    category: Category.RESTAURANTS,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    priceLevel: 4,
    translations: {
      es: { name: 'Sax Palace', description: 'Una joya arquitectónica con gastronomía internacional de vanguardia. Disfrute de una selección de vinos exclusivos y una vista panorámica privilegiada del río Paraná y el Puente de la Amistad, todo en un ambiente de lujo absoluto.', address: 'Avenida San Blas, CDE' },
      en: { name: 'Sax Palace', description: 'An architectural gem with cutting-edge international gastronomy. Enjoy a selection of exclusive wines and a privileged panoramic view of the Paraná River and the Friendship Bridge, all in an atmosphere of absolute luxury.', address: 'San Blas Avenue, CDE' },
      pt: { name: 'Sax Palace', description: 'Uma joia arquitetônica com gastronomia internacional de vanguarda. Desfrute de uma seleção de vinhos exclusivos e uma vista panorâmica privilegiada do rio Paraná e da Ponte da Amizade, tudo em um ambiente de luxo absoluto.', address: 'Avenida San Blas, CDE' }
    },
    contact: '+595 61 500 000',
    whatsapp: '595983123456',
    mapUrl: 'https://maps.google.com/?q=Sax+Palace+Ciudad+del+Este'
  },
  {
    id: 'r2',
    category: Category.RESTAURANTS,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    priceLevel: 3,
    translations: {
      es: { name: 'Monalisa Gourmet', description: 'Ubicado en el corazón de la icónica tienda Monalisa, este restaurante ofrece una experiencia culinaria refinada con ingredientes importados de la más alta calidad y una de las cavas de vino más importantes de América Latina.', address: 'Monseñor Rodriguez esq. Carlos Antonio Lopez' },
      en: { name: 'Monalisa Gourmet', description: 'Located in the heart of the iconic Monalisa store, this restaurant offers a refined culinary experience with high-quality imported ingredients and one of the most important wine cellars in Latin America.', address: 'Monseñor Rodriguez corner Carlos Antonio Lopez' },
      pt: { name: 'Monalisa Gourmet', description: 'Localizado no coração da icônica loja Monalisa, este restaurante oferece uma experiência culinária refinada com ingredientes importados da mais alta qualidade e uma das adegas de vinho mais importantes da América Latina.', address: 'Monseñor Rodriguez esq. Carlos Antonio Lopez' }
    },
    email: 'gourmet@monalisa.com.py',
    mapUrl: 'https://maps.google.com/?q=Monalisa+Ciudad+del+Este'
  },
  {
    id: 'r3',
    category: Category.RESTAURANTS,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    priceLevel: 3,
    translations: {
      es: { name: 'TGI Fridays Jesuitas', description: 'Situado en la pintoresca Plaza Jesuitas, ofrece un ambiente sofisticado pero relajado, perfecto para cenas post-compras. Su menú americano premium y cócteles de autor lo convierten en un punto de encuentro obligado.', address: 'Plaza Jesuitas, Km 8 Monday' },
      en: { name: 'TGI Fridays Jesuitas', description: 'Located in the picturesque Plaza Jesuitas, it offers a sophisticated yet relaxed atmosphere, perfect for post-shopping dinners. Its premium American menu and signature cocktails make it a must-visit meeting point.', address: 'Plaza Jesuitas, Km 8 Monday' },
      pt: { name: 'TGI Fridays Jesuitas', description: 'Situado na pitoresca Plaza Jesuitas, oferece um ambiente sofisticado mas relaxado, perfeito para jantares pós-compras. Seu menu americano premium e coquetéis de assinatura tornam-no um ponto de encontro obrigatório.', address: 'Plaza Jesuitas, Km 8 Monday' }
    },
    contact: '+595 61 578 400',
    mapUrl: 'https://maps.google.com/?q=TGI+Fridays+Jesuitas+Plaza'
  },
  {
    id: 'r4',
    category: Category.RESTAURANTS,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
    priceLevel: 4,
    translations: {
      es: { name: 'O Gaucho CDE', description: 'La excelencia del rodizio brasileño en Paraguay. Cortes seleccionados de carne premium servidos con un servicio impecable en un entorno elegante y acogedor, ideal para amantes de la buena mesa.', address: 'Avda. Rogelio Benitez, CDE' },
      en: { name: 'O Gaucho CDE', description: 'The excellence of Brazilian rodizio in Paraguay. Selected premium meat cuts served with impeccable service in an elegant and welcoming setting, ideal for fine dining lovers.', address: 'Rogelio Benitez Ave, CDE' },
      pt: { name: 'O Gaucho CDE', description: 'A excelência do rodízio brasileiro no Paraguai. Cortes selecionados de carne premium servidos com um serviço impecável em um ambiente elegante e acolhedor, ideal para amantes da boa mesa.', address: 'Avda. Rogelio Benitez, CDE' }
    },
    whatsapp: '595983500600',
    mapUrl: 'https://maps.google.com/?q=O+Gaucho+Ciudad+del+Este'
  },

  // --- HOTELS (4) ---
  {
    id: 'h1',
    category: Category.HOTELS,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    priceLevel: 3,
    translations: {
      es: { name: 'Hotel Casino Acaray', description: 'Un refugio de elegancia a orillas del río. Cuenta con un casino de clase mundial, spa rejuvenecedor y jardines exuberantes. Es la elección perfecta para quienes buscan confort y entretenimiento de alto nivel.', address: 'Calle 11 de Septiembre y Rio Paraná' },
      en: { name: 'Hotel Casino Acaray', description: 'A riverside refuge of elegance. Featuring a world-class casino, rejuvenating spa, and lush gardens. It is the perfect choice for those seeking high-level comfort and entertainment.', address: '11 de Septiembre St and Parana River' },
      pt: { name: 'Hotel Casino Acaray', description: 'Um refúgio de elegância às margens do rio. Conta com um cassino de classe mundial, spa rejuvenescedor e jardins exuberantes. É a escolha perfeita para quem busca conforto e entretenimento de alto nível.', address: 'Rua 11 de Setembro e Rio Paraná' }
    },
    contact: '+595 61 504 311',
    email: 'reservas@hotelacaray.com.py',
    mapUrl: 'https://maps.google.com/?q=Hotel+Casino+Acaray'
  },
  {
    id: 'h2',
    category: Category.HOTELS,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    priceLevel: 4,
    translations: {
      es: { name: 'Rio Hotel by Bourbon', description: 'Diseño contemporáneo y practicidad sofisticada. Ubicado estratégicamente para el viajero de negocios y shopping, ofrece habitaciones premium con vistas a la ciudad y un servicio que cuida cada detalle.', address: 'Boqueron c/ Adrian Jara' },
      en: { name: 'Rio Hotel by Bourbon', description: 'Contemporary design and sophisticated practicality. Strategically located for business and shopping travelers, it offers premium rooms with city views and service that attends to every detail.', address: 'Boqueron St / Adrian Jara' },
      pt: { name: 'Rio Hotel by Bourbon', description: 'Design contemporâneo e praticidade sofisticada. Localizado estrategicamente para o viajante de negócios e shopping, oferece quartos premium com vistas da cidade e um serviço que cuida de cada detalhe.', address: 'Boqueron c/ Adrian Jara' }
    },
    whatsapp: '595983400500',
    mapUrl: 'https://maps.google.com/?q=Rio+Hotel+by+Bourbon+CDE'
  },
  {
    id: 'h3',
    category: Category.HOTELS,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    priceLevel: 3,
    translations: {
      es: { name: 'Nobile Hotel & Convention', description: 'Elegancia y versatilidad. Con una de las mejores piscinas panorámicas de la ciudad y amplias salas de convenciones, es un punto de referencia para eventos corporativos y estancias de lujo.', address: 'Km 7, Avda. Gaspar Rodriguez de Francia' },
      en: { name: 'Nobile Hotel & Convention', description: 'Elegance and versatility. With one of the best panoramic pools in the city and spacious convention rooms, it is a reference point for corporate events and luxury stays.', address: 'Km 7, Gaspar Rodriguez de Francia Ave' },
      pt: { name: 'Nobile Hotel & Convention', description: 'Elegância e versatilidade. Com uma das melhores piscinas panorâmicas da cidade e amplas salas de convenções, é um ponto de referência para eventos corporativos e estadias de luxo.', address: 'Km 7, Avda. Gaspar Rodriguez de Francia' }
    },
    contact: '+595 61 578 500'
  },
  {
    id: 'h4',
    category: Category.HOTELS,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    priceLevel: 3,
    translations: {
      es: { name: 'Dazzler by Wyndham CDE', description: 'Modernidad en el centro de la zona de mayor crecimiento. Habitaciones amplias y luminosas con un rooftop bar espectacular para disfrutar del atardecer sobre el horizonte paraguayo.', address: 'Av. Monseñor Rodriguez Km 8' },
      en: { name: 'Dazzler by Wyndham CDE', description: 'Modernity in the heart of the fastest-growing area. Spacious, bright rooms with a spectacular rooftop bar to enjoy the sunset over the Paraguayan horizon.', address: 'Monseñor Rodriguez Ave Km 8' },
      pt: { name: 'Dazzler by Wyndham CDE', description: 'Modernidade no centro da zona de maior crescimento. Quartos amplos e luminosos com um rooftop bar espetacular para desfrutar do pôr do sol sobre o horizonte paraguaio.', address: 'Av. Monseñor Rodriguez Km 8' }
    },
    email: 'info@dazzlercde.com.py',
    mapUrl: 'https://maps.google.com/?q=Dazzler+Ciudad+del+Este'
  },

  // --- TOURS (4) ---
  {
    id: 't1',
    category: Category.TOURS,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800',
    priceLevel: 2,
    translations: {
      es: { name: 'Itaipú Binacional', description: 'Una obra maestra de la ingeniería mundial. Realice el tour técnico para ver las entrañas de la represa o disfrute de la iluminación monumental nocturna, una experiencia visual sin precedentes.', address: 'Hernandarias, Alto Paraná' },
      en: { name: 'Itaipu Dam', description: 'A masterpiece of world engineering. Take the technical tour to see the dam\'s interior or enjoy the monumental night lighting, an unprecedented visual experience.', address: 'Hernandarias, Alto Parana' },
      pt: { name: 'Itaipu Binacional', description: 'Uma obra-prima da engenharia mundial. Realize o tour técnico para ver as entranhas da represa ou desfrute da iluminação monumental noturna, uma experiência visual sem precedentes.', address: 'Hernandarias, Alto Paraná' }
    },
    contact: '+595 61 599 8040',
    mapUrl: 'https://maps.google.com/?q=Itaipu+Binacional+Paraguay'
  },
  {
    id: 't2',
    category: Category.TOURS,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800',
    priceLevel: 1,
    translations: {
      es: { name: 'Saltos del Monday', description: 'El secreto mejor guardado de la naturaleza paraguaya. Cataratas imponentes rodeadas de selva virgen. Ideal para una escapada de paz y fotos espectaculares a solo minutos del centro.', address: 'Presidente Franco, Alto Paraná' },
      en: { name: 'Saltos del Monday', description: 'The best-kept secret of Paraguayan nature. Imposing waterfalls surrounded by virgin jungle. Ideal for a peaceful getaway and spectacular photos just minutes from downtown.', address: 'Presidente Franco, Alto Parana' },
      pt: { name: 'Saltos del Monday', description: 'O segredo mais bem guardado da natureza paraguaia. Cataratas imponentes cercadas de selva virgem. Ideal para uma escapada de paz e fotos espetaculares a apenas minutos do centro.', address: 'Presidente Franco, Alto Paraná' }
    },
    mapUrl: 'https://maps.google.com/?q=Saltos+del+Monday'
  },
  {
    id: 't3',
    category: Category.TOURS,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    priceLevel: 3,
    translations: {
      es: { name: 'Shopping China CDE', description: 'Más que compras, una experiencia de lujo. Reconocido internacionalmente como uno de los mejores centros de compras del mundo, ofrece las marcas más exclusivas en un entorno seguro y refinado.', address: '3er Piso, Shopping Paris' },
      en: { name: 'Shopping China CDE', description: 'More than shopping, a luxury experience. Internationally recognized as one of the world\'s best shopping centers, offering the most exclusive brands in a safe and refined setting.', address: '3rd Floor, Shopping Paris' },
      pt: { name: 'Shopping China CDE', description: 'Mais que compras, uma experiência de luxo. Reconhecido internacionalmente como um dos melhores centros de compras do mundo, oferece as marcas mais exclusivas em um ambiente seguro e refinado.', address: '3º Piso, Shopping Paris' }
    },
    whatsapp: '595983700800',
    mapUrl: 'https://maps.google.com/?q=Shopping+China+Ciudad+del+Este'
  },
  {
    id: 't4',
    category: Category.TOURS,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    priceLevel: 1,
    translations: {
      es: { name: 'Museo Tierra Guaraní', description: 'Un viaje cultural inmersivo. Conozca la rica herencia de los ancestros guaraníes y la biodiversidad local a través de exhibiciones interactivas y piezas históricas únicas.', address: 'Hernandarias, CDE' },
      en: { name: 'Tierra Guaraní Museum', description: 'An immersive cultural journey. Learn about the rich heritage of Guaraní ancestors and local biodiversity through interactive exhibits and unique historical pieces.', address: 'Hernandarias, CDE' },
      pt: { name: 'Museu Terra Guarani', description: 'Uma viagem cultural imersiva. Conheça a rica herança dos ancestrais guaranis e a biodiversidade local através de exibições interativas e peças históricas únicas.', address: 'Hernandarias, CDE' }
    },
    email: 'museo@itaipu.gov.py'
  },

  // --- NIGHTLIFE (4) ---
  {
    id: 'n1',
    category: Category.NIGHTLIFE,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1566737236580-68a755314545?auto=format&fit=crop&q=80&w=800',
    priceLevel: 3,
    translations: {
      es: { name: 'Inside Club', description: 'El epicentro de la noche en CDE. Con una acústica impecable y line-ups internacionales, Inside redefine la exclusividad nocturna para un público que busca lo mejor en música electrónica y premium drinks.', address: 'Área 1, CDE' },
      en: { name: 'Inside Club', description: 'The epicenter of CDE night. With impeccable acoustics and international line-ups, Inside redefines nocturnal exclusivity for an audience seeking the best in electronic music and premium drinks.', address: 'Area 1, CDE' },
      pt: { name: 'Inside Club', description: 'O epicentro da noite em CDE. Com uma acústica impecável e line-ups internacionais, o Inside redefine a exclusividade noturna para um público que busca o melhor em música eletrônica e drinks premium.', address: 'Área 1, CDE' }
    },
    contact: '+595 983 100 200'
  },
  {
    id: 'n2',
    category: Category.NIGHTLIFE,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=800',
    priceLevel: 4,
    translations: {
      es: { name: 'Gavanna Resto-Club', description: 'Donde la alta cocina se encuentra con la fiesta. Comience la noche con una cena exquisita y vea cómo el espacio se transforma en el club más chic de la ciudad con un ambiente vibrante.', address: 'Av. Rogelio Benitez, CDE' },
      en: { name: 'Gavanna Resto-Club', description: 'Where haute cuisine meets the party. Start the night with an exquisite dinner and see how the space transforms into the city\'s chicest club with a vibrant atmosphere.', address: 'Rogelio Benitez Ave, CDE' },
      pt: { name: 'Gavanna Resto-Club', description: 'Onde a alta cozinha encontra a festa. Comece a noite com um jantar requintado e veja como o espaço se transforma no club mais chique da cidade com um ambiente vibrante.', address: 'Av. Rogelio Benitez, CDE' }
    },
    whatsapp: '595981112233'
  },
  {
    id: 'n3',
    category: Category.NIGHTLIFE,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    priceLevel: 2,
    translations: {
      es: { name: 'Brooklyn Beer House', description: 'El alma urbana de la ciudad. Una amplia selección de cervezas artesanales y un diseño industrial sofisticado que atrae a una multitud moderna y cosmopolita.', address: 'Area 1, Avda. Mcal. Lopez' },
      en: { name: 'Brooklyn Beer House', description: 'The city\'s urban soul. A wide selection of craft beers and a sophisticated industrial design that attracts a modern and cosmopolitan crowd.', address: 'Area 1, Mcal. Lopez Ave' },
      pt: { name: 'Brooklyn Beer House', description: 'A alma urbana da cidade. Uma ampla seleção de cervejas artesanais e um design industrial sofisticado que atrai uma multidão moderna e cosmopolita.', address: 'Area 1, Avda. Mcal. Lopez' }
    },
    contact: '+595 983 555 444'
  },
  {
    id: 'n4',
    category: Category.NIGHTLIFE,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
    priceLevel: 4,
    translations: {
      es: { name: 'Woods CDE', description: 'Sofisticación y ritmo. La famosa marca brasileña llega a CDE para ofrecer las melhores noches de sertanejo y hits actuales en un entorno lujoso y de alta energía.', address: 'Av. Rogelio Benitez' },
      en: { name: 'Woods CDE', description: 'Sophistication and rhythm. The famous Brazilian brand arrives in CDE to offer the best nights of sertanejo and current hits in a luxurious and high-energy setting.', address: 'Rogelio Benitez Ave' },
      pt: { name: 'Woods CDE', description: 'Sofisticação e ritmo. A famosa marca brasileira chega a CDE para oferecer as melhores noites de sertanejo e hits atuais em um ambiente luxuoso e de alta energia.', address: 'Av. Rogelio Benitez' }
    },
    whatsapp: '595981400300',
    email: 'woods@cde.com.py'
  },

  // --- EXCHANGE (4) ---
  {
    id: 'e1',
    category: Category.EXCHANGE,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800',
    priceLevel: 1,
    translations: {
      es: { name: 'Cambios Chaco', description: 'Referente de confianza en el mercado cambiario. Con décadas de trayectoria, garantiza seguridad, rapidez y las tasas más competitivas para clientes que valoran la integridad y eficiencia.', address: 'Microcentro, CDE' },
      en: { name: 'Cambios Chaco', description: 'A trusted reference in the exchange market. With decades of history, it guarantees security, speed, and the most competitive rates for clients who value integrity and efficiency.', address: 'Downtown, CDE' },
      pt: { name: 'Cambios Chaco', description: 'Referência de confiança no mercado cambial. Com décadas de trajetória, garante segurança, rapidez e as taxas mais competitivas para clientes que valorizam a integridade e eficiência.', address: 'Microcentro, CDE' }
    },
    contact: '+595 61 511 600',
    mapUrl: 'https://maps.google.com/?q=Cambios+Chaco+CDE'
  },
  {
    id: 'e2',
    category: Category.EXCHANGE,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    priceLevel: 1,
    translations: {
      es: { name: 'Alberdi Cambios', description: 'Atención personalizada y trato VIP. Especialistas en operaciones de gran volumen con total discreción y seguridad para el viajero y empresario exigente.', address: 'Avda. Adrian Jara' },
      en: { name: 'Alberdi Cambios', description: 'Personalized attention and VIP treatment. Specialists in large-volume operations with total discretion and security for the demanding traveler and entrepreneur.', address: 'Adrian Jara Ave' },
      pt: { name: 'Alberdi Cambios', description: 'Atendimento personalizado e trato VIP. Especialistas em operações de grande volume com total discrição e segurança para o viajante e empresário exigente.', address: 'Avda. Adrian Jara' }
    },
    whatsapp: '595983600700'
  },
  {
    id: 'e3',
    category: Category.EXCHANGE,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    priceLevel: 1,
    translations: {
      es: { name: 'Maxicambios', description: 'Tecnología y precisión. Ofrece cotizaciones en tiempo real a través de su plataforma y sucursales estratégicamente ubicadas, brindando transparencia total en cada transacción.', address: 'Shopping del Este' },
      en: { name: 'Maxicambios', description: 'Technology and precision. Offering real-time quotes through its platform and strategically located branches, providing total transparency in every transaction.', address: 'Shopping del Este' },
      pt: { name: 'Maxicambios', description: 'Tecnologia e precisão. Oferece cotações em tempo real através de sua plataforma e sucursais estrategicamente localizadas, proporcionando transparência total em cada transação.', address: 'Shopping del Este' }
    },
    contact: '+595 61 502 696'
  },
  {
    id: 'e4',
    category: Category.EXCHANGE,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1621932953912-0b65f442f4ca?auto=format&fit=crop&q=80&w=800',
    priceLevel: 1,
    translations: {
      es: { name: 'Bonanza Cambios', description: 'Eficiencia y seguridad garantizada. Conocida por su servicio ágil en el corazón comercial de la ciudad, es la opción favorita de quienes buscan optimizar su tiempo y dinero.', address: 'Avda. Adrian Jara esq. Curupayty' },
      en: { name: 'Bonanza Cambios', description: 'Efficiency and guaranteed security. Known for its agile service in the city\'s commercial heart, it is the favorite option for those seeking to optimize their time and money.', address: 'Adrian Jara Ave corner Curupayty' },
      pt: { name: 'Bonanza Cambios', description: 'Eficiência e segurança garantida. Conhecida por seu serviço ágil no coração comercial da cidade, é a opção favorita de quem busca otimizar seu tempo e dinheiro.', address: 'Avda. Adrian Jara esq. Curupayty' }
    },
    whatsapp: '595983400700',
    email: 'info@bonanzacambios.com.py'
  }
];