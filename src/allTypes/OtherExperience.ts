import { objectType } from "@nexus/schema";
import { differenceInMonths, differenceInYears } from "date-fns";

export const OtherExperience = objectType({
  name: "OtherExperience",
  definition(t) {
    t.string("company", {
      resolve: (otherExperience) => otherExperience.company,
    });
    t.date("startDate", {
      resolve: (otherExperience) => new Date(otherExperience.startDate),
    });
    t.date("endDate", {
      resolve: (otherExperience) =>
        otherExperience.endDate ? new Date(otherExperience.endDate) : null,
    });
    t.string("title", { resolve: (otherExperience) => otherExperience.title });
    t.string("location", {
      resolve: (otherExperience) => otherExperience.location,
    });
    t.string("location", {
      resolve: (otherExperience) => otherExperience.location,
    });
    t.int("years", {
      resolve: ({ startDate, endDate }) =>
        differenceInYears(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        ),
    });
    t.int("months", {
      resolve: ({ startDate, endDate }) =>
        differenceInMonths(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        ) % 12,
    });
    t.list.string("description", {
      resolve: (otherExperience) => otherExperience.description,
    });
  },
});
