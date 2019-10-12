const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok;
    });
    it('接受value',()=>{
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
                value: '1'
            }
        }).$mount();
        const inputElement = vm.$el.querySelector('input');
        expect(inputElement.value).to.equal('1');
        vm.$destroy();
    })
    it('接受disabled',()=>{
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
                disabled: 'true'
            }
        }).$mount();
        const inputElement = vm.$el.querySelector('input');
        expect(inputElement.disabled).to.equal(true);
        vm.$destroy();
    })
});
