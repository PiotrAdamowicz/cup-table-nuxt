import type { AuthStoreRegisterProps } from "~~/types/store";

import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);

  async function init() {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  }

  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  async function register({ name, password, email }: AuthStoreRegisterProps) {
    await authClient.signUp.email({
      name,
      password,
      email,
    });
  }

  async function signIn({ email, password}: { email: string; password: string }) {
    // const { csrf } = useCsrf();
    // const headers = new Headers();
    // headers.append("csrf-token", csrf);
    await authClient.signIn.email({
      callbackURL: "/app/components",
      email,
      password,
      // fetchOptions: {
      //   headers,
      // },
    });
  }

  async function signOut() {
    // const { csrf } = useCsrf();
    // const headers = new Headers();
    // headers.append("csrf-token", csrf);
    await authClient.signOut({
      // fetchOptions: {
      //   headers,
      // },
    });
    navigateTo("/");
  }

  return {
    init,
    register,
    loading,
    signIn,
    signOut,
    user,
  };
});