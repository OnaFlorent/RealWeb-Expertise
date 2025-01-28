import { icoCheck, icoUncheck } from "../assets";
import { pricing } from "../constants";
import { Container } from "./Container";
import { CirclePlus, CircleMinus } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { Services } from "./theme/Services";
import { motion } from "framer-motion";

export const Pricing = () => {
  const visibleFeatureCount = 5;

  return (
    <section id="pricing">
      <div className="py-5 lg:py-10">
        <div className="caption-1 text-n-5 text-center uppercase">
          RealWeb Studio
        </div>
        <h2 className="h2 text-center">Des forfaits clé en main</h2>
        <div className="caption-1 text-n-5 text-center uppercase">
          Site vitrine | Landing Page
        </div>
      </div>
      <Container>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16">
          {pricing.map((price) => (
            <PricingCard
              key={price.id}
              price={price}
              visibleFeatureCount={visibleFeatureCount}
            />
          ))}
        </div>
        <Services />
      </Container>
    </section>
  );
};

const PricingCard = ({ price, visibleFeatureCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={price.featured ? "" : "lg:mt-14"}
    >
      <div
        className={`${
          price.featured ? "bg-n-7" : "bg-n-8"
        } rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start lg:transition-transform lg:transform lg:hover:scale-105 lg:hover:shadow-lg`}
      >
        <div className="text-caption-1 text-n-5 uppercase">{price.plan}</div>
        <span className="text-caption-1 text-n-5">À partir de </span>
        <div className="space-y-3">
          <span className="h1 text-n-5">€</span>
          <span className="h1">{price.amount}*</span>
        </div>

        <hr
          className={`border-t mt-7 mb-4 lg:mt-16 ${
            price.featured ? "border-n-6" : "border-stroke-1"
          }`}
        />
        <div className="flex justify-center lg:justify-start">
          <span className="h4 text-n-3">{price.text}</span>
        </div>
        <hr
          className={`border-t mt-7 mb-4 lg:mt-8 ${
            price.featured ? "border-n-6" : "border-stroke-1"
          }`}
        />
        <div className="space-y-4 pb-8">
          {price.features
            .slice(0, isExpanded ? price.features.length : visibleFeatureCount)
            .map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <img
                  src={feature.included ? icoCheck : icoUncheck}
                  alt={feature.included ? "Icon_check" : "Icon_uncheck"}
                  width={24}
                  height={24}
                  className="filter brightness-0 invert pointer-events-none"
                />
                <div
                  className={`h5 ${
                    feature.included
                      ? "bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2"
                      : "text-n-5"
                  }`}
                >
                  {feature.description}
                </div>
              </div>
            ))}
          {price.features.length > visibleFeatureCount && (
            <div
              className="flex justify-center mt-2 cursor-pointer"
              onClick={toggleExpanded}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-n-6 hover:bg-p-3 animate"
                style={{ lineHeight: "1" }}
              >
                {isExpanded ? (
                  <CircleMinus size={24} alt="Circle_minus" />
                ) : (
                  <CirclePlus size={24} alt="Circle_plus" />
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <Button
            theme="primary"
            href="https://forms.gle/SQePZgWNcg5ucBB97"
            target="_blank"
          >
            Élaborer un devis
          </Button>
        </div>
        <hr
          className={`border-t mt-7 mb-4 lg:mt-8 mg:mb-8 ${
            price.featured ? "border-n-6" : "border-stroke-1"
          }`}
        />
        <div className="flex flex-col justify-center text-center items-center text-xs text-n-3">
          <span>* Tarifs hors options</span>
          <span>** Offert la première année, puis €19/an</span>
          <span>*** Offert la première année, puis à partir de €29/an</span>
        </div>
      </div>
    </motion.div>
  );
};
