<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "jcTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    if (this.$children.length === 0)
      console.warn("子组件只能是tabs-nav 和 tabsbody");
    this.$children.forEach(vm => {
      if (vm.$options.name === "jcTabsNav") {
        vm.$children.forEach(item => {
          if (item.name === this.selected) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
