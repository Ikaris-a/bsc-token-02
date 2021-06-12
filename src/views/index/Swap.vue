<template>
  <div class="swap_main">
    <div class="bo_text width_1200">
      <p class="title">swap 即将开始</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.swap_main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("./../img/index_bg.gif") no-repeat center top;
  background-size: 100% 100%;
  .bo_text {
    font-family: PingFangSC-Semibold, PingFang SC;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      font-size: 60px;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: #5fd7e1;
      font-weight: 600;
      animation-name: fadeInRight;
      animation-fill-mode: both;
      animation-duration: 1s;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .swap_main .bo_text .title,
  .swap_main .bo_text {
    width: 100%;
  }
  .swap_main .bo_text {
    .title {
      font-size: 34px;
    }
  }
}
</style>
