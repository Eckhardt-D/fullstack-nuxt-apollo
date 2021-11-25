<template>
  <h1>{{ hello }}</h1>
</template>

<script>
import { gql } from 'graphql-tag'

export default {
  apollo: {
    hello: {
      query: gql`
        {
          hello
        }
      `,
    },
  },
}
</script>
