import {database} from "../../database/index.ts";
import {schema} from './schema.ts'
import {Translation, WordId} from "./types.ts";
import {eq} from "drizzle-orm";

export const db = {
    selectAll: async () => {
        const result = await database.select().from(schema)

        return result
    },
    selectBy: async (wordId: WordId )=> {
        const result = await database.select().from(schema).where(eq(schema.wordId, wordId))

        return result
    },
    insert: async (translation: Translation) => {
        return await database.insert(schema).values(translation).returning()
    },
    deleteBy: async (wordId: WordId) => {
        return await database.delete(schema).where(eq(schema.wordId, wordId)).returning()
    }
    //insertMany: async
}