<template>
  <div class="footer-container">
    <div class="title-info width_1200">
      <img src="./img/logo.png" alt class="logo" />
      <div class="contact">
        <a href="https://t.me/DFBZ_bsc">
          <img src="./img/telegram.png" alt />
        </a>
        <a href="https://twitter.com/dbfz_bsc">
          <img src="./img/Twitter.png" alt />
        </a>
      </div>
      <ul class="partners">
        <li>
          <img src="./img/Partners/Partner1.png" alt />
        </li>
        <li>
          <img src="./img/Partners/Partner2.png" alt />
        </li>
        <li>
          <img src="./img/Partners/Partner3.png" alt />
        </li>
        <li>
          <img src="./img/Partners/Partner4.png" alt />
        </li>
        <li>
          <img src="./img/Partners/Partner5.png" alt />
        </li>
        <li>
          <img src="./img/Partners/Partner7.png" alt />
        </li>
        <li>
          <img src="./img/Partners/Partner8.png" alt />
        </li>
      </ul>
    </div>
    <div class="footer-left">
      <div>@2021 DBFZ @ 株式会社ＴＯＫＹＯ 日本橋茅場町</div>
    </div>
    <!-- <div class="footer-right">
    
   
    </div> -->
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
.footer-container {
  min-height: 500px;
  padding-top: 100px;
  background: url(./img/new/footer.png) no-repeat;
  background-size: cover;
}
.logo {
  width: 300px;
}
.footer-container {
  .footer-left {
    font-size: 22px;
    font-weight: 400;
    color: #cecece;
    line-height: 22px;
    opacity: 0.8;
    text-align: center;
    margin: 20px 0;
  }
  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin: 0 20px;
  }
  .footer-right {
    display: inline-block;
    color: #1890ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    a {
      display: inline-block;
      width: 100px;
      margin: 0 20px;
    }
  }
}
.partners {
  margin-top: 20px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  li {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 0 20px;
    vertical-align: top;
    img {
      width: 100%;
    }
  }
}
.contact {
  margin-top: 20px;
  img {
    width: 80px;
  }
  a {
    width: 80px;

    margin: 0 20px;
  }
}
</style>
