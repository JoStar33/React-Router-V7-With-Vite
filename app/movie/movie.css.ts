import { style } from "@vanilla-extract/css";

export const movieButtonWrapperStyle = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

export const movieButtonBaseStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "blue",
  padding: "1rem",
});
