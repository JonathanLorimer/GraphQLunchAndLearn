import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import greeks from './database'

import typeDefs from './schema'
import resolvers from './resolvers'

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})

const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { greeks } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/grapql'}))
app.listen(PORT);