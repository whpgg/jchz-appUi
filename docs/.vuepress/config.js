module.exports = {
    base:'/jchz-appUi/',
    title: 'jcUI',
    description: '一个公司ui框架基础架子',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: ['/install/', '/getStarted/']
            },
            { title: '组件', children: ['/components/button','/components/grid','/components/layout','/components/input','/components/tabs','/components/toast','/components/popover'] }
        ]
    }
};
