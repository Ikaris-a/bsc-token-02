<template>
  <div class="card-item-container hero-1 r">123123</div>
</template>

<script>
export default {
  name: "NewCardItem",
  props: ["cardInfo"],
  data() {
    return { data: 123 };
  },
  mounted() {
    console.log(this.props.cardInfo, "1234=====");
  },
  methods: {},
};
</script>
<style scoped lang="less">
.card-item-container {
  width: 212px;
  height: 328px;
  display: inline-block;
  position: relative;
  &.hero-1 {
    background: url(./../views/img/cardList/1.png) no-repeat;
    background-size: 100% auto;
  }
  &.hero-2 {
    background: url(./../views/img/cardList/1.png) no-repeat;
    background-size: 100% auto;
  }
  &.hero-3 {
    background: url(./../views/img/cardList/1.png) no-repeat;
    background-size: 100% auto;
  }
  &.hero-4 {
    background: url(./../views/img/cardList/1.png) no-repeat;
    background-size: 100% auto;
  }
  &.hero-5 {
    background: url(./../views/img/cardList/1.png) no-repeat;
    background-size: 100% auto;
  }
  &.hero-6 {
    background: url(./../views/img/cardList/1.png) no-repeat;
    background-size: 100% auto;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;
    left: 0;
  }
  &.r {
    &::before {
      background: url(./../views/img/level/r.png) no-repeat;
      background-size: 100% auto;
    }
  }
  &.s {
    &::before {
      background: url(./../views/img/level/s.png) no-repeat;
      background-size: 100% auto;
    }
  }
  &.ss {
    &::before {
      background: url(./../views/img/level/ss.png) no-repeat;
      background-size: 100% auto;
    }
  }
  &.ssr {
    &::before {
      background: url(./../views/img/level/ssr.png) no-repeat;
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
</style>
