import {database} from "../../database/index.ts";
import {schema} from "./schema.ts";
import type { Id, Payload, Word} from './types.ts'
import {eq} from 'drizzle-orm'

export const db = {
    selectAll: async () => {
        const result = await database.select().from(schema);

        return result;
    },
    selectById: async (id: Id) => {
        const result = await database.select().from(schema).where(eq(schema.id, id))

        return result[0]
    },
    insert: async (payload: Payload)=> {
      const result = await  database.insert(schema).values(payload).returning();

      return result
    },
    update: async(id: Id, payload: Payload) => {
        const result = await database.update(schema).set(payload).where(eq(schema.id,id)).returning()
            
        return result
    },
    delete: async(id: Id) => {
        const result = await database.delete(schema).where(eq(schema.id, id)).returning()

        return result
    }
};
