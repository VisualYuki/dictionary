//import { Client } from "pg";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { schema } from "../features/group-words/schema.ts";

export let database: ReturnType<typeof drizzle>;

export async function connectToDatabase() {
  database = drizzle(process.env.DATABASE_URL!);

  //await db.insert(groupWords).values({ id: 1, word: "some word" });
  console.log(await database.select().from(schema));

  return database;

  // client = new Client({
  //   port: 5432,
  //   password: "123",
  //   user: "postgres",
  //   database: "dictionary",
  // });

  // await client.connect();

  // return client;
}
