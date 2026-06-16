<template>
    <div class="top-nav-bar-wrapper">
        <UserAvatar class="top-nav-bar-user-avatar"/>
        <JournalSelect class="top-nav-bar-journal-select"/>
        <NavButtons class="nav-buttons"/>
    </div>

</template>

<script setup>
import JournalSelect from '@/components/journal/JournalSelect.vue';
import UserAvatar from '@/components/account/UserAvatar.vue';
import NavButtons from '@/components/nav/NavButtons.vue';

</script>

<style scoped>
@reference "../../App.css";

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