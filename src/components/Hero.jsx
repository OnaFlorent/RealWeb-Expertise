import profileImgPng from "../../src/assets/hero/profile_img.png";
import profileImgWebp from "../../src/assets/hero/profile_img.webp";
import { Button } from "./Button";
import { Container } from "./Container";
import { motion } from "framer-motion";

import { fadeInOnScroll } from "../motion/motionVariants";

const Hero = () => {
  return (
    <section className="relative">
      <Container className="max-w-7xl py-16 space-y-12 xl:space-y-6 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div
            variants={fadeInOnScroll(0.2, 0.6)}
            initial="hidden"
            whileInView="visible"
            className="border-4 rounded-xl p-6 animate-border-animation mb-8"
          >
            <picture>
              <source srcSet={profileImgWebp} type="image/webp" />
              <source srcSet={profileImgPng} type="image/png" />
              <img
                src={profileImgPng}
                alt="Profile"
                className="mx-auto rounded-full border-4 border-n-1 border-opacity-50 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px]"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </motion.div>
          <div className="text-center max-w-4xl space-y-8">
            <motion.div
              variants={fadeInOnScroll(0.2, 0.7)}
              initial="hidden"
              whileInView="visible"
            >
              <div
                className="h2 flex flex-col items-center space-y-6"
                role="heading"
                aria-level="1"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span
                    className="block border-t-4 w-12 sm:w-20 md:w-28 animate-border-animation"
                    aria-hidden="true"
                  ></span>
                  <span className="tracking-wide">Ensemble</span>
                  <span
                    className="block border-t-4 w-12 sm:w-20 md:w-28 animate-border-animation"
                    aria-hidden="true"
                  ></span>
                </div>
                <h1 className="h1 font-bold leading-snug tracking-tight max-w-full mx-auto">
                  Augmentons votre{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                    visibilité
                  </span>{" "}
                  avec un produit web{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                    compétitif et innovant !
                  </span>
                </h1>
              </div>
              <p className="body-1 text-n-5 mt-6">
                Je suis <span className="text-n-1">Florent Belot</span>,
                développeur Full-Stack Freelance certifié en web et mobile, basé
                dans la métropole lilloise. J’accompagne vos projets numériques
                à distance, quelle que soit leur envergure, en vous proposant
                des{" "}
                <a href="/#services" className="text-n-1">
                  solutions sur mesure
                </a>{" "}
                adaptées à vos besoins.
              </p>
              <p className="body-1 text-n-5 mt-4">
                Besoin d'une <span className="text-n-1">présence en ligne</span>{" "}
                pour votre activité ? Que ce soit pour un site vitrine ou une
                plateforme plus complexe, mon objectif est de créer une
                application numérique qui reflète parfaitement votre entreprise
                et{" "}
                <span className="text-n-1">
                  capte l'attention de vos clients.
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.4,
                ease: [0.6, -0.5, 0.01, 0.99],
                type: "spring",
                stiffness: 80,
              }}
              className="flex justify-center space-x-4 py-4"
            >
              <Button
                theme="primary"
                href="https://calendly.com/florent-belot-dev/premier-echange"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver un appel
              </Button>
              <Button
                theme="secondary"
                href="https://www.malt.fr/profile/florentbelot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mon profil Malt
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
