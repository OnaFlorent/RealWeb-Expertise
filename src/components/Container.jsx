export const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-[100rem] mx-auto px-5 md:px-10 lg:px-20 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};
