import { projects, type Project } from './projects';

/** Slugs of the services in services.ts */
export type ServiceSlug = 'websites' | 'online-stores' | 'mobile-apps' | 'social-media' | 'custom-software' | 'support';

export interface CaseStudy {
  /** Matches the project slug in projects.ts and the page URL /work/<slug>/ */
  slug: string;
  /** Short label for the facts strip, e.g. 'Fine jewelry' */
  industry: string;
  /** What we built, in a short phrase for the facts strip */
  built: string;
  /** Services involved, most relevant first. The first one is used for the contact link and the schema. */
  services: ServiceSlug[];
  /** Picks the schema.org type for the page; 'care' is ongoing support for something we did not build */
  kind: 'website' | 'platform' | 'app' | 'care';
  /** Search result title (under 60 characters with the brand) and description (140-160 characters) */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  /** "About <client>" paragraphs. Facts here come from the client's own website, see sources. */
  about: string[];
  /** "What we built" bullets */
  features: string[];
  /** "How it works for ..." section */
  howItWorks: { title: string; paragraphs: string[] };
  /** Pages the facts were taken from, shown on the page */
  sources: string[];
}

/* One case study per project in projects.ts. The facts in each come from the client's live website on
   11 November 2026 (see sources); the description of our work comes from projects.ts and partners.ts. */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'galacards',
    industry: 'Events and invitations',
    built: 'Web platform with invitation templates, guest links, RSVP and a host dashboard',
    services: ['custom-software', 'websites'],
    kind: 'platform',
    seoTitle: 'GalaCards: Digital Invitation Platform',
    seoDescription:
      'How Quantum ByTech built GalaCards, a digital invitation platform with personalised guest links, RSVP tracking, WhatsApp sharing and a dashboard for hosts.',
    h1: 'A digital invitation platform for GalaCards',
    lead:
      'GalaCards sends cinematic, personalised invitations for weddings, birthdays, dinners and send-offs. We designed and built the platform: the invitation templates, the personal guest links, the RSVP flow and the dashboard hosts use to send and track everything.',
    about: [
      'GalaCards makes digital invitations for weddings, engagements, birthdays, dinner invitations and bachelor parties. Its site describes them as "cinematic, personalised invitations your guests will actually want to open". Instead of a PDF or a picture in a WhatsApp group, each guest receives a mobile-first invitation page with music, animations, photo galleries and, on some templates, full-screen video.',
      'At the time of writing the site lists 15 templates across those five event types, from Classic, a vertical scroll with ceremony, reception and RSVP sections, to Noir, Verdant Garden and Eternal Frame, which plays a background video behind every section. Pricing is quoted per event based on the guest list rather than sold as packages.',
    ],
    features: [
      'Invitation templates with live previews and demo music, each personalised with the hosts’ names, date, venue and photos',
      'A unique link for every guest, carrying their name, plus-one allowance and RSVP status',
      'RSVP tracking with confirmations, dietary notes and guest lists in one place, with export',
      'WhatsApp sharing: invitations are sent from the dashboard, already formatted for WhatsApp',
      'A host dashboard to send, track and manage every invitation from one screen',
      'Add-ons such as an envelope opening animation, ambient effects, a photo gallery slideshow, a gift registry section and bilingual invitations',
    ],
    howItWorks: {
      title: 'How it works for hosts and guests',
      paragraphs: [
        'A host picks a template and shares the details of the event. GalaCards personalises the invitation, and the host sends it to each guest over WhatsApp from the dashboard. As guests open their links and answer, the responses appear live in the same dashboard.',
        'A guest taps the link, opens the invitation on their phone and submits an RSVP with their plus-one and any dietary notes. There is nothing to download and no account to create.',
        'For us this meant building two very different experiences on one codebase: a fast, animated invitation that works on any phone, and a plain dashboard a host can use the week before their wedding without reading instructions.',
      ],
    },
    sources: ['https://www.galacards.net/'],
  },
  {
    slug: 'bechara-issa',
    industry: 'Fine jewelry',
    built: 'Brand website with collections, product pages and WhatsApp contact',
    services: ['websites'],
    kind: 'website',
    seoTitle: 'Bechara Issa: Fine Jewelry Website',
    seoDescription:
      'How Quantum ByTech built the website for Bechara Issa, a Lebanese fine jewelry house founded in 1980, with its collections, product pages and WhatsApp contact.',
    h1: 'A website for Bechara Issa, a fine jewelry house in Jdeideh',
    lead:
      'Bechara Issa has made fine jewelry by hand since 1980. We designed and built a website that presents its masterpieces, diamond and gold collections and makes it simple for clients in Lebanon and abroad to get in touch.',
    about: [
      'Bechara Issa is a Lebanese house of fine jewelry, established in 1980 and now run by its second generation. The atelier is in the Square 1 building in Jdeideh, and the site describes it as a family workshop where every link, prong and polish is finished by hand. Its clients are in Lebanon and across the diaspora, and the house ships insured to Europe, the Gulf, North America, South America and Australia.',
      'Beyond the collections, the atelier offers bespoke commissions, repairs and restoration, hand engraving in Arabic or French, diamond sourcing with GIA or HRD certification, and ring sizing. The website had to carry all of that without feeling like a catalogue.',
    ],
    features: [
      'A home page built around the collections: Masterpieces, the Diamond Selection and the Gold Selection, plus a full product list',
      'Product pages with reference numbers, weight, karat and availability (in stock or on request), so a client can ask about a specific piece',
      'An About page telling the story of the house from 1980 to today, with the craftsmanship and the services of the atelier',
      'A contact page with opening hours, the address, three phone numbers, email and a short FAQ on shipping, bespoke work and bringing your own stone',
      'WhatsApp buttons throughout, including a floating link, since most enquiries about jewelry start as a message',
      'Links to the Instagram and Facebook accounts',
    ],
    howItWorks: {
      title: 'How it works for their clients',
      paragraphs: [
        'A client browses the collection on their phone, opens a piece and taps WhatsApp to ask about it or book a visit. For clients abroad, the FAQ explains that pieces are sent insured through DHL or Aramex and that the team confirms timing before dispatch.',
        'The site answers the questions a jeweller gets every day: when are you open, where are you, do you ship, can you resize a ring. Messages are answered within one working day, as the contact page states.',
        'Jewelry photography carries the site, so the layout stays quiet: white space, large images and short lines of copy under the headline "Elegance, every day".',
      ],
    },
    sources: ['https://www.becharaissa.com/', 'https://www.becharaissa.com/about', 'https://www.becharaissa.com/contact'],
  },
  {
    slug: 'kelly-rissi',
    industry: 'Fashion and footwear',
    built: 'Online store: a custom storefront on Shopify with wishlist, accounts and checkout',
    services: ['online-stores', 'websites'],
    kind: 'website',
    seoTitle: 'Kelly Rissi: Designer Shoe Online Store',
    seoDescription:
      'How Quantum ByTech built the Kelly Rissi online store: a custom storefront on Shopify with collections, a wishlist, customer accounts and checkout.',
    h1: 'An online store for Kelly Rissi, a women’s shoe designer',
    lead:
      'Kelly Rissi designs sculptural women’s shoes, crafted in Lebanon with materials from Italy. We built the online store: a custom storefront on top of Shopify, with collections, a wishlist, customer accounts and checkout.',
    about: [
      'Kelly Rissi is a footwear house founded in Beirut by designer Kelly Rizk, who trained in shoe design and pattern making at Arsutoria School in Milan and holds a master’s degree in Fashion and Luxury Brand Management from Istituto Marangoni in Paris. Her idea is that "a pair does not have to be identical to belong together": each design plays with contrast in colour, material, texture or detail.',
      'Premium materials and components are sourced from Italy, and each pair is crafted and hand-finished in Lebanon. The collections, MARA, ÉLÉA and VÉLUNE, are known for translucent, architectural heels, which is why the product photography had to lead the design of the store.',
    ],
    features: [
      'A custom storefront with its own design, connected to Shopify for products, inventory, customers and checkout',
      'A shop page with the collections and a product page for each style, such as the ONDE black pump and the MARA navy slingback',
      'A wishlist tied to the customer account, so a saved pair is still there on another device',
      'Cart and checkout handled by Shopify, so payments and order management use tools the team can rely on',
      'A Story page about the designer, a size guide for Italian and European sizing, a care guide, and a shipping and returns page with delivery times, customs duties and exchange conditions',
      'Newsletter sign-up, a contact form, FAQs and policy pages for privacy, cookies, terms and e-gift cards',
    ],
    howItWorks: {
      title: 'How it works for their customers',
      paragraphs: [
        'A customer lands on a full-screen campaign image, opens the shop, saves a pair to the wishlist or adds it to the cart, and checks out. Size and care questions are answered on the site before they reach customer service.',
        'For the team, products, stock, orders and customers live in the Shopify admin, while the storefront stays fully custom. That is the trade-off we recommend for a fashion brand that wants its own look without maintaining its own payment and order system.',
      ],
    },
    sources: ['https://kellyrissi.com/', 'https://kellyrissi.com/story'],
  },
  {
    slug: 'khatwa',
    industry: 'Health and rewards',
    built: 'Mobile app for iOS and Android, a website and the coin redemption flow for partners',
    services: ['mobile-apps', 'websites', 'custom-software'],
    kind: 'app',
    seoTitle: 'Khatwa: Step Rewards App for Lebanon',
    seoDescription:
      'How Quantum ByTech built Khatwa, a Lebanese app that turns daily steps into coins to spend at cafés, gyms and shops, together with its website.',
    h1: 'A step rewards app and website for Khatwa',
    lead:
      'Khatwa turns the walking you already do into coins, and coins into rewards at cafés, gyms and shops across Lebanon. We designed and built the mobile app and the website.',
    about: [
      'Khatwa is a Lebanese app operated by KHATWA SARL, registered in Keserouan. You walk, the app reads your step count from Apple Health or Health Connect, and every 1,000 steps becomes 100 coins. Reaching a daily goal or keeping a streak alive earns more on top.',
      'Coins are spent at partner cafés, gyms and shops by showing a code at the counter. Khatwa is launching soon in Lebanon; the app is still being finished and will be released on the App Store and Google Play.',
    ],
    features: [
      'A mobile app that reads daily steps from Apple Health on iPhone and Health Connect on Android, with nothing to start or remember',
      'A coin wallet with a record of every coin earned or spent, daily goals and streaks',
      'A partner map that sorts nearby cafés, gyms and shops by distance, using location only on the device',
      'Redemption at the counter with a code, with a history the user and the partner can both refer to',
      'Sign-in with email, Google or Apple, invite codes that reward both friends, and push notifications the user can switch off',
      'A website that explains the three steps (walk, earn, redeem), an invite page in English and Arabic that opens the right store for the visitor’s phone, and a plain-language privacy policy',
    ],
    howItWorks: {
      title: 'How it works for users and partners',
      paragraphs: [
        'For users: install the app, allow it to read your steps and walk. Coins appear as the day goes on. When you want to spend them, open the map, pick a place and show the code at the counter.',
        'For partners: a café, gym or shop joins Khatwa as a redemption partner, appears on the map and accepts coins at the counter. The website invites businesses to apply by email.',
        'Privacy was a design constraint, not a page. Location is never stored on the servers, and the policy says who stores what and for how long.',
      ],
    },
    sources: ['https://khatwalb.com/', 'https://khatwalb.com/privacy'],
  },
  {
    slug: 'radyofone',
    industry: 'Media and entertainment',
    built: 'Mobile app for iOS and Android with CarPlay, Android Auto and TV casting',
    services: ['mobile-apps'],
    kind: 'app',
    seoTitle: 'Radyofone: Free Radio Streaming App',
    seoDescription:
      'How Quantum ByTech built Radyofone, a free radio and music app with more than 65 live stations on iPhone, iPad and Android, with Apple CarPlay and Android Auto.',
    h1: 'A free radio streaming app for Radyofone',
    lead:
      'Radyofone streams more than 65 live radio stations for free, in Arabic, English, French and Islamic categories. We designed and built the app for iPhone, iPad and Android, with Apple CarPlay, Android Auto and casting to a TV.',
    about: [
      'Radyofone is a free radio and music streaming app from Lebanon. Its website lists more than 65 live stations in more than ten categories, including Arabic songs, French songs, Islamic, DJ Night and kids’ songs, with artists such as Haifa Wehbe, Amr Diab and Wael Kfoury. It is free to use with ads, and the team plans a premium, ad-free option later.',
      'The app is on the App Store and Google Play. The App Store listing shows a first release followed by regular updates, which added Chromecast and AirPlay support and a full Arabic translation along the way.',
    ],
    features: [
      'Live streaming of more than 65 stations, with real-time "Now Playing" and "Coming Up Next"',
      'Categories by genre, mood and language: Arabic, English, French and Islamic',
      'Apple CarPlay and Android Auto, so the app works in the car like a car radio',
      'Casting to a TV with Chromecast and AirPlay',
      'A favourites library, a full player with queue, repeat, shuffle and background playback, and live listener counts per station',
      'Request a song from inside the app, and a one-tap subscription to be notified when your song plays',
      'Guest access without registration, with accounts for notifications about new songs and features',
      'English and Arabic interface',
    ],
    howItWorks: {
      title: 'How it works for listeners',
      paragraphs: [
        'Open the app, pick a station or a category and listen. Playback continues in the background, in the car over CarPlay or Android Auto, or on the TV. Favourites are saved to the account.',
        'Building for CarPlay and Android Auto means following each platform’s rules for driver safety, with a simple browse-and-play interface. Streaming more than 65 stations reliably also means handling dropped connections, metadata that changes mid-song and audio sessions that survive phone calls.',
      ],
    },
    sources: ['https://www.radyofone.com/', 'https://apps.apple.com/lb/app/radyofone/id6752834381'],
  },
  {
    slug: 'dlimits',
    industry: 'Web design and digital marketing agency',
    built: 'Care and support for dlimits and every one of its clients: websites, apps and software',
    services: ['support'],
    kind: 'care',
    seoTitle: 'dlimits: Care and Support for 100+ Clients',
    seoDescription:
      'Quantum ByTech provides the ongoing care and support behind dlimits, a web agency in Lebanon, covering the websites, apps and software of its 100+ clients.',
    h1: 'Care and support for dlimits and its 100+ clients',
    lead:
      'dlimits is a web design and digital marketing agency with offices in Jounieh, New York and Larnaca. We are the technical team behind its support promise: ongoing care for the websites, apps and software of every dlimits client, more than 100 businesses.',
    about: [
      'dlimits, short for Digital Limits, is a website design and digital marketing agency with offices in Jounieh, Lebanon, in New York and in Larnaca, Cyprus. Its slogan is "Our Limit is Your Imagination". The agency covers the full web journey: concept creation, web development, content management systems, e-commerce, responsive design, mobile apps, online marketing, SEO, analytics, security, cloud hosting and what it calls heroic support.',
      'Its portfolio page shows 28 clients, among them BDC Mall, H.E.C Holding, Rosewood, Babylon Development Co., PIM analytics, Spreengs and the Association de l’Amicale des Anciens d’Antoura. Hosting is described as "multiple redundant offsite servers", and support as an international team available "night or day".',
    ],
    features: [
      'Ongoing care and support for every dlimits client, more than 100 businesses, covering the websites, online stores, mobile apps and custom software the agency has delivered',
      'Care for the agency’s own website and tools as well, so dlimits and its clients get the same service',
      'Hosting and SSL, security updates, daily backups, uptime monitoring, time for monthly changes and priority help on WhatsApp and email: the same care plan we offer businesses directly',
      'Fixes and improvements on work we did not build, in whatever technology it was made with',
    ],
    howItWorks: {
      title: 'How it works for dlimits and its clients',
      paragraphs: [
        'dlimits sells, designs and delivers. When a project goes live, it comes under the care plan. A client with a problem contacts dlimits as usual, and we do the technical work behind the scenes, on websites, apps and software alike.',
        'For an agency, this keeps the client relationship and the promise of support in its own hands, and adds a technical team that grows with the number of clients. For a client, it means one number to call and a site or app that keeps working.',
        'It is the same care and support plan we offer to businesses directly, applied across an agency’s whole client base.',
      ],
    },
    sources: [
      'https://www.dlimits.com/',
      'https://www.dlimits.com/web-design-agency-lebanon',
      'https://www.dlimits.com/web-portfolio',
      'https://www.dlimits.com/contact-us',
    ],
  },
];

/** A case study together with its project (client name, screenshot, URL) from projects.ts */
export interface WorkItem extends CaseStudy {
  project: Project;
}

export const work: WorkItem[] = caseStudies.map((cs) => {
  const project = projects.find((p) => p.slug === cs.slug);
  if (!project) throw new Error(`No project with slug "${cs.slug}" in projects.ts`);
  return { ...cs, project };
});

export const workBySlug = (slug: string) => work.find((w) => w.slug === slug);

/** Case studies that involved a given service, in the order of projects.ts */
export const workForService = (slug: string) => work.filter((w) => w.services.includes(slug as ServiceSlug));
