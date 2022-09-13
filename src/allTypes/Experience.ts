import { objectType } from "@nexus/schema";
import { differenceInMonths, differenceInYears } from "date-fns";

export const Experience = objectType({
  name: "Experience",
  definition(t) {
    t.string("company", { resolve: (experience) => experience.company });
    t.date("startDate", {
      resolve: (experience) => new Date(experience.startDate),
    });
    t.date("endDate", {
      resolve: (experience) =>
        experience.endDate ? new Date(experience.endDate) : null,
    });
    t.string("title", { resolve: (experience) => experience.title });
    t.string("location", { resolve: (experience) => experience.location });
    t.string("location", { resolve: (experience) => experience.location });
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
        ) % 12 ?? 1,
    });
    t.list.string("description", {
      resolve: (experience) => experience.description,
    });
    t.list.string("tech", {
      resolve: (experience) => experience.tech,
    });
  },
});
