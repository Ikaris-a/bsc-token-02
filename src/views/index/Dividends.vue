<template>
  <div class="donate_main">
    <div class="inner width_1200">
      <div class="txta_box">
        <div class="content">
          <p class="name">兑换</p>
          <div class="mount1">
            <span class="mon_name">EMMC总额：</span>
            <div class="b_mon">
              <input class="money" v-model="startMoney" placeholder="0.00" />
            </div>
          </div>
          <div class="mount1">
            <span class="mon_name">可兑换MMC数量：</span>
            <div class="b_mon">
              <input class="money" v-model="startMoney" placeholder="0.00" />
            </div>
          </div>
          <div class="submit" @click="changeMMC">确定兑换</div>
        </div>
      </div>

      <div class="txta_box mr-tp">
        <div class="content">
          <p class="name">分红</p>
          <div class="mount1">
            <span class="mon_name">MMC数量：</span>
            <div class="b_mon">
              <input class="money" v-model="mmcAmount" placeholder="0.00" />
            </div>
          </div>
          <div class="mount1">
            <span class="mon_name">可领取HT数量：</span>
            <div class="b_mon">
              <input class="money" v-model="mmcAmount" placeholder="0.00" />
            </div>
          </div>
          <div class="submit" @click="changeMMCClim">确定领取</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import MemoryTokenABI from "./../../config/MemoryToken.json";
