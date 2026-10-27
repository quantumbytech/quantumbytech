export interface Partner {
  name: string;
  /** Logo in /public/partners/, ideally SVG or a transparent PNG/WebP. Without one, the name is shown instead. */
  logo?: string;
  /** 'icon' shows a square app icon with rounded corners; 'wordmark' (default) shows a transparent logo */
  /** Intrinsic logo size in px, so the page does not jump while logos load */
  logoSize?: [number, number];
  logoStyle?: 'icon' | 'wordmark';
  /** Use a dark tile for light-coloured logos */
  darkTile?: boolean;
  /** Logo width as a share of the tile, e.g. '70%', to balance logos of different shapes */
  logoWidth?: string;
  description: string;
  url?: string;
}

export const partners: Partner[] = [
  {
    name: 'Radyofone',
    url: 'https://www.radyofone.com/',
    logo: '/partners/radyofone.webp',
    logoSize: [320, 320],
    logoStyle: 'icon',
    description:
      'Radyofone is more than just a radio app. It is your gateway to a world of music, entertainment and live audio content, completely free.',
  },
  {
    name: 'Khatwa',
    url: 'https://khatwalb.com/',
    logo: '/partners/khatwa.webp',
    logoSize: [720, 379],
    darkTile: true,
    description:
      'KHATWA is a Lebanese app that turns your daily steps into coins you can spend on real rewards at cafés, stores and gyms across Lebanon.',
  },
  {
    name: 'GalaCards',
    url: 'https://www.galacards.net/',
    logo: '/partners/galacards.webp',
    logoSize: [560, 456],
    description:
      'GalaCards creates cinematic, personalised invitations your guests will actually want to open: weddings, birthdays, dinners and send-offs, with RSVP tracking, WhatsApp sharing and a dashboard built for hosts.',
  },
  {
    name: 'dlimits',
    url: 'https://www.dlimits.com/',
    logo: '/partners/dlimits.webp',
    logoSize: [207, 54],
    logoWidth: '46%',
    description:
      'dlimits is a digital agency covering the full web journey, from concept and design to development, e-commerce, mobile apps, SEO, secure cloud hosting and round-the-clock support.',
  },
  {
    name: 'Bechara Issa',
    url: 'https://www.becharaissa.com/',
    logo: '/partners/bechara-issa.svg',
    logoSize: [179, 42],
    darkTile: true,
    logoWidth: '74%',
    description:
      'Fine jewelry designed to move with you, from everyday moments to life’s most unforgettable occasions.',
  },
  {
    name: 'Kelly Rissi',
    url: 'https://kellyrissi.com/',
    logo: '/partners/kelly-rissi.webp',
    logoSize: [800, 84],
    description:
      'Kelly Rissi designs women’s shoes made to be seen from every angle, and remembered for how they make a woman feel.',
  },
];
