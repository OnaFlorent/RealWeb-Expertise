import { services } from "../../constants";
import { icoCheck } from "../../assets";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export const Services = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], 
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    if (isHovered) {
      controls.stop(); 
    } else {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      }); 
    }
  }, [isHovered, controls]);

  return (
    <div
      className="overflow-hidden py-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        className="flex space-x-10 sm:space-x-14 lg:space-x-20 w-max py-2"
      >
        {[...services, ...services].map((service, index) => (
          <div key={`${service.id}-${index}`} className="flex items-center space-x-2 px-4">
            <img
              src={icoCheck}
              alt="Icon_check"
              width={24}
              height={24}
              className="filter brightness-0 invert pointer-events-none"
            />
            <span className="text-n-5 body-2 whitespace-nowrap">
              {service.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
