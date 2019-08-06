<template>
  <div id="app">
    <router-view/>
    <!-- <div id="nav">
      <router-link to="/"> <font-awesome-icon icon="child" /> </router-link> |
      <router-link to="/about">Activites</router-link>
    </div>  -->
  </div>
</template>

<script>

</script>

<style>
body{
  height: 0vh;
  background-color: #C6EFFF;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%)
}

#nav{
  position: fixed;
  bottom: 20px;
  left: 50%;
  width: 90%;
  height: 50px;
  transform: translateX(-50%);
  background: #F5F5F5;
  box-shadow: 0 2px 50px 0 rgba(0,0,0,0.25);
  border-radius: 10px;
}
</style>
