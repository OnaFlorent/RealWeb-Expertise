import { profileImg } from "../assets";
import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./theme/Hero";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 lg:py-16 space-y-16 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-between">
          <div className="order-first mt-8 mb-8 lg:mt-0 lg:order-last">
            <div className="border-4 hover:border-p-3 bg-n-8 rounded-xl lg:rounded-2xl p-8 space-y-8 cursor-pointer animate">
              <img
                src={profileImg}
                alt="Profile_img"
                className="mx-auto rounded-full border-4 border-n-1 border-opacity-50 pointer-events-none"
                width={200}
                height={200}
              />
              <div className="border-t-2 border-n-1 flex flex-col text-center">
                <h4 className="h5">Taux journalier (TJM)</h4>
                <div className="flex items-baseline justify-center">
                  <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                    €250
                  </h3>
                  <h5 className="h5 text-n-5 ml-2">/jour</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:ml-6 space-y-7">
            <h1 className="h1">
              <div className="flex flex-col">Bonjour! </div>{" "}
              <div>
                Je suis
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                  {" "}
                  Florent Belot,
                </span>{" "}
                le développeur
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                  {" "}
                  freelance
                </span>{" "}
                qu'il vous faut!
              </div>
            </h1>
            <p className="body-1 text-n-5">
              Développeur Full-Stack freelance certifié en web et web mobile,
              basé dans la métropole lilloise, je mets mes compétences au
              service de vos projets numériques.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button theme="primary" href="/">
                Prendre un RDV
              </Button>
              <Button theme="secondary">Mon profil Malt</Button>
            </div>
          </div>
        </div>
      </Container>
      <Grid />
    </div>
  );
};

export default Hero;
