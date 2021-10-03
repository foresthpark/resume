import { useQuery, gql } from "@apollo/client";
import ElevatorText from "components/ElevatorText/ElevatorText";
import Experience from "components/Experience/Experience";
import React from "react";
import MainBodyLeft from "./MainBodyLeft/MainBodyLeft";
import MainBodyRight from "./MainBodyRight/MainBodyRight";
import { StyledMainBodyContainer } from "./styles";
import ContentLoader from "react-content-loader";

const RESUME_QUERY = gql`
  query ForestPark {
    bio {
      name
      title
      summary
      links {
        text
        url
      }
      skills {
        tech
        soft
      }
      hobbies
    }

    experiences {
      company
      location
      title
      startDate
      endDate
      years
      months
      description
    }
  }
`;

const Skeleton = (props) => {
  return (
    <ContentLoader viewBox="0 0 920 650" height={650} width={920} {...props}>
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  );
};

export default function MainBody() {
  const { data, loading, error } = useQuery(RESUME_QUERY);
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ Home ~ data", data);

  if (loading) return <Skeleton />;
  // if (loading) return <ElevatorText text="Loading..." />;
  if (error) return <ElevatorText text={`Error! ${error.message}`} error />;

  return (
    <StyledMainBodyContainer>
      <MainBodyLeft data={data?.bio} />
      <MainBodyRight experiences={data?.experiences} />
    </StyledMainBodyContainer>
  );
}
