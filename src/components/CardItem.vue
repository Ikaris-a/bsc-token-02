<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="cardStyle">
      <div :class="dataItem.urlIndex + ' card-icon'" />
      <div class="card-bg" :style="[cardBgTransform]">
        <div></div>
      </div>
      <div class="card-info">
        <div name="header">{{ dataItem.name }}</div>
        <div name="content">{{ dataItem.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["dataImage", "dataItem", "defaultCard"],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`,
      };
    },
  },
  methods: {
    handleMouseMove() {
      //   this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      //   this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      //   clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      //   this.mouseLeaveDelay = setTimeout(() => {
      //     this.mouseX = 0;
      //     this.mouseY = 0;
      //   }, 1000);
    },
  },
};
</script>

<style scoped lang="less">
.card {
  position: relative;
  .card-icon {
    width: 130px;
    height: 150px;
    position: absolute;
    top: 30px;
    z-index: 100;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
  }
}
.card-icon.sunwukong {
  background: url(./card/character_1.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.beijita {
  background: url(./card/character_2.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.buou {
  background: url(./card/character_3.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
// .card-icon.beijita {
//   background: url(./card/character_4.png) no-repeat;
//   background-size: auto 100%;
//   background-position: center center;
// }
.card-icon.dende {
  background: url(./card/character_5.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.kelin {
  background: url(./card/character_6.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.beijiewang {
  background: url(./card/character_7.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.kelin0 {
  background: url(./card/character_8.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.kelin1 {
  background: url(./card/character_9.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.kelin2 {
  background: url(./card/character_10.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.kelin3 {
  background: url(./card/character_11.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-icon.kelin4 {
  background: url(./card/character_12.png) no-repeat;
  background-size: auto 100%;
  background-position: center center;
}
.card-bg {
  background: url(./card/cards.png) no-repeat,
    url(./card/cards_bgimg.png) no-repeat;
  background-size: 258px 375px, 200px 200px;
  background-position: 0 0, 30px 40px;
}
</style>
