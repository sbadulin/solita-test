import styled from "styled-components";

import { COLORS } from "../../constants";

export const StyledButton = styled.button`
  width: ${props => props.width || "190px"};
  padding: 12px 24px;
  font-size: 18px;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  border-color: ${COLORS.MAIN};
  font-style: normal;
  line-height: 18px;
  letter-spacing: 0.9px;
  color: ${COLORS.MAIN};
  cursor: pointer;
  background-color: #fff;

  @media (min-width: 600px) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  @media (max-width: 600px) {
    margin-top: 10px;
  }

  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
  &:focus {
    outline: 0;
  }
`;
