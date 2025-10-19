import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "~/lib/db/drizzle-db";
import { users } from "~/lib/db/user-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: users,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
});
