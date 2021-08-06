import styled from "@emotion/styled";

export const Button = styled.button`
  width: 150px;
  height: 40px;

  background-color: orange;

  padding: 0px;
  margin: 0px;
  margin-right: 10px;

  transition-duration: 500ms;
  &:hover,
  &:focus {
    background-color: red;
  }
`;
