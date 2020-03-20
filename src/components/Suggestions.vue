<template>
<div class="wrapper">
  <p>Suggested</p>
  <div class="users">
    <div class="user" v-for="user in users" :key="user.id">
      <div class="info">
        <router-link to="{ path: '/page/'+user.id }" tag='h1'>{{user.id}}</router-link>
        <h2>{{user.first_name}} {{user.last_name}}</h2>
        <p>suggested for you</p>
      </div>
      <div class="btndiv">
        <button v-on:click="unfollowUser(user)" class="btn btn-outline-success my-2 my-sm-0 unbutton">Unfollow</button>
        <button v-on:click="followUser(user)" class="btn btn-outline-success my-2 my-sm-0 button">Follow</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'suggestionList',
  props: {
    users: Array,
  },
  methods: {
    followUser(user) {
      if (!this.$root.$data.feed.includes(user)) {
        this.$root.$data.feed.push(user);
        this.$root.$data.ids.push(user.id);
      }
    },
    unfollowUser(user) {
      if (this.$root.$data.feed.includes(user)) {
        let index = this.$root.$data.feed.indexOf(user);
        this.$root.$data.feed.splice(index, 1);
        index = this.$root.$data.ids.indexOf(user.id);
        this.$root.$data.ids.splice(index, 1);
      }
    }
  },
  computed: {
    isFollowed(user) {
      return this.$root.$data.feed.includes(user.id);
    }
  },
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
  background-color: #F8F8F8;
  padding-top: 100px;
  line-height: .3;
  text-align: left;
}

.wrapper p {
  margin-left: 31%;
}

.user p {
  margin-left: 0;
}

.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user {
  background-color: #fff;
  display: flex;
  width: 39%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
}

.button {
  margin: 20px;
  background-color: #4790F0;
  color: white;
  border: none;
}

.button.disabled {
  display: none;
}

.button:hover,
.button:active,
.button:focus {
  background-color: #4790F0 !important;
  border: none !important;
}


.info {
  color: #999999;
  height: 100%;
  margin-left: 5px;
  text-align: left;
  line-height: .5;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info h1 {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #000;
  line-height: .2;
}

.info h2 {
  font-size: 14px;
}

.info p {
  font-size: 9px;
}

.btndiv {}
</style>
