import React from "react";
import { useSad } from "./useSad";

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
