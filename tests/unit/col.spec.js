import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Col from "../../src/col";

chai.use(sinonChai);

describe("col", () => {
  it("存在.", () => {
    expect(Col).to.exist;
  });
  it("接受 span 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        span: 1
      }
    });
    expect(wrapper.classes()).contain("col-1");
  });
  it("接受 offset 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: 1
      }
    });
    expect(wrapper.classes()).contain("offset-1");
  });
  it("接受 pc 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        pc: { span: 1, offset: 1 }
      }
    });
    expect(wrapper.classes()).contain("col-pc-1");
    expect(wrapper.classes()).contain("offset-pc-1");
  });
  it("接受 ipad 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        ipad: { span: 1, offset: 1 }
      }
    });
    expect(wrapper.classes()).contain("col-ipad-1");
    expect(wrapper.classes()).contain("offset-ipad-1");
  });
  it("接受 narrowPc 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        narrowPc: { span: 1, offset: 1 }
      }
    });
    expect(wrapper.classes()).contain("col-narrow-pc-1");
    expect(wrapper.classes()).contain("offset-narrow-pc-1");
  });
  it("接受 widePc 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        widePc: { span: 1, offset: 1 }
      }
    });
    expect(wrapper.classes()).contain("col-wide-pc-1");
    expect(wrapper.classes()).contain("offset-wide-pc-1");
  });
});
