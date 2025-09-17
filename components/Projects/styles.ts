import styled from "styled-components";

export const StyledExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: auto;
  padding-bottom: 15px;
`;

export const StyledCompanyLocationRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  min-width: 100%;
  padding-bottom: 1%;
`;

export const StyledCompanyText = styled.div`
  width: 50%;
  text-align: left;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const StyledCompanyLocationText = styled.a`
  width: 50%;
  text-align: right;
  font-family: Roboto;
  font-weight: 100;
  text-decoration: underline;
`;

export const StyledJobTitleText = styled.div`
  width: 100%;
  text-align: left;
  font-family: Roboto;
  font-weight: 500;
  padding-bottom: 1%;
`;

export const StyledDurationText = styled.div`
  width: 100%;
  text-align: left;
  font-family: Roboto;
  font-weight: 400;
  padding-bottom: 2%;
`;

export const StyledDescriptionText = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Roboto;
  font-weight: 300;
  padding-left: 2%;
`;

export const StyledDescriptionListItem = styled.li`
  font-size: 1.1rem;
  padding-bottom: 1%;
`;
