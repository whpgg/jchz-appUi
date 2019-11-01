<template>
    <svg
        class="g-icon"
    >
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
import './svg.js'
export default {
    name: 'jcIcon',
    props:["name"],
    computed: {
        iconName(){
            return `#i${this.name}`//此处为兼容vuepress的bug
        }
    },
};
</script>
<style lang="scss" scoped>
.g-icon {
    width: 1em;
    height: 1em;
}
</style>