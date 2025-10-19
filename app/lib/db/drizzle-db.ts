import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import { users } from "./user-schema";

const config = useRuntimeConfig();

const sql = neon(config.public.dbConnectionString);

// drizzle client for query usage
export const db = drizzle(sql, { schema: { users } });
