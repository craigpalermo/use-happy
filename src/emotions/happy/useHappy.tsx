import { useFace } from "../../util/useFace";

const icons = ["😄", "😁", "😀"];

export const useHappy = ({
  fontSize,
}: { fontSize?: string } = {}): JSX.Element => {
  return useFace({
    icons,
    ariaLabel: "Happy face",
    fontSize,
  });
};
