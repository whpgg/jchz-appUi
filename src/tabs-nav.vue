<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="actionsWrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "jcTabsNav",
    inject: ["eventBus"]
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-nav {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .actionsWrapper{
        margin-left: auto;
    }
}
</style>