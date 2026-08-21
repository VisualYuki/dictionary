import { database } from "../../database/index.ts";
import { schema } from "./schema.ts";
import { GroupWord, GroupWordPayload, Id } from "./types.ts";
import { eq } from "drizzle-orm";

export const db = {
  selectAll: async () => {
    const result = await database.select().from(schema);

    return result;
  },
  selectBy: async (id: Id["id"]) => {
    const result = await database
      .select()
      .from(schema)
      .where(eq(schema.id, id));

    return result[0];
  },
  insert: async (payload: GroupWordPayload) => {
    const result = await database.insert(schema).values(payload).returning();

    return result;
  },
  update: async (id: Id["id"], payload: Partial<GroupWord>) => {
    const result = await database
      .update(schema)
      .set(payload)
      .where(eq(schema.id, id))
      .returning();

    return result;
  },
  delete: async (id: Id["id"]) => {
    const result = await database
      .delete(schema)
      .where(eq(schema.id, id))
      .returning();

    return result;
  },
};
