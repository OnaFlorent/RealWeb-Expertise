import {
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
    alt: "Logo_node_js",
    image: logoNode,
    title: "NODE.JS",
  },
  {
    id: "1",
    alt: "Logo_tailwind",
    image: logoTailwind,
    title: "TAILWIND",
  },
  {
    id: "2",
    alt: "Logo_react",
    image: logoReact,
    title: "REACT",
  },
  {
    id: "3",
    alt: "Logo_php",
    image: logoPhp,
    title: "SYMFONY",
  },
  {
    id: "4",
    alt: "Logo_postgre",
    image: logoPostgre,
    title: "POSTGRESQL",
  },
  {
    id: "5",
    alt: "Logo_type_scipt",
    image: logoTypeScript,
    title: "TYPESCRIPT",
  },
  {
    id: "6",
    alt: "Logo_mongo",
    image: logoMongo,
    title: "MONGODB",
  },
  {
    id: "7",
    alt: "Logo_firebase",
    image: logoFirebase,
    title: "FIREBASE",
  },
];

export const features = [
  {
    id: "0",
    alt: "Icon_web_deploy",
    image: icoGlobe,
    title: "Intégration Web",
    text: "Développement et déploiement d'application web selon les besoins spécifiques des clients, intégration d'un design responsive pour une compatibilité multi-plateforme.",
  },
  {
    id: "1",
    alt: "Icon_app_mobile",
    image: icoSmartphone,
    title: "App Mobile",
    text: "Développement d’applications pour iOS et Android via React Native, offrant des solutions intégrées qui fonctionnent de manière transparente sur différents appareils et systèmes d’exploitation.",
  },
  {
    id: "2",
    alt: "Icon_api",
    image: icoCable,
    title: "RESTful API",
    text: "Conception et développement d’API pour permettre l’interaction entre différentes applications logicielles de manière sûre et efficace, facilitant ainsi l’intégration des systèmes tiers.",
  },
  {
    id: "3",
    alt: "Icon_settings",
    image: icoSettings,
    title: "Maintenance et mise à niveau des systèmes",
    text: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups.",
  },
  {
    id: "4",
    alt: "Icon_baskets",
    image: icoBasket,
    title: "Solutions E-commerce",
    text: "Développement de plateformes de commerce électronique, y compris des paniers d’achat, des systèmes de paiement sécurisés et des outils de gestion des stocks et des expéditions",
  },
  {
    id: "5",
    alt: "Icon_database",
    image: icoDatabase,
    title: "Gestion de base de données",
    text: "Déploiement, configuration, optimisation et gestion de bases de données, assurant la performance et la disponibilité des données pour les applications web et mobiles.",
  },
];

export const works = [
  {
    id: "0",
    alt: "Img_cleanthis",
    image: project1,
    width: 550,
    height: 300,
    title: "CleanThis! Projet final DWWM",
    technologies: ["Symfony", "MySQL", "React", "NodeJS", "MongoDB"],
    url: "https://github.com/maxcottel24/cleanthis"
  },
  {
    id: "1",
    alt: "Img_imagin_hair",
    image: project2,
    width: 550,
    height: 300,
    title: "Imagin'Hair by Isabelle",
    technologies: ["React", "NodeJS", "TypeScript", "Tailwind"],
    url: "https://imaginhairbyisabelle.ovh/"
  },
  {
    id: "2",
    alt: "Img_mern_food",
    image: project3,
    width: 550,
    height: 300,
    title: "Projet restauration MERNFood",
    technologies: ["React", "NodeJS", "TypeScript", "Tailwind", "MongoDB"],
    url: "https://github.com/OnaFlorent/Initiation-stack-MERN"
  },
  {
    id: "3",
    alt: "Img_cra",
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
    plan: "Basique | Express",
    amount: 300,
    featured: false,
    features: [
      { description: "Élaboration du cahier des charges.", included: true },
      { description: "Création du site web", included: true },
      { description: "Un réajustement en cours de création", included: true },
      { description: "Hébergement**", included: true },
      { description: "Template prédéfinie", included: true },
      { description: "Choix de couleur limité", included: true },
      { description: "Utilisation de votre logo", included: true },
      { description: "Trois choix de police d'écriture", included: true },
      { description: "Déploiement en ligne", included: true },
      { description: "Maquette personnalisée", included: false },
      { description: "Review de maquette", included: false },
      { description: "Formulaire de contact", included: false },
      { description: "Mail professionnel", included: false },
      { description: "Maintenance ***", included: true },
      { description: "Réajustement", included: false },
    ],
    text: "Démarrez à un prix abordable : Une présence en ligne à partir d'un template personnalisable !"
  },
  {
    id: "1",
    plan: "Populaire",
    amount: 600,
    featured: true,
    features: [
      { description: "Élaboration du cahier des charges.", included: true },
      { description: "Création du site web", included: true },
      { description: "Deux réajustements en cours de création", included: true },
      { description: "Hébergement**", included: true },
      { description: "Design personnalisé", included: true },
      { description: "Jusqu'à 10 choix de couleur", included: true },
      { description: "Utilisation de votre logo", included: true },
      { description: "Choix de la police d'écriture", included: true },
      { description: "Déploiement en ligne", included: true },
      { description: "Deux choix de maquette personnalisée", included: true },
      { description: "Une review de maquette", included: true },
      { description: "Formulaire de contact", included: true },
      { description: "Mail professionnel", included: false },
      { description: "Maintenance ***", included: true },
      { description: "Réajustement", included: false },
    ],
    text: "Développez votre présence en ligne avec un site web responsive et personnalisé !"
  },
  {
    id: "2",
    plan: "Premium",
    amount: 1000,
    featured: false,
    features: [
      { description: "Élaboration du cahier des charges.", included: true },
      { description: "Création du site web", included: true },
      { description: "Jusqu'à 3 réajustements en cours de création", included: true },
      { description: "Hébergement**", included: true },
      { description: "Design personnalisé", included: true },
      { description: "Choix de couleur illimité", included: true },
      { description: "Utilisation de votre logo", included: true },
      { description: "Choix de la police d'écriture", included: true },
      { description: "Déploiement en ligne", included: true },
      { description: "Trois choix de maquette personnalisée", included: true },
      { description: "Jusqu'à 3 review de maquette", included: true },
      { description: "Formulaire de contact", included: true },
      { description: "Mail professionnel", included: true },
      { description: "Maintenance ***", included: true },
      { description: "Jusqu'à 3 réajustement", included: true },
    ],
    text: "Conception web premium: un site web unique avec plusieurs pages, entièrement personnalisé pour vous !"
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
    link: "https://www.linkedin.com/in/florentbelot/",
  },
];
