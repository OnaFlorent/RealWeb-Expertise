import profileImgPng from "../../src/assets/hero/profile_img.png";
import profileImgWebp from "../../src/assets/hero/profile_img.webp";
import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./theme/Hero";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 lg:py-16 space-y-16 max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <div className="flex flex-col lg:flex-row-reverse lg:space-x-reverse lg:space-x-8 items-center lg:items-start lg:justify-between">
          <div className="mt-8 mb-8 lg:mt-0 lg:ml-6">
            <motion.div
              className="border-4 bg-n-8 rounded-xl lg:rounded-2xl p-8 space-y-8 cursor-pointer animate-border-animation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <picture>
                <source srcSet={profileImgWebp} type="image/webp" />
                <source srcSet={profileImgPng} type="image/png" />
                <img
                  src={profileImgPng}
                  alt="Profile"
                  className="mx-auto rounded-full border-4 border-n-1 border-opacity-50 pointer-events-none w-[120px] h-[120px] lg:w-[180px] lg:h-[180px]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="flex justify-center mt-4">
                <Button
                  theme="primary"
                  href="https://forms.gle/SQePZgWNcg5ucBB97"
                  target="_blank"
                >
                  Prendre contact
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="text-center lg:text-left max-w-3xl space-y-6">
            <h1 className="h1">
              <div className="relative flex items-center justify-center lg:justify-start space-x-2">
                <span
                  className="block border-t-2 w-12 sm:w-20 md:w-28 animate-border-animation"
                  aria-hidden="true"
                ></span>
                <span>Ensemble</span>
                <span
                  className="block border-t-2 w-12 sm:w-20 md:w-28 animate-border-animation"
                  aria-hidden="true"
                ></span>
              </div>
              Augmentons votre{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                visibilité
              </span>{" "}
              grâce à un produit web{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                compétitif
              </span>{" "}
              !
            </h1>
            <p className="body-1 text-n-5">
              Je suis <span className="text-n-1">Florent Belot</span>,
              développeur Full-Stack Freelance certifié en web et mobile, basé
              dans la métropole lilloise. J’accompagne vos projets numériques à
              distance, quelle que soit leur envergure, en vous proposant des{" "}
              <a href="/#services" className="text-n-1">
                solutions sur mesure
              </a>{" "}
              adaptées à vos besoins.
            </p>
            <p className="body-1 text-n-5">
              Besoin d'une <span className="text-n-1">présence en ligne</span>{" "}
              pour votre activité ? Que ce soit pour un site vitrine ou une
              plateforme plus complexe, mon objectif est de créer une
              application numérique qui reflète parfaitement votre entreprise et{" "}
              <span className="text-n-1">
                capte l'attention de vos clients.
              </span>
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 py-4">
              <Button theme="secondary" href="/#pricing">
                Mes tarifs
              </Button>
              <Button theme="secondary" className="cursor-not-allowed">
                Mon profil Malt
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Grid />
    </div>
  );
};

export default Hero;
