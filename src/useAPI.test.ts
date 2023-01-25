import React from "react";
import { renderHook, waitFor } from "@testing-library/react"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { useAPI } from "./useApi";

// API Component Testing - Async hooks

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({ name: "Jack" }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('gets the data asynchronously', async () => {

    const { result } = renderHook(() => useAPI())

    await waitFor(() => {
        expect(result.current).toEqual({ name: "Jack" })
    })

})
