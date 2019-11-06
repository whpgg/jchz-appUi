<template>
  <div class="cascader" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.name"
        @click="leftSelected = item"
      >
        {{ item.name }}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems" :height="height"></cascader-item>
    </div>
  </div>
</template>
<script>
import icon from "./icon";
export default {
  name: "cascader-item",
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    }
  },
  components: { icon }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  .left {
    height: 100%;
    padding: 0.3em 0;
  }
  .right {
    border-left: 1px solid $border-color-light;
    height: 100%;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      fill: grey;
    }
  }
}
</style>
