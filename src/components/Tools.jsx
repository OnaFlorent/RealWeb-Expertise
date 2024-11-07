import { Container } from "./Container";
import { tools } from "../constants";

export const Tools = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl w-full mx-auto py-6 lg:py-12">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <img
              src={tool.image}
              alt={tool.alt}
              className="w-16 h-16 lg:w-20 lg:h-20 opacity-60 hover:opacity-100 animate hover:scale-105 cursor-pointer"
            />
            <span className="body-1 text-n-5 text-center text-sm lg:text-base">
              {tool.title}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
};
