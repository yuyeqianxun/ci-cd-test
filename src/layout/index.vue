<template>
    <div class="lay">
        <div class="lay__deco">
            <div class="lay__deco__row"></div>
            <div class="lay__deco__col"></div>
            <div class="lay__deco__corner">
                <span class="corner--tl"></span>
                <span class="corner--tr"></span>
                <span class="corner--bl"></span>
                <span class="corner--br"></span>
            </div>
            <div class="lay__deco__foot"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.lay {
    @apply absolute h-full w-full left-0 bottom-0;
    &__deco {
        @apply h-full w-full relative;
        &__row {
            @apply bg-[#c0a280] w-full h-[4px] bottom-[90px] absolute z-10;
        }
        &__col {
            @apply bg-[#c0a280] w-[4px] h-full left-[66px] absolute z-10;
        }
        &__corner {
            @apply absolute bg-[#c0a280] w-[98px] h-[98px] left-[19px] bottom-[43px] z-10;
            span {
                @apply bg-[#ffffff] w-[50px] h-[50px] absolute;
            }
            .corner {
                &--tl {
                    @apply bg-[#fff] left-[-3px] top-[-3px] rounded-br-[46px];
                }
                &--tr {
                    @apply bg-[#fff] right-[-3px] top-[-3px] rounded-bl-[46px];
                }
                &--bl {
                    @apply bg-[#074f51] left-[-3px] bottom-[-4px] rounded-tr-[46px];
                }
                &--br {
                    @apply bg-[#074f51] right-[-3px] bottom-[-4px] rounded-tl-[46px];
                }
            }
        }
        &__foot {
            @apply bg-[#074f51] h-[90px] bottom-0 absolute w-full z-0;
        }
    }
}
</style>