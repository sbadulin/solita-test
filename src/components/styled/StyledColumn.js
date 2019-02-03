import styled from "styled-components";

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.align ? props.align : "flex-start")};
  ${props => props.grow && "flex-grow: 1;"}

  &:not(:last-child) {
    margin-right: 40px;

    @media (max-width: 600px) {
      margin-right: 0;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
  }
`;
