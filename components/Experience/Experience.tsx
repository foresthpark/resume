import React from "react";
import IExperience from "./Experience.interface";
import {
  StyledCompanyLocationRow,
  StyledCompanyLocationText,
  StyledCompanyText,
  StyledDescriptionListItem,
  StyledDescriptionText,
  StyledDurationText,
  StyledExperienceContainer,
  StyledJobTitleText,
} from "./styles";

export default function Experience({ experience }: IExperience) {
  const {
    company,
    startDate,
    endDate,
    title,
    description,
    location,
    months,
    years,
  } = experience;

  return (
    <StyledExperienceContainer>
      <StyledCompanyLocationRow>
        <StyledCompanyText>{company}</StyledCompanyText>
        <StyledCompanyLocationText>{location}</StyledCompanyLocationText>
      </StyledCompanyLocationRow>
      <StyledJobTitleText>{title}</StyledJobTitleText>
      <StyledDurationText>
        {startDate}
        {endDate ? ` - ${endDate} ` : "- Current "}(
        {years > 0 ? `${years}y ` : ""}
        {months > 0 ? `${months}m` : ""})
      </StyledDurationText>

      <StyledDescriptionText>
        {description.map((sentence) => (
          <StyledDescriptionListItem key={sentence}>
            {sentence}
          </StyledDescriptionListItem>
        ))}
      </StyledDescriptionText>
    </StyledExperienceContainer>
  );
}
