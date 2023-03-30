const { Query } = require('./Query');
const { Mutation } = require('./Mutation');
const { Track } = require('./Track');
const { Module } = require('./Module');

const resolvers = {
  Query,
  Mutation,
  Track,
  Module,
};

module.exports = resolvers;
