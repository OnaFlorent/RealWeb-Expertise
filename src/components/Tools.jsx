import { Container } from "./Container";
import { tools } from "../constants";
import { motion } from "framer-motion";

export const Tools = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl w-full mx-auto py-8 lg:py-12">
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            className="group flex flex-col items-center justify-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
      </div>
    </Container>
  );
};
