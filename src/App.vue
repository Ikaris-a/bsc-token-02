<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import "./views/css/base.css";
import "./views/css/animate.css";
import Web3 from "web3";
import necABI from "./config/abi.json";
import Header from "./views/Header.vue";
export default {
  name: "App",
  data() {
    return {
      NETWORK_ID: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      defaultAccount: "",
      necContract: "",
      contractAddress: "0xdE6e5108F4BB805F34B6AA8d85049Be9ce9BE27D",
      addressList: [],
    };
  },
  components: { Header },
  async mounted() {
    await this.mountedFunc();
    await this.upList();
  },
  created() {},
  computed: {},
  methods: {
    async upList() {
      await this.initContract();
      const address = await this.necContract.methods
        .getUpList(this.defaultAccount)
        .call();
      this.addressList = address;
      console.log(address, "=======");
    },
    async bindUpAddress() {
      await this.initContract();
      console.log(this.necContract);
      const input = await this.necContract.methods
        .setUpReference(this.contractAddress)
        .encodeABI();
      this._promise(this.defaultAccount, this.contractAddress, input).then(
        (res) => {
          console.log(res);
        }
      );
    },
    _promise(from, to, input) {
      let web3 = window.web3;
      return new Promise((resolve, reject) => {
        try {
          web3.eth.sendTransaction(
            {
              from: from,
              to: to,
              value: 0,
              input: input,
            },
            function(error, res) {
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
    async initContract() {
      const web3 = new Web3(new Web3.providers.HttpProvider(this.NETWORK_ID));
      this.necContract = new web3.eth.Contract(necABI, this.contractAddress);
    },
    handleChainChanged() {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
    handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
      } else if (accounts[0] !== this.defaultAccount) {
        this.defaultAccount = accounts[0];
        this.$store.commit("defaultAccountFun", accounts[0]);
        window.location.reload();
      }
    },
    async mountedFunc() {
      // await this.initWeb3();
      console.log(ethereum);
      let ethereum = window.ethereum;
      let web3 = window.web3;
      if (typeof ethereum !== "undefined" && web3) {
        try {
          // metaMask连接钱包的方法
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          // 判断是否已经连接钱包
          console.log(accounts, "=====");
          this.$store.commit("defaultAccountFun", accounts[0]);
          this.defaultAccount = accounts[0];
          if (Array.isArray(accounts) && accounts.length > 0) {
            web3.eth.defaultAccount = accounts[0];
            console.log(this.$store.state.defaultAccount, "-------");
            localStorage.removeItem("walletconnect");
          }
          this.initContract();
          // 此事件是在页面加载时触发的。
          //如果帐户数组非空，则您已经连接
          ethereum.on("accountsChanged", this.handleAccountsChanged);
        } catch (error) {
          console.log(error, "error");
        }
      }
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
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  overflow: hidden;
  color: #fff;
}
</style>
