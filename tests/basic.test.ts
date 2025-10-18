/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test"

describe("sanity", () => {
  it("verifies basic math", () => {
    expect(2 + 2).toBe(4)
  })
})
