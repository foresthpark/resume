import { queryType } from "@nexus/schema";
import { data } from "src/data";
import { Bio, Experience, OtherExperience, Projects, Talks } from "./index";

export const Query = queryType({
  definition(type) {
    type.field("bio", {
      type: Bio,
      resolve: () => data?.bio,
    });

    type.list.field("experiences", {
      type: Experience,
      resolve: () => data?.experience,
    });

    type.list.field("otherExperiences", {
      type: OtherExperience,
      resolve: () => data?.otherExperience,
    });

    type.list.field("projects", {
      type: Projects,
      resolve: () => {
        return data?.projects;
      },
    });

    type.list.field("talks", {
      type: Talks,
      resolve: () => data?.talks,
    });
  },
});
