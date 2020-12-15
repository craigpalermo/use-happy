import { useState } from "react";

import { getRandom } from "../getRandom";

export const useRandom = (items: string[]): string=> {
  const [stateItem] = useState(getRandom(items));
  return stateItem;
};
