import {
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  project1,
  project2,
  project3,
  project4,
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
  logoNode,
  logoPostgre,
  logoTailwind,
  logoPhp,
  logoTypeScript,
  logoMongo,
  logoFirebase
} from "../assets";

export const tools = [
  {
    id: "0",
    alt: "Logo Node.js",
    image: logoNode,
    title: "NODE.JS",
  },
  {
    id: "1",
    alt: "Logo Tailwind",
    image: logoTailwind,
    title: "TAILWIND",
  },
  {
    id: "2",
    alt: "Logo React",
    image: logoReact,
    title: "REACT",
  },
  {
    id: "3",
    alt: "Logo Php",
    image: logoPhp,
    title: "SYMFONY",
  },
  {
    id: "4",
    alt: "Logo Postgre",
    image: logoPostgre,
    title: "POSTGRESQL",
  },
  {
    id: "5",
    alt: "Logo TypeScript",
    image: logoTypeScript,
    title: "TYPESCRIPT",
  },
  {
    id: "6",
    alt: "Logo Mongo",
    image: logoMongo,
    title: "MONGODB",
  },
  {
    id: "7",
    alt: "Logo Firebase",
    image: logoFirebase,
    title: "FIREBASE",
  },
];

export const features = [
  {
    id: "0",
    alt: "Icon Dashboard",
    image: icoGlobe,
    title: "Intégration Web",
    text: "Développement et déploiement d'application web selon les besoins spécifiques des clients, intégration d'un design responsive pour une compatibilité multi-plateforme.",
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
    text: "Déploiement, configuration, optimisation et gestion de bases de données, assurant la performance et la disponibilité des données pour les applications web et mobiles.",
  },
];

export const works = [
  {
    id: "0",
    alt: "CleanThis! Projet final DWWM",
    image: project1,
    width: 550,
    height: 300,
    title: "CleanThis! Projet final DWWM",
    technologies: ["Symfony", "MySQL", "React", "NodeJS", "MongoDB"],
    url: "https://github.com/maxcottel24/cleanthis"
  },
  {
    id: "1",
    alt: "Imagin'Hair by Isabelle",
    image: project2,
    width: 550,
    height: 300,
    title: "Imagin'Hair by Isabelle",
    technologies: ["React", "NodeJS", "TypeScript", "Tailwind"],
    url: "https://imaginhairbyisabelle.ovh/"
  },
  {
    id: "2",
    alt: "Projet restauration MERNFood",
    image: project3,
    width: 550,
    height: 300,
    title: "Projet restauration MERNFood",
    technologies: ["React", "NodeJS", "TypeScript", "Tailwind", "MongoDB"],
    url: "https://github.com/OnaFlorent/Initiation-stack-MERN"
  },
  {
    id: "3",
    alt: "Projet compte rendu d'activité",
    image: project4,
    width: 550,
    height: 300,
    title: "Projet compte rendu d'activité",
    technologies: ["React", "NodeJS", "MySQL", "Express", "TypeScript", "Tailwind"],
  }
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
