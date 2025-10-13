<script setup lang="ts">
const buttons = ["destructive", "outline", "secondary", "ghost", "link"];
</script>

<template>
    <section class="m-4 flex flex-col gap-4">
        <h2 class="text-4xl">Buttons</h2>
        <ul class="flex gap-2">
            <li v-for="btn in buttons">
                <UiButton :variant="btn">{{ btn.toUpperCase() }}</UiButton>
            </li>
        </ul>
    </section>
</template>
