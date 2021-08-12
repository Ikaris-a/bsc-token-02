<template>
  <div class="index_main">
    <div class=" width_1200">
      <p class="title"></p>
      <div class="container">
        <CardItem
        >
          <h1 slot="header">Canyons</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </CardItem>
           <CardItem
        >
          <h1 slot="header">Canyons</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </CardItem>
        <CardItem
        >
          <h1 slot="header">Beaches</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </CardItem>
        <CardItem
        >
          <h1 slot="header">Trees</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </CardItem>
        <CardItem
        >
          <h1 slot="header">Lakes</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </CardItem>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
export default {
  components: { CardItem },
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
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
  background-size: 100% 100%;
  .bo_text {
    font-family: PingFangSC-Semibold, PingFang SC;
    color: #ffffff;
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
