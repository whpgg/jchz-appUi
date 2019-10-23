<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actionsWrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "jcTabsNav",
    inject: ["eventBus"],
    mounted (){
        this.eventBus.$on('update:selected',(item, vm)=>{
            let {width,height,top,left} = vm.$el.getBoundingClientRect();
            this.$refs.line.style.width = `${width}px`;
            this.$refs.line.style.transform = `translateX(${left}px)`;
        })
    }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-nav {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    position: relative;
    > .line{
        position: absolute;
        bottom: 0;
        border-bottom: 3px solid $blue;
        transition: all 250ms;
    }
    > .actionsWrapper{
        margin-left: auto;
    }
}
</style>