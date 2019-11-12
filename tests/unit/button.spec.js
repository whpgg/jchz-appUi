import chai, { expect } from "chai";
import Button from "../../src/button";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import Vue from "vue";
chai.use(sinonChai);
import { mount } from "@vue/test-utils";

describe("button", () => {
  it("存在.", () => {
    expect(Button).to.be.ok;
  });
  it("可以设置icon.", () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: "setting"
      }
    });
    const useElement = wrapper.find("use");
    expect(useElement.attributes()["href"]).to.equal("#isetting");
  });
  it("可以设置loading.", () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: "setting",
        loading: true
      }
    });
    const vm = wrapper.vm;
    const useElements = vm.$el.querySelectorAll("use");
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute("xlink:href")).to.equal("#iLoading");
  });
  xit("icon 默认的 order 是 1", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "setting"
      }
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
  });
  xit("设置 iconPosition 可以改变 order", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "setting",
        iconPosition: "right"
      }
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).order).to.eq("2");
    vm.$el.remove();
    vm.$destroy();
  });
  it("点击 button 触发 click 事件", () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: "setting"
      }
    });
    const vm = wrapper.vm;
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
});
