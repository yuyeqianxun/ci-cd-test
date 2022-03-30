<template>
    <div class="ratio">
        <Layout></Layout>
        <div class="ratio__content">
            <div class="content__top">
                <img src="./img/logo.png" />
            </div>
            <div class="content__main">
                <div class="ratio__item" v-for="item in ratios">
                    <div class="ratio__item__price">
                        <Price :num="item.price" :unit="unit" :int="int" :float="float" />
                    </div>
                </div>
            </div>
            <div class="content__foot">
                <Button type="plain" class="content__foot--space">上一步</Button>
                <Button>下一步</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Layout from '../../layout'
import Price from '../../components/Price'
import Button from '../../components/Button'
const ratios = [{
    price: 4680
}]
const unit = {
    fontSize: '26px'
}
let int, float
int = float = {
    fontSize: '31px'
}
</script>

<style lang="scss" scoped>
.ratio {
    @apply min-h-screen w-screen relative;
    &__content {
        @apply flex flex-col overflow-hidden pt-[50px] pl-[100px] pb-[158px] relative z-10;
        .content__main {
            @apply mt-[60px] mb-[50px];
            .ratio__item {
                @apply w-[320px] h-[500px] border-[4px] border-[#074f51];
                &--active {
                    @apply border-[#c0a280];
                }
                &__price {
                    @apply h-[110px] flex justify-center items-center;
                }
            }
        }
        .content__foot {
            @apply flex justify-center;
            &--space {
                @apply mr-[80px];
            }
        }
    }
}
</style>