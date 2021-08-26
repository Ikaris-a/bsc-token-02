<template>
  <div
    class="modal-container"
  >
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["data"],
  data: () => ({
  
  }),
  methods: {

  }
};
</script>

<style scoped lang="less">
.modal-container{
    position: fixed;
    padding-top: 400px;
    text-align: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
}
</style>
