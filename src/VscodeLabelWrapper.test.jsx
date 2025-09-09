// @ts-check
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import VscodeLabelWrapper from "./VscodeLabelWrapper";

describe("VscodeLabelWrapper", () => {
  const setup = () => {
    return render(<VscodeLabelWrapper />);
  };

  it("renders", () => {
    const { getByText } = setup();
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
