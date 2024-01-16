import IExperienceMap from "components/Experience/Experience.interface";
import {
  StyledCompanyLocationRow,
  StyledCompanyLocationText,
  StyledCompanyText,
  StyledDescriptionListItem,
  StyledDescriptionText,
  StyledExperienceContainer,
  StyledJobTitleText,
} from "./styles";

export default function Talk({ talk }: IExperienceMap) {
  const { description, url, title, organizer } = talk;

  return (
    <StyledExperienceContainer>
      <StyledCompanyLocationRow>
        <StyledCompanyText>{title}</StyledCompanyText>
        <StyledCompanyLocationText
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link →
        </StyledCompanyLocationText>
      </StyledCompanyLocationRow>
      <StyledJobTitleText>{organizer}</StyledJobTitleText>

      <StyledDescriptionText>
        {description?.map((sentence) => (
          <StyledDescriptionListItem key={sentence}>
            {sentence}
          </StyledDescriptionListItem>
        ))}
      </StyledDescriptionText>
    </StyledExperienceContainer>
  );
}
