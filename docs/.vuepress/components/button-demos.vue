<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button :icon="icon">icon图标</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button disabled>禁用</g-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
import Button from "../../../src/button";
export default {
    data() {
        return {
            icon: "setting",
            content: `
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
`.replace(/^ {8}/gm, "").trim()
        };
    },
    components: {
        "g-button": Button
    }
};
</script>
<style lang="scss" scoped>
</style>