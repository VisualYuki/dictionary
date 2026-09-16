import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const schema = pgTable("words", {
  id: serial("id").primaryKey(),
  word: text().notNull().unique(),
  meaning: text().notNull(),
  translation: text().notNull(),
  examples: text().notNull(),
  //groupWord: serial("group_word"),
});
