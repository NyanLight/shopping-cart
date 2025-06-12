import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ShopContext } from "../Wrapper/context";
import { Header } from "./Header";
import { MemoryRouter } from "react-router";

describe("Header", () => {
  afterEach(() => {
    cleanup();
  });

  it("Counter display correct value with provided context", () => {
    render(
      <MemoryRouter>
        <ShopContext.Provider value={{ cart: [{ product: {}, quantity: 2 }] }}>
          <Header />
        </ShopContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("2")).toBeInTheDocument();
    screen.debug();
  });

  it("Display zero if context's array is empty", () => {
    render(
      <MemoryRouter>
        <ShopContext.Provider value={{ cart: [] }}>
          <Header />
        </ShopContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("0")).toBeInTheDocument();
    screen.debug();
  });
});
