import Header from "components/Header/Header";
import MainBody from "components/MainBody/MainBody";
import React from "react";
import { StyledMainContainer } from "./styles";

export default function Main() {
  return (
    <div className="w-full p-12 flex flex-col justify-center items-center">
      <Header />
      <MainBody />
    </div>
  );
}
