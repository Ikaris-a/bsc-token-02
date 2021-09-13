import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  lang: "JP",
  defaultAccount: "",
  balacne: "",
  waning: false,
  tpWallet: null,
  walletType: "",
  walletClose: false,
  promiseStatusList: null,
  mobileHamburger: false,
  clientWidth: 0
};
const mutations = {
  langFun(state, res) {
    state.lang = res;
  },
  defaultAccountFun(state, res) {
    state.defaultAccount = res;
  },
  changeLanguage() {
    state.lang = state.lang === "JP" ? "EN" : "JP";
  },
  balacnefun(state, res) {
    state.balacne = res;
  },
  waningfun(state, res) {
    state.waning = res;
  },
  setWalletType(state, res) {
    state.walletType = res;
  },
  getTpWalletfun(state, res) {
    state.tpWallet = res;
  },
  setWalletStatus(state, res) {
    state.walletClose = res;
  },
  setPromiseStatusList(state, res) {
    state.promiseStatusList = res;
  },
  mobileHamburgerfun(state, res) {
    state.mobileHamburger = res;
  },
  clientWidthfun(state, res) {
    state.clientWidth = res;
  }
};
const actions = {};
// const store = () =>
//   new Vuex.Store({
//     state,
//     actions,
//     mutations
//   });
// export default
export default new Vuex.Store({ state, actions, mutations });
