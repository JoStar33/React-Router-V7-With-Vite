import { style } from "@vanilla-extract/css";

export const movieCardBaseStyle = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
});

export const movieCardImageStyle = style({
  width: "300px",
  aspectRatio: 1,
  objectFit: "fill",
});

export const movieCardInfoWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
