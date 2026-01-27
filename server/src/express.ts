import express from "express";
import { wordsRouter } from "./features/words";

export const app = express();

app.use(express.json());

app.use(wordsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
