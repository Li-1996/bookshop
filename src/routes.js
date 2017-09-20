import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Category from './Category.vue'
import Shoppingcart from './Shoppingcart.vue'
import Me from './Me.vue'
import Main from './Main.vue'
import Booklist from './components/Booklist.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    // 将页面组件与 path 指定的路由关联
    {
      name: 'Main',
      path: '/',
      component: Main
    },
        {name: 'Home', path: 'home', component: Home},
        {name: 'Category', path: 'category', component: Category},
        {name: 'Shoppingcart', path: 'shoppingcart', component: Shoppingcart},
        {name: 'Me', path: 'me', component: Me},
    {name: 'Booklist', path: '/books/:id', component: Booklist}
  ]
})
