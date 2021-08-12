<template>
  <div class="index_main">
    <div class="width_1200">
      <p class="title-fill">
        Binance smart chain card NFT
        <span>
          DBFZ Token
        </span>
        &mdash; Unlock new ways to play &mdash;
      </p>

      <!-- <div class="title-info">
        <h2>Cards Show</h2>
        <p>你可以通过购买卡牌,解锁无限玩法...(质押战力获取DBFZ，PK...)</p>
      </div> -->
      <div class="container">
        <template v-for="(item, index) in dataConfig">
          <CardItem :key="index" :dataItem="item"> </CardItem>
        </template>
        <!-- <swiper class="swiper" :options="swiperOption">
          <template v-for="(item, index) in dataConfig">
            <swiper-slide  :key="index">
              <CardItem :dataItem="item"> </CardItem
            ></swiper-slide>
          </template>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
      </div>
      <!-- <div class="container">
        <template v-for="index in dataConfig">
          <div class="lottery" :key="index"></div>
        </template>
      </div> -->
      <div class="title-info">
        <!-- <h2>上线将释放所有卡牌～</h2> -->
      </div>
      <div class="lottery"></div>
    </div>
  </div>
</template>

<script>
// import "swiper/swiper-bundle.css";
import CardItem from "@/components/CardItem";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: { CardItem },
  data() {
    return {
      dataConfig: [
        {
          name: "孙悟空",
          desc: "赛亚人巴达克之子",
          urlIndex: "sunwukong",
        },
        {
          name: "贝吉塔",
          desc: "(超级)赛亚人",
          urlIndex: "beijita",
        },
        {
          name: "布欧",
          desc: "亦正亦邪",
          urlIndex: "buou",
        },
        {
          name: "Dende",
          desc: "战斗型那美克星人",
          urlIndex: "dende",
        },
        {
          name: "克林",
          desc: "多林寺的弟子",
          urlIndex: "kelin",
        },
        {
          name: "北界王",
          desc: "管理北银河的神",
          urlIndex: "beijiewang",
        },
        {
          name: "******",
          desc: "",
          urlIndex: "kelin1",
        },
        {
          name: "******",
          desc: "",
          urlIndex: "kelin2",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
/* Animate Background Image */

@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.index_main {
  width: 100%;
  overflow: hidden;
  padding-top: 68px;
  padding-bottom: 80px;
  .title-fill {
    text-transform: uppercase;
    letter-spacing: 0.5em;
    display: inline-block;
    border: 4px double rgba(255, 255, 255, 0.25);
    font-size: 2rem;
    position: relative;
    margin: 20px;

    span {
      font: 700 4em/1 "Oswald", sans-serif;
      letter-spacing: 0;
      padding: 0.25em 0 0.325em;
      display: block;
      margin: 0 auto;
      text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

      /* Clip Background Image */

      background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
      -webkit-background-clip: text;
      background-clip: text;

      /* Animate Background Image */

      -webkit-text-fill-color: transparent;
      -webkit-animation: aitf 80s linear infinite;

      /* Activate hardware acceleration for smoother animations */

      -webkit-transform: translate3d(0, 0, 0);
      -webkit-backface-visibility: hidden;
    }
  }

  .lottery {
    width: 258px;
    height: 375px;
    margin: 0 10px;
    cursor: pointer;
    display: inline-block;
    background: url(../../components/card/cards_back.png) no-repeat;
    background-size: 100% auto;
  }
  .title-info {
    padding: 40px;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    p {
      text-align: left;
      font-size: 1rem;
    }
  }
  .bo_text {
    font-family: PingFangSC-Semibold, PingFang SC;
    color: #ffffff;
    font-weight: 600;
    .title {
      font-size: 4rem;
      line-height: 98px;
      letter-spacing: 6px;
      animation-name: bounce;
      transform-origin: center bottom;
      animation-fill-mode: both;
      animation-duration: 1s;
    }
    .cont {
      font-size: 30px;
      line-height: 42px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .index_main {
    .bo_text .title {
      font-size: 3rem;
    }
    .bo_text {
      width: 80%;
    }
  }
}
</style>
