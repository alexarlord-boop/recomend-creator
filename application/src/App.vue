<template>
  <nav>
    <router-link to="/login">Log in</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/visual">Goals</router-link>
  </nav>
  <h3 class="username">{{user.username}}</h3>
  <router-view/>
</template>
<script>
export default {
  name: 'MyApp',
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.username {
  position: absolute;
  right: 50px;
  top: 50px;
}
</style>
