<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <bottomnav></bottomnav>
  </div>
</template>

<script>

import navbar from './components/Navbar.vue'
import bottomnav from './components/BottomNav.vue'

export default {
  name: 'app',
  components: {
    navbar,
    bottomnav
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
