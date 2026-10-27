export interface Project {
  client: string;
  /** What we built, in one sentence */
  summary: string;
  /** Short label, e.g. 'Online store' */
  service: string;
  /** Screenshot in /public/work/, 16:10 (1440x900 works well) */
  image: string;
  imageAlt: string;
  url?: string;
}

/* Shown in "Recent work" on the home page, in this order. The section hides itself if the list is empty. */
export const projects: Project[] = [
  {
    client: 'GalaCards',
    summary: 'Cinematic digital invitations for weddings, birthdays and dinners, with RSVP tracking, WhatsApp sharing and a dashboard for hosts.',
    service: 'Web platform',
    image: '/work/galacards.webp',
    imageAlt: 'GalaCards home page with the headline "Invitations worth remembering"',
    url: 'https://www.galacards.net/',
  },
  {
    client: 'Bechara Issa',
    summary: 'A website for a fine jewelry house in Jdeideh, Lebanon, presenting its masterpieces, diamond and gold collections.',
    service: 'Website',
    image: '/work/bechara-issa.webp',
    imageAlt: 'Bechara Issa home page with the headline "Elegance, every day"',
    url: 'https://www.becharaissa.com/',
  },
  {
    client: 'Kelly Rissi',
    summary: 'An online store for a women’s shoe designer, with collections, a wishlist and checkout.',
    service: 'Online store',
    image: '/work/kelly-rissi.webp',
    imageAlt: 'Kelly Rissi store home page showing two models wearing the designer’s shoes',
    url: 'https://kellyrissi.com/',
  },
  {
    client: 'Khatwa',
    summary: 'An app that turns daily steps into coins you can spend on real rewards at cafés, stores and gyms across Lebanon.',
    service: 'Mobile app and website',
    image: '/work/khatwa.webp',
    imageAlt: 'Khatwa website with the headline "Every step counts for something" and a green sneaker',
    url: 'https://khatwalb.com/',
  },
  {
    client: 'Radyofone',
    summary: 'Free live radio and music streaming with more than 65 stations, on iPhone, Android, CarPlay and Android Auto.',
    service: 'Mobile app',
    image: '/work/radyofone.webp',
    imageAlt: 'Radyofone app icon',
    url: 'https://www.radyofone.com/',
  },
  {
    client: 'dlimits',
    summary: 'A website for a web design and digital marketing agency in Lebanon.',
    service: 'Website',
    image: '/work/dlimits.webp',
    imageAlt: 'dlimits home page with a web design themed banner',
    url: 'https://www.dlimits.com/',
  },
];
