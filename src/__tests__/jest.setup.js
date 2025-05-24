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

const React = require("react");

// Mock react-leaflet components
jest.mock("react-leaflet", () => ({
  MapContainer: ({ children }) => <div>{children}</div>,
  TileLayer: () => <div />,
  Marker: ({ children }) => <div>{children}</div>,
  Popup: ({ children }) => <div>{children}</div>,
}));
