<template>
  <div class="index_main">
    <div class="width_1200">
      <p class="title"></p>
      <div class="title-info">
        <h2>
          DBFZ Token 看似簡單，瘋狂的樂趣 歡迎加入《DBFZ
          Token》
        </h2>
        <p>這是一款上手容易但絕對讓你愛不釋手的区块链卡牌遊戲！即将来临...</p>
      </div>
      <div class="container">
        <template v-for="index in dataConfig">
          <div class="lottery" :key="index"></div>
        </template>
      </div>
      <div class="title-info">
        <h2>抽取卡牌</h2>
        <p>你可以通过购买卡牌,解锁无限玩法...(质押战力获取DBFZ，PK...)</p>
      </div>
      <div class="container">
        <template v-for="(item, index) in dataConfig">
          <CardItem :key="index" :dataItem="item"> </CardItem>
        </template>
      </div>
        <div class="title-info">
        <h2>上线将释放所有卡牌～</h2>
      </div>
       <div class="lottery"></div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
export default {
  components: { CardItem },
  data() {
    return {
      dataConfig: [
        {
          name: "孙悟空",
          desc: "赛亚人巴达克之子",
          urlIndex: "sunwukong",
        },
        {
          name: "贝吉塔",
          desc: "(超级)赛亚人",
          urlIndex: "beijita",
        },
        {
          name: "布欧",
          desc: "亦正亦邪",
          urlIndex: "buou",
        },
        {
          name: "Dende",
          desc: "战斗型那美克星人",
          urlIndex: "dende",
        },
        {
          name: "克林",
          desc: "多林寺的弟子",
          urlIndex: "kelin",
        },
        {
          name: "北界王",
          desc: "管理北银河的神",
          urlIndex: "beijiewang",
        },
        {
          name: "******",
          desc: "",
          urlIndex: "kelin1",
        },
        {
          name: "******" ,
          desc: "",
          urlIndex: "kelin2",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.index_main {
  width: 100%;
  overflow: hidden;
  padding-top: 68px;
  padding-bottom: 80px;
  .lottery {
    width: 258px;
    height: 375px;
    margin: 0 10px;
    cursor: pointer;
    display: inline-block;
    background: url(../../components/card/cards_back.png) no-repeat;
    background-size: 100% auto;
  }
  .title-info {
    padding: 40px;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    p {
      text-align: left;
      font-size: 1rem;
    }
  }
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
