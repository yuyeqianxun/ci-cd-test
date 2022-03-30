<template>
    <div class="button" :class="[`button__${props.type}`]">
        <slot>按钮</slot>
    </div>
</template>
<script setup>
const props = defineProps({
    type: {
        default: 'primary'
    }
})
</script>
<style lang="scss" scoped>
.button {
    @apply w-[200px] h-[40px] border-[#074f51] border-[1px] text-[21px] text-[#fff] flex justify-center items-center;
    &__primary {
        @apply bg-[#074f51];
    }
    &__plain {
        @apply bg-[#ffffff] text-[#074f51];
    }
}
</style>