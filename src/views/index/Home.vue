<template>
  <div class="index_main">
    <div class="width_12001">
      <div class="header-container">
        <img src="../img/new/header.png" alt />
      </div>
      <div class="my-card-container width_1200">
        <div></div>
        <ul>
          <li class="r">
            <img src="../img/cardList/1.png" alt />
            <div>ヤキローブ</div>
          </li>
          <li class="s">
            <img src="../img/cardList/2.png" alt />
            <div>テンシンハン</div>
          </li>
          <li class="ssr">
            <img src="../img/cardList/3.png" alt />
            <div>カカロット</div>
          </li>
          <li class="ss">
            <img src="../img/cardList/4.png" alt />
            <div>タートルフェアリー</div>
          </li>
        </ul>
      </div>
      <div class="rank-container">
        <ul>
          <li>0x18AA6E4D0Cb66787B9e3FCcc75Cf524aF799c73c <span>150</span></li>
          <li>0xb3f9f61f2dbae19e6df53523cbb248afd0c8529c <span>142</span></li>
          <li>0xc8dc6da781097a2be9854f69faed10e087da8ad3 <span>136</span></li>
          <li>0xb3f9f61f2dbae19e6df53523cbb248afd0c8529c <span>119</span></li>
          <li>0xc8dc6da781097a2be9854f69faed10e087da8ad3 <span>116</span></li>
          <li>0x066ea6c41058512a16e28685d628b2d666abc88d <span>108</span></li>
          <li>0x28e96f3fe5c3415b3024719c5c53fa9e27369083 <span>80</span></li>
        </ul>
      </div>
      <div class="title-info width_1200">
        <h2>トークンエコノミー</h2>
        <ul class="te">
          <li>
            <img src="../../components/card/character_17.png" alt />

            <div>ゲーム内通貨</div>
            <p>
              ゲーム内のほとんどのアイテムは、DBFZトークンを使用して支払われます。
            </p>
          </li>

          <li>
            <img src="../../components/card/character_18.png" alt />
            <div>ガバナンス</div>
            <p>
              ゲームの新機能と設定に投票して、特別な賞金を獲得しましょう 報酬。
              DBFZトークンを一定時間ロックして、投票権を獲得します。
            </p>
          </li>
          <li>
            <img src="../../components/card/character_19.png" alt />
            <div>ステーキング</div>
            <p>
              DBFZトークンをプールにステーキングして、ゲームの一部になりましょう。
              プールが異なれば、新しいアイテムなどの収益も異なります。
              DBFZトークン。
            </p>
          </li>
          <li>
            <img src="../../components/card/character_20.png" alt />
            <div>プレイ2獲得</div>
            <p>
              プレイするだけで、ミッションやソーシャルを介してDBFZトークンを取得することもできます
              鉱業。
            </p>
          </li>
        </ul>
      </div>
      <div class="specal-card width_1200">
        <!-- <img
          class="animate__animated animate__rotateIn"
          src="../../components/card/ball_1.png"
          alt
        /> -->
        <img src="../../components/card/ball_2.png" alt />
        <img src="../../components/card/ball_3.png" alt />
        <img src="../../components/card/ball_4.png" alt />
        <img src="../../components/card/ball_5.png" alt />
        <img src="../../components/card/ball_6.png" alt />
        <img src="../../components/card/ball_7.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
