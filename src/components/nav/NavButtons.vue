<template>
    <div class="nav-buttons-list-wrapper">
        <ul class="nav-buttons-list">
            <li>
                <div :class="dashBoardButtonClass" @click="handleDashboardButtonClick">
                    <HomeIcon class="nav-button-icon"/>
                    <p class="nav-button-text">Dashboard</p>
                </div>
                <div :class="searchButtonClass" @click="handleSearchButtonClick">
                    <Search class="nav-button-icon" />
                    <p class="nav-button-text">Search Entries</p>
                </div>
                <div :class="settingsButtonClass" @click="handleSettingsButtonClick">
                    <Settings class="nav-button-icon"/>
                    <p class="nav-button-text">Settings</p>
                </div>
            </li>
        </ul>
    </div>
</template>


<script setup lang="ts">
import { HomeIcon, Search, Settings } from 'lucide-vue-next'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dashboardButtonSelected = computed(()=> router.currentRoute.value.path === '/dashboard');
const searchButtonSelected = computed(()=> router.currentRoute.value.path === '/search');
const settingsButtonSelected = computed(()=> router.currentRoute.value.path === '/settings');

const dashBoardButtonClass = computed(() => {
    return [dashboardButtonSelected.value ? 'nav-button-wrapper-selected' : 'nav-button-wrapper'];
});
const searchButtonClass = computed(() => {
    return [searchButtonSelected.value ? 'nav-button-wrapper-selected' : 'nav-button-wrapper'];
});
const settingsButtonClass = computed(() => {
    return [settingsButtonSelected.value ? 'nav-button-wrapper-selected' : 'nav-button-wrapper'];
});


const handleDashboardButtonClick = () => {
    router.push('/dashboard');
};
const handleSearchButtonClick = () => {
    router.push('/search');
};
const handleSettingsButtonClick = () => {
    router.push('/settings');
};

</script>


<style scoped>
@reference "../../App.css";
.nav-button-icon {
    /*margin*/ @apply mr-2;
    /*size*/   @apply size-4;
}

.nav-button-wrapper,
.nav-button-wrapper-selected  {
    /*Positioning*/ @apply flex flex-row items-center;
    /*size*/   @apply w-75;
    /*margin*/ @apply mb-2;
    /*border*/ @apply rounded-md;
    /*padding*/ @apply p-2;
    /*cursor*/ @apply cursor-pointer;
    /*font*/   @apply text-sm text-muted-foreground font-medium;
    /*stroke*/ stroke-width:1.5;
    
}

/*override nav-button-wrapper values*/
.nav-button-wrapper-selected {
        /*color*/ @apply bg-red-500 text-white;
}

.nav-button-text {
    /*size*/ @apply w-50;

}
</style>