<template>
  <div>
    {{ selected }}
    <g-cascader
      :source="source"
      :selected="selected"
      @update:selected="selected = $event"
    ></g-cascader>
  </div>
</template>
<script>
import Cascader from "./cascader";
export default {
  name: "demo",
  data() {
    return {
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
            },
            {
              name: "嘉兴",
              children: [{ name: "南湖" }, { name: "秀杰" }, { name: "嘉善" }]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
          ]
        }
      ]
    };
  },
  components: {
    "g-cascader": Cascader
  }
};
</script>
