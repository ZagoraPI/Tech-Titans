const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}, { prefix: "<rootDir>/" }),
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/(?!react-router)"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/jest.setup.js"],
};