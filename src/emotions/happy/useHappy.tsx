import { useFace } from "../../util/useFace";

export const icons = ["😄", "😁", "😀"];

export const useHappy = ({
  fontSize,
}: { fontSize?: string } = {}): JSX.Element => {
  return useFace({
    icons,
    ariaLabel: "Happy face",
    fontSize,
  });
};
