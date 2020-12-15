import React from "react";
import { useHappy, icons } from "./useHappy";

export default {
  title: "useHappy",
  component: useHappy,
};

export const Basic = () => {
  const happyFace = useHappy();
  return <div>{happyFace}</div>;
};

export const FontSize = () => {
  const happyFace = useHappy({ fontSize: "64px" });
  return <div>{happyFace}</div>;
};

export const AllIcons = () => {
  return (
      <>
        {icons.map((i) => (
            <span aria-label="Happy face" role="img" key="i">
          {i}
        </span>
        ))}
      </>
  );
};
