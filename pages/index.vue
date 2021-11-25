<template>
  <div>
    <div v-for="t in todos.results" :key="t.id">{{ t.title }}</div>
    <p>Single todo:</p>
    <div>{{ todo.title }}</div>
    <input v-model="newTodoValue" type="text" />
    <button @click="createTodo">Create</button>
  </div>
</template>

<script>
import todos from '@/graphql/queries/todos'
import todo from '@/graphql/queries/todo'
import addTodo from '@/graphql/mutations/addTodo'

export default {
  apollo: {
    todos: {
      prefetch: true,
      query: todos,
    },
    todo: {
      prefetch: true,
      query: todo,
      variables: {
        id: 1,
      },
    },
  },
  data: () => ({
    newTodoValue: '',
  }),
  methods: {
    async createTodo() {
      const response = await this.$apollo
        .mutate({
          mutation: addTodo,
          variables: {
            title: this.newTodoValue,
          },
        })
        .then(({ data }) => data && data.addTodo)
      this.todos.results.push(response)
    },
  },
}
</script>
