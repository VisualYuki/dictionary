import { client } from "../../database";
import camelcaseKeys from "camelcase-keys";

export const wordsDatabase = {
  getGroupWords: async () => {
    const res = await client.query("SELECT * FROM group_words");

    return camelcaseKeys(res.rows);
  },
  addGroupWord: async (groupWord: string) => {
    const res = await client.query(
      "INSERT INTO group_words (group_word) VALUES ($1)",
      [groupWord]
    );

    return camelcaseKeys(res.rows[0]);
  },
  deleteGroupWord: async (id: number) => {
    const res = await client.query("DELETE from group_words WHERE id = $1", [
      id,
    ]);
  },
};
