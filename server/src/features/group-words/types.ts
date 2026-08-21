import { type InferSelectModel } from "drizzle-orm";
import { schema } from "./schema.ts";

export type GroupWord = InferSelectModel<typeof schema>;

export type Id = Pick<GroupWord, "id">;

export type GroupWordPayload = Omit<GroupWord, "id">;
