import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  padding: 20px 30px 60px 35px;
  margin-bottom: 30px;
  background: linear-gradient(180deg, #ececec 0%, #e4e4e4 100%);

  &:after {
    background: linear-gradient(-45deg, #ffffff 25px, transparent 0),
      linear-gradient(45deg, #ffffff 25px, transparent 0) repeat-x left bottom;
    background-size: 50px 50px;
    content: " ";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
  }
`;
