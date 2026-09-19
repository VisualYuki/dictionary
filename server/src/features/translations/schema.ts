import {pgTable, text}  from "drizzle-orm/pg-core";
import {wordSchema} from "../words/index.ts";

export const schema = pgTable("translations", {
    wordId: text('word_id').notNull().references(() => wordSchema.id),
    translation: text().notNull()
})