import { features } from "../constants";
import { Container } from "./Container";

export const Services = () => {
  return (
    <div id="services">
      <Container>
        <div className="max-w-5xl mx-auto py-6 lg:py-12">
          <div className="space-y-4 mb-8 text-center lg:text-start">
            <h2 className="h2">Mes Services</h2>
            <p className="body-1 text-n-5">
              Développeur full-stack investi et rigoureux, je vous accompagne
              dans vos projets numériques avec des solutions fiables, pensées
              pour répondre à vos attentes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group border-4 border-n-5 hover:border-p-3 hover:bg-n-8 rounded-xl lg:rounded-2xl p-8 space-y-8 cursor-pointer"
              >
                <img
                  src={feature.image}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="filter brightness-0 invert animate group-hover:rotate-12"
                />
                <div className="space-y-4">
                  <h3 className="h4 bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                    {feature.title}
                  </h3>
                  <p className="body-2 text-n-3">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
