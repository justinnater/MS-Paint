import solid from "eslint-plugin-solid";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        ignores: ["node_modules", "dist"], // Ignore unnecessary folders
    },
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"], // Specify file extensions for linting
        languageOptions: {
            ecmaVersion: "latest",  // Latest ECMAScript version
            sourceType: "module",   // Use ES module syntax
            parser: tsParser,       // Use TypeScript parser for TypeScript files
        },
        plugins: {
            solid,                  // Enable eslint-plugin-solid
        },
        rules: {
            // SolidJS-specific rules
            "solid/no-react-deps": "error",           // Prevent React deps in SolidJS
            "solid/jsx-no-duplicate-props": "error",  // Prevent duplicate props in JSX
            "solid/components-return-once": "error",  // Ensure that components return only once
            "solid/jsx-no-undef": "error",            // Prevent use of undefined variables in JSX
            "solid/no-innerhtml": "error",            // Disallow use of innerHTML to prevent XSS
            "solid/prefer-classlist": "warn",         // Prefer classList over string manipulation for classes
            "solid/prefer-for": "warn",               // Prefer Solid's <For> over map
            "solid/reactivity": "error",              // Enforce correct reactivity patterns in SolidJS
            "solid/self-closing-comp": "warn",        // Enforce self-closing components when possible
            "solid/style-prop": "error",              // Warn when using style prop with non-objects
            "solid/event-handlers": "error",          // Ensure event handlers follow SolidJS conventions
            "solid/jsx-uses-vars": "error",           // Prevent variables used in JSX from being marked as unused
            "solid/no-proxy-apis": "warn",            // Warn against using proxy APIs in SolidJS components

            "object-curly-spacing": ["error", "always"], // Enforces space between curly braces
        },
    },
];
