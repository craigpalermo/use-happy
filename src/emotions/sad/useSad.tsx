import { useFace } from "../../util/useFace";

const icons = ["🤕", "🙁️", "😔"];

export const useSad = ({
  fontSize,
}: { fontSize?: string } = {}): JSX.Element => {
  return useFace({
    icons,
    ariaLabel: "Sad face",
    fontSize,
  });
};
