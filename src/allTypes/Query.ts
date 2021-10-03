import { idArg, queryType } from "@nexus/schema";
import { data } from "src/data";
import { Bio, Experience, Links } from "./index";

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

    type.field("experience", {
      type: Experience,
      description: "Get an experience by id",
      args: { id: idArg() },
      resolve: (_, { id }: { id: string }, context) =>
        data?.experience.find((e) => e.id === id),
    });
  },
});
