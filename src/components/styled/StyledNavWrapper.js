import styled from "styled-components";

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
