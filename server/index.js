const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')

const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()

server.applyMiddleware({ app })

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app
