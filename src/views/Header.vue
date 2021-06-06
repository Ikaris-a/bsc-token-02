<template>
  <div class="header">
    <div class="content width_1200">
      <div class="l_box">
        <div class="logo">memory coin</div>
        <ul>
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
        <div class="connext_btn">连接</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      menuList: [
        { text: "首页", path: "/index" },
        { text: "NFT", path: "/nft" },
        { text: "SWAP", path: "/swap" },
        { text: "捐赠", path: "/donate" },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    goPage(path) {
      this.$router.push(path);
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.header {
  height: 68px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.29);
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px;
  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
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
        font-size: 18px;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          margin-right: 40px;
          cursor: pointer;
          &:hover,
          &.active {
            color: #5fd7e1;
          }
        }
      }
    }

    .r_box {
      .connext_btn {
        background-color: #5fd7e1;
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
</style>
