<template>
    <div
        class="tabs-item"
        @click="onClick"
        :class="classes"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "jcTabsItem",
    inject: ["eventBus"],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            active: false
        };
    },
    computed: {
        classes() {
            return {
                active: this.active,
                disabled: this.disabled
            };
        }
    },
    created() {
        this.eventBus.$on("update:selected", name => {
            this.active = name === this.name;
        });
    },
    methods: {
        onClick() {
            if(this.disabled) return
            this.eventBus.$emit("update:selected", this.name, this);
        }
    }
};
</script>
<style lang="scss" scoped>
$blue: blue;
$grey:grey;
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
        color: $blue;
        font-weight: bold
    }
    &.disabled{
        color: $grey;
        cursor: not-allowed;
    }
}
</style>