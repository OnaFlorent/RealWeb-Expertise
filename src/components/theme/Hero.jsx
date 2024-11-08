import gridPng from "../../assets/grid.png";
import gridWebp from "../../assets/grid.webp";

export const Grid = () => {
  return (
    <picture>
      <source srcSet={gridWebp} type="image/webp" />
      <img
        src={gridPng}
        alt="Grid"
        className="hidden lg:block absolute -top-[1.125rem] left-0 z-0 w-full h-full object-contain object-top pointer-events-none opacity-50"
      />
    </picture>
  );
};
