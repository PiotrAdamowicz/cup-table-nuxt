import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "~/db/drizzle-db";
import { users } from "~/db/user-schema";

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
