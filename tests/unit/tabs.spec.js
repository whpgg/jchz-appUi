import { expect } from "chai";
import Vue from "vue";
import Tabs from "../../src/tabs";
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

describe("Tabs", () => {
  it("存在.", () => {
    expect(Tabs).to.be.ok;
  });
});
