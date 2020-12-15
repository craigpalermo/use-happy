import random from "lodash.random";

export const getRandom = <A>(items: A[]): A => {
  return items[random(0, items.length - 1)];
};
