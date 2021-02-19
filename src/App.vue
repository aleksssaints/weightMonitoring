<template>
  <div id="app">
    <div class="navbar">
      <h3>
        <router-link to="/login">Вход</router-link>
        <router-link to="/">Добавить вес</router-link>
        <router-link to="/graph">График изменения</router-link>
      </h3>
    </div>
    <img class="logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  border: 1px solid silver;
  border-radius: 3px;
  width: 100px;
  height: 25px;
  margin-bottom: 10px;
}

input {
  margin-bottom: 15px;
  width: 200px;
}

.error {
  color: red;
}

.logo {
  height: 100px;
}
</style>
