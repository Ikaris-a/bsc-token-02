<template>
  <div class="donate_main">
    <div class="inner width_1200">
      <div class="txta_box">
        <div class="content">
          <p class="name">捐赠</p>
          <div class="deac">
            <p class="deac1">第一期</p>
            <p class="deac2">兑换比例：1HT={{ money }}mmc</p>
          </div>
          <div class="mount1">
            <span class="mon_name">从</span>
            <div class="b_mon">
              <input class="money" v-model="startMoney" placeholder="0.00" />
              <div class="list">
                <div class="current">
                  <i class="icon" :class="activeB.icon"></i
                  ><span>{{ activeB.text }}</span
                  ><i
                    class="xiala"
                    @click="setShow"
                    :class="{ active: showList }"
                  ></i>
                </div>
                <ul v-if="showList">
                  <li
                    v-for="item in bList"
                    :key="item.text"
                    @click="setBz(item)"
                  >
                    {{ item.text }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mount1">
            <span class="mon_name">至</span>
            <div class="b_mon">
              <input class="money" v-model="endMoney" placeholder="0.00" />
              <div class="list">
                <div class="current">
                  <span>MMC</span>
                </div>
              </div>
            </div>
          </div>
          <div class="submit">确定捐赠</div>
        </div>
      </div>
      <div class="text_box">
        <p>捐赠总量：2.8亿枚MMC 进行四次捐赠，每次捐赠量为：</p>
        <p>
          第1次捐赠总量：15000
          HT=70000000eMMC，单个地址钱包捐赠最低量1HT，最多为5HT。
        </p>
        <p>
          第2次捐赠总量：20000 HT=70000000eMMC
          ，单个地址钱包捐赠最低量1HT，最多为5HT。
        </p>
        <p>
          第3次捐赠总量：30000
          HT=70000000eMMC，单个地址钱包捐赠最低量1HT，最多为5HT。
        </p>
        <p>
          第4次捐赠总量：35000
          HT=70000000eMMC，单个地址钱包捐赠最低量1HT，最多为5HT。
        </p>
        <p>
          第1次捐赠总量：15000
          HT=70000000eMMC，单个地址钱包捐赠最低量1HT，最多为5HT。
        </p>
        <p>兑换：</p>
        <p>
          捐赠后，将会实时获得eMMC，在MMC开启流动池24小时内开启eMMC兑换MMC，MMC
          分6个月兑换，前1-5个月每月兑换15%，第6个月兑换25%。
        </p>
        <p>温馨提示：请勿对获得eMM进行转账等操作。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 0,
      startMoney: 0.0,
      endMoney: 0.0,
      showList: false,
      bList: [
        { text: "比特币0", icon: "BTC" },
        { text: "比特币1", icon: "BTC1" },
        { text: "比特币2", icon: "BTC2" },
      ],
      activeB: { text: "比特币0", icon: "BTC" },
    };
  },
  mounted() {},
  methods: {
    setBz(i) {
      this.activeB.text = i.text;
      this.activeB.icon = i.icon;
    },
    setShow() {
      this.showList = !this.showList;
    },
  },
};
</script>

<style scoped lang="less">
.donate_main {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: url("./../img/donate_bg.png") no-repeat center top;
  background-size: 100% 100%;
  padding-top: 130px;
  color: #fff;
  .inner {
    .txta_box {
      background-color: rgba(255, 255, 255, 0.29);
      width: 560px;
      margin: 0 auto;
      border-radius: 4px;
      padding: 43px 67px 75px;
      animation-name: fadeInLeft;
      animation-fill-mode: both;
      animation-duration: 1s;
      .content {
        width: 100%;
        text-align: left;
        font-family: PingFangSC-Medium, PingFang SC;
        .name {
          font-size: 26px;
          font-weight: 500;
          color: #5fd7e1;
          line-height: 42px;
          text-align: left;
          margin-bottom: 10px;
        }
        .deac {
          .deac1,
          .deac2 {
            text-align: left;
          }
        }
        .mount1 {
          height: 117px;
          background: url("./../img/ta_bg.png") no-repeat center top;
          background-size: 100% 100%;
          padding: 17px 26px;
          margin-top: 30px;
          .mon_name {
            color: #fff;
          }
          .b_mon {
            display: flex;
            height: 50px;
            margin-top: 35px;
            .money {
              color: #5fd7e1;
              background-color: transparent;
              outline: none;
              padding-right: 10px;
              min-width: 300px;
              font-size: 16px;
              flex: 1;
              border: none;
            }
          }
        }
        .list {
          margin-left: 20px;
          position: relative;
          .current {
            display: flex;
            align-items: center;
            height: 100%;
            i {
              display: block;
              width: 20px;
              height: 20px;
            }
            .icon.BTC {
              background: url("./../img/bicon.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
            }
            .icon.BTC1 {
              background: url("./../img/bicon.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
            }
            .icon.BTC2 {
              background: url("./../img/bicon.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
            }
            span {
              margin: 0 15px;
              color: #fff;
            }
            .xiala {
              background: url("./../img/xia.png") no-repeat center top;
              background-size: contain;
              background-position: center center;
              cursor: pointer;
              &:hover,
              &.active {
                transform: rotate(180deg);
                transition: all 0.3s;
              }
            }
          }
          ul {
            position: absolute;
            right: 0;
            top: 40px;
            background-color: #fff;
            color: #000;
            border-radius: 4px;
            overflow: hidden;
            li {
              cursor: pointer;
              padding: 4px 20px;
              line-height: 30px;
              &:hover {
                background-color: #5fd7e1;
                color: #fff;
              }
            }
          }
        }
      }
      .submit {
        background: #5fd7e1;
        color: #fff;
        border-radius: 4px;
        height: 52px;
        text-align: center;
        margin-top: 30px;
        line-height: 52px;
      }
    }
    .text_box {
      width: 694px;
      margin: 26px auto;
      p {
        text-align: left;
        font-size: 13px;
        line-height: 26px;
        color: #fff;
      }
    }
  }
}
</style>
