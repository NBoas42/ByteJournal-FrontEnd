<template>
    <div class="not-found-wrapper">
        <h1 class="not-found-title">404</h1>
        <h1 class="not-found-subtitle">Page Not Found</h1>
        <p>The Page you are looking for does not exist.</p>
    </div>
</template>

<style scoped>
@reference "../../App.css";

.not-found-wrapper {
    @apply flex flex-col items-center justify-center;
    @apply h-screen w-screen;
}

.not-found-title {
    @apply text-4xl font-bold;
}

.not-found-subtitle {
    @apply text-xl;
}
</style>