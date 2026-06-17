<template>
    <div class="dashboard-container">
        <SideNavBar />
        <div class="dashboard-wrapper">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
    import SideNavBar from '@/components/nav/SideNavBar.vue';
</script>

<style scoped>
@reference "./App.css";

.dashboard-container {
    @apply flex flex-row justify-start;
}

.dashboard-wrapper {
    @apply flex flex-col items-center ;
    @apply w-full;
}
</style>