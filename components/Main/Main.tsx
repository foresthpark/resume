import Header from "components/Header/Header";
import MainBody from "components/MainBody/MainBody";
import React from "react";
import { StyledMainContainer } from "./styles";

export default function Main() {
  return (
    <StyledMainContainer>
      <div style={{ minWidth: "10%" }}></div>
      <div>
        <Header />
        <MainBody />
      </div>
      <div style={{ minWidth: "10%" }}></div>
    </StyledMainContainer>
  );
}
