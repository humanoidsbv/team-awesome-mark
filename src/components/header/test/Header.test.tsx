/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Header } from "../Header";

test("if hamburger button is clicked", async () => {
  const header = render(<Header />);
  const button = header.getByRole("button");
  const hamburger = header.getByTestId("hamburger");

  expect(hamburger).toBeInTheDocument();

  fireEvent.click(button);

  const close = header.getByTestId("close");
  expect(close).toBeInTheDocument();
});
