<template>
    <div class="dashboard-container">
        <SideNavBar />
        <div class="dashboard-wrapper">
            <h1>Dashboard</h1>
            Hello
        </div>
    </div>
</template>

<script setup lang="ts">
import SideNavBar from '@/components/nav/SideNavBar.vue';
</script>

<style scoped>
@reference "../../App.css";

.dashboard-container {
    @apply flex flex-row justify-start;
}

.dashboard-wrapper {
    @apply flex flex-col items-center ;
    @apply w-full;
}
</style>