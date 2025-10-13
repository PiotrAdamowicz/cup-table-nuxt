<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const races = ref([]);

onMounted(() => {
    const sse = new EventSource("http://localhost:3000/sse");

    sse.addEventListener("connected", (e) => {
        console.log("Connected to backend:", e.data);
    });

    sse.addEventListener("race-update", (e) => {
        console.log(e);
        races.value.push(JSON.parse(e.data));
    });

    onBeforeUnmount(() => sse.close());
});
</script>

<template>
    <div>
        <h1>🏎️ Live Race Updates</h1>
        <ul>
            <li v-for="r in races" :key="r.time">
                {{ r.race }} – {{ new Date(r.time).toLocaleTimeString() }}
            </li>
        </ul>
    </div>
</template>
