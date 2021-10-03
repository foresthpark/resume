import { makeSchema } from "@nexus/schema";
import * as types from "./allTypes";
import path from "path";

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "src", "generated", "nexus.ts"),
  },
  typegenAutoConfig: {
    sources: [
      {
        alias: "faces",
        source: path.join(process.cwd(), "src", "interfaces.ts"),
        typeMatch: (type) => new RegExp(`(I${type})`),
      },
    ],
    backingTypeMap: {
      Date: "Date",
      URL: "URL",
    },
    debug: process.env.NODE_ENV !== "production",
  },
});
