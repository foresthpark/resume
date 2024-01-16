import IExperienceMap from "components/Experience/Experience.interface";
import {
  StyledCompanyLocationRow,
  StyledCompanyLocationText,
  StyledCompanyText,
  StyledDescriptionListItem,
  StyledDescriptionText,
  StyledExperienceContainer,
} from "./styles";

export default function Project({ project }: IExperienceMap) {
  const { name, description, url } = project;

  return (
    <StyledExperienceContainer>
      <StyledCompanyLocationRow>
        <StyledCompanyText>{name}</StyledCompanyText>
        <StyledCompanyLocationText
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link →
        </StyledCompanyLocationText>
      </StyledCompanyLocationRow>

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
