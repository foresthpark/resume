import React from "react";
import { StyledContainer, StyledName, StyledTitle } from "./styles";

export default function Header() {
  return (
    <div className="w-full flex flex-col items-start justify-start font-sans gap-2">
      <div className="text-5xl font-semibold text-gray-900">Forest Park</div>
      <div className="text-lg  text-gray-800">Full Stack Developer</div>
      <div className="text-lg  text-gray-400">
        I enjoy using tech to solve problems
      </div>
      <hr className="w-full mt-6 pt-6"></hr>
    </div>
    // <StyledContainer>
    //   <StyledName>FOREST PARK</StyledName>
    //   <StyledTitle>Full Stack Developer</StyledTitle>
    // </StyledContainer>
  );
}
