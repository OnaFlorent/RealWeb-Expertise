import { Container } from "./Container";
import { tools } from "../constants";
import { motion } from "framer-motion";

const iconAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Tools = () => {
  return (
    <Container>
      <section className="flex flex-wrap justify-center gap-6 max-w-6xl w-full mx-auto py-8 lg:py-12">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            className="group flex flex-col items-center justify-center space-y-2 w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] lg:w-[calc(12.5%-1rem)]"
            custom={index}
            variants={iconAnimation}
            initial="initial"
            whileInView="animate"
          >
            <motion.img
              src={tool.image}
              alt={tool.alt}
              width={80}
              height={80}
              className="w-16 h-16 lg:w-20 lg:h-20 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition-transform pointer-events-none"
              whileHover={{ scale: 1.1, rotate: 3 }}
            />
            <motion.span
              className="body-2 text-n-5 group-hover:text-n-3 group-hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              {tool.title}
            </motion.span>
          </motion.div>
        ))}
      </section>
    </Container>
  );
};
