/**
 * Guides: plain answers to what business owners search for (the site was found only by its name). No menu item:
 * linked from the footer and from the matching service pages. Facts only: no invented prices, numbers or results.
 * Text supports **bold** (rendered by the page).
 */
export interface GuideSection {
  id: string;
  h2: string;
  paragraphs?: string[];
  list?: { title?: string; text: string }[];
  numbered?: boolean;
}

export interface Guide {
  slug: string;
  /** Search result title (under 60 characters with the brand) and description (140-155 characters) */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  /** The short answer, first: what a search engine can quote */
  answer: string;
  published: string;
  updated: string;
  minutes: number;
  takeaways: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Service pages this guide supports (slugs), and case studies worth reading next */
  services: string[];
  work: string[];
  cta: { title: string; text: string; service: string };
}

export const guides: Guide[] = [
  {
    slug: 'website-cost-lebanon',
    seoTitle: 'How Much Does a Website Cost in Lebanon?',
    seoDescription:
      'What decides the price of a website, online store or app in Lebanon, the yearly costs people forget, and how to compare quotes without surprises.',
    h1: 'How much does a website cost in Lebanon?',
    answer:
      'It depends less on the website and more on what it has to do. A simple site built on a template sits at the low end of the market, while a custom online store or a mobile app costs several times more. What moves the price is the number of pages, how custom the design is, the features (booking, payments, Arabic and French versions), who prepares the content, and what happens after launch. The only reliable number is a **fixed-price quote for a written scope**, which any serious studio can give you after a short call.',
    published: '2026-11-18',
    updated: '2026-11-18',
    minutes: 6,
    takeaways: [
      'The scope decides the price: pages, design, features and content.',
      'Count the yearly costs too: domain, hosting, maintenance and app store accounts.',
      'Compare quotes on what is included and who owns the result, not only the total.',
      'Ask for a fixed price for a written scope before any work starts.',
    ],
    sections: [
      {
        id: 'what-decides-the-price',
        h2: 'What decides the price of a website',
        paragraphs: ['Two websites can look alike and cost very different amounts. These are the things that make the difference:'],
        list: [
          { title: 'Number of pages and sections.', text: 'A one-page site with your services, location and a WhatsApp button is far less work than twenty pages with a blog and service details.' },
          { title: 'Template or custom design.', text: 'A template is quicker and cheaper. A custom design is built around your brand and your customers, and usually turns more visitors into enquiries.' },
          { title: 'Languages.', text: 'Many Lebanese businesses need English, Arabic and sometimes French. Each language means more content, and Arabic needs a right-to-left layout.' },
          { title: 'Features.', text: 'Online booking, enquiry forms that reach your phone, a menu or catalogue you update yourself, or a link with your CRM each add work.' },
          { title: 'Content.', text: 'Texts and photos take time. A project goes faster, and costs less, when you arrive with them ready or when the scope says clearly who prepares them.' },
          { title: 'Search foundations.', text: 'Page titles, speed, structured data and a Google Business Profile set up correctly are what help people find you on Google. Check they are in the quote.' },
        ],
      },
      {
        id: 'online-store-cost',
        h2: 'What changes for an online store',
        paragraphs: ['An online store has everything a website has, plus the parts that take and deliver orders:'],
        list: [
          { title: 'Products.', text: 'How many there are, and whether they come in sizes and colours. Adding the products, photos and prices is often a large part of the work.' },
          { title: 'Payments.', text: 'Cash on delivery is the most common in Lebanon; card payments and wallets depend on what is available for your business.' },
          { title: 'Delivery.', text: 'Delivery zones, fees and pickup options that match how you actually ship.' },
          { title: 'Managing orders.', text: 'An admin panel where you see orders, stock and customers, ideally from your phone.' },
        ],
      },
      {
        id: 'mobile-app-cost',
        h2: 'What changes for a mobile app',
        paragraphs: [
          'Apps cost the most because there is more to build: the app itself, an admin panel to manage it, user accounts, notifications, and the release on the App Store and Google Play. Building iPhone and Android from one codebase keeps the cost down compared with two separate apps.',
          'Before an app, check whether a good website or online store would do the job. For many businesses it does, for a fraction of the cost. An app makes sense when customers come back often: bookings, loyalty, orders, memberships.',
        ],
      },
      {
        id: 'yearly-costs',
        h2: 'The yearly costs people forget',
        paragraphs: ['The build is a one-time cost. These come back every year, so ask about them before you sign:'],
        list: [
          { title: 'Domain.', text: 'Your address, for example yourbusiness.com, renewed every year.' },
          { title: 'Hosting.', text: 'Where the site lives. Cheap hosting is often slow, and slow sites lose visitors.' },
          { title: 'Maintenance.', text: 'Security updates, backups, uptime monitoring and small changes. Without them, a site gets slower and less safe over time.' },
          { title: 'App store accounts.', text: 'For an app: Apple charges $99 a year for its developer program, and Google Play charges a one-time $25.' },
        ],
      },
      {
        id: 'compare-quotes',
        h2: 'How to compare two quotes',
        paragraphs: ['A low total can hide a lot. Put the quotes side by side and check these points:'],
        list: [
          { text: 'Is it a **fixed price** for a written list of pages and features, or an estimate that can grow?' },
          { text: 'Who **owns** the website, the code and the domain once it is paid? It should be you.' },
          { text: 'Is there a **timeline** with dates, and will you see progress every week?' },
          { text: 'How many rounds of **changes** to the design are included?' },
          { text: 'What happens **after launch**: hosting, updates, backups, and who you call when something breaks?' },
          { text: 'Are the **yearly costs** written down, so there are no surprises next year?' },
        ],
        numbered: true,
      },
      {
        id: 'how-long',
        h2: 'How long it takes',
        paragraphs: [
          'A business website usually takes three to six weeks. Online stores, apps and custom software take longer, depending on the products, features and content. A good proposal gives you a timeline with dates, not just a total.',
        ],
      },
      {
        id: 'how-we-price',
        h2: 'How we price at Quantum ByTech',
        paragraphs: [
          'We start with a 30-minute call about your business, your goals and your budget. Within a few days you get a written proposal with a fixed price and a timeline. If something changes along the way, we tell you the cost before doing the work. When the project is paid, the code, the domain and the store accounts are yours.',
        ],
      },
    ],
    faqs: [
      { q: 'Why do website prices in Lebanon vary so much?', a: 'Because "a website" can mean a one-page template or a custom site in three languages with booking and a CRM. Compare quotes on the same written scope, and the differences become clear.' },
      { q: 'Is a template website good enough?', a: 'For a new business that needs to be found and contacted, often yes. A custom design pays off when your website has to sell: when it is where customers decide whether to call you or a competitor.' },
      { q: 'What yearly costs should I expect after launch?', a: 'The domain renewal, hosting and maintenance every year, and for an app, the Apple developer program ($99 a year). Ask for them in writing with the quote.' },
      { q: 'Can I get a fixed price before the work starts?', a: 'Yes. After a short call about what you need, we send a written proposal with a fixed price and a timeline, usually within a few days.' },
    ],
    services: ['websites', 'online-stores', 'mobile-apps'],
    work: ['bechara-issa', 'kelly-rissi'],
    cta: { title: 'Get a fixed price for your website', text: 'Tell us what you need. We reply within one working day and send a written, fixed-price proposal after a short call.', service: 'websites' },
  },
  {
    slug: 'crm-for-small-sales-team',
    seoTitle: 'Does a Small Sales Team Need a CRM?',
    seoDescription:
      'Seven signs your team has outgrown Excel and WhatsApp, what a simple CRM actually does, and how to start without a big project or wasted licences.',
    h1: 'Does a small sales team need a CRM?',
    answer:
      'Yes, as soon as your leads come from more than one place or more than one person sells. The moment WhatsApp, Instagram, calls and walk-ins feed the same team, an Excel file or one person’s memory starts losing customers. A **simple CRM** keeps every lead, conversation and follow-up in one place and reminds your team before a lead goes cold. You do not need a big system: you need the few features your team will actually use every day.',
    published: '2026-11-18',
    updated: '2026-11-18',
    minutes: 7,
    takeaways: [
      'If leads arrive on several channels or several people sell, Excel will start losing them.',
      'A small team needs five things: one list of leads, stages, owners, reminders and a history.',
      'Start with your real process, not with every feature a CRM can offer.',
      'Measure it: reply time, follow-ups done and leads that turn into customers.',
    ],
    sections: [
      {
        id: 'signs',
        h2: 'Seven signs you have outgrown Excel and WhatsApp',
        list: [
          { title: 'Leads arrive in too many places.', text: 'WhatsApp, Instagram DMs, calls and the website, and nobody sees them all in one list.' },
          { title: '"I’ll think about it" means the end.', text: 'Customers who ask for time are never contacted again, because nobody is reminded to.' },
          { title: 'Two people answer the same customer,', text: 'or nobody does, because it is not clear whose lead it is.' },
          { title: 'Leads live in personal phones.', text: 'When a salesperson leaves, their customers and conversations leave with them.' },
          { title: 'The Excel file has several versions,', text: 'and nobody is sure which one is up to date.' },
          { title: 'You cannot answer simple questions,', text: 'like how many leads came in this month, from where, and how many became customers.' },
          { title: 'Follow-ups depend on memory.', text: 'The best salesperson remembers; everyone else does not, and the difference shows in the results.' },
        ],
        numbered: true,
        paragraphs: ['If three or more of these sound familiar, a CRM will pay for itself in deals you stop losing.'],
      },
      {
        id: 'what-a-crm-does',
        h2: 'What a simple CRM actually does',
        paragraphs: ['Forget the long feature lists. For a small sales team, a CRM that works does five things well:'],
        list: [
          { title: 'One list of every lead,', text: 'whatever channel it came from, with the person’s name, number and what they asked for.' },
          { title: 'Stages,', text: 'so you see where each lead stands: new, contacted, meeting, offer sent, won or lost.' },
          { title: 'An owner for every lead,', text: 'so it is always clear who answers and who follows up.' },
          { title: 'Reminders,', text: 'so a follow-up happens on day two, not when someone remembers.' },
          { title: 'A history,', text: 'so anyone on the team can pick up the conversation where it stopped.' },
        ],
      },
      {
        id: 'whatsapp',
        h2: 'Where WhatsApp fits',
        paragraphs: [
          'In Lebanon, most leads start on WhatsApp. A CRM that ignores it means copying chats by hand, which is exactly the work people stop doing. Look for a setup where a new WhatsApp conversation becomes a lead by itself, and replies and follow-ups are recorded against the right customer.',
          'An assistant can also answer the questions that come every day (prices, opening hours, location, available times) and pass the real conversations to your team.',
        ],
      },
      {
        id: 'off-the-shelf-or-custom',
        h2: 'Off-the-shelf or custom?',
        paragraphs: [
          'Off-the-shelf CRMs are a good start for many teams: they are quick to set up and some have free plans. They become harder when you pay per user every month, when your process does not fit their stages, or when WhatsApp and your other tools do not connect well.',
          'A CRM built around your process makes sense when you want it to work the way your team already sells, connect to WhatsApp and your website, and belong to you, with no monthly fee per salesperson. Whichever you choose, make sure you can export your data at any time.',
        ],
      },
      {
        id: 'start',
        h2: 'How to start without a big project',
        list: [
          { text: '**Write down how a sale happens today,** from the first message to payment. Those steps become your stages.' },
          { text: '**Decide who owns which leads,** and what "a follow-up" means for you: after how many days, and how.' },
          { text: '**Bring in your current leads** from Excel and phones, so the team starts with everything in one place.' },
          { text: '**Connect the channels** where leads arrive, starting with WhatsApp.' },
          { text: '**Run it for a month,** then remove what nobody uses and add only what the team asks for.' },
        ],
        numbered: true,
      },
      {
        id: 'measure',
        h2: 'How to know it is working',
        paragraphs: ['After a month, look at three numbers. They tell you more than any feature list:'],
        list: [
          { title: 'Reply time:', text: 'how long a new lead waits for a first answer.' },
          { title: 'Follow-ups done:', text: 'how many leads that went quiet were contacted again.' },
          { title: 'Leads won:', text: 'out of all the leads that came in, how many became customers.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is a CRM worth it for a team of two or three people?', a: 'Yes, if leads come from several channels or you lose track of follow-ups. Small teams feel the benefit fastest, because one forgotten lead is a bigger share of their month.' },
      { q: 'Can a CRM work with WhatsApp?', a: 'Yes. New WhatsApp conversations can become leads by themselves, and messages and follow-ups are recorded against the right customer, so nothing is copied by hand.' },
      { q: 'Will my sales team actually use it?', a: 'They will if it saves them time from the first week. Keep it to the steps of your real process, and let reminders do the remembering for them.' },
      { q: 'Can we move our customers from Excel?', a: 'Yes. Importing your current leads and customers is the first step, so the team starts with everything in one place.' },
      { q: 'Who owns the data?', a: 'You should. With a CRM built for you, the data and the code are yours. With an off-the-shelf tool, check that you can export everything at any time.' },
    ],
    services: ['custom-software'],
    work: ['galacards', 'dlimits'],
    cta: { title: 'See what a CRM would look like for your team', text: 'Tell us how your team sells today. We reply within one working day and show you the simplest setup that fits.', service: 'custom-software' },
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
export const guidesForService = (service: string) => guides.filter((g) => g.services.includes(service));
