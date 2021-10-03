import {
  faFirefox,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DividerSection from "components/DividerSection/DividerSection";
import React from "react";
import IMainBodyLeftProps from "./MainBodyLeft.interface";
import {
  MainBodyLeftContainer,
  StyledIconContainer,
  StyledLinksContainer,
  StyledListContainer,
  StyledSummaryContainer,
} from "./style";

const ICONS_LOOKUP = {
  email: faEnvelope,
  website: faFirefox,
  linkedin: faLinkedin,
  github: faGithub,
};

export default function MainBodyLeft({ data }: IMainBodyLeftProps) {
  const { name, title, summary, links, hobbies, skills } = data;

  return (
    <MainBodyLeftContainer>
      {/* Section 1 */}
      <DividerSection title={"About"} />
      <StyledSummaryContainer>{summary}</StyledSummaryContainer>
      <StyledLinksContainer>
        {links?.map((link) => {
          return (
            <StyledIconContainer key={link.url}>
              <a key={link.url} href={link.url}>
                <FontAwesomeIcon icon={ICONS_LOOKUP[link.text]} size="3x" />
              </a>
            </StyledIconContainer>
          );
        })}
      </StyledLinksContainer>

      {/* {Section 2} */}
      <DividerSection title={"Skills"} />
      <StyledListContainer>
        {skills?.tech?.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </StyledListContainer>

      {/* {Section 3} */}
      <DividerSection title={"Other Skills"} />
      <StyledListContainer>
        {skills?.soft?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </StyledListContainer>

      {/* {Section 4} */}
      <DividerSection title={"Hobbies"} />
      <StyledListContainer>
        {hobbies?.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </StyledListContainer>
    </MainBodyLeftContainer>
  );
}
