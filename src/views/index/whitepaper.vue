<template>
  <div class="index_main">
    <div class="width_1200">
      <div class="white-paper">
        <p>
          I. ドラゴンボール ファイターズ」とは？
          <br />Dragon Ball Fighter Z（中文名：龙珠斗士Z）是BSCのDEFI+NFTプロジェクトがメタスペースの概念を中心に展開しているのに対し、DBFZはマイニング、NFT、GameFi、メタスペースといったポピュラーな概念を経済モデルやゲームプレイに取り入れています。
          合計：1,00000000
          <br />トレーディングポジション：10%
          <br />5%のトレーディングボーナスプール
          <br />3%のマーケティング
          <br />2%のブラックホール破壊
          <br />3.2 DBFZデッキプレイ
          <br />1000トークンでカードタイプRを1枚購入。 合計：6968枚 最小のオープニングカードで50%～200%のトークンが入手可能 R,S,SR,SSR(7つの一つ星スペシャル)のキャラクターを破壊してトークンと交換可能(1000W/1000カード価格=10000枚)
          <br />カードタイプS、合計：2000、獲得トークン：90％～500％トークン
          <br />カードタイプはSR、カード総数は1000枚、入手できるトークンは200％～1000％です。
          <br />カードタイプSSRタイプ、合計：25枚、入手できるもの：2000%トークン
          <br />カードの種類 ドラゴンボールカード7枚 合計：7枚、獲得できる：3000%トークン
          <br />I. ドラゴンボール ファイターズ」とは？
          <br />Dragon Ball Fighter Z（中文名：龙珠斗士Z）是BSCのDEFI+NFTプロジェクトがメタスペースの概念を中心に展開しているのに対し、DBFZはマイニング、NFT、GameFi、メタスペースといったポピュラーな概念を経済モデルやゲームプレイに取り入れています。
          <br />合計：1,00000000
          <br />トレーディングポジション：10%
          <br />5%のトレーディングボーナスプール
          <br />3%のマーケティング
          <br />2%のブラックホール破壊
          <br />3.2 DBFZデッキプレイ
          <br />1000トークンでカードタイプRを1枚購入。 合計：6968枚 最小のオープニングカードで50%～200%のトークンが入手可能 R,S,SR,SSR(7つの一つ星スペシャル)のキャラクターを破壊してトークンと交換可能(1000W/1000カード価格=10000枚)
          カードタイプS、合計：2000、獲得トークン：90％～500％トークン
          カードタイプはSR、カード総数は1000枚、入手できるトークンは200％～1000％です。
          カードタイプSSRタイプ、合計：25枚、入手できるもの：2000%トークン
          カードの種類 ドラゴンボールカード7枚 合計：7枚、獲得できる：3000%トークン
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import "swiper/swiper-bundle.css";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    changeActive($event) {
      $event.currentTarget.className =
        "lottery animate__animated animate__flip";
    },
    removeActive($event) {
      $event.currentTarget.className = "lottery";
    }
  }
};
</script>

<style scoped lang="less">
.white-paper {
  text-align: left;
  font-weight: bold;
  margin-top: 100px;
  // padding: 240px 200px;
  width: 100%;
  background: url(./../img/jz/fs_0002.png) no-repeat;
  p {
    text-align: left;
    padding: 160px 200px;
    color: #6b250c;
  }
}
/* Animate Background Image */
@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.te {
  overflow: hidden;
  background: url(./../img/jz/fs_0001.png) no-repeat;
  background-size: 100% 100%;
  padding: 60px 0;
  li {
    width: 40%;
    float: left;
    min-height: 300px;
    margin: 20px;
    padding: 0 20px;
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      // background: rgba(0, 0, 0, 0.05);
      left: 0;
      bottom: 10px;
      z-index: 88;
    }
    img {
      height: 180px;
      margin: 0 auto;
      display: inline-block;
      position: relative;
    }
    div {
      height: 40px;
      padding-bottom: 10px;
      position: relative;
      color: #6b250c !important;
    }
    p {
      color: #cecece !important;
      -webkit-text-fill-color: #6b250c !important;
    }

    // display: inline-block;
    // border: 1px solid red;
  }
}
.team {
  text-align: center;
  .thumb-icon {
    border: 0 !important;
    border-radius: 50%;
    border: 1px solid red;
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
    &::after {
      display: none;
    }
  }
  img {
    border-radius: 50%;
    display: inline-block;
    width: auto;
    height: 100%;
    // filter: blur(1px);
    // opacity: .6;
  }
}
@keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.specal-card {
  img {
    margin: 0 20px;
    width: 80px;
    animation: myRotate 5s linear infinite;
  }
}
.footer {
  width: 100%;
  margin-top: 40px;
  background: rgba(0, 0, 0, 0.35);
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  .footer-left {
    font-size: 12px;
    font-weight: 400;
    color: #cecece;
    line-height: 22px;
    opacity: 0.3;
    width: 50%;
    display: inline-block;
  }
  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #f1e8e8;
    border-radius: 40px;
    margin: 0 20px;
  }
  .footer-right {
    display: inline-block;
    width: 50%;
    color: #1890ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }
}
.partners {
  margin-top: 20px;
  li {
    display: inline-block;
    width: 120px;
    height: 88px;
    margin: 0 20px;
    vertical-align: top;
    img {
      width: 100%;
    }
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
    // border: 4px double rgba(255, 255, 255, 0.25);
    font-size: 2rem;
    position: relative;
    padding: 30px;
    margin: 20px;
    // background: url(../img/header/fs_003.png) no-repeat;
    background-size: cover;
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
    background: url(../../views/img/card/fs_0001.jpg) no-repeat;
    background-size: 100% auto;
  }
  .ti-1 {
    img {
      display: inline-block;
      width: 100px;
      position: relative;
      top: 30px;
    }
    p {
      display: inline-block;
      width: 60%;
    }
  }
  .title-info {
    padding: 40px;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    position: relative;
    // background: url(../../views/img/jz/fs_0002.png) no-repeat;
    background-size: auto 100%;
    // border-top: 2px solid #cecece;
    margin-top: 20px;
    h2 {
      display: inline-block;
      position: relative;
      padding-bottom: 20px;
      margin-bottom: 10px;
      background: url(../../views/img/fs_006.png) no-repeat;
      background-size: auto 100%;
      height: 200px;
      min-width: 200px;
      display: inline-block;
      writing-mode: vertical-lr;
      text-align: center;
      padding-left: 40px;
    }
    p {
      text-align: left;
      font-size: 2rem;
      background-image: -webkit-linear-gradient(
        right,
        #fbc62b,
        #ff993c,
        #fbc62b
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      // &:before {
      //   content: attr(text);
      //   position: absolute;
      //   z-index: 10;
      //   -webkit-mask: linear-gradient(to right, #fbc62b, #ff993c);
      // }
    }
  }
  .bo_text {
    font-family: PingFangSC-Semibold, PingFang SC;
    color: #cecece;
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
