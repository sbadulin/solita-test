import styled from "styled-components";
import { Link } from "@reach/router";

import { COLORS } from "../../constants";

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: ${COLORS.MAIN};
    text-decoration: none;
  }

  &:hover {
    color: ${COLORS.ACCENT};
  }
`;
