const todos = [
  {
    id: '1',
    title: 'Do something',
    done: false,
    createdAt: Date.now(),
    modifiedAt: Date.now(),
  },
]

module.exports = {
  Query: {
    todos() {
      return {
        totalCount: 1,
        results: todos,
      }
    },
    todo(root, args, ctx) {
      const id = args.id
      return todos.find((t) => t.id === id)
    },
  },
  Mutation: {
    addTodo(root, args, ctx) {
      const { title } = args
      const todo = {
        id: (todos.length + 1).toString(),
        title,
        done: false,
        createdAt: Date.now(),
        modifiedAt: Date.now(),
      }
      todos.push(todo)
      return todo
    },
  },
}
