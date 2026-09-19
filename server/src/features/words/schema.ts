import { pgTable, serial, text } from "drizzle-orm/pg-core";
//import {groupWordsSchema} from "../group-words/index.ts";

export const schema = pgTable("words", {
  id: serial("id").primaryKey(),
  word: text().notNull(),
  meaning: text().notNull(),
  //translation: text().notNull(),
  examples: text().notNull(),
  //groupWord: serial("group_word").references(() => groupWordsSchema.id),
});
