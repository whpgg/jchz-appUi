<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item
        :items="source"
        class="popover"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></cascader-item>
    </div>
  </div>
</template>
<script>
import cascaderItem from "./cascader-item";
export default {
  name: "jcCasvader",
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String,
      default: "100px"
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      popoverVisible: false
    };
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  },
  components: { cascaderItem }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover-wrapper {
    @extend .box-shadow;
    position: absolute;
    display: flex;
    background: #ffffff;
    top: 100%;
    left: 0;
  }
}
</style>
