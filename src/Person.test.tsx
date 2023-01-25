import React from "react";
import { Person } from "./Person";
import { render, screen } from "@testing-library/react"


// Basic component testing

test('renders a name', () => {
    render(<Person name='Jack' />);
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toHaveTextContent("Name is Jack");
    expect(divElement).toHaveAttribute("role","contentinfo");

})