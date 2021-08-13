<template>
  <div class="index_main">
    <div class="width_1200">
      <p class="title-fill">
        BinanceスマートチェーンカードNFT
        <span> DBFZトークン </span>
        &mdash;新しい遊び方のロックを解除する &mdash;
      </p>
      <div class="title-info">
        <h2>
          ドラゴンボールカード
        </h2>
        <p>
          特別なカード、1つの財布が7枚のカードを集めます、そしてあなたは主張することができます
          7日間連続のトークン
        </p>
      </div>
      <div class="specal-card">
        <img
          class="animate__animated animate__rotateIn"
          src="../../components/card/ball_1.png"
          alt=""
        />
        <img src="../../components/card/ball_2.png" alt="" />
        <img src="../../components/card/ball_3.png" alt="" />
        <img src="../../components/card/ball_4.png" alt="" />
        <img src="../../components/card/ball_5.png" alt="" />
        <img src="../../components/card/ball_6.png" alt="" />
        <img src="../../components/card/ball_7.png" alt="" />
      </div>
      <div class="title-info">
        <h2>DBFZについて</h2>
        <p>
          DBFZは、DeFi、収集品、および 自分の性格。
          DBFZは、Binanceを含むサポートされているネットワークで実行されます
          スマートチェーン
        </p>
      </div>
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
        <h2>DBFZ Token</h2>
        <div>
          DBFZトークンはゲーム内の主要通貨です。それは取引に使用されます、
          主に最初に交換し、彼らの特別な資質を向上させる
          段階。正式な契約アドレス：
        </div>
      </div>
      <div
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery"
      ></div>
      <div
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery"
      ></div>
      <div
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery "
      ></div>
      <div
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery"
      ></div>
      <div class="title-info">
        <h2>トークンエコノミー</h2>
        <ul class="te">
          <li>
            <img src="../../components/card/character_17.png" alt="" />

            <div>ゲーム内通貨</div>
            <p>
              ゲーム内のほとんどのアイテムは、DBFZトークンを使用して支払われます。
            </p>
          </li>

          <li>
            <img src="../../components/card/character_18.png" alt="" />
            <div>ガバナンス</div>
            <p>
              ゲームの新機能と設定に投票して、特別な賞金を獲得しましょう 報酬。
              DBFZトークンを一定時間ロックして、投票権を獲得します。
            </p>
          </li>
          <li>
            <img src="../../components/card/character_19.png" alt="" />
            <div>ステーキング</div>
            <p>
              DBFZトークンをプールにステーキングして、ゲームの一部になりましょう。
              プールが異なれば、新しいアイテムなどの収益も異なります。
              DBFZトークン。
            </p>
          </li>
          <li>
            <img src="../../components/card/character_20.png" alt="" />
            <div>プレイ2獲得</div>
            <p>
              プレイするだけで、ミッションやソーシャルを介してDBFZトークンを取得することもできます
              鉱業。
            </p>
          </li>
        </ul>
      </div>

      <div class="title-info">
        <h2>パートナー</h2>
        <ul class="partners">
          <li>
            <img src="../img/Partners/Partner1.png" alt="" />
          </li>
          <li>
            <img src="../img/Partners/Partner2.png" alt="" />
          </li>
          <li>
            <img src="../img/Partners/Partner3.png" alt="" />
          </li>
          <li>
            <img src="../img/Partners/Partner4.png" alt="" />
          </li>
          <li>
            <img src="../img/Partners/Partner5.png" alt="" />
          </li>
          <li>
            <img src="../img/Partners/Partner7.png" alt="" />
          </li>
          <li>
            <img src="../img/Partners/Partner8.png" alt="" />
          </li>
        </ul>
      </div>
      <div class="title-info">
        <h2>私たちのチーム</h2>
        <ul class="te team">
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_13.png" alt="" />
            </div>
            <div>ひなた</div>
            <p>
              事業開発ディレクター
              <br />@やまと <br />@ひろと (VRゲーム)
            </p>
          </li>
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_14.png" alt="" />
            </div>
            <div>ドロシー</div>
            <p>
              最高執行責任者 <br />
              ゲームプロデューサー
            </p>
          </li>
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_15.png" alt="" />
            </div>
            <div>パール</div>
            <p>
              発達<br />
              プログラムマネージャー
            </p>
          </li>
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_16.png" alt="" />
            </div>
            <div>ウォレス</div>
            <p>ゲームプロダクトマネージャー <br /></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div>@2021 DBFZ @商家徽标 株式会社ＴＯＫＹＯ</div>
        <div> 日本橋茅場町</div>
      </div>
      <div class="footer-right">
        <a>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADC0lEQVRYR82ZV4sUQRSFvzVnMSCIGDEnREQRRRQVUX+wL4oI4oOYFRPmwJrTGldd5Ruql7bt3rk9szN0Pe1uV906fe+tc071DtD5mAcsBOYCs4CpwKQU7hfwA/gMfATeAO872Wqg5qJpwEpgCTC95tpvwHPgIfA9ujYKcAqwDlgGTIgGr5g3AjwB7gDD7WJFAJqtzYAgx3MI7kbKamXcsQD6bAuwfDxRlcR6DFwH/pTtUwVwIrADWNRjcFn4V8AF4HdxvzKA/m1nH8HlQZ4vZrIM4NY+lLWqMJb7Wv5hEaAHYnufylq1zaX8wckD9JQe6MFprfu+nu7TGQXlAXpiV9SN1qP5j9LJJgOoQhwcBxJuh1c1+QnMaTNRMj+l4mQANwCr20Xv8LmbvUjq8Tol4RiMJqcq7D3gVgbwUAfa2g7vJ+Ap8Kwgafb6kXaLAbN9UoC6kr2BBZEplk9DILAPaYGkbwt9Sb9L/rsiwYCzAlwDrA8uKJumRL1NoAYLaiAY3Y/cZkYca5PxiGx5W4BK2uLI7MIcLZOZ0pl8LTzTG25KbaM6mNlsmL2ohA4KcD8wOwjQhn+Za/gygdeSbQTeARdL9NX+izqjIQFGFuiO76eMVXk4XbUyuSC9gGUtvsCMRGfBfDAswOMB/ruZAJYF1sBKUfayP99NZrRsbl0pHYkCdLOhxGceBO8Zjvkpa7aI2dKAqgJVw75cFU0f0AIYKXExpidSnrPZjaGPuwwIfqyxJ71UFGOrxHUOSVXgc4lqxtrYvY4C8mJ0tA5JpzSTbeIV80RgR6+n+wLz8lNaNNMtUbckKUWVPuS8MvrxbuMprzNaRN2t1NmLZwApZHdSDE1n8e67DVhaB10mda7pxiwoc1cTuOwyL1deSaSeYarb66NmwQDd2C3BWInJhexY5gdapqQchwMWKx/iH7vVS8OqTgt2Zo3y/mdYXdtoyy/Axl+aBFlXK2tULTy18tqZRWj0xV2Qjf/0IchGfzzKSt3oz2/5jm7sB8w8yEZ/As4DbexH9DIS68u/If4CJmC1oWrEpCwAAAAASUVORK5CYII="
            alt=""
          />
        </a>
        <a>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEi0lEQVRYR82Zf0ijdRzH39PbuXQ3K8PjOLM754/l5akrZQ0xs9PEoH8cmZScYE78Y5WE4EAOQVhIk1QMTUgolFgYXK5UlimeqSmjhUZ3cqI5zbI76/qhm+ec8Rl76jnPZ8/zmMo+f+77+fHa97vPj+93EhxcHgLwCIBIAHIAYQBO+N15AGwB+BvAHwBuA/j9IKEkIo1kAM4DOAvgAZG2LgA/AVgE4BZqKxTwJIAkALEAQoQ659DzAnACmANwl8+XEEDarScAEORhCsF9799VTr+BAGktBcBjh0m1j68lALMAdveLwwUYCuApANFHDMe4/xWAHcDO3nj7AdJnmccIx4ac3ruT+wFePIZj5ToYOu4Z9uJeQEoI9TEdK1eYb9mJwwakLH32CLJV7Pel7B5hShAbkDL2nFhvR6T/oz+zwQBSh3juEIqwjzc2Njass7MzX6VSpUil0pNOp/NmbW3tF6Ojo3dovbi4+LTFYlkL8OWomH9FHYcBfBxAfKDdqKurUxUUFKRmZWVZAullZmaestlspsjIyHvq59bW1p3x8fGrKpXq4tLS0pxWq/2YZ/fnAVxnAC/x9dbJyclXNRrNS2NjY93Z2dmfcDmfn59/S6lUPsO1vry8PD0wMPClxWKZGx4e9u0oh1DvHiJAmkqy+H5LDofjtbS0tBdJb2VlxV5ZWflef3//OtuOdm9qauojAFToOcVut3+akZHxIV9MAF8TYAIAFZ9yb2/vpaKiotcZPY/HszE9PW1taGgYHBwc/I0+NxqNCSaTqSmQr5mZmc9TU1M7+eL5128QILW0M3wG8fHxstnZ2Q6ZTPbwHl3v+vr6TafTecPlcrm1Wm1xIF/d3d3m0tLSa3zx/Os/E2AOgFN8Bi0tLU8mJiaeyc/PLwsJCTnwZNPc3Hylurr6O754/vW/CPB5IcV5ZGSkKCcn57JAx5xqeXl5l4eGhoRO13cJ8AUh9a+wsDDKarW+/392z+Vy3QoPDy8X8SW9ggHJaU9PT3ZJScmbEomEuXuIiAU4HI7P1Gr1ByKMfICCjpichoWFSTo6Op7W6XSvyOXyR0UEItVdg8HwRltbG7UxoeI7YkFJwnhcW1t7Ozo6+oLQCIzewsLCNaVSaRZp50sSQWWGcVxWVna2vb3dJJPJqMALku3t7T91Ol11X1/fLUEG/yn5yoygQs12nJub+2BTU5MuLi4uXaFQBDzq3d1dT2Nj4xWj0UgXJLHiK9SCWh3bc2hoqMRkMqWUl5eXRUVFcQ4ZXq93u6ur652KiopvxJL59X2tjiTgsJCenh5RVVV1QaFQhCckJJxPSkrSRkREnA4UdGNj4xez2fxufX399QPC/TsskD3vuFVTUxNvMBhejomJUQcqM5ubm7cnJiaser2+f3FxkZ4/Dir3jFuCB1aNRqPQ6/UpycnJ5+RyeaRUKj3hdrvdq6urqzab7YfW1taFnZ37bo9iIe8bWMlBUI/8BBj0lyaCDOprJ/M7CeqLO0EG/dMHQQb14xFz1EH9/MauW0H7gMmGDOonYDZo0D6i79eqjuVviH8AQYFjsMXEyrwAAAAASUVORK5CYII="
            alt=""
          />
        </a>
      </div>
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
          name: "カカロット",
          desc: "",
          urlIndex: "sunwukong",
        },
        {
          name: "ベジット",
          desc: "",
          urlIndex: "beijita",
        },
        {
          name: "ウーブ",
          desc: "",
          urlIndex: "buou",
        },
        {
          name: "ピッコロ",
          desc: "",
          urlIndex: "dende",
        },
        // {
        //   name: "克林",
        //   desc: "多林寺的弟子",
        //   urlIndex: "kelin",
        // },
        // {
        //   name: "北界王",
        //   desc: "管理北银河的神",
        //   urlIndex: "beijiewang",
        // },
        // {
        //   name: "******",
        //   desc: "",
        //   urlIndex: "kelin1",
        // },
        // {
        //   name: "******",
        //   desc: "",
        //   urlIndex: "kelin2",
        // },
      ],
    };
  },
  mounted() {},
  methods: {
    changeActive($event) {
      $event.currentTarget.className =
        "lottery animate__animated animate__flip";
    },
    removeActive($event) {
      $event.currentTarget.className = "lottery";
    },
  },
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
.te {
  overflow: hidden;
  li {
    width: 25%;
    float: left;
    min-height: 300px;
    margin: 20px 0;
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.05);
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
      &:after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 80%;
        height: 2px;
        background: #cecece;
        left: 0;
        bottom: 10px;
      }
    }
    p {
      color: #cecece !important;
      -webkit-text-fill-color: #ff993c !important;
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
    filter: blur(1px);
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
    animation: myRotate 1s linear infinite;
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
    position: relative;
    // border-top: 2px solid #cecece;
    margin-top: 20px;
    h2 {
      display: inline-block;
      position: relative;
      padding-bottom: 20px;
      margin-bottom: 10px;
      &::after {
        content: "";
        width: 100%;
        height: 10px;
        background: linear-gradient(to right, #fbc62b, #ff993c);
        position: absolute;
        border-radius: 5px;
        bottom: 0;
        left: 0;
      }
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
