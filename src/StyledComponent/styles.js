import styled from "styled-components";

export const Heading = styled.h1`
  color: ${(props) => props.color};
  font-size: 40px;
  font-style: italic;
`;

export const Para = styled.p`
  color: blue;
  font-size: 40px;
`;

export const Button = styled.button`
  color: red;
  background-color: ${(props) => (props.outline ? "green" : "yellow")};
  width: 200px;
  padding: 30px;
`;

export const CustomButton = styled(Button)`
  border: none;
  border-radius: 10px;
  background: blue;
`;
