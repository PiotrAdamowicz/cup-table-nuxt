<script setup lang="ts">
import type { ButtonVariantType } from "~~/types/button";

import { Button } from "@/components/ui/button/index";

const buttons: ButtonVariantType[] = [
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
];
</script>

<template>
  <section class="m-4 flex flex-col gap-4">
    <h2 class="text-4xl">
      Buttons
    </h2>
    <ul class="flex gap-2">
      <li v-for="(btn, idx) in buttons" :key="idx">
        <Button :variant="btn">
          {{ btn?.toUpperCase() }}
        </Button>
      </li>
    </ul>
  </section>
</template>
