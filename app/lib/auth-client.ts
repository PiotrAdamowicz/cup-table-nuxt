import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient();

export default function client() {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);

  async function init() {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  }

  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  return {
    init,
    user,
    loading,
  };
}