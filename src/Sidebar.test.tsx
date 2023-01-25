import React from "react";
import { render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar";

//Multiple elements testing

const items = [{
    name: "test",
    href: "/test"
}]

test('renders a name', () => {
    render(<Sidebar items={
        items
    } />);
    const anchorElement = screen.getAllByRole("navigation");
    expect(anchorElement[0]).toHaveTextContent(items[0].name);
    expect(anchorElement[0]).toHaveAttribute("href", items[0].href);

})