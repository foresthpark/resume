import { objectType } from "@nexus/schema";

export const Links = objectType({
  name: "Links",
  definition(t) {
    t.string("text");
    t.string("url");
  },
});
