import { FileDown } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";

export const CallToAction = ({ minify = false }) => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div
          className={`flex flex-col items-center rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8
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
            <h3 className="h3">CV développeur Full-Stack</h3>
            <div className="caption-1 text-n-1/50">Besoin d'en savoir plus sur mon parcours, télécharger mon CV en ligne.</div>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-1"
          >
            <span>
              <FileDown width={24} height={24} alt="CV_download" className="mr-2"/>
            </span>
            <span>Télécharger</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
