<template>
  <div style="padding:10px">
    <g-cascader
      :source.sync="source"
      :selected.sync="selected"
      :load-data="loadData"
    ></g-cascader>
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
    ajax(0).then(result => {
      this.source = result;
    });
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
