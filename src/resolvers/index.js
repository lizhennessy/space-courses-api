const { Query } = require('./Query');
const { Mutation } = require('./Mutation');
const { Thing } = require('./Thing');
const { Track } = require('./Track');

const resolvers = {
  Query,
  Mutation,
  Thing,
  Track,
};

module.exports = resolvers;
