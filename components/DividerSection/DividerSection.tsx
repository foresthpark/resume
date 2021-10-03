import React from "react";
import IDividerSectionProps from "./DividerSection.interface";
import {
  PxSqaure,
  StyledHRLine,
  StyledSquareContainer,
  StyledTitleText,
} from "./styles";

export default function DividerSection({ title }: IDividerSectionProps) {
  return (
    <div style={{ width: "100%" }}>
      <StyledTitleText>{title}</StyledTitleText>
      <StyledSquareContainer>
        <PxSqaure />
        <StyledHRLine />
      </StyledSquareContainer>
    </div>
  );
}
