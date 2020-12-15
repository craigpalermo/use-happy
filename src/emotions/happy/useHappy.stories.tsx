import React from "react";
import { useHappy } from "./useHappy";

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
