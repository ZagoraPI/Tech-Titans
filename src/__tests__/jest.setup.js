require("@testing-library/jest-dom");
const { expect } = require("@jest/globals");
global.expect = require("@jest/globals").expect;

const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.matchMedia = global.matchMedia || function () {
  return { matches: false, addListener() {}, removeListener() {} };
};
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};