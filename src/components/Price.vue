<template>
    <div class="price">
        <div class="price__unit" :style="props.unit">¥</div>
        <div class="price__int" :style="props.int">{{ intN }}</div>
        <div class="price__float" :style="props.float">.{{ floatN }}</div>
        <slot>
            起
        </slot>
    </div>
</template>

<script setup>
const props = defineProps({
    num: 0,
    unit: {
        default() {
            return {
                fontSize: '26px',
                color: '#000'
            }
        }
    },
    int: {
        default() {
            return {
                fontSize: '26px',
                color: '#000'
            }
        }

    },
    float: {
        default() {
            return {
                fontSize: '26px',
                color: '#000'
            }
        }

    }
})
const [intN, floatN] = props.num.toFixed(2).split(".")
</script>

<style lang="scss" scoped>
.price {
    @apply flex items-baseline;
    &__unit {
        @apply mr-[8px] ;
    }
    &__float {
        @apply mr-[3px];
    }
}
</style>