import React from "react";
import { StyledElevatorText } from "./styles";

export default function ElevatorText({ text, error = false }) {
  return <StyledElevatorText error={error}>{text}</StyledElevatorText>;
}