import EMemoryTokenABI from "./../../config/EMemoryToken.json";
import BigNumber from "bignumber.js";
export default {
  data() {
    return {
      money: 46666,
      startMoney: 1,
      endMoney: 46666,
      showList: false,
      bList: [
        { text: "HT", icon: "HT" },
        // { text: "比特币1", icon: "BTC1" },
        // { text: "比特币2", icon: "BTC2" },
      ],
      activeB: { text: "HT", icon: "HT" },
      web3: "",
      emmc: "",
      mmc: "",
      emmcAmount: 0,
      mmcAmount: 0,
      climHtAmount: 0,
      NETWORK_ID: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      emmcContractAddress: "0x723A72F181CA77A4a53B02DD86a9b650Ca8C6dBd",
      mmcContractAddress: "0x3a705F43F5114D29bdf13A532d31525e712a0134",
    };
  },
  async mounted() {
    await this.initContract();
  },
  watch: {
    startMoney() {
      this.endMoney = this.startMoney * this.money;
    },
    endMoney() {
      this.startMoney = this.endMoney / this.money;
    },
  },
  computed: {
    defaultAccount() {
      const account = this.$store.state.defaultAccount;
      return account;
    },
  },
  methods: {
    setBz(i) {
      this.activeB.text = i.text;
      this.activeB.icon = i.icon;
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
    _promiseHT(from, to, input, amount) {
      let web3 = window.web3;
      return new Promise((resolve, reject) => {
        try {
          web3.eth.sendTransaction(
            {
              from: from,
              to: to,
              value: amount || 0,
              input: input,
              gas: 200000,
            },
            function (error, res) {
              if (!error) {
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
        web3 = new Web3(web3.currentProvider);
      } else if (window.web3) {
        // 老版 MetaMask Legacy dapp browsers...
        web3 = window.web3.currentProvider;
      } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider(this.NETWORK_ID));
      }
      window.web3 = web3;
    },
    async change() {
      if (this.startMoney < 1) {
        this.startMoney === 1;
      }
      await this.initWeb3();
      const account = this.$store.state.defaultAccount;
      let web3 = window.web3;
      web3.eth.defaultAccount = account;
      let amountTotal = this.startMoney;
      amountTotal = web3.utils.toBN(
        new BigNumber(new BigNumber(amountTotal).times(1e18)).toFixed()
      );
      const input = await this.emmc.methods.donation().encodeABI();
      this._promise(account, this.emmcContractAddress, input, amountTotal);
    },
    async changeMMC() {
      await this.initWeb3();
      const account = this.$store.state.defaultAccount;
      let web3 = window.web3;
      web3.eth.defaultAccount = account;
      const input = await this.mmc.methods.swap().encodeABI();
      this._promiseHT(account, this.mmcContractAddress, input);
    },
    async changeMMCClim() {
      await this.initWeb3();
      const account = this.$store.state.defaultAccount;
      let web3 = window.web3;
      web3.eth.defaultAccount = account;
      const input = await this.mmc.methods.claim().encodeABI();
      this._promiseHT(account, this.mmcContractAddress, input);
    },

    async initContract() {
      this.web3 = new Web3(new Web3.providers.HttpProvider(this.NETWORK_ID));
      this.emmc = new this.web3.eth.Contract(
        EMemoryTokenABI.abi,
        this.emmcContractAddress
      );
      this.mmc = new this.web3.eth.Contract(
        MemoryTokenABI.abi,
        this.mmcContractAddress
      );
      const account = await this.$store.state.defaultAccount;
      this.emmcAmount = await this.emmc.methods.balanceOf(account).call();
      this.startMoney = parseInt(this.emmcAmount / 1e18);
      this.mmcAmount = await this.mmc.methods.getReward(account).call();
      console.log(this.mmcAmount, account, "emmcAmount------");
    },
    setShow() {
      this.showList = !this.showList;
    },
  },
};
</script>

<style scoped lang="less">
.donate_main {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: url("./../img/donate_bg.png") no-repeat center top;
  background-size: 100% 100%;
  padding-top: 130px;
  color: #fff;
  .inner {
    .txta_box {
      background-color: rgba(255, 255, 255, 0.29);
      max-width: 560px;
      margin: 0 auto;
      border-radius: 14px;
      padding: 43px 67px 75px;
      animation-name: fadeInLeft;
      animation-fill-mode: both;
      animation-duration: 1s;
      .content {
        width: 100%;
        text-align: left;
        font-family: PingFangSC-Medium, PingFang SC;
        .name {
          font-size: 26px;
          font-weight: 500;
          color: #5fd7e1;
          line-height: 42px;
          text-align: left;
          margin-bottom: 10px;
        }
        .deac {
          .deac1,
          .deac2 {
            text-align: left;
          }
        }
        .mount1 {
          background: url("./../img/ta_bg.png") no-repeat center top;
          background-size: 100% 100%;
          padding: 17px 26px;
          margin-top: 30px;
          .mon_name {
            color: #fff;
            display: inline-block;
            height: 30px;
            line-height: 30px;
          }
          .b_mon {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            width: 40%;
            .money {
              color: #5fd7e1;
              background-color: transparent;
              outline: none;
              padding-right: 10px;
              min-width: 300px;
              font-size: 16px;
              flex: 1;
              border: none;
            }
          }
        }
        .list {
          margin-left: 20px;
          position: relative;
          .current {
            display: flex;
            align-items: center;
            height: 100%;
            i {
              display: block;
              width: 20px;
              height: 20px;
            }
            .icon.BTC {
              background: url("./../img/bicon.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
            }
            .icon.BTC1 {
              background: url("./../img/bicon.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
            }
            .icon.BTC2 {
              background: url("./../img/bicon.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
            }
            span {
              margin: 0 15px;
              color: #fff;
            }
            .xiala {
              background: url("./../img/xia.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
              cursor: pointer;
              &:hover,
              &.active {
                transform: rotate(180deg);
                transition: all 0.3s;
              }
            }
          }
          ul {
            position: absolute;
            right: 0;
            top: 40px;
            background-color: #fff;
            color: #000;
            border-radius: 4px;
            overflow: hidden;
            li {
              cursor: pointer;
              padding: 4px 20px;
              line-height: 30px;
              &:hover {
                background-color: #5fd7e1;
                color: #fff;
              }
            }
          }
        }
      }
      .submit {
        background: #5fd7e1;
        color: #fff;
        border-radius: 4px;
        height: 52px;
        text-align: center;
        margin-top: 30px;
        line-height: 52px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .text_box {
      width: 694px;
      margin: 26px auto;
      p {
        text-align: left;
        font-size: 13px;
        line-height: 26px;
        color: #fff;
      }
    }
  }
}
@media only screen and (min-width: 1000px) {
  .txta_box {
   width: 30%;
   margin: 0 20px!important;
   display: inline-block;
  }
}
@media only screen and (max-width: 1000px) {
  .donate_main {
    & > div {
      width: 86%;
    }
    .txta_box {
      padding: 20px !important;
    }
    .text_box {
      width: 100% !important;
    }
    .mr-tp {
      margin-top: 30px !important;
    }
  }
}
</style>
