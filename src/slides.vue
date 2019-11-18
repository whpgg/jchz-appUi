<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined
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
      if (this.timerId) return;
      let index = this.names.indexOf(this.getSelected());
      let run = () => {
        if (index === this.names.length) {
          index = 0;
        }
        this.select(++index);
        this.timerId = setTimeout(run, 3000);
      };
      this.timerId = setTimeout(run, 3000);
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    updateChildren(selected) {
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (this.timerId) {
          if (
            this.lastSelectedIndex == this.$children.length - 1 &&
            this.selectedIndex == 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex == 0 &&
            this.selectedIndex == this.$children.length - 1
          ) {
            reverse = true;
          }
        }

        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    > span {
      width: 1.2em;
      height: 1.2em;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #dddddd;
      border-radius: 50%;
      margin: 0 0.2em;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: black;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
