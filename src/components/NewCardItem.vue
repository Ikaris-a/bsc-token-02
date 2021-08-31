<template>
  <div class="card-item-container" v-bind:class="classObject">
    <div class="card-item-container-bg-filter"></div>
    <div class="card-item-container-bg"></div>
    <div class="card-item-container-desc">
      {{ cardName }}
      DBFT
      <br />
      <i>#{{ cardId }}</i>
    </div>
  </div>
</template>
<script>
import cardConfig from "./../config/cardConfig.json";
export default {
  name: "NewCardItem",
  props: ["cardInfo"],
  data() {
    return { cardName: "", cardId: "" };
  },
  mounted() {
    console.log(cardConfig[this.cardInfo.heroId].name, "name======");
    this.cardName = cardConfig[this.cardInfo.heroId].name;
    this.cardId = this.cardInfo.tokenId.substr(
      this.cardInfo.tokenId.length - 7,
      this.cardInfo.tokenId.length
    );
  },
  computed: {
    classObject: function () {
      console.log(this.cardInfo.heroId, "this.cardInfo.heroId====");
      let heroId = 0;
      //七龙珠1～7。SSR 8～13。(SR，S, R,14～34)
      if (this.cardInfo.quality === "1") {
        //LZ
        heroId = this.cardInfo.heroId * 1;
      }
      if (this.cardInfo.quality === "2") {
        //SSR 8-12
        heroId = this.cardInfo.heroId * 1 + 7;
      }
      if (
        //SR  1
        this.cardInfo.quality === "3" ||
        this.cardInfo.quality === "4" ||
        this.cardInfo.quality === "5"
      ) {
        heroId = this.cardInfo.heroId * 1 + 12;
      }
      const key = "hero-" + heroId;

      return {
        [key]: true,
        r: this.cardInfo.quality === "5",
        s: this.cardInfo.quality === "4",
        sr: this.cardInfo.quality === "3",
        ssr: this.cardInfo.quality === "2",
        b: this.cardInfo.quality === "1",
      };
    },
  },
  methods: {},
};
</script>
<style scoped lang="less">
.card-item-container {
  width: 212px;
  height: 328px;
  margin: 10px;
  display: inline-block;
  position: relative;
  .card-item-container-bg-filter {
    width: 100%;
    height: 200px;
    background: url(./../views/img/new/item_bg.png) no-repeat;
    background-size: 100% auto;
    z-index: 0;
    position: absolute;
  }
  .card-item-container-bg {
    background: url(./../views/img/new/card_bg.png) no-repeat;
    background-size: 100% auto;
    width: 212px;
    height: 328px;
    z-index: 50;
    position: absolute;
  }
  &::after {
    content: "" !important;
    width: 100% !important;
    height: 200px !important;
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
  }
  &.hero-1::after {
    background: url(./../components/card/ball_1.png) no-repeat;
    background-size: 80px 80px;
    background-position: center 40px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }

  &.hero-2::after {
    background: url(./../components/card/ball_2.png) no-repeat;
    background-size: 80px 80px;
    background-position: center 40px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-3::after {
    background: url(./../components/card/ball_3.png) no-repeat;
    background-size: 80px 80px;
    background-position: center 40px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-4::after {
    background: url(./../components/card/ball_4.png) no-repeat;
    background-size: 80px 80px;
    background-position: center 40px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-5::after {
    background: url(./../components/card/ball_5.png) no-repeat;
    background-size: 80px 80px;
    background-position: center 40px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-6::after {
    background: url(./../components/card/ball_6.png) no-repeat;
    background-size: 80px 80px;
    background-position: center 40px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-7::after {
    background: url(./../components/card/ball_7.png) no-repeat;
    background-size: 80px 80px;
    background-position: center 40px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-8::after {
    background: url(./../views/img/cardList/10.png) no-repeat;
    background-size: 140px 140px;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-9::after {
    background: url(./../views/img/cardList/2.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-10::after {
    background: url(./../views/img/cardList/3.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-11::after {
    background: url(./../views/img/cardList/4.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-12::after {
    background: url(./../views/img/cardList/12.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-13::after {
    background: url(./../views/img/cardList/13.png) no-repeat;
    background-size: 100% auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-14::after {
    background: url(./../views/img/cardList/14.png) no-repeat;
   background-size: 120px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-15::after {
    background: url(./../views/img/cardList/15.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-16::after {
    background: url(./../views/img/cardList/16.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-17::after {
    background: url(./../views/img/cardList/17.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-18::after {
    background: url(./../views/img/cardList/18.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-19::after {
    background: url(./../views/img/cardList/19.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-20::after {
    background: url(./../views/img/cardList/20.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-21::after {
    background: url(./../views/img/cardList/21.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-22::after {
    background: url(./../views/img/cardList/22.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-23::after {
    background: url(./../views/img/cardList/23.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-24::after {
    background: url(./../views/img/cardList/24.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-25::after {
    background: url(./../views/img/cardList/25.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-26::after {
    background: url(./../views/img/cardList/26.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-27::after {
    background: url(./../views/img/cardList/27.png) no-repeat;
    background-size: 100px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-28::after {
    background: url(./../views/img/cardList/28.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-29::after {
    background: url(./../views/img/cardList/29.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-30::after {
    background: url(./../views/img/cardList/30.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-31::after {
    background: url(./../views/img/cardList/31.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &.hero-32::after {
    background: url(./../views/img/cardList/32.png) no-repeat;
    background-size: 140px auto;
    background-position: center 20px;
    content: "";
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    z-index: 99;
    height: 80px;
    position: absolute;
    left: 0;
  }
  &.r {
    &::before {
      background: url(./../views/img/level/r.png) no-repeat;
      background-size: 100% auto;
    }
  }
  &.s {
    &::before {
      background: url(./../views/img/level/s.png) no-repeat;
      background-size: 100% auto;
    }
  }
  &.ss {
    &::before {
      background: url(./../views/img/level/ss.png) no-repeat;
      background-size: 100% auto;
    }
  }
  &.ssr {
    &::before {
      background: url(./../views/img/level/ssr.png) no-repeat;
      background-size: 100% auto;
    }
  }
  img {
    width: 100%;
  }
  .card-item-container-desc {
    color: #6b250c;
    // border:1px solid red;
    font-size: 24px;
    font-weight: bold;
    height: 70px;
    position: absolute;
    z-index: 88;
    width: 160px;
    padding: 20px;
    left: 6px;
    bottom: 20px;
  }
}
</style>
