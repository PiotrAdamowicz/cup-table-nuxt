import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log({ body });
  return auth.handler(toWebRequest(event));
});
