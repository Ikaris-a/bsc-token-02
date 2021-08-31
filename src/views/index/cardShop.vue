<template>
  <div class="index_main">
    <div class="width_12001">
      <div class="header-container">
        <img src="../img/new/header.png" alt />
      </div>
      <div class="card-shop-container" @click="lottery">
        <!-- <img src="../img/new/card_shop.png" alt /> -->
      </div>
      <!-- <div class="card-shop-get" @click="lottery">
        <img src="../img/new/getCard.png" alt />
      </div> -->
      <div class="card-modal" v-if="loading">
        <div class="loader">
          <img id="loading" src="../img/new/loading_small.png" />
          <div class="inner one"></div>
          <div class="inner two"></div>
          <div class="inner three"></div>
        </div>

        <div>カード取引、お待ちください</div>
      </div>
      <div class="my-card-container width_1200">
        <!-- <img src="../img/logo/lz.png" class="lz" alt /><br /> -->
        <img src="../img/logo/logo.png" alt />
      </div>
      <div class="container">
        <!-- <div v-if="cardInfoList.length > 0">
          <template v-for="(item, index) in cardInfoList">
            <div class="my-card-item" :key="index">
              <NewCardItem :cardInfo="item" />
              <div class="changeDBFZ" @click="changeDBFZ(item)">
                両替{{ (item.amount * item.rate) / 100 }}DBFZ
              </div>
            </div>
          </template>
        </div> -->
        <!-- <template v-for="(item, index) in dataConfig">
          <CardItem :key="index" :dataItem="item"></CardItem>
        </template> -->
      </div>
      <div class="title-info ti-1 width_1200">
        <img src="../img/fs_002.png" alt />
        <p>
          特別なカード、1つの財布が7枚のカードを集めます、そしてあなたは主張することができます
          7日間連続のトークン
        </p>
      </div>
      <div class="title-info width_1200">
        <h2>DBFZ Token</h2>
        <div>
          DBFZトークンはゲーム内の主要通貨です。それは取引に使用されます、
          主に最初に交換し、彼らの特別な資質を向上させる
          段階。正式な契約アドレス：
        </div>
      </div>
      <div
        @click="lottery"
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery"
      ></div>
      <div
        @click="exchangeCard"
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery"
      ></div>
      <div
        @click="getReward"
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery"
      ></div>
      <div
        v-on:mouseover="changeActive($event)"
        v-on:mouseout="removeActive($event)"
        class="lottery"
      ></div>

      <div class="title-info width_1200">
        <h2>私たちのチーム</h2>
        <ul class="te team">
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_13.png" alt />
            </div>
            <div>ひなた</div>
            <p>
              事業開発ディレクター
              <br />@やまと <br />@ひろと (VRゲーム)
            </p>
          </li>
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_14.png" alt />
            </div>
            <div>ドロシー</div>
            <p>
              最高執行責任者
              <br />ゲームプロデューサー
            </p>
          </li>
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_15.png" alt />
            </div>
            <div>パール</div>
            <p>
              発達
              <br />プログラムマネージャー
            </p>
          </li>
          <li>
            <div class="thumb-icon">
              <img src="../../components/card/character_16.png" alt />
            </div>
            <div>ウォレス</div>
            <p>
              ゲームプロダクトマネージャー
              <br />
            </p>
          </li>
        </ul>
      </div>
    </div>
    <template v-if="showModal">
      <Modal><NewCardItem v-bind:cardInfo="cardInfo" /></Modal
    ></template>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import NewCardItem from "@/components/NewCardItem";
