/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

import { Header } from "../Header";

test("if hamburger button changes into close button", () => {
  const header = render(<Header />);
  const button = header.getByRole("button");
  const hamburger = header.getByTestId("hamburger-icon");

  expect(hamburger).toBeInTheDocument();

  fireEvent.click(button);

  const close = header.getByTestId("close-icon");
  expect(close).toBeInTheDocument();
});

test("renders correctly", () => {
  const component = renderer.create(<Header />);
  expect(component.toJSON()).toMatchSnapshot();
});
