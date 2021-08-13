<template>
  <div class="nft_main">
    <p class="name width_1200">NFT</p>
    <div class="swiper_box width_1200 web-card">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="./../img/pic1.png" alt="" class="img1"
        /></swiper-slide>
        <swiper-slide>
          <img src="./../img/pic2.png" alt="" class="img2"
        /></swiper-slide>
        <swiper-slide>
          <img src="./../img/pic3.png" alt="" class="img3"
        /></swiper-slide>
      </swiper>
    </div>
    <div class="swiper_box width_1200 mobile-card">
      <swiper class="swiper" :options="swiperOption1">
        <swiper-slide>
          <img src="./../img/pic1.png" alt="" class="img1"
        /></swiper-slide>
        <swiper-slide>
          <img src="./../img/pic2.png" alt="" class="img2"
        /></swiper-slide>
        <swiper-slide>
          <img src="./../img/pic3.png" alt="" class="img3"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="text_box width_1200">
      <div>
        <p class="desc">
          我们谁没在币圈经历过浮浮沉沉……当爆仓后终于让自己深深感受到了身无分文的绝望，悔不当初。没有了金钱真的连动物都不如，人生如戏，戏如人生，此刻就会体会到那些梭哈者需要多大的勇气，当孤注一掷，在市场杀出一条血路，带血的筹码永远都是成功标致，梭哈也是一种智慧。后来我们都从小白成了老韭菜。初入币圈时皆有梦想，奈何认知决定了很多不同的结局。币友都有回忆，如果让时光倒流，我们每个人并不后悔步入这个圈子。我们愿化遗憾为力量，随时光流转，让留存的回忆都成为我们宝贵的财富。此刻回忆币信念永在、梦想永恒、回忆不朽。在Memory
          coin里铸造属于你独一无二的NFT资产！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 0,
          stretch: -66,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        swiperOption1: {
          autoplay: true,
          loop: true,
          spaceBetween: 30,
          initialSlide: 1,
          slidesPerView: 3,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        },
      },
    };
  },
  components: { swiper, swiperSlide },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
.nft_main {
  width: 100%;
  min-height: 100vh;
  background: url("./../img/index_bg.gif") no-repeat center top;
  background-size: 100% 100%;
  padding-top: 130px;
  .name {
    color: #FF993C;
    font-size: 30px;
    font-family: "game-font";
    font-weight: bold;
    line-height: 47px;
    letter-spacing: 3px;
    text-align: left;
  }
  .swiper_box {
    display: flex;
    justify-content: center;
    align-items: center;
    .img1,
    .img3 {
      width: 450px;
    }
    .img1 {
      animation-name: fadeInLeft;
      animation-fill-mode: both;
      animation-duration: 1s;
    }
    .img2 {
      width: 450px;
      animation-name: fadeInDown;
      animation-fill-mode: both;
      animation-duration: 1s;
    }
    .img3 {
      animation-name: fadeInRight;
      animation-fill-mode: both;
      animation-duration: 1s;
    }
    .swiper {
      height: 100%;
      width: 100%;
      .swiper-silide {
        width: 400px;
      }
    }
  }
  .text_box {
    margin-top: 30px;
    padding-bottom: 40px;
    & > div {
      width: 1080px;
      margin: 30px auto;
      &:first-child {
        margin-bottom: 30px;
      }
    }
    .title {
      font-size: 16px;
      color: #FF993C;
      margin-bottom: 10px;
      text-align: left;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #FF993C;
        margin-right: 8px;
      }
    }
    .desc {
      font-size: 12px;
      font-family: "game-font";
      line-height: 22px;
      letter-spacing: 5px;
      text-align: left;
      color: #cecece;
      width: 100%;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .mobile-card {
    display: none !important;
  }
}
@media only screen and (max-width: 1000px) {
  .nft_main .text_box > div {
    width: 100%;
  }
  .nft_main .text_box .desc {
    width: 80%;
    padding: 0 40px;
  }
  .mobile-card {
    width: 80%;
  }
  .web-card {
    display: none !important;
  }
  .swiper-slide {
    border-radius: 20px;
    overflow: hidden;
    min-height: 436px;
  }
  .nft_main .swiper_box img {
    width: 100% !important;
    height: 100%;
    border-radius: 20px;
  }
}
</style>
