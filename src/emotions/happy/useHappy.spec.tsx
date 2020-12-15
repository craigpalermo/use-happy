import React from "react";
import { render } from "@testing-library/react";

import { useHappy } from "./useHappy";
import { useFace } from "../../util/useFace";

jest.mock("../../util/useFace", () => ({
  useFace: jest.fn(),
}));

const TestComponent = () => {
  const face = useHappy();
  return <div>{face}</div>;
};

test("returns a character that does not change on rerender", () => {
  const mockVal = "😄";
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useFace.mockReturnValue(mockVal);
  const { rerender, getByText } = render(<TestComponent />);
  expect(getByText(mockVal)).toBeTruthy();
  rerender(<TestComponent />);
  expect(getByText(mockVal)).toBeTruthy();
});
