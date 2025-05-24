const { pathsToModuleNameMapper } = require("ts-jest");
const tsconfig = require("./tsconfig.json");

module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],
  modulePaths: [tsconfig.compilerOptions.baseUrl],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
    "\\.(css|less|sass|scss|png|jpg|jpeg|gif|svg)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!react-leaflet|@react-leaflet/core|leaflet)/",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/jest.setup.js"],
};
