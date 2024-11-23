import { features } from "../constants";
import { Container } from "./Container";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <div id="services">
      <Container>
        <div className="max-w-5xl mx-auto py-6 lg:py-12">
          <div className="space-y-4 mb-8 text-center lg:text-start">
            <h2 className="h2">Mes Services</h2>
            <p className="body-1 text-n-5">
              Développeur Full-Stack investi et rigoureux, je vous accompagne
              dans vos projets numériques avec des solutions fiables, pensées
              pour répondre à vos attentes.
            </p>
          </div>
          <motion.div
            className="grid sm:grid-cols-2 gap-5 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="group border-4 border-n-5 hover:border-p-3 hover:bg-n-8 rounded-xl lg:rounded-2xl p-8 space-y-8 cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.img
                  src={feature.image}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="filter brightness-0 invert group-hover:rotate-12 transition-transform"
                  whileHover={{ rotate: 15 }}
                />
                <div className="space-y-4">
                  <h3 className="h4 text-n-1">{feature.title}</h3>
                  <p className="body-2 text-n-5">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
