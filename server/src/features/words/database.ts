import { database } from "../../database/index.ts";
import { schema } from "./schema.ts";

export const db = {
  selectAll: async () => {
    const result = database.select().from(schema);

    return result;
  },
};
