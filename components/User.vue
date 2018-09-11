<template> 
 <div class="hello"> 
  <h1>这里是用户中心！</h1> 
  <h1>这里是用户中心！</h1> 
  <h1>这里是用户中心！</h1> 
  <h1>如果点击下面的两个自路由，则大页面不变，仅仅是在局部刷新！</h1> 
  <p> 
   <router-link to="/user/login">用户登录</router-link> 
   <router-link to="/user/register">用户注册</router-link> 
  </p> 
  <router-view style="border: solid 1px blue"></router-view> 
 </div> 
</template> 
<script>
export default {
  data() {
    return {
    };
  }
};
</script> 
  
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>