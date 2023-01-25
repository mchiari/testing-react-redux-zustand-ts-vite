import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import { Counter } from "./Counter";

// Testing state hooks

test('handles onClick', () => {

    render(<Counter />);

    const buttonElement = screen.getByText("Add one")
    const divElement = screen.getByRole("contentinfo")

    fireEvent.click(buttonElement)
    expect(divElement).toHaveTextContent("Counter is at: 1")

})