<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || "&nbsp;" }}
    </div>
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
    },
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      popoverVisible: false
    };
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join("/");
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
      let lastItem = newSelected[newSelected.length - 1];
      let simplest = (children, id) => {
        return children.filter(item => item.id == id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      let uodateSource = result => {
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        this.$emit("update:source", copy);
      };
      this.loadData(lastItem, uodateSource);
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
    border: 1px solid $border-color;
    border-radius: $border-radius;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    height: $input-height;
    min-width: 5em;
  }
  .popover-wrapper {
    @extend .box-shadow;
    position: absolute;
    display: flex;
    background: #ffffff;
    top: 100%;
    left: 0;
    margin-top: 4px;
  }
}
</style>
