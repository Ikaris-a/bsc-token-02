<template>
  <div class="header">
    <div class="content width_1200">
      <div class="l_box">
        <div class="logo"><img src="./img/logo.png" alt /></div>
        <ul class="menu-container web-menu">
          <li
            class="item"
            v-for="item in menuList"
            :key="item.path"
            :class="{ active: $route.path === item.path }"
            @click="goPage(item.path)"
          >
            {{ item.text }}
          </li>
        </ul>
        <ul class="menu-container mobile-menu" v-if="!menuStatus">
          <li
            class="item"
            v-for="item in menuList"
            :key="item.path"
            :class="{ active: $route.path === item.path }"
            @click="goPage(item.path)"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>

      <div class="r_box">
        <div class="connext_btn" @click="conecWallet">
          {{ interceptAccount !== "..." ? interceptAccount : "Connect" }}
        </div>
      </div>
      <template>
        <div v-if="menuStatus" class="menu-icon" @click="showMenu"></div>
      </template>
      <template>
        <div v-if="!menuStatus" class="menu-icon close" @click="showMenu"></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      menuList: [
        { text: "表紙", path: "/index" },
        // { text: "カードストア", path: "/index" },
        { text: "カードストア", path: "/cardShop" },
        { text: "白書", path: "/whitepaper" },
        // { text: "捐赠", path: "/donate" },
        // { text: "分红", path: "/dividends" },
      ],
      menuStatus: true,
    };
  },
  computed: {
    interceptAccount() {
      const account = this.$store.state.defaultAccount;
      return typeof account === "string"
        ? `${account.substring(0, 4)}...${account.substr(
            account.length - 4,
            account.length
          )}`
        : "";
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    showMenu() {
      this.menuStatus = !this.menuStatus;
    },
    conecWallet() {
      window.location.reload();
    },
    goPage(path) {
      this.menuStatus = true;
      this.$router.push(path);
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.logo {
  img {
    width: 105px;
  }
}
.header {
  height: 68px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.69);
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px;
  z-index: 999;
  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #cecece;
    .l_box {
      text-transform: uppercase;
      display: flex;
      flex: 1;
      align-items: center;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      letter-spacing: 1px;
      .logo {
        margin-right: 40px;
        font-size: 0.3rem;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          margin-right: 40px;
          cursor: pointer;
          &:hover,
          &.active {
            color: #ff993c;
          }
        }
      }
    }

    .r_box {
      .connext_btn {
        background: url(./img/header/fs_001.png) no-repeat;
        background-size: 100% 100%;
        width: 105px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        line-height: 40px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
// @media only screen and (min-width: 1000px) {
//   .mobile-menu {
//     display: none !important;
//   }
// }

// @media only screen and (max-width: 1000px) {
//   .logo {
//     margin-left: 30px;
//   }

//   .web-menu {
//     display: none !important;
//   }
//   .menu-container {
//     width: 100%;
//     position: fixed;
//     top: 68px;
//     background: rgba(0, 0, 0, 0.69);
//     li {
//       height: 68px;
//       line-height: 68px;
//     }
//   }
//   .header .content .l_box ul {
//     display: block;
//   }
//   .menu-icon {
//     width: 32px;
//     height: 28px;
//     margin: 0 20px 0 40px;
//     background: url("./img/gengduo-2@3x.png") no-repeat;
//     background-size: auto 100%;
//     &.close {
//       width: 32px;
//       height: 28px;
//       margin: 0 20px 0 40px;
//       background: url("./img/guanbi@2x.png") no-repeat;
//       background-size: auto 100%;
//     }
//   }
//   .header {
//     // background-color: inherit;
//     // background: #cecece;
//   }
// }
</style>
