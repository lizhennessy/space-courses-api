const { Query } = require('./Query');
const { Mutation } = require('./Mutation');
const { Track } = require('./Track');

const resolvers = {
  Query,
  Mutation,
  Track,
};

module.exports = resolvers;
