import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import Vue from "vue";
chai.use(sinonChai);
import { mount } from "@vue/test-utils";
import Input from "../../src/input";

chai.use(sinonChai);

describe("Input", () => {
  it("存在.", () => {
    expect(Input).to.exist;
  });
  it("接受value", () => {
    const wrapper = mount(Input, {
      propsData: {
        value: "1"
      }
    });
    const inputElement = wrapper.vm.$el.querySelector("input");
    expect(inputElement.value).to.equal("1");
  });
  it("接受disabled", () => {
    const wrapper = mount(Input, {
      propsData: {
        disabled: true
      }
    });
    const inputElement = wrapper.vm.$el.querySelector("input");
    expect(inputElement.disabled).to.equal(true);
  });
  it("接受readonly", () => {
    const wrapper = mount(Input, {
      propsData: {
        readonly: true
      }
    });
    const inputElement = wrapper.vm.$el.querySelector("input");
    expect(inputElement.readOnly).to.equal(true);
  });
  it("接受error", () => {
    const wrapper = mount(Input, {
      propsData: {
        error: "error"
      }
    });
    const inputElement = wrapper.vm.$el.querySelector("use");
    expect(inputElement.getAttribute("xlink:href")).to.equal("#ierror");
    const errorMessage = wrapper.vm.$el.querySelector(".errorMessage");
    expect(errorMessage.innerHTML).to.equal("error");
  });
  describe("事件", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it("支持change、input、focus、blur 事件", () => {
      ["change", "input", "focus", "blur"].forEach(eventName => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        let event = new Event(eventName);
        let inputElement = vm.$el.querySelector("input");
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(inputElement.value);
      });
    });
  });
});
