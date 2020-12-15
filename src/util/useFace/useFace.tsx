import { useRandom } from "../useRandom";
import React from "react";

export const useFace = ({
  icons,
  ariaLabel,
  fontSize,
}: {
  fontSize?: string;
  icons: string[];
  ariaLabel: string;
}): JSX.Element => {
  const [icon] = useRandom(icons);
  return (
    <span aria-label={ariaLabel} role="img" style={{ fontSize: fontSize }}>
      {icon}
    </span>
  );
};
