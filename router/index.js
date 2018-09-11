/* import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
 */

import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import User from '@/components/User'
import UserLogin from '@/components/UserLogin'
import UserRegister from '@/components/UserRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',   // 首页，跳转到新闻当首页
      redirect: '/news'
    },
    {
      path: '/news',  // 新闻
      component: News
    },
    {
      path: '/user',  // 用户
      component: User,
      children: [
        { path: '/user/login', component: UserLogin },       // 用户=>登录
        { path: '/user/register', component: UserRegister }  // 用户=>注册
      ]
    }
  ]
})