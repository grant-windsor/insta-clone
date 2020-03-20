<template>
<div>
  <suggestionList :users="users" />
</div>
</template>

<script>
import suggestionList from "../components/Suggestions.vue"

export default {
  name: 'Suggested',
  components: {
    suggestionList
  },
  data() {
    return {}
  },
  computed: {
    users() {
      return this.$root.$data.users;
    }
  },
}
</script>
