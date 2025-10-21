import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "~/lib/db/drizzle-db";

import env from "./env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    // schema: { },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.CLIENT_ID_GIT_HUB!,
      clientSecret: env.CLIENT_SECRET_GIT_HUB,
    },
  },
});
