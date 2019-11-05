<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">

        </div>
        <div class="popover" v-if="popoverVisible">
            <cascader-item :items="source"></cascader-item>
        </div>
    </div>
</template>
<script>
import cascaderItem from './cascader-item';
export default {
    name: "jcCasvader",
    props:{
        source:{
            type:Array
        }
    },
    data(){
        return {
            popoverVisible: false
        }
    },
    components:{cascaderItem}
}
</script>
<style lang="scss" scoped>
    .cascader{
        .trigger{
            border: 1px solid red;
            height: 32px;
            width: 100px;
        }
        .popover{
            border: 1px solid red;
            height: 200px;
            display: flex;
        }
    }
</style>