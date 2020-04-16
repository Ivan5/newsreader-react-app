const resolvers = {
  Query: {
    articleBySource: (_, { id, source }, context) => {
      console.log("context", context);
    },
  },
};

module.exports.resolvers;
