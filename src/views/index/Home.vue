<template>
  <div class="index_main">
    <div class="width_12001">
      <div class="header-container">
        <img src="../img/new/header.png" alt />
      </div>
      <div class="my-card-container width_1200">
        <div class="title"></div>
        <div v-if="cardInfoList.length > 0">
          <template v-for="(item, index) in cardInfoList">
            <div class="my-card-item" :key="index">
              <NewCardItem :cardInfo="item" />
              <div class="changeDBFZ" @click="changeDBFZ(item)">
                <span v-if="language === 'JP'">両替 </span>
                <span v-if="language === 'EN'"
                  >Currency exchange
                </span>
                {{ (item.amount * item.rate) / 100 }}DBFZ
              </div>
            </div>
          </template>
        </div>
        <div v-else>
          <div class="go-clime" @click="goClime">
            <span v-if="language === 'JP'">カードを引く </span>
            <span v-if="language === 'EN'">Draw a card </span>
          </div>
        </div>
      </div>
      <div class="rank-container">
        <ul>
          <template v-for="(item, index) in rankList">
            <li :key="'rank_' + index">
              {{ interceptAccount(item.address) }}
              <span>{{ item.power }}</span>
            </li>
          </template>
        </ul>
      </div>
      <div class="title-info width_1200">
        <h2>
          <span v-if="this.$store.state.lang === 'JP'"
            >トークンエコノミー
          </span>
          <span v-if="this.$store.state.lang === 'EN'">Token economy </span>
        </h2>
        <ul class="te">
          <li>
            <img src="../../components/card/character_17.png" alt />

            <div>
              <span v-if="this.$store.state.lang === 'JP'">ゲーム内通貨 </span>
              <span v-if="this.$store.state.lang === 'EN'">
                In-game currency
              </span>
            </div>
            <p>
              <span v-if="this.$store.state.lang === 'JP'"
                >ゲーム内のほとんどのアイテムは、DBFZトークンを使用して支払われます。
              </span>
              <span v-if="this.$store.state.lang === 'EN'">
                Most items in the game are paid using DBFZ tokens.
              </span>
            </p>
          </li>

          <li>
            <img src="../../components/card/character_18.png" alt />
            <div>
              <span v-if="this.$store.state.lang === 'JP'">ガバナンス </span>
              <span v-if="this.$store.state.lang === 'EN'">Governance </span>
            </div>
            <p v-if="this.$store.state.lang === 'JP'">
              ゲームの新機能と設定に投票して、特別な賞金を獲得しましょう 報酬。
              DBFZトークンを一定時間ロックして、投票権を獲得します。
            </p>
            <p v-if="this.$store.state.lang === 'EN'">
              Vote for new features and settings in the game to win special
              prizes. Lock the DBFZ token for a certain period of time to get
              the right to vote.
            </p>
          </li>
          <li>
            <img src="../../components/card/character_19.png" alt />
            <div>
              <span v-if="this.$store.state.lang === 'JP'">ステーキング </span>
              <span v-if="this.$store.state.lang === 'EN'">Staking </span>
            </div>
            <p v-if="this.$store.state.lang === 'JP'">
              DBFZトークンをプールにステーキングして、ゲームの一部になりましょう。
              プールが異なれば、新しいアイテムなどの収益も異なります。
              DBFZトークン。
            </p>
            <p v-if="this.$store.state.lang === 'EN'">
              Steak your DBFZ tokens into the pool and become part of the game.
              Different pools have different revenues, such as new items. DBFZ
              token.
            </p>
          </li>
          <li>
            <img src="../../components/card/character_20.png" alt />
            <div>
              <span v-if="this.$store.state.lang === 'JP'">プレイ2獲得 </span>
              <span v-if="this.$store.state.lang === 'EN'"
                >Play 2 acquisition
              </span>
            </div>
            <p v-if="this.$store.state.lang === 'JP'">
              プレイするだけで、ミッションやソーシャルを介してDBFZトークンを取得することもできます
              鉱業。
            </p>
            <p v-if="this.$store.state.lang === 'EN'">
              You can also get DBFZ tokens via missions and social just by
              playing Mining.
            </p>
          </li>
        </ul>
      </div>

      <div class="specal-card width_1200">
        <img src="../../components/card/ball_1.png" alt />
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
import NewCardItem from "@/components/NewCardItem";
// import Fighter from "./../../config/contract/Fighter.json";
import Web3 from "web3";
import CardReword from "./../../config/contract/CardReward.json";
// import BigNumber from "bignumber.js";
import { contractConfig } from "./../../config/address";
export default {
  components: { NewCardItem },
  data() {
    return {
      // cardReword: { contract: "", address: contractConfig.CardReword },
      rankList: [],
      cardInfo: {
        heroId: "1",
        quality: "5",
        name: "123"
      },
      cardInfoList: [],
      Fighter: {
        contract: "",
        address: contractConfig.Fighter
      }
    };
  },
  computed: {
    language(){
      return this.$store.state.lang;
    },
    dataConfig() {
      return [
        {
          name: this.$store.state.lang === "JP" ? "カカロット" : "Kakarot",
          desc: "",
          urlIndex: "sunwukong"
        },
        {
          name: this.$store.state.lang === "JP" ? "ベジット" : "Vegetto",
          desc: "",
          urlIndex: "beijita"
        },
        {
          name: this.$store.state.lang === "JP" ? "ウーブ" : "Uub",
          desc: "",
          urlIndex: "buou"
        },
        {
          name: this.$store.state.lang === "JP" ? "ピッコロ" : "Piccolo",
          desc: "",
          urlIndex: "dende"
        }
      ];
    }
  },
  async mounted() {
    await this.initWeb3();
    await this.mountedFunc();
    await this.initContract();
  },
  methods: {
    goClime() {
      this.$router.push("/cardShop");
    },
    interceptAccount(account) {
      return typeof account === "string"
        ? `${account.substring(0, 4)}...${account.substr(
            account.length - 4,
            account.length
          )}`
        : "";
    },
    async changeDBFZ(item) {
      // const loading = this.$loading({
      //   lock: true,
      //   text: "読み込み中",
      //   spinner: "el-icon-loading",
      //   background: "rgb(163, 117, 56, 0.3)",
      // });
      const exchangeContract = new window.web3.eth.Contract(
        CardReword.abi,
        contractConfig.CardReword
      );
      const account = await this.$store.state.defaultAccount;
      console.log(item.tokenId, "======");
      await exchangeContract.methods
        .redeemed(item.tokenId)
        .send({ from: account, gas: 200000 });
      this.initContract();
      this.$notify({
        title: this.$store.state.lang === "JP" ? "おめでとう" : "Congrats",
        dangerouslyUseHTMLString: true,
        message:
          this.$store.state.lang === "JP"
            ? "<strong>オンチェーントランザクションが完了しました</strong>"
            : "<strong>On-chain transaction completed</strong>"
      });
      // loading.close();
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
            method: "eth_requestAccounts"
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
    compare(p) {
      //这是比较函数
      return function(m, n) {
        var a = m[p];
        var b = n[p];
        return b - a; //降序
      };
    },
    async initContract() {
      const CardRewordContract = new window.web3.eth.Contract(
        CardReword.abi,
        contractConfig.CardReword
      );
      const account = await this.$store.state.defaultAccount;
      const res = await CardRewordContract.methods.getTokenList(account).call();
      const res1 = await CardRewordContract.methods.getRanking().call();
      this.cardInfoList = res;
      let newArr = [];
      let rankAddress = [];
      if (res1.length > 0) {
        res1.forEach((item, index) => {
          // console.log(item[0], "123123===");
          // if (rankAddress.includes(item[0])) {
          //   // return;
          // } else {
          rankAddress.push(item[0]);
          newArr[index] = {};
          newArr[index].address = item[0];
          newArr[index].power = item[1];
          // }
        });
        newArr.sort(this.compare("power"));
      }
      this.rankList = newArr;
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
              input: input
              // gas: 200000,
            },
            function(error, res) {
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
    }
  }
};
</script>

<style scoped lang="less">
/* Animate Background Image */
.my-card-item {
  display: inline-block;
  .changeDBFZ {
    height: 70px;
    line-height: 70px;
    font-size: 22px;
    color: #f1d723;
    background: url(../img/new/btn.png) no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
.header-container {
  img {
    width: 100%;
  }
  cursor: pointer;
}
.go-clime {
  background: url(../img/new/btn.png) no-repeat;
  display: inline-block;
  font-size: 30px;
  padding: 0 40px;
  color: #f1d723;
  font-weight: bold;
  height: 80px;
  cursor: pointer;
  line-height: 80px;
  background-size: 100% 100%;
}
.my-card-container {
  & > .title {
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
