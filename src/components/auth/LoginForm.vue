<template>
    <div class="login-form-wrapper">
        <h1 class="login-form-title">Welcome back</h1>
        <label class='login-form-description'> Sign in to your account to continue</label>

        <label class='login-form-label'>Email Address</label>
        <InputGroup>
            <InputGroupAddon>
                <MailIcon />
            </InputGroupAddon>
            <InputGroupInput type="email" placeholder="Enter your email" v-model="authStore.email" />
        </InputGroup>

        <label class='login-form-label'>Password</label>
        <InputGroup>
            <InputGroupAddon>
                <LockIcon />
            </InputGroupAddon>
            <InputGroupInput type="password" placeholder="Enter your password"  v-model="authStore.password"/>
        </InputGroup>

        <Button class="login-button" @click="authStore.login()">Sign in</Button>
        <span class="signup-link-span">Don't have an account? <a class="signup-link" href="/register">Sign up</a></span>
        <span class= 'invalid-email-password-span' v-if="!authStore.token && authStore.loginAttempted">Invalid email or password</span>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { MailIcon, LockIcon } from 'lucide-vue-next'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { AuthStore } from '@/stores/auth';

const authStore = AuthStore();
</script>

<style scoped>
@reference "../../App.css";

.login-form-wrapper {
    /*Positioning*/ @apply inline-flex flex-col items-center;
    /*size */ @apply w-1/2;
}

.login-form-title {
    /*text size*/ @apply text-2xl ;
    /*font*/ @apply font-extrabold;
}

.login-form-description {
    /*margin*/ @apply mb-3;
}

.login-form-label{
    /*margin*/ @apply mt-6;
    /*position*/ @apply self-start;
}

.login-form-password-input {
    /*margin*/ @apply mb-3;
    /*color*/ @apply bg-white;
}

.login-button {
    /*size*/   @apply w-full;
    /*margin*/ @apply mt-6;
    /*color*/ @apply bg-red-500;
    /*border*/ @apply rounded-md;
}

.signup-link-span {
    /*margin*/ @apply mt-3;
}

.signup-link {
    /*color*/ @apply text-blue-500;
}
.invalid-email-password-span {
    /*color*/ @apply text-red-500;
}
</style>