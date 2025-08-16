/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("Day la 1 test toi lam ra Jo-APP" , () => {
  render(<Page params={{ slug: "Jo-APP" }} />); 
  expect(screen.getByText("Jo-APP")).toBeInTheDocument();
})