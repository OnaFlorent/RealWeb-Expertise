import { Container } from "./Container";
import { tools } from "../constants";

export const Tools = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-flow-col gap-4 lg:gap-6 max-w-5xl w-full mx-auto py-6 lg:py-12">
        {tools.map((tool, idx) => (
          <div key={tool.id} className="p-2 flex items-center justify-center">
            <img
              src={tool.image}
              alt={tool.alt}
              className="w-16 h-16 lg:w-20 lg:h-20 opacity-60 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
