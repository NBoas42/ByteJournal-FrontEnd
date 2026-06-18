<template>
    <div class="journal-quick-info-wrapper">
        <NewEntriesCard />
        <CompletedTasksCard />
        <NotesCreateCard />
        <AvgRatingCard />
    </div>
</template>


<script setup lang="ts">
    import NewEntriesCard from '@/components/journal/DashBoard/Overview/JournalQuickInformation/NewEntriesCard.vue';
    import CompletedTasksCard from '@/components/journal/DashBoard/Overview/JournalQuickInformation/CompletedTasksCard.vue';
    import NotesCreateCard from '@/components/journal/DashBoard/Overview/JournalQuickInformation/NotesCreateCard.vue';
    import AvgRatingCard from '@/components/journal/DashBoard/Overview/JournalQuickInformation/AvgRatingCard.vue';
</script>


<style scoped>
@reference "#app.css";

.journal-quick-info-wrapper {
    @apply grid grid-cols-2 grid-rows-2 gap-4;
    @apply w-full h-full;
}
</style>