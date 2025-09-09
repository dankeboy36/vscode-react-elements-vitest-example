// @ts-check
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LabelWrapper from "./LabelWrapper";

describe("LabelWrapper", () => {
  const setup = () => {
    return render(<LabelWrapper />);
  };

  it("renders", () => {
    const { getByText } = setup();
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
