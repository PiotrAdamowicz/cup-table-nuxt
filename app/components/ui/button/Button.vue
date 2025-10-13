<script setup lang="ts">
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button/index";
import type { ButtonProps } from "./button";

const props = withDefaults(defineProps<ButtonProps>(), {
    as: "button",
});
</script>

<template>
    <Primitive
        data-slot="button"
        :as="as"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size }), props.class)"
    >
        <slot />
    </Primitive>
</template>
