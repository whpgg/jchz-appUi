const expect = chai.expect;
import Vue from 'vue';
import Tabs from '../src/tabs';
import TabsNav from '../src/tabs-nav';
import TabsBody from '../src/tabs-body';
import TabsItem from '../src/tabs-item';
import TabsPane from '../src/tabs-pane';
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-nav', TabsNav);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok;
    });
    it('接受selected属性', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
        <g-tabs selected="taiwan">
            <g-tabs-nav>
                <g-tabs-item name="dalu">大陆</g-tabs-item>
                <g-tabs-item name="taiwan">台湾</g-tabs-item>
                <g-tabs-item name="xianggang">香港</g-tabs-item>
            </g-tabs-nav>
            <g-tabs-body>
                <g-tabs-pane name="dalu">大陆新闻</g-tabs-pane>
                <g-tabs-pane name="taiwan">台湾新闻</g-tabs-pane>
                <g-tabs-pane name="xianggang">香港新闻</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        `;
        const vm = new Vue({
            el: div
        });
        setTimeout(() => {
            let x = vm.$el.querySelector('.tabs-item:nth-child(2)')
            expect(x.classList.contains('active')).to.be.true
            done()
        }, 100);
    });
    it('可以接受direction的props',()=>{
        
    })
});
