import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "warn", // Cambiar de error a warning
      "@next/next/no-html-link-for-pages": "warn", // Cambiar de error a warning  
      "@typescript-eslint/no-explicit-any": "warn", // Cambiar de error a warning
      "react-hooks/exhaustive-deps": "warn", // Cambiar de error a warning
    }
  }
];

export default eslintConfig;
