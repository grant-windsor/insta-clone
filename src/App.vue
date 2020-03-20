<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <router-link to='/' tag='a' class="navbar-brand" href="#">Instantaneousgram</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto">
      </div>
      <div class="my-2 my-lg-0">
        <router-link to="/suggested">
          <button class="btn btn-outline-success my-2 my-sm-0">Suggestions</button>
        </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</div>
</template>

<style>
body {
  background-color: #F8F8F8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.bg-light {
  background-color: #ffffff !important;
}

.navbar-brand {
  font-family: 'Grand Hotel', cursive;
  font-size: 250%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
