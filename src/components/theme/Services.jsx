import { services } from "../../constants";
import { icoCheck } from "../../assets";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <div className="overflow-hidden py-5">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} 
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex space-x-10 w-[200%] sm:space-x-14 lg:space-x-20  py-2"
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={`${service.id}-${index}`}
            className="flex items-center space-x-2 px-4"
          >
            <img
              src={icoCheck}
              alt="Icon_check"
              width={24}
              height={24}
              className="filter brightness-0 invert pointer-events-none"
            />
            <span className="body-2 text-n-5 whitespace-nowrap">
              {service.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
