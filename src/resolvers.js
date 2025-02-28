const resolvers = {
    hello: () => 'Olá, GraphQL no Docker!',
    soma: ({a, b}) => a + b
};

module.exports = resolvers;
