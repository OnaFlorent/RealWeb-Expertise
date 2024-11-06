import { icoCheck } from "../assets";
import { icoUncheck } from "../assets";
import { pricing } from "../constants";
import { Container } from "./Container";
import { Headings } from "./Headings";
import { useState } from "react";

export const Pricing = () => {
  const visibleFeatureCount = 5;

  return (
    <div id="pricing">
      <Headings title="RealWeb Studio" subtitle="Mes tarifs" />
      <Container>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16">
          {pricing.map((price) => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleExpanded = () => setIsExpanded(!isExpanded);

            return (
              <div key={price.id} className={price.featured ? "" : "lg:mt-14"}>
                <div
                  className={`${price.featured ? "bg-n-7" : "bg-n-8"}
                    rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start lg:transition-transform lg:transform lg:hover:scale-105 lg:hover:shadow-lg`}
                >
                  <div className="text-caption-1 text-n-5 uppercase">
                    {price.plan}
                  </div>
                  <div className="space-y-3">
                    <span className="h1 text-n-5">€</span>
                    <span className="h1">{price.amount}*</span>
                  </div>
                  <span className="text-caption-1 text-n-5">*à partir de </span>
                  <hr
                    className={`"border-t mt-7 mb-4 lg:mt-16 mg:mb-8"
                    ${price.featured ? "border-n-6" : "border-stroke-1"}`}
                  />
                  <div className="flex justify-center lg:justify-start">
                    <h4 className="h4 text-n-3">{price.text}</h4>
                  </div>
                  <hr
                    className={`"border-t mt-7 mb-4 lg:mt-16 mg:mb-8"
                    ${price.featured ? "border-n-6" : "border-stroke-1"}`}
                  />
                  <div className="space-y-4 pb-8">
                    {price.features
                      .slice(
                        0,
                        isExpanded ? price.features.length : visibleFeatureCount
                      )
                      .map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center lg:justify-start gap-3"
                        >
                          <img
                            src={feature.included ? icoCheck : icoUncheck}
                            alt={
                              feature.included ? "Icon-check" : "Icon-uncheck"
                            }
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
                          className="flex items-center justify-center w-6 h-6 rounded-full bg-n-6 text-white text-lg font-bold  animate hover:bg-p-3"
                          style={{ lineHeight: "1" }}
                        >
                          {isExpanded ? "-" : "+"}
                        </div>
                      </div>
                    )}
                  </div>
                  <hr
                    className={`"border-t mt-7 mb-4 lg:mt-16 mg:mb-8"
                    ${price.featured ? "border-n-6" : "border-stroke-1"}`}
                  />
                  <div className="flex flex-col justify-center text-center items-center text-xs text-n-3">
                    <span>* Tarifs hors options</span>
                    <span>** Offert la première année, puis €20/an</span>
                    <span>
                      *** Offert la première année, puis à partir de €20/an
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
