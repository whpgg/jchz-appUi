<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span
        @click="select(index - 1)"
        v-for="index in childrenLength"
        :key="index"
        :class="{ active: selectedIndex === index - 1 }"
      >
        {{ index }}
      </span>
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
  data() {
    return {
      childrenLength: 0
    };
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) > 0
        ? this.names.indexOf(this.selected)
        : 0;
    },
    names() {
      return this.$children.map(vm => vm.name);
    }
  },
  mounted() {
    this.updateChildren(this.getSelected());
    this.playAutomatically();
    this.childrenLength = this.$children.length;
  },
  updated() {
    this.updateChildren(this.getSelected());
  },
  methods: {
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected());
      let run = () => {
        if (index === this.names.length) {
          index = 0;
        }
        this.$emit("update:selected", this.names[++index]);
        setTimeout(run, 3000);
      };
      setTimeout(run, 3000);
    },
    updateChildren(selected) {
      this.$children.forEach(vm => {
        vm.selected = selected;
        let newIndex = this.names.indexOf(selected);
        let oldIndex = this.names.indexOf(vm.name);
        vm.reverse = newIndex > oldIndex ? false : true;
      });
    },
    select(index) {
      this.$emit("update:selected", this.names[index]);
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
  &-dots {
    > .active {
      border: 1px solid red;
    }
  }
}
</style>
