import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Cate from '../views/Cate'
import Comic from '../views/Comic'
import Daypub from '../views/Daypub'
import Mine from '../views/Mine'
import Rank from '../views/Rank'
import SearchResult from '../views/SearchResult'
import Search from '../views/Search'
import User from '../views/User'
import Login from '../views/User/Login'
import Register from '../views/User/Register'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/cate', component: Cate },
    { path: '/comic', component: Comic },
    { path: '/daypub', component: Daypub },
    { path: '/mine', component: Mine },
    { path: '/rank', component: Rank },
    { path: '/search-result', component: SearchResult },
    { path: '/search', component: Search },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        },
        {
          path: '',
          redirect: '/user/login'
        }
      ]
    },
    { path: '/', redirect: '/home' }
  ]
})

export default router
