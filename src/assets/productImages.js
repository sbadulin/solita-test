import React from "react";
import { COLORS } from "../constants";

const Circle = () => (
  <svg
    viewBox="0 0 125 125"
    fill="none"
    stroke={COLORS.ACCENT}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M62.5 0.999998C96.4656 0.999998 124 28.5346 124 62.5C124 96.4656 96.4656 124 62.5 124C28.5344 124 0.999998 96.4656 0.999998 62.5C0.999998 28.5346 28.5344 0.999998 62.5 0.999998Z" />
  </svg>
);

const Rectangle = () => (
  <svg
    viewBox="0 0 110 110"
    fill="none"
    stroke={COLORS.ACCENT}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.999936 0.999936H109V109H0.999936V0.999936Z" />
  </svg>
);

const Triangle = () => (
  <svg
    viewBox="0 0 131 113"
    fill="none"
    stroke={COLORS.ACCENT}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.72755 111.997L65.9913 2.98659L129.255 111.997H2.72755Z" />
  </svg>
);

const Default = () => (
  <svg
    viewBox="0 0 125 125"
    fill="none"
    stroke={COLORS.ACCENT}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M62.5 0.999998C96.4656 0.999998 124 28.5346 124 62.5C124 96.4656 96.4656 124 62.5 124C28.5344 124 0.999998 96.4656 0.999998 62.5C0.999998 28.5346 28.5344 0.999998 62.5 0.999998Z" />
  </svg>
);

export { Circle, Rectangle, Triangle, Default };
