import DividerSection from "components/DividerSection/DividerSection";
import Experience from "components/Experience/Experience";
import IExperienceMap from "components/Experience/Experience.interface";
import React from "react";
import { StyledExperienceTitle, StyledMainBodyRightContainer } from "./styles";

export default function MainBodyRight({
  experiences,
  otherExperiences,
}: IExperienceMap) {
  return (
    <div className="sm:min-w-3/4 w-full">
      <DividerSection title="Experience" />
      <div style={{ width: "100%" }}>
        {experiences?.map((experience, index) => {
          return (
            <Experience
              experience={experience}
              key={Math.random().toString()}
            />
          );
        })}
      </div>
      <DividerSection title="Other Experience" />
      <div style={{ width: "100%" }}>
        {otherExperiences?.map((experience, index) => {
          return (
            <Experience
              experience={experience}
              key={Math.random().toString()}
            />
          );
        })}
      </div>
    </div>
  );
}
