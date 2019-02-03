import styled from "styled-components";
import WheeLogo from "../../assets/whee-logo.svg";

import { COLORS } from "../../constants";

export const StyledLogo = styled(WheeLogo)`
  margin-right: 20px;
  fill: ${COLORS.MAIN};
  width: 127px;
  height: 64px;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;
