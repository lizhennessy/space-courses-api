const gql = require('graphql-tag');
const { readFileSync } = require('fs');
const { ApolloServer } = require('@apollo/server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { startStandaloneServer } = require('@apollo/server/standalone');
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} = require('@apollo/server/plugin/landingPage/default');

const resolvers = require('./resolvers');
const TracksAPI = require('./datasources/tracks-api');
const port = process.env.PORT || 4001;
const subgraphName = require('../package.json').name;

async function main() {
  const typeDefs = gql(
    readFileSync('schema.graphql', {
      encoding: 'utf-8',
    })
  );
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: `${process.env.APOLLO_GRAPH_REF}`,
            footer: false,
            embed: true,
          })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({
      // Add what you need at context creation
      //  to be available in resovlers (i.e. context.foos)
      //
      // auth: req.headers.authentication,
      // foos: new FooDataSource(),
      dataSources: {
        trackAPI: new TracksAPI(),
      },
    }),
    listen: { port },
  });

  console.log(`🚀  GraphQL API ready at ${url}`);
}

main();
