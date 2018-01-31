import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const homePage = resolve => require(['../views/home.vue'], resolve)
const blog = resolve => require(['../views/blog.vue'],resolve)
const login = resolve => require(['../views/login.vue'],resolve)
const index = resolve => require(['../views/index.vue'],resolve)
const register = resolve => require(['../views/register.vue'],resolve)
const Leaving = resolve => require(['../views/leaving.vue'],resolve)
const api = resolve => require(['../views/api-detail.vue'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      children: [
        {path: '/index/home', component: homePage},
        {path: '/index/blog', component: blog},
        {path: '/index/Leaving', component: Leaving},
        {path: '/index/api', component: api}
      ]
    },{
      path: '/index/api',component: api
    },{
      path: '/blog', component: blog
    },{
      path: '/register', component: register
    },{
      path: '/', component: '/login'
    }
  ]
})
