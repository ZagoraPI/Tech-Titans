import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import "@testing-library/jest-dom";

test("Renders the main page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(true).toBeTruthy();
});