import { authClient } from "~/lib/auth-client";

export default defineNuxtRouteMiddleware(async (to) => {
  const isUserNavigatingToTheApp = to.path.startsWith("/app");
  const { data: loggedIn } = await authClient.useSession(useFetch);

  const isNavigatingToLoginOrRegister
    = to.path.startsWith("/login") || to.path.startsWith("/register");
    // redirect the user to the login screen if they're not authenticated
  if (isUserNavigatingToTheApp && !loggedIn.value) {
    return navigateTo("/login");
  }
  if (isNavigatingToLoginOrRegister && loggedIn.value) {
    return navigateTo("/app");
  }
});
