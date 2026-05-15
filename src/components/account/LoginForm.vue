<template>
    <div class="login-form-wrapper">
        <h1 class="login-form-title">Welcome back</h1>
        <p> Sign in to your account to continue</p>

        <hr/>

        <h5>Email Address</h5>
        <Input type="email" placeholder="Enter your email" />

        <p>Password</p>
        <Input type="password" placeholder="Enter your password" />

        <Button class="login-button">Sign in</Button>
    </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

</script>

<style scoped>
@import "tailwindcss";

.login-form-wrapper {
    /*Positioning*/ @apply inline-flex flex-col items-center;
    /*size */ @apply w-1/2;
}

.login-form-title {
    /*text size*/ @apply text-2xl font-bold;
}
.login-button {
    /*size*/ @apply w-full;
}
</style>