<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">

        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-item :items="source" class="popover" :height = "popoverHeight"></cascader-item>
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
        },
        popoverHeight:{
            type: String,
            default: '100px'
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
    @import 'var';
    .cascader{
        position: relative;
        .trigger{
            border: 1px solid red;
            height: 32px;
            width: 100px;
        }
        .popover-wrapper{
            @extend .box-shadow;
            position: absolute;
            display: flex;
            background: #ffffff;
            top: 100%;
            left: 0;
        }
    }
</style>