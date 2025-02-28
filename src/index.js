const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true  // Ativa a interface GraphiQL
}));

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/graphql');
});
