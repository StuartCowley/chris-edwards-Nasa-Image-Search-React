import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders NASA logo", () => {
    render(<App />);
    const logoElement = screen.getByAltText(/Nasa Logo/i);
    expect(logoElement).toBeInTheDocument();
  });
});
