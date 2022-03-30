<template>
    <div class="navhead">
        <div class="navhead__contain">
                    <div class="navhead__logo"></div>
        <div class="navhead__menu">
            <span
                v-for="item in menuList"
                class="menu__item"
                :class="{ 'menu__item--active': item.id === activeId }"
                @click="onClick(item)"
            >{{ item.pic || item.title }}</span>
        </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
    menuList: {
        default: [
            {
                id: 0,
                title: '关于魅影',
                path: '/index'
            },
            {
                id: 1,
                title: '产品大全',
                path: '/all'
            }
        ]
    }
})
const route = useRoute()
const navigate = useRouter()
let findActive = props.menuList.filter(menu=>menu.path===route.path)
let activeId = ref(findActive.length?findActive[0].id:null);
const onClick = item =>{
     activeId.value = item.id;
     navigate.push({ path: item.path })
}
</script>

<style lang="scss" scoped>
.navhead {
    @apply bg-[#ffffff] w-full h-[60px];
    &__contain {
        @apply bg-[#074f51] h-[60px] border-b-[4px] border-[#c0a280] flex fixed w-full;
    }
    &__logo {
        @apply bg-[#074f51] w-[228px] pl-[56px] pt-[17px] flex-shrink-0;
        &__img {
        }
    }
    &__menu {
        @apply bg-[#074f51] flex flex-1 pb-[10px];
        .menu__item {
            @apply text-[#c0a280] text-[17px] leading-none mr-[60px] self-end;
            &--active {
                @apply text-[#ffffff];
            }
        }
    }
}
</style>