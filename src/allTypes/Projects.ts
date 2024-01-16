import { objectType } from "@nexus/schema";

export const Projects = objectType({
  name: "Projects",
  definition(t) {
    t.string("name", { resolve: (project) => project.name });
    t.list.string("description", {
      resolve: (project) => project.description,
    });
    t.string("url", {
      resolve: (project) => (project.url ? project.url : null),
    });
  },
});
