import { works } from "../constants";
import { Container } from "./Container";
import { Headings } from "./Headings";
import { motion } from "framer-motion";

import { fadeInOnScroll } from "../motion/motionVariants";

export const Portfolio = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto py-6 lg:py-12">
        <motion.div
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
          className="space-y-4 mb-8 text-center lg:text-start"
        >
          <Headings title="RealWeb Studio" subtitle="Mon portfolio" />
          <p className="body-1 text-n-5">
            Découvrez mes derniers projets, réalisés avec une panoplie d'outils
            issus de ma veille technologique constante, pour répondre au mieux à
            vos besoins numériques.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInOnScroll(0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 gap-5 lg:gap-10"
        >
          {works.map((work, index) => (
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
                <source srcSet={work.imageWebp} type="image/webp" />
                <img
                  src={work.imagePng}
                  alt={work.alt}
                  className="w-full h-full object-cover animate group-hover:scale-110 transition-transform pointer-events-none"
                  width="100%"
                  height="auto"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end items-end p-4 opacity-0 transition-opacity animate group-hover:opacity-100">
                <div className="text-right text-white space-y-1">
                  <h3 className="h4">{work.title}</h3>
                  <p className="body-3">{work.technologies.join(" • ")}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};
