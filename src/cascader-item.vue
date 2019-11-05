<template>
    <div class="cascader">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item :items="rightItems"></cascader-item>
        </div>
    </div>
</template>
<script>
export default {
    name:'cascader-item',
    props:{
        items:{
            type: Array
        }
    },
    data(){
        return {
            leftSelected:null
        }
    },
    computed:{
        rightItems(){
            if(this.leftSelected && this.leftSelected.children){
                return this.leftSelected.children
            }else{
                return null
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.cascader{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left{
        border: 1px solid red;
    }
    .right {
        margin-top: -1px;
    }
}
</style>