import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./theme/Hero";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
        <div className="text-center lg:text-left max-w-3xl mx-auto px-16 lg:px-0 space-y-7">
          <h1 className="h1">
            Bonjour! <br /> Je suis{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
              Florent Belot,
            </span>{" "}
            le développeur freelance qu'il vous faut!
          </h1>
          <p className="body-1 text-n-5">
            Basé sur la métropole Lilloise, développeur autodidacte et curieux 
          </p>
          <Button className="" theme="primary" href="/#pricing">
            Prendre un RDV
          </Button>
        </div>
      </Container>
      <Grid />
    </div>
  );
};

export default Hero;
