import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// import { users } from "./schema/schema";

const connectionString = process.env.CONNECTION_STRING!;
const sql = neon(connectionString);

// drizzle client for query usage
export const db = drizzle(sql );
