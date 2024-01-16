import DividerSection from "components/DividerSection/DividerSection";
import Experience from "components/Experience/Experience";
import IExperienceMap from "components/Experience/Experience.interface";
import React from "react";
import { StyledExperienceTitle, StyledMainBodyRightContainer } from "./styles";
import Project from "components/Projects/Projects";
import Talk from "components/Talk/Talk";

export default function MainBodyRight({
  experiences,
  otherExperiences,
  projects,
  talks,
}: IExperienceMap) {
  return (
    <div className="sm:min-w-3/4 w-full">
      <DividerSection title="Experience" />
      <div style={{ width: "100%" }}>
        {experiences?.map((experience) => {
          return (
            <Experience
              experience={experience}
              key={Math.random().toString()}
            />
          );
        })}
      </div>
      <DividerSection title="Projects" />
      <div style={{ width: "100%" }}>
        {projects?.map((project) => {
          return <Project project={project} key={Math.random().toString()} />;
        })}
      </div>

      <DividerSection title="Talks" />
      <div style={{ width: "100%" }}>
        {talks?.map((talk) => {
          return <Talk talk={talk} key={Math.random().toString()} />;
        })}
      </div>

      <DividerSection title="Other Experience" />
      <div style={{ width: "100%" }}>
        {otherExperiences?.map((experience) => {
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
