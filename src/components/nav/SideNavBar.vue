<template>
    <div class="top-nav-bar-wrapper" v-if="shouldShowSideNavBar">
        <UserAvatar class="top-nav-bar-user-avatar"/>
        <JournalSelect class="top-nav-bar-journal-select"/>
        <NavButtons class="nav-buttons"/>
    </div>

</template>

<script setup lang="ts">
import JournalSelect from '@/components/journal/JournalSelect.vue';
import UserAvatar from '@/components/account/UserAvatar.vue';
import NavButtons from '@/components/nav/NavButtons.vue';

import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const ProhibitedRoutes = ['/login', '/not-found'];

console.log(router.currentRoute.value.path);

const shouldShowSideNavBar = computed(()=> !ProhibitedRoutes.includes(router.currentRoute.value.path));
</script>

<style scoped>
@reference "#app.css";

.top-nav-bar-wrapper {
    /*Positioning*/ @apply flex flex-col items-center justify-start; /*items is vertical and justify is horizontal*/
    /*size*/        @apply h-screen w-100;
    /*color*/       @apply border-r-2 ;
}

.top-nav-bar-journal-select {
    @apply m-4
}

.top-nav-bar-user-avatar {
    @apply self-center;
    @apply m-4;
}
</style>