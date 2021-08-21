<template>
  <div class="footer-container">
    <div class="title-info width_1200">
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
      <div>@2021 DBFZ @商家徽标 株式会社ＴＯＫＹＯ</div>
      <div>日本橋茅場町</div>
    </div>
    <div class="footer-right">
      <a>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADC0lEQVRYR82ZV4sUQRSFvzVnMSCIGDEnREQRRRQVUX+wL4oI4oOYFRPmwJrTGldd5Ruql7bt3rk9szN0Pe1uV906fe+tc071DtD5mAcsBOYCs4CpwKQU7hfwA/gMfATeAO872Wqg5qJpwEpgCTC95tpvwHPgIfA9ujYKcAqwDlgGTIgGr5g3AjwB7gDD7WJFAJqtzYAgx3MI7kbKamXcsQD6bAuwfDxRlcR6DFwH/pTtUwVwIrADWNRjcFn4V8AF4HdxvzKA/m1nH8HlQZ4vZrIM4NY+lLWqMJb7Wv5hEaAHYnufylq1zaX8wckD9JQe6MFprfu+nu7TGQXlAXpiV9SN1qP5j9LJJgOoQhwcBxJuh1c1+QnMaTNRMj+l4mQANwCr20Xv8LmbvUjq8Tol4RiMJqcq7D3gVgbwUAfa2g7vJ+Ap8Kwgafb6kXaLAbN9UoC6kr2BBZEplk9DILAPaYGkbwt9Sb9L/rsiwYCzAlwDrA8uKJumRL1NoAYLaiAY3Y/cZkYca5PxiGx5W4BK2uLI7MIcLZOZ0pl8LTzTG25KbaM6mNlsmL2ohA4KcD8wOwjQhn+Za/gygdeSbQTeARdL9NX+izqjIQFGFuiO76eMVXk4XbUyuSC9gGUtvsCMRGfBfDAswOMB/ruZAJYF1sBKUfayP99NZrRsbl0pHYkCdLOhxGceBO8Zjvkpa7aI2dKAqgJVw75cFU0f0AIYKXExpidSnrPZjaGPuwwIfqyxJ71UFGOrxHUOSVXgc4lqxtrYvY4C8mJ0tA5JpzSTbeIV80RgR6+n+wLz8lNaNNMtUbckKUWVPuS8MvrxbuMprzNaRN2t1NmLZwApZHdSDE1n8e67DVhaB10mda7pxiwoc1cTuOwyL1deSaSeYarb66NmwQDd2C3BWInJhexY5gdapqQchwMWKx/iH7vVS8OqTgt2Zo3y/mdYXdtoyy/Axl+aBFlXK2tULTy18tqZRWj0xV2Qjf/0IchGfzzKSt3oz2/5jm7sB8w8yEZ/As4DbexH9DIS68u/If4CJmC1oWrEpCwAAAAASUVORK5CYII="
          alt
        />
      </a>
      <a>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEi0lEQVRYR82Zf0ijdRzH39PbuXQ3K8PjOLM754/l5akrZQ0xs9PEoH8cmZScYE78Y5WE4EAOQVhIk1QMTUgolFgYXK5UlimeqSmjhUZ3cqI5zbI76/qhm+ec8Rl76jnPZ8/zmMo+f+77+fHa97vPj+93EhxcHgLwCIBIAHIAYQBO+N15AGwB+BvAHwBuA/j9IKEkIo1kAM4DOAvgAZG2LgA/AVgE4BZqKxTwJIAkALEAQoQ659DzAnACmANwl8+XEEDarScAEORhCsF9799VTr+BAGktBcBjh0m1j68lALMAdveLwwUYCuApANFHDMe4/xWAHcDO3nj7AdJnmccIx4ac3ruT+wFePIZj5ToYOu4Z9uJeQEoI9TEdK1eYb9mJwwakLH32CLJV7Pel7B5hShAbkDL2nFhvR6T/oz+zwQBSh3juEIqwjzc2Njass7MzX6VSpUil0pNOp/NmbW3tF6Ojo3dovbi4+LTFYlkL8OWomH9FHYcBfBxAfKDdqKurUxUUFKRmZWVZAullZmaestlspsjIyHvq59bW1p3x8fGrKpXq4tLS0pxWq/2YZ/fnAVxnAC/x9dbJyclXNRrNS2NjY93Z2dmfcDmfn59/S6lUPsO1vry8PD0wMPClxWKZGx4e9u0oh1DvHiJAmkqy+H5LDofjtbS0tBdJb2VlxV5ZWflef3//OtuOdm9qauojAFToOcVut3+akZHxIV9MAF8TYAIAFZ9yb2/vpaKiotcZPY/HszE9PW1taGgYHBwc/I0+NxqNCSaTqSmQr5mZmc9TU1M7+eL5128QILW0M3wG8fHxstnZ2Q6ZTPbwHl3v+vr6TafTecPlcrm1Wm1xIF/d3d3m0tLSa3zx/Os/E2AOgFN8Bi0tLU8mJiaeyc/PLwsJCTnwZNPc3Hylurr6O754/vW/CPB5IcV5ZGSkKCcn57JAx5xqeXl5l4eGhoRO13cJ8AUh9a+wsDDKarW+/392z+Vy3QoPDy8X8SW9ggHJaU9PT3ZJScmbEomEuXuIiAU4HI7P1Gr1ByKMfICCjpichoWFSTo6Op7W6XSvyOXyR0UEItVdg8HwRltbG7UxoeI7YkFJwnhcW1t7Ozo6+oLQCIzewsLCNaVSaRZp50sSQWWGcVxWVna2vb3dJJPJqMALku3t7T91Ol11X1/fLUEG/yn5yoygQs12nJub+2BTU5MuLi4uXaFQBDzq3d1dT2Nj4xWj0UgXJLHiK9SCWh3bc2hoqMRkMqWUl5eXRUVFcQ4ZXq93u6ur652KiopvxJL59X2tjiTgsJCenh5RVVV1QaFQhCckJJxPSkrSRkREnA4UdGNj4xez2fxufX399QPC/TsskD3vuFVTUxNvMBhejomJUQcqM5ubm7cnJiaser2+f3FxkZ4/Dir3jFuCB1aNRqPQ6/UpycnJ5+RyeaRUKj3hdrvdq6urqzab7YfW1taFnZ37bo9iIe8bWMlBUI/8BBj0lyaCDOprJ/M7CeqLO0EG/dMHQQb14xFz1EH9/MauW0H7gMmGDOonYDZo0D6i79eqjuVviH8AQYFjsMXEyrwAAAAASUVORK5CYII="
          alt
        />
      </a>
    </div>
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
  min-height: 400px;
  padding-top: 100px;
  background: url(./img/new/footer.png) no-repeat;
  background-size: cover;
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
</style>
