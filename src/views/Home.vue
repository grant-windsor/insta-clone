<template>
<div>
  <NewsFeed :users="users" />
</div>
</template>

<script>
import NewsFeed from "../components/Newsfeed.vue"

export default {
  name: 'Home',
  components: {
    NewsFeed
  },
  data() {
    return {}
  },
  computed: {
    users() {
      return this.$root.$data.feed;
    }
  },
}
</script>
