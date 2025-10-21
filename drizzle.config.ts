import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/lib/db/schema/schema.ts",
  dbCredentials: {
    url: process.env.CONNECTION_STRING, 
  },
});
