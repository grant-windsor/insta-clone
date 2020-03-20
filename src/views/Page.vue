<template>
<div class="wrapper">
  <div class='feed'>
    <div class="post">
      <div class="poster">
        <p>{{post.id}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+post.image">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NewsFeed',
}
</script>

<style scoped>
.wrapper {
  border: 1px solid #DDDDDD;

}

.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.poster {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
}

.poster p {
  margin-left: 10px;
  margin-top: 20px;
}

.post {
  background-color: #fff;
  border: 1px solid #DDDDDD;
  width: 640px;
  margin: 30px 30px;
}

.image img {
  height: 640px;
  width: 640px;
}
</style>