import { contractConfig } from "./../../config/address";
import CardShop from "./../../config/contract/CardShop.json";
import CardReward from "./../../config/contract/CardReward.json";
import Token from "./../../config/contract/Token.json";
import Fighter from "./../../config/contract/Fighter.json";
import Web3 from "web3";
export default {
  components: { NewCardItem, Modal },
  data() {
    return {
      defaultAccount: "",
      cardInfo: { name: 123, quality: "5", heroId: "1" },
      loading: false,
      showModal: false,
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
      NETWORK: contractConfig.rpc,
      cardShop: {
        contract: "",
        address: contractConfig.CardShop,
      },
      CardReward: { contract: "", address: contractConfig.CardReward },
      tokenContract: { contract: "", address: contractConfig.Token },
      Fighter: { contract: "", address: contractConfig.Fighter },
    };
  },
  async mounted() {
    const arr = [];
    for (var i = 0; i < 32; i++) {
      arr.push({
        amount: "1000",
        heroId: i + 1,
        quality: "5",
        rate: "90",
      });
    }
    this.cardInfoList = arr;
    await this.initWeb3();
    await this.mountedFunc();
  },
  methods: {
    async lottery() {
      await this.buyCard();
    },
    async getReward() {
      this.Fighter.contract = new window.web3.eth.Contract(
        Fighter.abi,
        this.Fighter.address
      );
      const account = await this.$store.state.defaultAccount;
      const res = await this.Fighter.contract.methods.getReward(account).call();
      const res1 = await this.Fighter.contract.methods
        .claim()
        .send({ from: account, gas: 200000 });

      console.log(res, res1, "=======");
    },
    async exchangeCard() {
      this.CardReward.contract = new window.web3.eth.Contract(
        CardReward.abi,
        this.CardReward.address
      );
      const account = await this.$store.state.defaultAccount;
      this.CardReward.contract.methods
        .exchange("1")
        .send({ from: account, gas: 200000 });
    },
    async buyCard() {
      this.cardShop.contract = new window.web3.eth.Contract(
        CardShop.abi,
        this.cardShop.address
      );
      const account = await this.$store.state.defaultAccount;
      this.tokenContract.contract = new window.web3.eth.Contract(
        Token.abi,
        this.tokenContract.address
      );
      const input = this.tokenContract.contract.methods
        .approve(this.cardShop.address, window.web3.utils.toWei("1000"))
        .encodeABI();
      await this._promise(account, this.tokenContract.address, input);
      const _that = this;
      _that.loading = true;
      this.cardShop.contract.methods
        .buy("DBFZ")
        .send({ from: account })
        .then(function (res) {
          _that.loading = false;
          _that.cardInfo = res.events.Buy.returnValues;
          _that.showModal = true;
          setTimeout(() => {
            _that.showModal = false;
          }, 3000);
        });
    },
    async mountedFunc() {
      console.log(this.cardInfoList, "this.cardInfoList=====");
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
@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
.loader {
  position: absolute;
  width: 220px;
  height: 220px;
  display: inline-block;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 10px solid #eabb0a;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 10px solid #eabb0a;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 10px solid #eabb0a;
}

.card-modal {
  font-size: 30px;
  text-align: center;
  color: #eae50a;
  padding-top: 220px;
  width: 100%;
  position: relative;
  // background: rgba(0, 0, 0, 0.5);
  // position: fixed;
  // width: 100%;
  // height: 100%;
  // left: 0;
  // top: 0;
  // z-index: 9999;
  // img{
  //   position: absolute;
  //   top: 20%;
  //   left: 50%;
  //   transform: translate(-50%,-50%);
  // }
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
#loading {
  -webkit-animation: rotation 2s infinite linear;
}

.card-shop-get {
  width: 200px;
  margin: 0 auto;
  margin-top: -180px;
  cursor: pointer;
  img {
    width: 100%;
  }
}
.my-card-container {
  .lz {
    position: relative;
    top: -100px;
  }
  & > img {
    width: 30%;
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
.header-container,
.card-shop-container {
  img {
    width: 100%;
  }
  cursor: pointer;
}
.card-shop-container {
  height: 800px;
  background: url(../img/new/card_shop_ja.png) no-repeat;
  background-size: 100% auto;
}
::-webkit-scrollbar {
  display: none;
}
.rank-container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  height: 600px;
  background: url(./../img/new/rank.png) no-repeat;
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
  // padding-top: 68px;
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
