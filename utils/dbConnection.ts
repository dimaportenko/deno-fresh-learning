import postgres from "postgres";

// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("POSTGRES_URL")!;

// Create a database pool with three connections that are lazily established
export const dbPool = new postgres.Pool(databaseUrl, 3, true);
