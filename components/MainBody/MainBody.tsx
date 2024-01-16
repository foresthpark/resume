import ElevatorText from "components/ElevatorText/ElevatorText";
import React from "react";
import ContentLoader from "react-content-loader";
import useResumeQuery from "src/api/forestPark/useResumeQuery";
import useWindowSize, { Size } from "src/hooks/useWindowSize";
import MainBodyLeft from "./MainBodyLeft/MainBodyLeft";
import MainBodyRight from "./MainBodyRight/MainBodyRight";
import { StyledMainBodyContainer } from "./styles";

const Skeleton = ({ height, width }) => {
  return (
    <ContentLoader viewBox="0 0 1000 650" height={height} width={width}>
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
  const { width, height }: Size = useWindowSize();

  const { data, loading, error, refetch, resumeQuery } = useResumeQuery();
  console.log(
    "🚀🚀🚀 ~ Created by Forest Park. Check out the Playground. Let's go on an adventure."
  );

  if (loading) return <Skeleton width={width} height={height} />;
  // if (loading) return <ElevatorText text="Loading..." />;
  if (error) return <ElevatorText text={`Error! ${error.message}`} error />;

  return (
    <div className="flex sm:flex-row  flex-col items-start justify-center">
      <MainBodyLeft data={data?.bio} />
      <MainBodyRight
        experiences={data?.experiences}
        otherExperiences={data?.otherExperiences}
        projects={data?.projects}
        talks={data?.talks}
      />
    </div>
  );
}
