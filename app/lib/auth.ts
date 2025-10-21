import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "~/lib/db/drizzle-db";

import { account, session, user, verification } from "./db/schema";
import env from "./env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    disableCSRFCheck: env.DEV_ENV === "development",
  },
});
