<script lang="ts" setup>
import { authClient } from "~/lib/auth-client";

// const config = useRuntimeConfig();
const email = ref("");
const password = ref("");
const fullName = ref("");

// const { data, status, error, refresh, clear } = await useFetch(
//   `${config.public.baseUrl}/`,
// );

function submit() {
  if (!email.value || !password.value)
    return;
  authClient.signUp.email({
    name: fullName.value,
    email: email.value,
    password: password.value,
  });
}
</script>

<template>
  <section>
    <h1 class="text-6xl text-center my-8">
      Register page
    </h1>
    <form
      class="bg-white border-gray-200 border-2 rounded-md max-w-1/2 mx-auto flex flex-col gap-2 p-4"
      @submit.prevent="submit"
    >
      <label for="fullName" class="font-medium">Full Name</label>
      <input
        id="fullName"
        v-model="fullName"
        class="input"
        type="text"
        name="fullName"
      >
      <label for="email" class="font-medium">Email</label>
      <input
        v-model="email"
        class="input"
        type="email"
        name="email"
      >
      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        class="input"
        type="password"
        name="password"
      >
      <Button type="submit" class="my-4">
        Register
      </Button>
    </form>
  </section>
</template>
