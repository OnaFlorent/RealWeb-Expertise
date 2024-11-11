import profileImgPng from "../../src/assets/hero/profile_img.png";
import profileImgWebp from "../../src/assets/hero/profile_img.webp";
import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./theme/Hero";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 lg:py-16 space-y-16 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:space-x-reverse lg:space-x-8 items-center lg:items-start lg:justify-between">
          <div className="mt-8 mb-8 lg:mt-0 lg:ml-6">
            <motion.div
              className="border-4 bg-n-8 rounded-xl lg:rounded-2xl p-8 space-y-8 cursor-pointer animate-border-animation"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <picture>
                <source srcSet={profileImgWebp} type="image/webp" />
                <source srcSet={profileImgPng} type="image/png" />
                <img
                  src={profileImgPng}
                  alt="Profile"
                  className="mx-auto rounded-full border-4 border-n-1 border-opacity-50 pointer-events-none"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="flex justify-center space-x-4">
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
          <div className="text-center lg:text-left max-w-3xl space-y-7">
            <h1 className="h1">
              <div className="flex flex-col">Bonjour!</div>
              <div>
                <div>
                  Je suis
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                    {" "}
                    Florent Belot
                  </span>
                  ,
                </div>
                <div>Développeur Full-Stack</div>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                  Freelance
                </span>
              </div>
            </h1>
            <p className="body-1 text-n-5">
              Développeur Full-Stack Freelance certifié en web et web mobile,
              basé dans la métropole lilloise, je mets{" "}
              <a href="/#services" className="text-n-1">
                mes compétences au service
              </a>{" "}
              de vos projets numériques, quelles que soient leurs dimensions.
            </p>

            <p className="body-1 text-n-5">
              Besoin d'une présence en ligne pour votre activité ? Je vous
              propose des solutions web sur-mesure, qu'il s'agisse de la
              création d'un site vitrine ou d'une plateforme plus complexe. Mon
              objectif est de vous offrir une vitrine numérique qui reflète
              parfaitement votre entreprise et capte l'attention de vos clients.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button theme="secondary" className="cursor-not-allowed">
                Mon profil Malt
              </Button>
              <Button theme="secondary" href="/#pricing">
                Mes tarifs
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
