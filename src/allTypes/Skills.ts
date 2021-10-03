import { objectType } from "@nexus/schema";

export const Skills = objectType({
  name: "Skills",
  definition(t) {
    t.list.field("tech", {
      type: "String",
      resolve: (skill) => skill.tech,
    });

    t.list.field("soft", {
      type: "String",
      resolve: (skill) => skill.soft,
    });
  },
});
