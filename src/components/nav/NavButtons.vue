<template>
    <div class="nav-buttons-list-wrapper">
        <ul class="nav-buttons-list">
            <li>
                <div class="nav-button-wrapper">
                    <HomeIcon class="nav-button-icon"/>
                    <p class="nav-button-text">Dashboard</p>
                </div>
                <div class="nav-button-wrapper">
                    <Search class="nav-button-icon" />
                    <p class="nav-button-text">Search Entries</p>
                </div>
                <div class="nav-button-wrapper">
                    <NotebookIcon class="nav-button-icon" />
                    <p class="nav-button-text">Scratch Pads</p>
                </div>
                <div class="nav-button-wrapper">
                    <Settings class="nav-button-icon"/>
                    <p class="nav-button-text">Settings</p>
                </div>
            </li>
        </ul>
    </div>
</template>


<script setup lang="ts">
import { HomeIcon, NotebookIcon, Search, Settings } from 'lucide-vue-next'
</script>


<style scoped>
@reference "../../App.css";
.nav-button-icon {
    /*margin*/ @apply mr-2;
    /*size*/   @apply size-4;
    /*font*/   @apply text-muted-foreground;
    /*stroke*/ stroke-width:1.5;
}
.nav-button-wrapper {
    /*Positioning*/ @apply flex flex-row items-center;
    /*size*/   @apply w-75;
    /*margin*/ @apply mb-2;
    /*border*/ @apply rounded-md;
    /*padding*/ @apply p-2;
    /*cursor*/ @apply cursor-pointer;
}
.nav-button-text {
    /*size*/ @apply w-50;
    /*font*/ @apply text-sm text-muted-foreground font-medium;

}
</style>