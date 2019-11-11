<template>
  <div style="padding:10px">
    <g-cascader :source.sync="source" :selected.sync="selected"></g-cascader>
  </div>
</template>
<script>
import Cascader from "./cascader";
import db from "../test/db";
function ajax(parentid = "0") {
  return new Promise(success => {
    let result = db.filter(item => item.parent_id == parentid);
    result.forEach(node => {
      if (db.filter(item => item.parent_id == node.id).length > 0) {
        node.isLeaf = false;
      } else {
        node.isLeaf = true;
      }
    });
    success(result);
  });
}
export default {
  name: "demo",
  data() {
    return {
      selected: [],
      source: []
    };
  },
  created() {
    this.source = [
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
    ];
  },
  methods: {
    loadData(item, updateSource) {
      let id = item.id;
      ajax(id).then(result => {
        updateSource(result);
      });
    }
  },
  components: {
    "g-cascader": Cascader
  }
};
</script>
