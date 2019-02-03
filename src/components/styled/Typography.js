import styled from "styled-components";

import { COLORS } from "../../constants";

export const HeaderBody = styled.p`
  display: inline-block;
  font-family: "Playfair Display", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  font-stretch: normal;
  line-height: 2.25;
  letter-spacing: normal;
  padding: 8px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 20px;
    text-align: center;
    line-height: 1.5;
  }
  & strong {
    font-weight: 600;
  }
`;
export const ProductName = styled.p`
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  font-weight: bold;
  line-height: 60px;
  font-size: 36px;
  letter-spacing: 0.36px;
  color: ${COLORS.MAIN};
  margin: 0 0 10px;
`;

export const ProductDescription = styled.pre`
  font-family: "Playfair Display", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: 0.7px;
  color: ${COLORS.MAIN};
  margin: 0;
`;
export const InfoMessage = styled.p`
  font-family: "Playfair Display", sans-serif;
  font-style: italic;
  font-weight: bold;
  line-height: 60px;
  font-size: 36px;
  letter-spacing: 0.36px;
  color: ${COLORS.MAIN};
  margin: 0 0 10px;
  text-align: center;

  & span.totalPrice {
    font-size: 1.6em;
  }
`;
