<template>
    <div class="dashboard-container">
        <div class="dashboard-header">
            <h1 class="dashboard-header-title">Past Week</h1>
            <h1 class="dashboard-header-date">Nov 11 - Nov 17, 2026</h1>
        </div>
        <div class="first-row">
            <JournalQuickInfoWrapper />
            <JournalQuickActions />
        </div>
        <RecentJournalEntriesWrapper />
        <FrequentScratchPadsWrapper />
    </div>
    
</template>

<script setup lang="ts">
    import JournalQuickActions from '@/components/journal/DashBoard/Overview/JournalQuickActions.vue';
    import JournalQuickInfoWrapper from '@/components/journal/DashBoard/Overview/JournalQuickInformation/JournalQuickInfoWrapper.vue';
    import RecentJournalEntriesWrapper from '@/components/journal/DashBoard/JournalEntries/RecentJournalEntriesWrapper.vue';
    import FrequentScratchPadsWrapper from '@/components/journal/DashBoard/ScratchPads/FrequentScratchPadsWrapper.vue';
</script>

<style scoped>
@reference "#app.css";

.dashboard-container {
    @apply flex flex-col justify-start;
    @apply w-full h-screen;
    @apply bg-gray-200;
    @apply p-10;
    @apply overflow-y-auto;
}

.dashboard-header {
    @apply flex flex-row items-center justify-between;
    @apply w-full;
}

.dashboard-header-title {
    @apply text-lg font-bold;
    
}

.dashboard-header-date {
    @apply text-lg text-muted-foreground;
}

.first-row {
    @apply grid grid-cols-2 grid-rows-1 gap-4;
    @apply w-full h-80;
    @apply my-4;
}
</style>