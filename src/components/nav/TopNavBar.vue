<template>
    <div class="top-nav-bar-wrapper">
        <JournalSelect class="top-nav-bar-journal-select"/>
        <UserAvatar class="top-nav-bar-user-avatar"/>
    </div>

</template>

<script setup>
import JournalSelect from '@/components/journal/JournalSelect.vue';
import UserAvatar from '@/components/account/UserAvatar.vue';

Router
</script>

<style scoped>
@reference "../../App.css";

.top-nav-bar-wrapper {
    /*Positioning*/ @apply flex flex-row items-center justify-between; /*items is vertical and justify is horizontal*/
    /*size*/        @apply h-16 w-full;
    /*color*/       @apply shadow-md;
}

.top-nav-bar-journal-select {
    @apply m-4
}

.top-nav-bar-user-avatar {
    @apply self-center;
    @apply m-4;
}
</style>