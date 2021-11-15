import { idArg, queryType } from "@nexus/schema";
import { data } from "src/data";
import { Bio, Experience, OtherExperience } from "./index";

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
  },
});
