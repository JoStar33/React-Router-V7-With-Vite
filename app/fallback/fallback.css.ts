import { style } from "@vanilla-extract/css";

export const fallbackBaseStyle = style({
  display: "flex",
  gap: "2rem",
});

export const fallbackLoadingStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20rem",
  height: "20rem",
});
