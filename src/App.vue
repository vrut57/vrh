<template>
  <div id="app">
    <titlebar></titlebar>
    <navbar></navbar>
    <router-view></router-view>
    <bottomnav></bottomnav>
  </div>
</template>

<script>

import titlebar from './components/Titlebar.vue'
import navbar from './components/Navbar.vue'
import bottomnav from './components/BottomNav.vue'

export default {
  name: 'app',
  components: {
    titlebar,
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
  color: #2c3e50;
  margin-top: 50px;
}
</style>
