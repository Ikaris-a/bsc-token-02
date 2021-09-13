export const state = {
  defaultAccount: "",
  lang: "JP",
  balacne: "",
  walletClose: false,
  waning: false
};
export const mutations = {
  changeLanguage(state) {
    state.lang = state.lang === "JP" ? "EN" : "JP";
  }
};1