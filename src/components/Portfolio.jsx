import { works } from "../constants";
import { Container } from "./Container";

export const Portfolio = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto py-6 lg:py-12">
        <div className="space-y-4 mb-8 text-center lg:text-start">
          <h2 className="h2">Mon portfolio</h2>
          <p className="body-1 text-n-5">
            Découvrez mes projets, alliant technologie et innovation pour
            répondre à vos besoins numériques.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className={`relative overflow-hidden border-4 border-p-3 rounded-xl lg:rounded-2xl group ${
                work.url ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={() => {
                if (work.url) {
                  window.open(work.url, "_blank", "noopener noreferrer");
                }
              }}
            >
              <img
                src={work.image}
                alt={work.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-right text-white space-y-1">
                  <h3 className="h4">{work.title}</h3>
                  <p className="body-3">{work.technologies.join(" • ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
