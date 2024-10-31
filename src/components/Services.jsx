import { features } from "../constants";
import { Container } from "./Container";

export const Services = () => {
  return (
    <Container>
      <div className="max-w-6xl mx-auto py-5 lg:py-10">
        <div className="space-y-4 mb-8 text-center lg:text-start">
          <h2 className="h2">Mes Services</h2>
          <p className="body-1 text-n-5">
            Développons un produit web innovant
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-n-5 hover:bg-n-8 rounded-xl lg:rounded-2xl p-8 space-y-8 cursor-pointer animate"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                width={48}
                height={48}
                className="filter brightness-0 invert pointer-events-none"
              ></img>
              <div className="space-y-4">
                <h3 className="h4 bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">{feature.title}</h3>
                <p className="body-2">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
