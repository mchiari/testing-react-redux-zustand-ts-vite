import React from "react";
import { render, screen, waitFor } from "@testing-library/react"
import { APIComponent } from "./APIComponent";

import { rest } from "msw"
import { setupServer } from "msw/node"

// API Component Testing - Async hooks

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({ name: "Jack" }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('gets the data', async () => {

    render(<APIComponent />);

    const out = await waitFor(()=> screen.getByRole("contentinfo"))
    
    expect(out).toHaveTextContent("Name is Jack")

})