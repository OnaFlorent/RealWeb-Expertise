import { elipseBlueBlur } from "../../assets";

export const ElipseBlueBur = () => {
  return (
    <img
      src={elipseBlueBlur}
      alt="elipse-blue-blur"
      width="500"
      height="500"
      className="absolute -top-[14rem] -left-[9rem] z-0 pointer-events-none mix-blend-color-dodge"
      style={{ visibility: "visible" }}
    />
  );
};
