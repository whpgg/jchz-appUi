<template>
    <div
        class="toast"
        ref="wrapper"
    >
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div
                v-else
                v-html="$slots.default[0]"
            ></div>
        </div>
        <div
            ref="line"
            class="line"
        ></div>
        <span
            class="close"
            v-if="closeButton"
            @click="onClickClose"
        >
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
export default {
    name: "jcToast",
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 3
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: "关闭",
                    callback: undefined
                };
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.execAutoClose();
        this.updateStyles();
    },
    methods: {
        updateStyles() {
            this.$nextTick(() => {
                this.$refs.line.style.height = `${
                    this.$refs.wrapper.getBoundingClientRect().height
                }px`;
            });
        },
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000);
            }
        },
        close() {
            this.$el.remove();
            this.$destroy();
        },
        onClickClose() {
            this.close();
            if (
                this.closeButton &&
                typeof this.closeButton.callback === "function"
            ) {
                this.closeButton.callback(this);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
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
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    .message{
        padding: 8px 0;
    }
    .close {
        padding-left: 16px;
        flex-shrink: 0;
    }
    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
}
</style>