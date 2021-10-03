import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/schema";

const server = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: "/api/graphql" });
