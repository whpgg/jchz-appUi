<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button :icon="icon">icon图标</g-button>
        <g-button :loading="true">加载中</g-button>
        <g-button disabled>禁用</g-button>

        <pre>
            <code>{{content}}</code>
        </pre>
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
                <g-button :icon="icon">icon图标</g-button>
                <g-button :loading="true">加载中</g-button>
                <g-button disabled>禁用</g-button>
            `
        };
    },
    components: {
        "g-button": Button
    }
};
</script>
<style lang="scss" scoped>
</style>