import profileImgPng from "../../src/assets/hero/profile_img.png";
import profileImgWebp from "../../src/assets/hero/profile_img.webp";
import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./theme/Hero";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative ax-w-7xl z-10 py-16 space-y-12 xl:space-y-6 mmx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <motion.div
            className="border-4 bg-n-8 rounded-xl p-8 animate-border-animation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <picture>
              <source srcSet={profileImgWebp} type="image/webp" />
              <source srcSet={profileImgPng} type="image/png" />
              <img
                src={profileImgPng}
                alt="Profile"
                className="mx-auto rounded-full border-4 border-n-1 border-opacity-50 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px]"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" },
            }}
            className="text-center max-w-3xl space-y-8"
          >
            <div
              className="h1 flex flex-col items-center space-y-4"
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
              <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-snug">
                Augmentons votre{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                  visibilité
                </span>{" "}
                grâce à un produit web{" "}
                <span className="block sm:inline">
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      "compétitif",
                      2000,
                      "innovant",
                      2000,
                      "performant",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    wrapper="span"
                    cursor={false}
                    className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2"
                  />
                </span>{" "}
                !
              </h1>
            </div>
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
            <div className="flex justify-center space-x-4 py-4">
              <Button
                theme="primary"
                href="https://forms.gle/SQePZgWNcg5ucBB97"
                target="_blank"
              >
                Prendre contact
              </Button>
              <Button theme="secondary" className="cursor-not-allowed">
                Mon profil Malt
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
      <Grid />
    </div>
  );
};

export default Hero;
