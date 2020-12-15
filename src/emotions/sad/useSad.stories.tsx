import React from "react";
import { useSad, icons } from "./useSad";

export default {
  title: "useSad",
  component: useSad,
};

export const Basic = () => {
  const sadFace = useSad();
  return <div>{sadFace}</div>;
};

export const FontSize = () => {
  const sadFace = useSad({ fontSize: "64px" });
  return <div>{sadFace}</div>;
};

export const AllIcons = () => {
  return (
    <>
      {icons.map((i) => (
        <span aria-label="Sad face" role="img" key="i">
          {i}
        </span>
      ))}
    </>
  );
};
