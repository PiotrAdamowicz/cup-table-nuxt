<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card/Card.vue";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Separator from "@/components/ui/separator/Separator.vue";

const formSchema = toTypedSchema(
  z.object({
    raceId: z.number(),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(() => {

});
</script>

<template>
  <Card>
    <form class="muIbUTTON-4" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="raceId">
        <FormItem>
          <FormLabel>Wyścig:</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Numer wyścigu"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Separator class="my-4" />
      <!-- 2 to 4 contestats inputs -->
      <!-- Lets start with default 4 and option to add empty? -->
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="shadcn"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">
        Submit
      </Button>
    </form>
  </Card>
</template>
