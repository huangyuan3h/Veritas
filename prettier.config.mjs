/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  singleQuote: false,
  semi: false,
  trailingComma: "all",
  printWidth: 90,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
