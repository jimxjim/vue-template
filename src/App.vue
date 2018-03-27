<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: left;
}
.code-container {
  background-color: #000000;
  color: #08e708;
  display: flex;
  flex-direction: column;
  .name-code:nth-child(2) {
    padding-left: 1rem;
  }
}

</style>
