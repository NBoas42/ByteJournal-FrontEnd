<template>
    <div class="user-avatar-wrapper">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div class="user-avatar-info">
            <p class="user-avatar-name">{{ account.name }}</p>
            <p class="user-avatar-email">{{ account.email }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const account = {
    name: 'John Doe',
    email: 'john.doe@example.com'
}
</script>

<style scoped>
@reference "#app.css";

.user-avatar-wrapper {
    @apply flex flex-row items-center justify-start;
}

.user-avatar-info {
    @apply m-2;
    @apply text-sm;
}

.user-avatar-name {
    @apply font-bold;
}

.user-avatar-email {
    @apply text-muted-foreground;
}

</style>