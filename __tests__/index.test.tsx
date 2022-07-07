import { render, screen } from "@testing-library/react";
import { createMocks } from "node-mocks-http";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("api/gello", () => {
  it("returns a message with the specified name", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
  });
});
