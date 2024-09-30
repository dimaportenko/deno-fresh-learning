import { Client } from "https://deno.land/x/postgres/mod.ts";

// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("POSTGRES_URL")!;

// Create a database pool with three connections that are lazily established
export const dbClient = new Client(databaseUrl);
