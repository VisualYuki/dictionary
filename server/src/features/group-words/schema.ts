import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const schema = pgTable("group_words", {
  id: serial("id").primaryKey(),
  word: text("word").notNull(),
});
