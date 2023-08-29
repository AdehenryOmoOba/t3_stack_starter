import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import "dotenv/config"

 
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false
});
 
export const db = drizzle(pool);