import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
new Vue({
    el: '#app',
    data: {
        loading1: true
    }
});

//测试

import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            icon: 'setting'
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#isetting');
    button.$el.remove();
    button.$destroy();
}

{
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#iLoading');
    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    button.$el.remove();
    button.$destroy();
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const constructor = Vue.extend(Button);
    const button = new constructor({
        propsData: {
            icon: 'setting',
            loading: true,
            iconPosition: 'right'
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    button.$el.remove();
    button.$destroy();
}
{
    const constructor = Vue.extend(Button);
    const gButton = new constructor({
        propsData: {
            icon: 'setting'
        }
    });
    gButton.$mount();
    let spy = chai.spy(function (){})
    gButton.$on('click',spy);
    gButton.$el.click();
    expect(spy).to.have.been.called()
}
