<template>
    <div class="journal-select-wrapper">
        <Select >
            <SelectTrigger class="w-[280px]">
                <SelectValue placeholder="Select a Journal" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem v-for="journal in journals" :key="journal.name" :value="journal.name" >{{journal.name}}</SelectItem>
            </SelectContent>
        </Select>
    </div>
</template>

<script setup lang="ts">
    import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
    const journals = [{name: 'Journal 1'}, {name: 'Journal 2'}, {name: 'Journal 3'}];

</script>

<style scoped>
@reference "#app.css";

.journal-select-wrapper {

}

</style>