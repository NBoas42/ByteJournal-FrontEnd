<template>
    <div class="login-wrapper">
        <div class="pane-left"/>
        <div class="pane-right">
            <LoginForm />
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/account/LoginForm.vue'
</script>

<style scoped>
@reference "../App.css";

.login-wrapper {
    /*Positioning*/ @apply flex items-center justify-start; /*items is vertical and justify is horizontal*/
    /*size*/        @apply h-screen w-screen;
}

.pane-left {
    /*size*/        @apply h-screen w-1/2;
    /*color*/       @apply bg-linear-to-br from-indigo-700 to-purple-700;
}

.pane-right {
    /*Positioning*/ @apply flex items-center justify-center; /*items is vertical and justify is horizontal*/
    /*size*/        @apply h-screen w-1/2;
    /*color*/       background-color: #f8f8f8;
}
</style>

