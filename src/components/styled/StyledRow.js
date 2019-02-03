import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
