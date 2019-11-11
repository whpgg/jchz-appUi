const expect = chai.expect;
import Vue from 'vue';
import Row from '../src/row';
import Col from '../src/col';
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok;
    });
    it('接受 span 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                span:1
            }
        }).$mount(div);
        const col = vm.$el;
        expect(col.classList.contains('col-1')).to.eq(true);
        div.remove();
        vm.$destroy();
    });
    it('接受 offset 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                offset:1
            }
        }).$mount(div);
        const col = vm.$el;
        expect(col.classList.contains('offset-1')).to.eq(true);
        div.remove();
        vm.$destroy();
    });
    it('接受 pc 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                pc:{span:1,offset:1}
            }
        }).$mount(div);
        const col = vm.$el;
        expect(col.classList.contains('col-pc-1')).to.eq(true);
        expect(col.classList.contains('offset-pc-1')).to.eq(true);
        div.remove();
        vm.$destroy();
    });
    it('接受 ipad 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                ipad:{span:1,offset:1}
            }
        }).$mount(div);
        const col = vm.$el;
        expect(col.classList.contains('col-ipad-1')).to.eq(true);
        expect(col.classList.contains('offset-ipad-1')).to.eq(true);
        div.remove();
        vm.$destroy();
    });
    it('接受 narrowPc 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                narrowPc:{span:1,offset:1}
            }
        }).$mount(div);
        const col = vm.$el;
        expect(col.classList.contains('col-narrow-pc-1')).to.eq(true);
        expect(col.classList.contains('offset-narrow-pc-1')).to.eq(true);
        div.remove();
        vm.$destroy();
    });
    it('接受 widePc 属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                widePc:{span:1,offset:1}
            }
        }).$mount(div);
        const col = vm.$el;
        expect(col.classList.contains('col-wide-pc-1')).to.eq(true);
        expect(col.classList.contains('offset-wide-pc-1')).to.eq(true);
        div.remove();
        vm.$destroy();
    });
});
