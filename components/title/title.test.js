import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./title";

test("render title", () => {
  render(<Title />);
  const title = screen.getByText(/強檔多益教材/i);
  expect(title).toBeInTheDocument();
});
