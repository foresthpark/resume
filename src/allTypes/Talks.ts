import { objectType } from "@nexus/schema";

export const Talks = objectType({
  name: "Talks",
  definition(t) {
    t.string("title", { resolve: (talk) => talk.title });
    t.string("organizer", { resolve: (talk) => talk.organizer });
    t.list.string("description", {
      resolve: (talk) => talk.description,
    });
    t.string("url", {
      resolve: (talk) => (talk.url ? talk.url : null),
    });
  },
});
