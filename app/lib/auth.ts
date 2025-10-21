import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "~/lib/db/drizzle-db";
import { account, session, users, verificationToken } from "~/lib/db/schema/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: users,
      account,
      session,
      verificationToken,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
});
