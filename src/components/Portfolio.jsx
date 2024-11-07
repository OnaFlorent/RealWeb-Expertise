import { works } from "../constants";
import { Container } from "./Container";
import { Headings } from "./Headings";

export const Portfolio = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto py-6 lg:py-12">
        <div className="space-y-4 mb-8 text-center lg:text-start">
          <Headings title="RealWeb Studio" subtitle="Mon portfolio" />
          <p className="body-1 text-n-5">
            Découvrez mes derniers projets, réalisés avec une panoplie d'outils
            issus de ma veille technologique constante, pour répondre au mieux à
            vos besoins numériques.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className={`relative overflow-hidden border-4 border-n-3 hover:border-p-3 rounded-xl lg:rounded-2xl group ${
                work.url ? "cursor-pointer" : "cursor-default"
              }`}
              onClick={() => {
                if (work.url) {
                  window.open(work.url, "_blank", "noopener noreferrer");
                }
              }}
            >
              <picture>
                <source
                  srcSet={`${work.image.replace(
                    ".jpg",
                    "-small.webp"
                  )} 500w, ${work.image.replace(".jpg", "-large.webp")} 1000w`}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  type="image/webp"
                />
                <img
                  src={work.image}
                  srcSet={`${work.image.replace(
                    ".jpg",
                    "-small.jpg"
                  )} 500w, ${work.image.replace(".jpg", "-large.jpg")} 1000w`}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={work.alt}
                  className="w-full h-full object-cover animate group-hover:scale-110 pointer-events-none"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
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
