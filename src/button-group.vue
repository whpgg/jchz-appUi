<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "jcButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn("g-button-group的子元素应该全是 g-button");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
