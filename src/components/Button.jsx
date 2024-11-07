export const Button = ({ children, theme, className, href, target }) => {
  const baseClasse = "text-white hover:text-white";
  const rel = "noopener noreferrer";
  const themeClasses =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary"
      ? "bg-n-7 hover:bg-p-3"
      : "";

  const renderButton = () => (
    <button
      className={`button py-3 px-3 lg:py-4 lg:px-6 rounded-lg ${themeClasses} ${baseClasse} ${className}`}
    >
      {children}
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`button inline-block py-3 px-3 lg:py-4 lg:px-6 rounded-lg no-underline ${themeClasses} ${baseClasse} ${className}`}
    >
      {children}
    </a>
  );
  return href ? renderLink() : renderButton();
};
