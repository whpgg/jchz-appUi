<template>
    <div
        class="contain"
        :class="toastClasse"
    >
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
        },
        positon: {
            type: String,
            default: "top",
            validator(value) {
                return ["top", "middle", "bottom"].indexOf(value) >= 0;
            }
        }
    },
    computed: {
        toastClasse() {
            return { [`position-${this.positon}`]: true };
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
            this.$emit("beforeClose");
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
$animation-duration: 300ms;
@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
@keyframes slide-middle {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.contain {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
        top: 0;
        .toast{
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation: slide-down $animation-duration;
        }
    }
    &.position-bottom {
        bottom: 0;
        .toast{
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            animation: slide-up $animation-duration;
        }
    }
    &.position-middle {
        top: 50%;
        transform:translateX(-50%) translateY(-50%);
        .toast{
            animation: slide-middle $animation-duration;
        }
    }
}
.toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    color: #ffffff;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    .message {
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