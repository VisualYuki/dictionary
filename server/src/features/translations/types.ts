import {type InferSelectModel} from 'drizzle-orm'
import {schema} from './schema.ts'

export type Translation =   InferSelectModel<typeof schema>
export type WordId = Translation['wordId']