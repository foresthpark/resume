import { Links } from "./Links";
import { objectType } from "@nexus/schema";
import { Skills } from ".";

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name");
    t.string("title");
    t.string("summary");
    t.string("easterEgg", {
      description: "Send me an email if you see this.",
    });

    t.list.field("links", {
      type: Links,
      resolve: (bio) => bio?.links,
    });

    t.field("skills", {
      type: Skills,
      resolve: (bio) => bio?.skills,
    });

    t.list.field("hobbies", {
      type: "String",
      resolve: (bio) => bio?.hobbies,
    });
  },
});
