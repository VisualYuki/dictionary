import {InferSelectModel} from "drizzle-orm";
import {schema} from "./schema.ts";

export type Word = InferSelectModel<typeof schema>

export type Id = Pick<Word, 'id'>['id']
export type Payload = Omit<Word, 'id'>