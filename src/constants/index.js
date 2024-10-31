import {
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  icoSmartphone,
  icoGlobe,
  icoFacebook,
  icoDatabase,
  icoInstagram,
  icoLinkedin,
  icoBasket,
  icoSettings,
  icoCable,
  icoX,
  logoReact,
  logoGit,
  logoPostgre,
  logoTailwind,
  logoSymfony,
  logoTypeScript,
  logoMongo,
  logoFirebase
} from "../assets";

export const branding = [
  {
    id: "0",
    alt: "Logo Git",
    image: logoGit,
  },
  {
    id: "1",
    alt: "Logo Tailwind",
    image: logoTailwind,
  },
  {
    id: "2",
    alt: "Logo React",
    image: logoReact,
  },
  {
    id: "3",
    alt: "Logo Symfony",
    image: logoSymfony,
  },
  {
    id: "4",
    alt: "Logo Postgre",
    image: logoPostgre,
  },
  {
    id: "5",
    alt: "Logo TypeScript",
    image: logoTypeScript,
  },
  {
    id: "6",
    alt: "Logo Mongo",
    image: logoMongo,
  },
  {
    id: "7",
    alt: "Logo Firebase",
    image: logoFirebase,
  },
];

export const features = [
  {
    id: "0",
    alt: "Icon Dashboard",
    image: icoGlobe,
    title: "Applications Web",
    text: "Mise en place d'application web selon les besoins spécifiques des clients, intégration d'un design responsive pour une compatibilité multi-plateforme.",
  },
  {
    id: "1",
    alt: "Icon Comment",
    image: icoSmartphone,
    title: "App Mobile",
    text: "Développement d’applications pour iOS et Android via React Native, offrant des solutions intégrées qui fonctionnent de manière transparente sur différents appareils et systèmes d’exploitation.",
  },
  {
    id: "2",
    alt: "Icon Tailored",
    image: icoCable,
    title: "RESTful API",
    text: "Conception et développement d’API pour permettre l’interaction entre différentes applications logicielles de manière sûre et efficace, facilitant ainsi l’intégration des systèmes tiers.",
  },
  {
    id: "3",
    alt: "Icon Statistic",
    image: icoSettings,
    title: "Maintenance et mise à niveau des systèmes",
    text: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups.",
  },
  {
    id: "4",
    alt: "Icon Profiles",
    image: icoBasket,
    title: "Solutions E-commerce",
    text: "Développement de plateformes de commerce électronique, y compris des paniers d’achat, des systèmes de paiement sécurisés et des outils de gestion des stocks et des expéditions",
  },
  {
    id: "5",
    alt: "Icon Folders",
    image: icoDatabase,
    title: "Gestion de base de données",
    text: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups.",
  },
];

export const bulletPoints = [
  {
    id: "0",
    alt: "Saas Bullet Point 1",
    image: bulletPoint1,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
  {
    id: "1",
    alt: "Saas Bullet Point 2",
    image: bulletPoint2,
    width: 542,
    height: 348,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
  {
    id: "2",
    alt: "Saas Bullet Point 3",
    image: bulletPoint3,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
];

export const pricing = [
  {
    id: "0",
    plan: "Free",
    amount: 0,
    featured: false,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: "1",
    plan: "basic",
    amount: 23,
    featured: true,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: "2",
    plan: "Premium",
    amount: 59,
    featured: false,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
];

export const social = [
  {
    id: "0",
    ico: icoFacebook,
    alt: "Facebook",
    link: "#/",
  },
  {
    id: "1",
    ico: icoX,
    alt: "X",
    link: "#/",
  },
  {
    id: "2",
    ico: icoInstagram,
    alt: "Instagram",
    link: "#/",
  },
  {
    id: "3",
    ico: icoLinkedin,
    alt: "Linkedin",
    link: "#/",
  },
];
