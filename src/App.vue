<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./assets/stylesheets/main.scss";
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  height: 100%;
  scroll-behavior: smooth;
}

.page {
  position: absolute;
  width: 100%;
}
</style>
