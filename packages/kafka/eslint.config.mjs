import base from "@perpetual-futures/eslint-config/base";

export default [
  ...base,
  {
    languageOptions: {
      globals: {
        Bun: "readonly",
      },
    },
  },
];
