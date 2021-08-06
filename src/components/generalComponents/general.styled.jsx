import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 20px;
`;

export const Section = styled.section`
  border: 1px solid black;
  border-radius: 10px;

  text-align: ${(props) => (props.list ? "left" : "center")};

  width: 700px;

  padding: 10px;
  margin: 0px;
  margin-top: 20px;

  background-color: grey;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;

  padding: 0px;
  margin: 0px;
`;

export const Undertitle = styled.h2`
  font-size: 26px;
  font-weight: 500;

  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
`;
