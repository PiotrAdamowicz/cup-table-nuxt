import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").default(false),
  password: text("password"),
  role: text("role").notNull().default("user"),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
});
// ----------------------
// Account table (for OAuth, optional)
// ----------------------
export const account = pgTable("account", {
  accountId: text("accountId").primaryKey(),
  userId: text("user_id").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  expiresAt: timestamp("expires_at", { mode: "date" }),
});

// ----------------------
// Session table
// ----------------------
export const session = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  expires: timestamp("expires").notNull(),
  sessionToken: text("session_token").notNull().unique(),
  accessToken: text("access_token").notNull().unique(),
});

// ----------------------
// Verification token table (email verification, password reset, etc.)
// ----------------------
export const verificationToken = pgTable("verification_token", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: timestamp("expires").notNull(),
});
