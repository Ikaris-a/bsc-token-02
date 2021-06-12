<template>
  <div class="index_main">
    <div class="bo_text width_1200">
      <p class="title">回忆里的精彩 永远不说再见</p>
      <p class="cont">Wonderful in memories ,Never say goodbye</p>
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
.index_main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("./../img/index_bg.gif") no-repeat center top;
  background-size: 100% 100%;
  .bo_text {
    font-family: PingFangSC-Semibold, PingFang SC;
    color: #ffffff;
    font-weight: 600;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    .bo_text{
      width: 80%;
    }
  }
}
</style>
