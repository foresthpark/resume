import { objectType } from "@nexus/schema";

export const Projects = objectType({
  name: "Projects",
  definition(t) {
    t.string("name", { resolve: (experience) => experience.name });
    t.list.string("description", {
      resolve: (experience) => experience.description,
    });
    t.string("url", {
      resolve: (experience) => (experience.url ? experience.url : null),
    });
  },
});
