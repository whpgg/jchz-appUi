<template>
  <div class="cascader" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.name"
        @click="onClickLabel(item)"
      >
        <span class="name">
          {{ item.name }}
        </span>
        <icon class="icon" v-if="!item.isLeaf" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></cascader-item>
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
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter(
          item => item.name === this.selected[this.level].name
        );
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  },
  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
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
    overflow: auto;
  }
  .right {
    border-left: 1px solid $border-color-light;
    height: 100%;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    &:hover {
      background: $grey;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icon {
      margin-left: auto;
      fill: grey;
    }
  }
}
</style>
