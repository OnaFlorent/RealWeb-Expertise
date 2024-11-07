import { social } from "../constants";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16">
      <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-n-3">
        <div className="flex items-center gap-4">
          {social.map((link) => (
            <a
              key={link.id}
              title={link.alt}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link.ico}
                alt={link.alt}
                width={20}
                height={20}
                className="cursor-pointer hover:text-p-3 animate"
              />
            </a>
          ))}
        </div>
        <div>© 2024 RealWeb Studio - Tous droits réservés.</div>
      </Container>
    </div>
  );
};
