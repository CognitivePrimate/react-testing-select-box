import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// TEST 1
it("should correctly set default option", () => {
  render(<App />);
  expect(screen.getByRole("option", {name: "Select a Country"}).selected).toBe(true)
})

// TEST 2
it("should display correct number of options", () => {
  render(<App />);
  expect(screen.getAllByRole("option").length).toBe(4);
})

// TEST 3
it("should let user change country options", () => {
  render(<App />);
  userEvent.selectOptions(
    // find the select element, like a user would
    screen.getByRole("combobox"),
    // find and select Ireland option
    screen.getByRole("option", {name: "Ireland"})
  );
  expect(screen.getByRole("option", {name: "Ireland"}).selected).toBe(true)
})

