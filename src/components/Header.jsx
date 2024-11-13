import { Github, Linkedin, Paperclip } from "lucide-react";
import { Container } from "./Container";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"relative bg-n-9"}>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
          <div className="flex items-center space-x-4">
            <motion.h4
              className="h4 relative after:bg-p-3 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000 cursor-pointer text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href="/" className="no-custom-hover">
                RealWeb Studio
              </a>
            </motion.h4>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              title="Linkedin"
              href="https://www.linkedin.com/in/florentbelot/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-p-3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin width={20} height={20} alt="Linkedin" />
            </motion.a>

            <motion.a
              title="Github"
              href="https://github.com/OnaFlorent"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-p-3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Github width={20} height={20} alt="Github" />
            </motion.a>

            <motion.a
              title="Mon CV"
              href="https://drive.google.com/file/d/18aF6lSHo-wOrV1PGWWgCEXnBcp7hnIUa/view"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-p-3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Paperclip width={20} height={20} alt="CV_download" />
            </motion.a>
          </div>
        </div>
      </Container>
    </div>
  );
};
