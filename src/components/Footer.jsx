import { Linkedin, Github } from "lucide-react";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16">
      <Container className="flex flex-col items-center justify-center gap-3 lg:gap-1 text-center body-3 text-n-3">
        <div className="flex items-center gap-4 justify-center">
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/florentbelot/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-p-3 animate"
          >
            <Linkedin width={20} height={20} alt="Linkedin" />
          </a>
          <a
            title="Github"
            href="https://github.com/OnaFlorent"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-p-3 animate"
          >
            <Github width={20} height={20} alt="Github" />
          </a>
        </div>
        <div>
          © 2024{" "}
          <a href="/" title="RealWeb Studio" rel="noopener noreferrer">
            RealWeb Studio{" "}
          </a>
          - Tous droits réservés.
        </div>
      </Container>
    </div>
  );
};
