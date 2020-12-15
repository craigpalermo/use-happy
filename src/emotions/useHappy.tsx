import React from "react";

import { useRandom } from "../util/useRandom";

const icons = ["😄", "😁", "😀"];

export const useHappy = (): JSX.Element => {
  const [icon] = useRandom(icons);
  return (
    <span aria-label="Happy faces" role="img">
      {icon}
    </span>
  );
};
