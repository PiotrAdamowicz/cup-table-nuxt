import { z } from "zod";
import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NUXT_PUBLIC_API_BASE: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  CONNECTION_STRING: z.string(),
  BETTER_AUTH_URL: z.string(),
  CLIENT_ID_GIT_HUB:z.string(),
  CLIENT_SECRET_GIT_HUB:z.string()
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

export default EnvSchema.parse(process.env);
