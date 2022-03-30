<template>
    <div class="home" data-barba="wrapper">
        <NavHead :logo="logo"/>
        <router-view v-slot="{ Component }">
            <transition
                name="fade"
                enter-active-class="animate__animated animate__rotateInUpRight"
            >
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import NavHead from '../../components/NavHead';
import logo from './img/logo.png'
defineComponent({
    NavHead
})

</script>

<style lang="scss" scoped>

</style>