<script lang="ts" setup>
import Button from "~/components/ui/button/Button.vue";
import { authClient } from "~/lib/auth-client";

const username = ref("");
const password = ref("");

const { data: session } = await authClient.useSession(useFetch);

function submit() {
  if (!username.value || !password.value)
    return;
  authClient.signIn.email({
    email: username.value,
    password: password.value,
  });
}
</script>

<template>
  <section class="max-w-1/2 mx-auto bg-transparent">
    <div>Login Form</div>
    <form class="flex flex-col gap-4" @submit.prevent="submit">
      <label for="username">Username:</label>
      <input
        id="username"
        v-model="username"
        type="text"
        placeholder="Username"
        name="username"
        class="input"
      >
      <label for="username">Password:</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Password"
        name="password"
        class="input"
      >
      <Button v-if="!session?.data">
        Login
      </Button>
      <div>
        <pre>{{ session?.data }}</pre>
        <button v-if="session?.data" @click="authClient.signOut()">
          Sign out
        </button>
      </div>
    </form>
  </section>
</template>
