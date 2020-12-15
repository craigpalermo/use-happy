import { useFace } from "../../util/useFace";

export const icons = ["🤕", "🙁️", "😔", "😨"];

export const useSad = ({
  fontSize,
}: { fontSize?: string } = {}): JSX.Element => {
  return useFace({
    icons,
    ariaLabel: "Sad face",
    fontSize,
  });
};
