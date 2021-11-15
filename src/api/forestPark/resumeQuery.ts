import { gql } from "@apollo/client";

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

    otherExperiences {
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

export default RESUME_QUERY;
