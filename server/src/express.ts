import express from "express";
import { groupWordRouter } from "./features/group-word/index.ts";

export const app = express();

app.use(express.json());

app.use(groupWordRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
