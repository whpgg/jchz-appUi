<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "jcSlides",
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.updateChildren(this.getSelected());
    this.playAutomatically();
  },
  updated() {
    this.updateChildren(this.getSelected());
  },
  methods: {
    playAutomatically() {
      const names = this.$children.map(vm => vm.name);
      let index = names.indexOf(this.getSelected());
      let run = () => {
        if (index === names.length) {
          index = 0;
        }
        this.$emit("update:selected", names[++index]);
        setTimeout(run, 3000);
      };
      setTimeout(run, 3000);
    },
    updateChildren(selected) {
      this.$children.forEach(vm => {
        vm.selected = selected;
        const names = this.$children.map(vm => vm.name);
        let newIndex = names.indexOf(selected);
        let oldIndex = names.indexOf(vm.name);
        vm.reverse = newIndex > oldIndex ? false : true;
      });
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    }
  }
};
</script>
<style lang="scss" scoped>
.g-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
}
</style>
