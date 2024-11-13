import { Container } from "./Container";
import { tools } from "../constants";

export const Tools = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl w-full mx-auto py-8 lg:py-12">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="group flex flex-col items-center justify-center space-y-2"
          >
            <img
              src={tool.image}
              alt={tool.alt}
              className="w-16 h-16 lg:w-20 lg:h-20 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-opacity animate cursor-pointer"
            />
            <span className="body-2 text-n-5 group-hover:text-n-3 group-hover:scale-105 transition-transform animate">
              {tool.title}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
};
