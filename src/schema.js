const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
        soma(a: Int!, b: Int!): Int
    }
`);

module.exports = schema;
