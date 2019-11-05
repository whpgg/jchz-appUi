import Button from './button';
import ButtonGroup from './button-group';
import Cascader from './cascader';
import Col from './col';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Icon from './icon';
import Input from './input';
import Layout from './layout';
import Popover from './popover';
import Row from './row';
import Sider from './sider';
import Tabs from './tabs';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsNav from './tabs-nav';
import TabsPane from './tabs-pane';
import Toast from './toast';
import Vue from 'vue';
import plugin from './plugin';
Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-cascader',Cascader);
Vue.component('g-col', Col);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-header', Header);
Vue.component('g-icon', Icon);
Vue.component('g-input', Input);
Vue.component('g-layout', Layout);
Vue.component('g-popover', Popover);
Vue.component('g-row', Row);
Vue.component('g-sider', Sider);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-nav', TabsNav);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-toast', Toast);
Vue.use(plugin);
new Vue({
    el: '#app',
    data: {
        source:[{
            name: "浙江",
            children:[
                {name: "杭州",
                    children:[
                        {name:"上城"},
                        {name:"下城"},
                        {name:"江干"}
                    ]
                },
                {name: "嘉兴",
                    children:[
                        {name:"南湖"},
                        {name:"秀杰"},
                        {name:"嘉善"}
                    ]
                }
            ]
        },{
            name: "福建",
            children: [
                {name: "福州",
                    children:[
                        {name: "鼓楼"},
                        {name: "台江"},
                        {name: "仓山"}
                    ]
                }
            ]
        }]
    },
    mounted() {},
    methods: {
    }
});
