<template>
    <div
        class="popover"
        @click.stop="xxx"
    >
        <div
            ref="contentWrapper"
            class="content-wrapper"
            v-if="visible"
        >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: "jcPopover",
    data() {
        return {
            visible: false
        };
    },
    mounted() {
        console.log(this.$refs.triggerWrapper);
    },
    methods: {
        xxx() {
            this.visible = !this.visible;
            if (this.visible === true) {
                this.$nextTick(() => {
                    document.body.appendChild(this.$refs.contentWrapper);
                    let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.left = left + 'px';
                    this.$refs.contentWrapper.style.top = top + 'px';
                    let eventHandler = () => {
                        this.visible = false;
                        document.removeEventListener("click", eventHandler);
                    };
                    document.addEventListener("click", eventHandler);
                });
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
}
</style>