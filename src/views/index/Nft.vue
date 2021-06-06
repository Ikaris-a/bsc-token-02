<template>
  <div class="nft_main">
    <p class="name width_1200">NFT</p>
    <div class="swiper_box width_1200">
      <img src="./../img/pic1.png" alt="" class="img1" />
      <img src="./../img/pic2.png" alt="" class="img2" />
      <img src="./../img/pic3.png" alt="" class="img3" />
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
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
.nft_main {
  width: 100%;
  min-height: 100vh;
  background: url("./../img/index_bg.png") no-repeat center top;
  background-size: 100% 100%;
  padding-top: 130px;
  .name {
    color: #5fd7e1;
    font-size: 30px;
    font-family: DINAlternate-Bold, DINAlternate;
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
      width: 390px;
    }
    .img1 {
      animation-name: fadeInLeft;
      animation-fill-mode: both;
      animation-duration: 1s;
    }
    .img2 {
      width: 420px;
      animation-name: fadeInDown;
      animation-fill-mode: both;
      animation-duration: 1s;
    }
    .img3 {
      animation-name: fadeInRight;
      animation-fill-mode: both;
      animation-duration: 1s;
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
      color: #5fd7e1;
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
        background-color: #5fd7e1;
        margin-right: 8px;
      }
    }
    .desc {
      font-size: 12px;
      font-family: LucidaGrande;
      line-height: 22px;
      letter-spacing: 5px;
      text-align: left;
      color: #fff;
      width: 100%;
    }
  }
}

</style>
