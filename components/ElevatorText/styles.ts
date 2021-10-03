import styled from "styled-components";

export const StyledElevatorText = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ error }) => (error ? "#ff0000" : "#000000")};
`;
