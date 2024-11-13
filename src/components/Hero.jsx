import profileImgPng from "../../src/assets/hero/profile_img.png";
import profileImgWebp from "../../src/assets/hero/profile_img.webp";
import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./theme/Hero";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 lg:py-16 space-y-16 max-w-7xl mx-auto px-4 md:px-6">
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
                  className="mx-auto rounded-full border-4 border-n-1 border-opacity-50 pointer-events-none"
                  width={200}
                  height={200}
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
          <div className="text-center lg:text-left max-w-3xl space-y-5">
            <h1 className="h1">
              <div>
                Je suis
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                  {" "}
                  Florent Belot
                </span>
                , Développeur Full-Stack{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                  Freelance
                </span>
              </div>
            </h1>
            <h2 className="h2">
              Propulsez votre{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                visibilité
              </span>{" "}
              grâce à un produit web{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                novateur
              </span>
              !
            </h2>
            <p className="body-1 text-n-5">
              Développeur certifié en web et web mobile, basé dans la métropole
              lilloise, j'accompagne votre entreprise dans sa transition
              digitale. Mon expertise Full-Stack est à votre service, pour des
              projets sur-mesure allant du site vitrine aux solutions web
              complexes. Ensemble, faisons briller votre présence en ligne !{" "}
              <SparklesIcon
                className="inline-block text-p-3 w-6 h-6 ml-1"
                aria-label="Sparkles Icon"
              />
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
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
