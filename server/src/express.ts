import express from "express";
import { groupWordsRouter } from "./features/group-words/index.ts";

export const app = express();

app.use(express.json());

app.use(groupWordsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
