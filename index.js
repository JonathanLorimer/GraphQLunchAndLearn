// import express from 'express'
// import bodyParser from 'body-parser'
// import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
// import { makeExecutableSchema } from 'graphql-tools'

// import greeks from './database'

// import typeDefs from './schema'
// import resolvers from './resolvers'

// const schema = makeExecutableSchema({
// 	typeDefs,
// 	resolvers
// })

// const PORT = 3000;
// const app = express();

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { greeks } }));

// app.use('/graphiql', graphiqlExpress({ endpointURL: '/grapql'}))
// app.listen(PORT);

import express from 'express' 
import { ApolloServer, gql } from 'apollo-server-express'
import fs from 'fs'

const typeDefs =  gql(fs.readFileSync(__dirname.concat('/schema.js'), 'utf8'))
import resolvers from './resolvers'

const PORT = 3000;
const app = express()
const server = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({ app })

app.listen({ port: PORT }, () => 
console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
) 