import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";

export const CallToAction = ({
  minify,
  title,
  description,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div
          className={`flex flex-col items-center rounded-xl lg:rounded-2xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-12 gap-8
            ${
              !minify
                ? "flex flex-col items-center"
                : "flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"
            }`}
        >
          <div
            className={
              minify
                ? "space-y-1 text-center lg:text-start"
                : "space-y-4 text-center"
            }
          >
            <h3 className="h3">{title}</h3>
            <div className="caption-1 text-n-1/50">{description}</div>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-1"
            href={buttonLink}
            target="_blank"
          >
            <span>{image}</span>
            <span>{buttonText}</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
