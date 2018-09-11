<template> 
 <div id="app"> 
  <header> 
   <router-link to="/">首页（/）</router-link> 
   <router-link to="/user">用户（/user）</router-link> 
   <router-link to="/news">新闻（/news）</router-link> 
  </header> 
  <router-view style="border: 1px solid red" /> 
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
  margin-top: 60px;
}
</style>


  

