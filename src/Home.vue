<template>
  <div>
    <div class="section">
      <!-- 热门快键 -->
      <div class="swiper-container" ref="slider">
        <div class="swiper-wrapper">
          <div class="swiper-slider">
            <img src="./fixtures/sliders/t1.svg"/>
          </div>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slider">
            <img src="./fixtures/sliders/t2.svg"/>
          </div>
        </div>
        <div class="swiper-pagination" ref="pafination">
        </div>
        <!-- 快讯-->
      </div>
    </div>

    <div class="section">
      <!-- 新书上架 -->
    </div>

    <div class="section">
      <!-- 编辑推荐-->
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../node_modules/swiper/dist/css/swiper.css'
  export default{
    mounted () {
      new Swiper(this.$ref.slider, {
        pagination: this.$refs.pagination,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteration: false
      })
    }
  }
</script>
