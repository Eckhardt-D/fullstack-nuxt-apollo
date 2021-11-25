const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date

  type Todo {
    id: ID!
    title: String!
    done: Boolean!
    createdAt: Date!
    modifiedAt: Date!
  }

  type Todos {
    totalCount: Int!
    results: [Todo]
  }

  type Query {
    todos: Todos
    todo(id: ID!): Todo
  }

  type Mutation {
    addTodo(title: String!): Todo
  }
`
