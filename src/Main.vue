<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <!-- 使用 router-link 指向定义的 path -->
          <router-link :to="{ name : 'Home'}" tag="li">
            <div><img src="./assets/home.svg"></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name : 'Category'}" tag="li">
            <div><img src="./assets/category.svg"></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name : 'Shoppingcart'}" tag="li">
            <div><img src="./assets/cart.svg"></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name : 'Me'}" tag="li">
            <div><img src="./assets/me.svg" ></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 用router-view 渲染视图-->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import './main.css'
  export default{}
</script>
