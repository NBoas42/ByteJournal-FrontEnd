<template>
    <div class="login-wrapper">
        <div class="pane-left">
            <img src="/public/logo.png" class="logo-image">
        </div>
        <div class="pane-right">
            <LoginForm />
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
</script>

<style scoped>
@reference "#app.css";

.login-wrapper {
    /*Positioning*/ @apply flex flex-row items-center justify-start; /*items is vertical and justify is horizontal*/
    /*size*/        @apply h-screen w-screen;
}

.pane-left {
    /*Positioning*/ @apply flex flex-col items-center justify-center; /*items is main axis and justify is cross axis*/
    /*size*/        @apply h-screen w-1/2;
    /*color*/       @apply bg-linear-to-br from-cyan-700 to-cyan-950;
}

.pane-right {
    /*Positioning*/ @apply flex flex-col items-center justify-center; /*items is vertical and justify is horizontal*/
    /*size*/        @apply h-screen w-1/2;
    /*color*/       @apply bg-white;
}

.logo-image {
    /*size*/ @apply w-1/3;
}
</style>

