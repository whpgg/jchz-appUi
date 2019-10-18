<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "jcToast"
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast {
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    position: fixed;
    color: #ffffff;
    padding: 0 16px;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50)
}
</style>