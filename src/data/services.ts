export interface Service {
  slug: string;
  name: string;
  /** Search result title (under 60 characters) and description (140-160 characters) */
  seoTitle: string;
  seoDescription: string;
  summary: string;
  title: string;
  lead: string;
  includes: { title: string; text: string }[];
  fitFor: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'websites',
    seoTitle: 'Business Website Design in Lebanon',
    seoDescription: 'Custom business websites designed and built in Beirut: fast, mobile-first and easy to update, with SEO foundations and enquiry forms. Get a fixed-price quote.',
    name: 'Business websites',
    summary: 'Clear, fast sites that explain what you do and turn visitors into enquiries. Easy for your team to update.',
    title: 'Business websites that explain what you do and bring in enquiries.',
    lead: 'Your website is often the first conversation a customer has with you. We design and build sites that load fast, read clearly on a phone and make it easy to get in touch.',
    includes: [
      { title: 'Custom design', text: 'Designed around your brand and your customers, not a template.' },
      { title: 'Built for phones first', text: 'Most of your visitors are on a phone, so that is where we start.' },
      { title: 'Easy editing', text: 'Change text, photos and pages yourself without calling a developer.' },
      { title: 'Search foundations', text: 'Page titles, speed, structured data and a Google Business Profile set up correctly.' },
      { title: 'Enquiry forms and WhatsApp', text: 'Every enquiry lands in your inbox or on your phone.' },
      { title: 'Visitor analytics', text: 'See where visitors come from and which pages bring in enquiries.' },
    ],
    fitFor: [
      'You are launching a new business or brand',
      'Your current site is outdated or hard to update',
      'You get visitors but few enquiries',
    ],
    faqs: [
      {
        q: 'Can I update the site myself?',
        a: 'Yes. We set up an editor for the pages you change most often and show your team how to use it.',
      },
      {
        q: 'Do you handle the domain and hosting?',
        a: 'Yes. We can register the domain, host the site and keep it updated under a care plan.',
      },
    ],
  },
  {
    slug: 'online-stores',
    seoTitle: 'Online Store Development in Lebanon',
    seoDescription: 'Online stores built in Beirut with cash on delivery, card payments, delivery zones and an admin panel you can run from your phone. Get a fixed-price quote.',
    name: 'Online stores',
    summary: 'Shops with local and card payments, delivery options and stock you can manage from your phone.',
    title: 'Online stores that are easy to buy from and easy to run.',
    lead: 'We build stores that make checkout quick for your customers and day-to-day work simple for you, from adding products to tracking orders.',
    includes: [
      { title: 'Product catalogue', text: 'Products with sizes, colours, photos and stock levels.' },
      { title: 'Payments', text: 'Cash on delivery, cards and wallets, depending on what is available for your business.' },
      { title: 'Delivery', text: 'Delivery zones, fees and pickup options that match how you ship.' },
      { title: 'Orders on your phone', text: 'Manage orders, stock and customers from a simple admin panel.' },
      { title: 'Discounts', text: 'Promo codes, sales and free-delivery thresholds.' },
      { title: 'Sales reports', text: 'See what sells, when, and to whom.' },
    ],
    fitFor: [
      'You sell on Instagram or WhatsApp and want a proper store',
      'Your current store is slow or hard to manage',
      'You are moving from a marketplace to your own shop',
    ],
    faqs: [
      {
        q: 'Which payment methods can I accept?',
        a: 'Usually cash on delivery, card payments and wallets. Availability depends on your country and bank, so we recommend options in your proposal.',
      },
      {
        q: 'Do you build on Shopify or from scratch?',
        a: 'Whichever suits your business. We explain the costs and trade-offs of each before you decide.',
      },
    ],
  },
  {
    slug: 'mobile-apps',
    seoTitle: 'Mobile App Development in Lebanon',
    seoDescription: 'iOS and Android apps designed and built in Beirut from one codebase, with an admin panel, notifications and App Store release. Get a fixed-price quote.',
    name: 'Mobile apps',
    summary: 'iOS and Android apps built from one codebase, from first sketch to App Store and Google Play release.',
    title: 'Mobile apps for iOS and Android, from first sketch to release.',
    lead: 'We design and build apps your customers keep using, and handle everything needed to get them into the App Store and Google Play.',
    includes: [
      { title: 'App design', text: 'Screens and flows tested with real users before development.' },
      { title: 'iOS and Android', text: 'One codebase for both platforms, so updates ship to everyone at once.' },
      { title: 'Admin panel', text: 'A web dashboard to manage users, content and orders.' },
      { title: 'Notifications', text: 'Push notifications for orders, bookings and reminders.' },
      { title: 'Analytics', text: 'Know how people use the app and where they drop off.' },
      { title: 'Store release', text: 'We prepare listings and handle App Store and Google Play review.' },
    ],
    fitFor: [
      'Your customers book, order or check in often',
      'You need an app for your team in the field',
      'You have an idea and need a first version to test',
    ],
    faqs: [
      {
        q: 'Do you publish the app to the stores?',
        a: 'Yes. We prepare the listings, screenshots and submissions, under developer accounts in your name.',
      },
      {
        q: 'Can you take over an existing app?',
        a: 'Often, yes. We review the code first and tell you honestly whether to improve it or rebuild.',
      },
    ],
  },
  {
    slug: 'social-media',
    seoTitle: 'Social Media Management in Lebanon',
    seoDescription: 'Monthly social media management from Beirut: content plans, post and reel design, scheduling, paid campaigns and a report on what is working.',
    name: 'Social media',
    summary: 'Planning, design and posting for your social accounts, with a monthly report on what is working.',
    title: 'Social media that keeps your brand visible and brings customers to you.',
    lead: 'We plan, design and publish your posts every month, so your accounts stay active, look like your brand and send people to your website, store or WhatsApp.',
    includes: [
      { title: 'Monthly content plan', text: 'A calendar of posts and stories agreed with you before the month starts.' },
      { title: 'Post and story design', text: 'Graphics and captions that match your brand on every platform.' },
      { title: 'Short videos', text: 'Reels and short clips edited for each platform.' },
      { title: 'Scheduling and posting', text: 'Posts go out on time, at the hours your audience is online.' },
      { title: 'Paid campaigns', text: 'Ad campaigns set up and managed to reach new customers.' },
      { title: 'Monthly report', text: 'Reach, engagement and clicks, with what we will change next month.' },
    ],
    fitFor: [
      'You post irregularly, or not at all',
      'Your feed does not match the quality of your business',
      'You want social media to bring visits and orders, not just likes',
    ],
    faqs: [
      {
        q: 'Do you create the content?',
        a: 'Yes. We plan, write and design the posts each month and send them for your approval before anything goes live.',
      },
      {
        q: 'Is the ad budget included?',
        a: 'No. Ad spend is paid directly to the platform, so you always see exactly what is spent. Our fee covers planning and managing the campaigns.',
      },
    ],
  },
  {
    slug: 'custom-software',
    seoTitle: 'Custom Software Development in Lebanon',
    seoDescription: 'Custom software from Beirut: dashboards, databases and integrations that replace spreadsheets and manual work, with hosting and daily backups.',
    name: 'Custom software and databases',
    summary: 'Internal tools, dashboards and databases that replace spreadsheets and manual work.',
    title: 'Custom software that replaces spreadsheets and manual work.',
    lead: 'When off-the-shelf tools do not fit how your business runs, we build software that does: dashboards, databases and integrations shaped around your process.',
    includes: [
      { title: 'Dashboards', text: 'The numbers you check every day, in one place and always up to date.' },
      { title: 'Databases', text: 'Move from scattered spreadsheets to one reliable source of data.' },
      { title: 'Integrations', text: 'Connect your accounting, CRM, payments and messaging tools.' },
      { title: 'Roles and permissions', text: 'Everyone sees and edits only what they should.' },
      { title: 'Reports and exports', text: 'Download clean reports for your accountant or management.' },
      { title: 'Hosting and backups', text: 'Secure hosting with daily backups.' },
    ],
    fitFor: [
      'Your team copies data between spreadsheets every day',
      'You have outgrown your current tools',
      'You need different systems to talk to each other',
    ],
    faqs: [
      {
        q: 'Can you move our existing data?',
        a: 'Yes. We clean and import data from spreadsheets and older systems as part of the project.',
      },
      {
        q: 'Where is the software hosted?',
        a: 'On secure cloud hosting we set up and manage, or on your own servers if you prefer.',
      },
    ],
  },
  {
    slug: 'support',
    seoTitle: 'Website Maintenance & Support in Lebanon',
    seoDescription: 'Monthly care plans for websites and apps: hosting, SSL, security updates, daily backups, uptime monitoring and direct help on WhatsApp.',
    name: 'Care and support',
    summary: 'Hosting, updates, backups and a person to call when something breaks.',
    title: 'Care and support, so your website or app keeps working.',
    lead: 'A monthly plan that covers the work most businesses forget until something breaks: hosting, security updates, backups and small improvements.',
    includes: [
      { title: 'Hosting and SSL', text: 'Fast hosting and a secure connection for your site or app.' },
      { title: 'Security updates', text: 'Software and plugins kept up to date.' },
      { title: 'Daily backups', text: 'Restore any day from the last month if something goes wrong.' },
      { title: 'Uptime monitoring', text: 'We know when your site is down, often before you do.' },
      { title: 'Monthly changes', text: 'Time each month for small edits and improvements.' },
      { title: 'Priority help', text: 'Reach us directly on WhatsApp or email.' },
    ],
    fitFor: [
      'You do not have a developer on your team',
      'Your site was built by someone who is no longer available',
      'You want one fixed monthly cost',
    ],
    faqs: [
      {
        q: 'Do you support sites you did not build?',
        a: 'Yes. We review the site first and tell you what needs fixing before the plan starts.',
      },
      {
        q: 'Can I cancel?',
        a: 'Yes. Plans are month to month, and we hand over all access if you leave.',
      },
    ],
  },
];
