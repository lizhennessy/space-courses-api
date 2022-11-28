const { buildSubgraphSchema } = require("@apollo/subgraph");
const { ApolloServer } = require("@apollo/server");
const { readFileSync } = require("fs");
const gql = require("graphql-tag");
const resolvers = require("../resolvers");
const TracksAPI = require("../datasources/tracks-api");

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs: gql(
      readFileSync("schema.graphql", {
        encoding: "utf-8",
      })
    ),
    resolvers,
  }),
});

describe("Repository Template Functionality", () => {
  it("Execute root query", async () => {
    //Arrange
    const query = `query Track($trackId: ID!) {
      track(id: $trackId) {
        id
      }
    }`;
    const variables = {
      trackId: "c_0",
    };
    const expected = {
      track: {
        id: "c_0",
      },
    };

    const trackAPI = new TracksAPI();
    trackAPI.getTrack = jest.fn((trackId) => ({ id: trackId }));

    //Act
    const response = await server.executeOperation(
      { query, variables },
      {
        contextValue: {
          dataSources: {
            trackAPI,
          },
        },
      }
    );

    //Assert
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data).toEqual(expected);
  });
});
