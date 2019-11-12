import { expect } from "chai";
import Vue from "vue";
import Tabs from "../../src/tabs";
import sinon from "sinon";
import TabsNav from "../../src/tabs-nav";
import TabsBody from "../../src/tabs-body";
import TabsItem from "../../src/tabs-item";
import TabsPane from "../../src/tabs-pane";
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-nav", TabsNav);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {
  it("存在.", () => {
    expect(TabsItem).to.be.ok;
  });
  it("接受name属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx"
      }
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
  });
  it("接受disabled属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount();
    expect(vm.$el.classList.contains("disabled")).to.eq(true);
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.all;
  });
});