// import "swiper/swiper-bundle.css";
// import CardItem from "@/components/CardItem";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Fighter from "./../../config/contract/Fighter.json";
import Web3 from "web3";
// import BigNumber from "bignumber.js";
import { contractConfig } from "./../../config/address";
export default {
  // components: { CardItem },
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
      ],
      Fighter: {
        contract: "",
        address: contractConfig.Fighter,
      },
    };
  },
  async mounted() {
    await this.initWeb3();
    await this.mountedFunc();
    await this.initContract();
  },
  methods: {
    async lottery() {
      // await this.initContract();
    },
    async mountedFunc() {
      await this.initWeb3();
      let ethereum = window.ethereum;
      let web3 = window.web3;
      const _that = this;
      if (ethereum) {
        try {
          // metaMask连接钱包的方法
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          // 判断是否已经连接钱包
          this.$store.commit("defaultAccountFun", accounts[0]);
          _that.defaultAccount = accounts[0];
          if (Array.isArray(accounts) && accounts.length > 0) {
            web3.eth.defaultAccount = accounts[0];
            localStorage.removeItem("walletconnect");
          }
          // 此事件是在页面加载时触发的。
          //如果帐户数组非空，则您已经连接
          ethereum.on("accountsChanged", this.handleAccountsChanged);
        } catch (error) {
          console.log(error, "error");
        }
      }
    },
    async initContract() {
      this.Fighter.contract = new window.web3.eth.Contract(
        Fighter.abi,
        this.Fighter.address
      );
      const account = await this.$store.state.defaultAccount;

      const res = await this.Fighter.contract.methods
        .getTokenList(account)
        .call();
      // const rankList = await this.Fighter.contract.methods.getRanking().call();
      console.log(res, "res1========");
    },
    _promise(from, to, input, value) {
      let web3 = window.web3;
      return new Promise((resolve, reject) => {
        try {
          web3.eth.sendTransaction(
            {
              from: from,
              to: to,
              value: value || 0,
              input: input,
              // gas: 200000,
            },
            function (error, res) {
              if (!error) {
                console.log(res, "resdata==========");
                const tval = setInterval(async () => {
                  const tx = await web3.eth.getTransactionReceipt(res);
                  if (tx) {
                    console.log("tx:", tx);
                    clearInterval(tval);
                    resolve(res);
                  }
                }, 500);
              } else {
                reject(error);
              }
            }
          );
        } catch (error) {
          reject(error);
        }
      });
    },
    async initWeb3() {
      if (!Web3.givenProvider) {
        return;
      }
      let web3 = window.web3;
      if (typeof web3 !== "undefined") {
        web3 = new Web3(window.ethereum);
      }
      window.web3 = web3;
    },
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
.header-container {
  img {
    width: 100%;
  }
  cursor: pointer;
}

.my-card-container {
  & > div {
    width: 30%;
    height: 100px;
    display: inline-block;
    background: url(../img/new/my_card_title_ja.png) no-repeat;
    background-size: 100% auto;
  }
  ul {
    width: 100%;
    font-size: 0;
    margin-top: 50px;
    li {
      display: inline-block;
      width: 200px;
      padding: 0 0.5%;
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        position: absolute;
      }
      &.r {
        &::before {
          background: url(./../img/level/r.png) no-repeat;
          background-size: 100% auto;
        }
      }
      &.s {
        &::before {
          background: url(./../img/level/s.png) no-repeat;
          background-size: 100% auto;
        }
      }
      &.ss {
        &::before {
          background: url(./../img/level/ss.png) no-repeat;
          background-size: 100% auto;
        }
      }
      &.ssr {
        &::before {
          background: url(./../img/level/ssr.png) no-repeat;
          background-size: 100% auto;
        }
      }
      img {
        width: 100%;
      }
      div {
        color: #6b250c;
        // border:1px solid red;
        font-size: 24px;
        font-weight: bold;
        height: 70px;
        position: absolute;
        width: 160px;
        padding: 20px;
        bottom: 0;
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
.rank-container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  height: 600px;
  background: url(./../img/new/rank_ja.png) no-repeat;
  background-size: 100% auto;
  ul {
    margin-top: 110px;
    display: inline-block;
    width: 70%;
    max-height: 200px;
    overflow-y: scroll;

    li {
      color: #563921;
      font-weight: bold;
      border: 1px solid #563921;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      border-radius: 10px;
      font-size: 22px;
      text-align: left;
      margin: 10px 0;
      width: 80%;
      display: inline-block;
      background: #e4c987;
      position: relative;
      span {
        font-size: 24px;
        color: #b97f0f;
        font-weight: bold;
        position: absolute;
        right: 30px;
      }
    }
  }
}
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

.index_main {
  width: 100%;
  overflow: hidden;
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
