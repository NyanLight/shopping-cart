import { expect, it, describe } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe(Card, () => {
  it("Card props are displayed", () => {
    render(
      <Card title="title" price="120" image="google.com" clickHandler={null} />
    );
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("$120")).toBeInTheDocument();
    screen.debug()
    cleanup();
  });
});
