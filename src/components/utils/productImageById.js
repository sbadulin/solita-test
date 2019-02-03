import React from "react";
import mapIdToSvg from "./mapIdToSvg";

export const productImageById = id => {
  const TagName = mapIdToSvg[id];
  return <TagName />;
};
